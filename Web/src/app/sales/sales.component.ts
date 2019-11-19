import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HTTPSerService } from "../HttpServer.service";
import { CommonFunctions } from "../common.function";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  salesByEmp:any;
  salesByDate:any; 
  allEmployees:any;
  searchById:any; 
  salesQery:any;
  dateStr:any;
  closeResult:string; 
  allBilldetails:any;
  showBill:any;
  minDate:any;
  constructor(private route:Router,private titelService:Title,private modalService: NgbModal,private httpServ:HTTPSerService,private commonFunc:CommonFunctions) { 
    titelService.setTitle("Sales");
    this.initializeVal();
    this.allEmployees=[];
    this.getEmployees();
  }

  initializeVal(){
    this.salesByDate=false;
    this.salesByEmp=false;
    this.searchById=false;   
    this.salesQery={};
    this.dateStr="";
    this.allBilldetails=[];    
    this.minDate= new Date().toJSON().split('T')[0];
  }
  
  ngOnInit() {
  }
  goToDashBor(){
    this.route.navigate(["/admin"]);
  }

  sales(selection){
    this.salesByDate=false;
    this.salesByEmp=false;
    this.searchById=false;
    selection=="billId"?this.searchById=true:selection=="emp"?this.salesByEmp=true:this.salesByDate=true;
    this.salesQery={};    
    this.salesQery.selectedEmp="";
    this.salesQery.searchBillId="";
    this.salesQery.selectedFromDate={};
    this.salesQery.selectedToDate={};
    this.salesByEmp==true?this.dateStr="Date":this.dateStr="From Date";
    this.allBilldetails=[];
  }
  getEmployees(){
    let that=this;
    this.httpServ.getAllUsers().subscribe((data)=>{     
      that.allEmployees=data;
    })
  }
  
  showReports(){
    let dateValid=this.commonFunc.validateDates(this.salesQery.selectedFromDate,this.salesQery.selectedToDate);
    console.log(dateValid);
    if((this.salesByDate)&&(!dateValid)){
      this.commonFunc.showSwlInfo("From date should be less than to date...");
      return false;
    }
    if(Object.keys(this.salesQery.selectedFromDate).length==0){
      this.commonFunc.showSwlInfo("Please select date...");
      return false;
    }
    if((this.salesByEmp)&&(this.salesQery.selectedEmp=="")){
      this.commonFunc.showSwlInfo("Please select any employee...");
      return false;
    }
    this.httpServ.getSalesReports(this.commonFunc.salesRepQuery(this.salesQery,this.salesByDate,this.salesByEmp)).subscribe((data)=>{
      console.log(data);
      if(data.length==0){
        this.allBilldetails=[];
        this.commonFunc.showSwlInfo("No Reports found for this query...");
        return false;
      }else{
        this.allBilldetails=data;
      }
    })
  }

  searchBillDet(){
    if(this.salesQery.searchBillId==""||this.salesQery.searchBillId==undefined){
      this.commonFunc.showSwlInfo("Please Provide Bill id...");
      return false;
    }
    if(this.salesQery.searchBillId.length!=7){
      this.commonFunc.showSwlInfo("Bill Id length should be 7...")
      return false;
    }
    this.httpServ.getBillDetById(this.salesQery.searchBillId).subscribe((data)=>{
      if(data.length==0){
        this.allBilldetails=[];
        this.commonFunc.showSwlInfo("No details found for this bill Id:"+this.salesQery.searchBillId);
        return false;
      }else{
        this.allBilldetails=data;
      }
    })
  }
  showBillDet(billInfo,content){
     this.showBill=JSON.parse(JSON.stringify(billInfo));
     let that=this;
     this.httpServ.getBillItemsDet(billInfo.Bill_Id).subscribe((data)=>{
       that.showBill.billItems=data;
       console.log(that.showBill.billItems);
     })
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',backdrop:"static",keyboard:false}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {      
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  deleteBillDet(){
    let that=this;
    this.modalService.dismissAll();
    this.commonFunc.showDelSwl("You want to return this bill...").then((success)=>{      
      this.httpServ.deleteBillDet(this.showBill.Bill_Id).subscribe((data)=>{       
        if(data=="success"){
          if(this.searchById)
            that.initializeVal();    
          else
            that.showReports();
        }else{
          that.commonFunc.showDelErrSwal("Some error went....");
        }
      })
     },(fail)=>{});    
  }
  resetBillId(){
    let that=this;   
    this.commonFunc.showDelSwl("You want to reset Bill id...").then((success)=>{ 
       that.httpServ.resetBillIds().subscribe((data)=>{
         if(data=="success")
            that.initializeVal();
       },(error)=>{
          that.commonFunc.showDelErrSwal("Some error went...");
       })
     },(fail)=>{}); 
  }
}
