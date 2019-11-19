import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HTTPSerService } from "../HttpServer.service";
import { CommonFunctions } from "../common.function";
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sin-tax',
  templateUrl: './sin-tax.component.html',
  styleUrls: ['./sin-tax.component.css']
})
export class SinTaxComponent implements OnInit {
  shopInfo:any;
  allTaxesArr:any;
  closeResult:string;
  modTitle:string;
  shoinfoClick:boolean;
  taxinfoClick:boolean;
  addNewTaxInfo:any;
  editTax:any;
  shopInfo_RO:any;
  constructor(private route:Router,private titelService:Title,private modalService: NgbModal,private httpServ:HTTPSerService,calendar: NgbCalendar,private commonFunc:CommonFunctions) { 
   titelService.setTitle("Info N Tax");   
   this.shopInfo={};
   this.shopInfo_RO={};
   this.allTaxesArr=[];
   this.addNewTaxInfo={};
   this.editTax={};
   this.getAllTaxes();
   this.getShopInfo();
  }

  ngOnInit() {
  }
  goToDashBor(){
  	this.route.navigate(["/admin"]);
  }
  getAllTaxes(){
    let that=this;
    this.httpServ.getAllTaxes().subscribe((data)=>{     
      that.allTaxesArr=data;
    })
  }
  getShopInfo(){
    let that=this;
    this.httpServ.getShopInfo().subscribe((data)=>{       
      that.shopInfo_RO=data[0];
    })
  }
   openInfo(param,content,tax?:any){
     this.shoinfoClick=false;
     this.taxinfoClick=false;
    if(param=="shop"){
      this.modTitle="Shop";
      this.shoinfoClick=true;
      this.shopInfo=JSON.parse(JSON.stringify(this.shopInfo_RO));
    }else if(param=="tax"){
      this.editTax=JSON.parse(JSON.stringify(tax));
      this.modTitle="Tax";
      this.taxinfoClick=true;
    }
    this.openModel(content);
  }
  openModel(modelName){
    this.modalService.open(modelName, {ariaLabelledBy: 'modal-basic-title',backdrop:"static",keyboard:false}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;     
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
  updateInfo(){
    if(this.shoinfoClick)
      this.updateShopInfo();
    else
      this.updateTaxInfo();
  }
  updateShopInfo(){   
    if(!this.commonFunc.checkForEmptyValues(this.shopInfo)){
      this.commonFunc.showSwlInfo("All values are required...");
      return false;
    }   
    if(((this.shopInfo.pincode).toString().indexOf(".")!=-1)||((this.shopInfo.pincode).toString().length!=6)){
      this.commonFunc.showSwlInfo("Invalid pincode");
      return false;
    }
    if((this.shopInfo.shop_ph_num).toString().length!=10){
      this.commonFunc.showSwlInfo("Mobile number should be 10 digits");
      return false;
    }
    let that=this;
    this.httpServ.updateShopInfo(this.shopInfo).subscribe((data)=>{
      that.modalService.dismissAll();
      that.getShopInfo();
    })    
  }
  updateTaxInfo(){
    if((this.editTax.cgst=="")||(this.editTax.sgst=="")){
      this.commonFunc.showSwlInfo("Please fill all the fields...");
      return false;
    }   
    if(!(this.commonFunc.isValidDecimalRNum([this.editTax.cgst,this.editTax.sgst]))){
      this.commonFunc.showSwlInfo("Invalid tax values....");
      return false;
    }
    let that=this;
    this.httpServ.updateTaxInfo(this.editTax).subscribe((data)=>{
      that.modalService.dismissAll();
      that.getAllTaxes();
    })
  }
  addNewTax(content){
    this.openModel(content);
  }
  
}
