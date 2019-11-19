import { Component, OnInit,Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HTTPSerService } from "../HttpServer.service";
import { CommonFunctions } from "../common.function";
import { ServerName } from "../ser.name";
import { ElectronService } from 'ngx-electron';
import  Swal from 'sweetalert2';

@Component({
  selector: 'ngb-basic-model',
  templateUrl: './bill-items.component.html',
  styleUrls: ['./bill-items.component.css']
})
export class BillItemsComponent implements OnInit {


  billItems:any;
  closeResult:string;
  addItem:any;
  itemDetFound:boolean;
  modalTit:string;
  billAmount:number;
  updPassWord:any;
  customerInfo:any;
  totalBillItemsInfo:any;
  hasSpecialDis:any;
  custDet:any;
  decVal:any;
  oldStockItems:any;
  showAddSym:any;
  billId:any;
  hasBillId:any;
  taxIncluded:any;
  shopInfo:any;
  constructor(private titelService:Title,private modalService: NgbModal,private router:Router,private httpServ:HTTPSerService,private commFunc:CommonFunctions,private serName:ServerName,private ipcServ:ElectronService) {
  	titelService.setTitle("Bill Items");
  	this.initializeValues();
    this.shopInfo={};
    this.getShopInfo();
  }

  ngOnInit() {
  }

  //initialize the component values.....
  initializeValues(){
    this.billItems=[];
    this.addItem={};    
    this.updPassWord={};
    this.customerInfo=false;
    this.totalBillItemsInfo={};    
    this.totalBillItemsInfo.roundVal=0;
    this.totalBillItemsInfo.specialDisVal=0;
    this.hasSpecialDis=false;
    this.custDet={};
    this.custDet.custName="";
    this.showAddSym=true;
    this.billId="";
    this.taxIncluded=true;
    this.hasBillId=false;
  }

  getShopInfo(){
    let that=this;
    that.httpServ.getShopInfo().subscribe((shopInfodata)=>{     
      that.shopInfo=shopInfodata[0];
    })   
  }

  //to open a particular modal.....
  open(content,item?:any) {
    if(item==undefined){
      this.modalTit="Add";
      this.addItem={};
      this.addItem.isDelete=false;
      this.itemDetFound=false;       
    } else {
     this.modalTit="Modify";
     this.addItem=JSON.parse(JSON.stringify(item));
     this.itemDetFound=item.itemDetFound;
     this.taxIncluded=item.P_taxIncluded==1?true:false;
    }     
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',backdrop:"static",keyboard:false}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  //excecutes when a modal closes....
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {    	
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  deleteItemFromBill(itemid){
    let that=this;
    this.modalService.dismissAll();
    this.commFunc.showDelSwl().then((success)=>{      
      that.billItems.forEach((item,idx,object)=>{
        if(item.P_ID==itemid){          
           object.splice(idx, 1);
        }
      })
      that.findTotAmount();
      this.commFunc.showDelSuccSwal("Deleted the item from the bill..");
    },(fail)=>{});   
  }

  //when a item is added to the bill....
  addItemToBill(){
    if(this.addItem.Req_P_Qty<=0){
      this.commFunc.showSwlInfo("Quantity should be atleast 1");
      return false;
    }
    if(this.addItem.Req_P_Qty>this.addItem.P_Qty){
      this.commFunc.showSwlInfo("For this goods only "+this.addItem.P_Qty+" quantity are available...");
      return false;
    }
    if(!this.addItem.itemDetFound){
      this.addItem.isDelete=true;
      this.addItem.itemDetFound=true;
      this.addItem.P_taxIncluded=this.taxIncluded?1:0;
      let existingItem=false;
      this.billItems.forEach((item,idx)=>{
        if(item.P_ID==this.addItem.P_ID){
          existingItem=true;
          item.Req_P_Qty+=this.addItem.Req_P_Qty;
        }
      })
      if(!existingItem)
    	  this.billItems.push(this.addItem);  
    	this.addItem={};
      this.addItem.isDelete=false;
      this.itemDetFound=false;            
    } else {
      this.billItems.forEach((item,idx)=>{
         if(item.P_ID==this.addItem.P_ID){           
           item.Req_P_Qty=this.addItem.Req_P_Qty;
           item.P_taxIncluded=this.taxIncluded?1:0;
         }
      })
      this.modalService.dismissAll();
    }
    this.taxIncluded=true;
    this.findTotAmount();   
  }

  //caliculate the particulat item all amounts...
  findTotAmount(){
    this.billAmount=0;
    this.billItems.forEach((item)=>{     
      item.Amount=item.Req_P_Qty*item.P_Price;
      item.disAmount=this.commFunc.convertToFloat((item.P_discount*item.Amount)/100);
      item.itemTotAmt=item.Amount-item.disAmount;     
      let totItemTax=item.cgstAmount+item.sgstAmount;
      if(item.P_taxIncluded==1){
        item.taxSymbol="+";
        let taxableAmount=this.commFunc.convertToFloat(item.P_basePrice*100/(item.cgst+item.sgst+100));
        item.taxableVal=taxableAmount*item.Req_P_Qty;
        item.cgstAmount=this.commFunc.convertToFloat(((taxableAmount*item.cgst)/100)*item.Req_P_Qty);     
        item.sgstAmount=this.commFunc.convertToFloat(((taxableAmount*item.sgst)/100)*item.Req_P_Qty);
      }else{
        item.taxSymbol="-";
        item.itemTotAmt=item.Amount-item.disAmount+totItemTax;     
        item.taxableVal=this.commFunc.convertToFloat(item.Amount-item.disAmount);
      }
      this.billAmount+=item.itemTotAmt;
    })
    console.log(this.billItems);
  }

  //to caliculate total amounts of the bill....
  calAllAmounts(billId?:any){   
    this.totalBillItemsInfo.totItemQty=0;
    this.totalBillItemsInfo.totItemDisAmount=0;
    this.totalBillItemsInfo.totTaxableAmount=0;
    this.totalBillItemsInfo.totCgstAmount=0;
    this.totalBillItemsInfo.totSgstAmount=0;
    this.totalBillItemsInfo.totItemsAmount=0;
    this.totalBillItemsInfo.totAmount=0;
    let totItemTax;
    for(let i=0;i<this.billItems.length;i++){
      this.totalBillItemsInfo.totItemQty+=this.billItems[i].Req_P_Qty;
      this.totalBillItemsInfo.totAmount+=this.billItems[i].Amount;
      this.totalBillItemsInfo.totItemsAmount+=this.billItems[i].itemTotAmt;
      this.totalBillItemsInfo.totItemDisAmount+=this.billItems[i].disAmount;
      this.totalBillItemsInfo.totTaxableAmount+=this.billItems[i].taxableVal;
      if(this.billItems[i].P_taxIncluded==1){
        this.totalBillItemsInfo.totCgstAmount+=this.billItems[i].cgstAmount;
        this.totalBillItemsInfo.totSgstAmount+=this.billItems[i].sgstAmount;
      }
    }
    this.totalBillItemsInfo.billdate=this.commFunc.getTodaysDate();
    this.totalBillItemsInfo.billId=billId;
    this.totalBillItemsInfo.custDet=this.custDet;
    this.totalBillItemsInfo.hasSpecialDis=this.hasSpecialDis;
    this.totalBillItemsInfo.roundValue=this.totalBillItemsInfo.roundVal+this.decVal;
    this.totalBillItemsInfo.totItemsAmount=this.commFunc.convertToFloat(this.totalBillItemsInfo.totItemsAmount);
    let userId=localStorage.getItem("UserDet").split("/")[0];
    this.totalBillItemsInfo.empId=userId;
  }
  
  //when if the user click on special discount...
  fnSpecialDisco(){      
      this.hasSpecialDis=!this.hasSpecialDis;
      this.showAddSym=!this.showAddSym;
      this.calAmounts();  
  }
  
  //after selecting particular discount percentage....
  calSpecialDisValue(){
     this.totalBillItemsInfo.specialDisAmount=this.totalBillItemsInfo.totItemsAmount-((this.totalBillItemsInfo.totItemsAmount*this.totalBillItemsInfo.specialDisVal)/100);
     this.totalBillItemsInfo.specialDisAmount=this.commFunc.convertToFloat(this.totalBillItemsInfo.specialDisAmount);
  }

  calAmounts(){
    this.calAllAmounts();
    this.totalBillItemsInfo.specialDisVal=0;
    this.calSpecialDisValue();
  }

  //to print the bill...
  printBill(){
    let that=this;
    if(!this.commFunc.checkForEmptyValues(this.custDet)){
      this.commFunc.showSwlInfo("Please provide customer details....");
      return false;
    }
    if(this.custDet.custMobile.toString().length!=10){
      this.commFunc.showSwlInfo("Mobile number should be 10 digits...");
      return false;
    }  
    that.calAllAmounts(this.billId);
    if(this.totalBillItemsInfo.specialDisVal==0){
      this.totalBillItemsInfo.hasSpecialDis=false;
    }
    this.totalBillItemsInfo.shopInfo=this.shopInfo;
    that.httpServ.generatePDF({"totBillInfo":this.totalBillItemsInfo,"billItems":this.billItems}).subscribe((data)=>{
        if(data=="success"){
          that.initializeValues();
        }else
          that.commFunc.showSwlInfo(data);                    
    }); 
    localStorage.setItem("billInfo",JSON.stringify({"totBillInfo":this.totalBillItemsInfo,"billItems":this.billItems}));
    localStorage.setItem("printPage","true");
    
    //for development purpose
    //window.open("http://localhost:4200/","_blank");
    //for deployment purpose --web
    window.open(this.serName.server_name,"_blank");    
    //for deployment purpose --desktop
    //that.ipcServ.ipcRenderer.send('openPrintBill');
  }
 
  fillExtradet(){
    if(this.billItems.length==0){
      this.commFunc.showSwlInfo("Add atleast one item to continue...");
      return false;
    }else{
      if(!this.hasSpecialDis){
        this.calAmounts();
        this.showAddSym=false;
      }
      this.decVal=this.totalBillItemsInfo.specialDisAmount-parseInt(this.totalBillItemsInfo.specialDisAmount);
      this.decVal=parseFloat((this.decVal).toFixed(2));
      this.totalBillItemsInfo.roundVal=0;
      this.calRoundValue();
      this.customerInfo=true;      
    }
    if(!this.hasBillId)
      this.getBillId();
  }
  
  getBillId(){
    this.httpServ.getBillId().subscribe((data)=>{
      console.log(data);
      this.billId=data;
      this.hasBillId=true;
    });
  }
  
  checkTaxInclude(val){    
    this.taxIncluded=(val=="false")? false:true;
    let baseAmount=this.calBasePrice();
    let taxAmount=this.gstApplied();  
    if(this.taxIncluded){
      this.addItem.P_basePrice=baseAmount; 
    }else 
      this.addItem.P_basePrice=baseAmount+taxAmount;
    this.addItem.P_basePrice=this.commFunc.convertToFloat(this.addItem.P_basePrice);
  }
  
  calBasePrice(){
    return this.addItem.P_Price-this.discountApp();
  }
  gstApplied(){    
    return (this.addItem.P_Price*(this.addItem.cgst+this.addItem.sgst))/100;
  }
  discountApp(){
     if(this.addItem.P_discount==0){
       return 0;
     }
     return (this.addItem.P_Price*this.addItem.P_discount)/100; 
  }
  showBillItems(){
    this.customerInfo=false;
    if(!this.hasSpecialDis)        
        this.showAddSym=true;      
  }
  calRoundValue(){
     this.totalBillItemsInfo.roundAmount=this.totalBillItemsInfo.specialDisAmount-(this.totalBillItemsInfo.roundVal+this.decVal);
  }

  logOut(){
    localStorage.removeItem("UserDet");
    this.router.navigate(["/home"]);
  }

  searchId(itemId){
    this.httpServ.findProdDet(itemId).subscribe((data)=>{
      if(data[0]==undefined){
        this.commFunc.showSwlInfo("Product details not found....");
        this.addItem.P_ID="";
      }else{        
        this.addItem=JSON.parse(JSON.stringify(data[0]));
        this.addItem.Req_P_Qty=1;
        if(this.addItem.P_taxIncluded==1)
          this.taxIncluded=true;
        else
          this.taxIncluded=false;
        this.itemDetFound=true;
      }
    })    
  }
  
  cPWord(cpword){
    this.modalService.open(cpword, {ariaLabelledBy: 'modal-basic-title',backdrop:"static",keyboard:false}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        console.log(this.closeResult);
    });
  }

  fnUpdPassWord(){
    if((this.updPassWord.oldPwd=="")||(this.updPassWord.oldPwd==undefined)||(this.updPassWord.newPwd=="")||(this.updPassWord.newPwd==undefined)||(this.updPassWord.cnewPwd=="")||(this.updPassWord.cnewPwd==undefined)){
      this.commFunc.showSwlInfo("All fields are required...");
      return false;
    }
    if(this.updPassWord.newPwd!=this.updPassWord.cnewPwd){
      this.commFunc.showSwlInfo("New Password / Confirm new Password should be same...");
      return false;
    }
    this.updPassWord.userId=localStorage.getItem("UserDet").split("/")[0];
    //this.updPassWord.userId="suresh0001";    
    let that=this;
    this.httpServ.updatePassword(this.updPassWord).subscribe((data)=>{
      that.modalService.dismissAll();
      if(data=="true"){        
        that.commFunc.showSwlInfo("Password updated successfully...");        
        that.updPassWord={};
      }else{
        that.commFunc.showSwlInfo(data);        
      }
    })
  }

  showOldStock(content){
    let that=this;
    this.httpServ.getOldStockDetails().subscribe((data)=>{
      if(data.length==0){
        this.commFunc.showSwlInfo("No old stock found....")
        return false;
      }else{
        that.oldStockItems=data;
        that.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',backdrop:"static",keyboard:false}).result.then((result) => {
          that.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          that.closeResult = `Dismissed ${that.getDismissReason(reason)}`;
        });
      }
    })    
  }
}