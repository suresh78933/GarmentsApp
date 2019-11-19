import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HTTPSerService } from "../HttpServer.service";
import { CommonFunctions } from "../common.function";

@Component({
  selector: 'app-root',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  addAllItems:any; 
  closeResult:string; 
  addItem:any;
  isValidItemNo:boolean;
  allTaxesArr:any;
  selectedTax:any;
  taxIncluded:boolean;
  constructor(private route:Router,private titelService:Title,private modalService: NgbModal,private httpServ:HTTPSerService,private commFunc:CommonFunctions) {
    titelService.setTitle("Add Item");
    this.addAllItems=[];
    this.addItem={};
    this.isValidItemNo=false;
    this.allTaxesArr=[];
    this.selectedTax="";
    this.addItem.TaxApplied={};
    this.taxIncluded=true;
    this.getTaxes();
  }

  ngOnInit() {
  }
  
  checkTaxInclude(val){    
    this.taxIncluded=(val=="false")? false:true;    
    this.calTotAmount();
  }

  gstApplied(gstPer,itemCost){    
    return (itemCost*gstPer)/100;
  }

  discountApp(){
     if((this.addItem.itemDiscount=="")||(this.addItem.itemDiscount==undefined)||(this.addItem.itemDiscount==0)){
       return 0;
     }
     return (this.addItem.itemPrice*this.addItem.itemDiscount)/100; 
  }

  calTotAmount(){
    this.addItem.itemBasPrice=0;
    if(this.addItem.itemQty>=1){ 
      if(!this.taxIncluded)      
        this.addItem.itemBasPrice=(this.addItem.itemPrice-this.discountApp())+this.gstApplied(this.addItem.TaxApplied.cgst+this.addItem.TaxApplied.sgst,this.addItem.itemPrice);   
      else
        this.addItem.itemBasPrice=this.addItem.itemPrice-this.discountApp();
      this.addItem.itemBasPrice=parseFloat(this.addItem.itemBasPrice.toFixed(2));
    }
  }
  onTaxChange(){
    if(this.selectedTax!=""){      
      this.addItem.TaxApplied={};
      this.addItem.TaxApplied=this.selectedTax;
      this.calTotAmount();
    }
  }
  getTaxes(){
    let that=this;
    this.httpServ.getAllTaxes().subscribe((data)=>{     
      that.allTaxesArr=data;
    })
  }

  goToDashBor(){
  	this.route.navigate(["/admin"]);
  }  
 
  onKey(event:any){
  	console.log(event.target.value);
  }  
  searchId(itemNo){
    if(itemNo==""||itemNo==undefined){
    	this.commFunc.showSwlInfo("Item number required...");
    	return false;
    }       	
   	this.httpServ.isValidProdId(itemNo).subscribe((data)=>{
      if(data=="false"){
   			this.commFunc.showSwlInfo("This id is already registered with other product...");
         this.addItem.itemNo="";
      }
   		else{
   			this.isValidItemNo=true;
   			this.addItem.itemQty=1;
        this.addItem.itemDiscount=0;
   		}
   	});
  }
  
  saveToServer(){   
    let that=this;            
    this.httpServ.storeAllProducts(this.addItem).subscribe((data)=>{
      that.modalService.dismissAll();
    	if(data=="success"){    	
		    that.addItem={};
        that.selectedTax="";   
        that.addItem.TaxApplied={};
		    that.isValidItemNo=false;       
        that.commFunc.showSwlInfo("Product details added successfully...");              
    	}
    	else
    		that.commFunc.showSwlInfo(data);
    })      
  }
 
 
  confirmDet(content) {
   this.calTotAmount();
   this.addItem.isTaxIncluded=this.taxIncluded;
   if(this.addItem.itemName==""||this.addItem.itemName==undefined){
    this.commFunc.showSwlInfo("Goods name required...");
        return false;
   }

   if(this.addItem.itemHSNCode==""||this.addItem.itemHSNCode==undefined){
        this.commFunc.showSwlInfo("HSN Code required...");
        return false;
    }

    if(this.selectedTax==""||this.selectedTax==undefined){
        this.commFunc.showSwlInfo("Select tax group...");
        return false;
    }

    if(this.addItem.itemQty==""||this.addItem.itemQty==undefined){
        this.commFunc.showSwlInfo("Please provide qunatity...");
        return false;
    }

    if(this.addItem.itemDiscount!=null&&this.addItem.itemDiscount<0){
        this.commFunc.showSwlInfo("Discount should be atleast 1% or 0 ...");
        return false;
    }

    if(this.addItem.itemPrice==""||this.addItem.itemPrice==undefined){
        this.commFunc.showSwlInfo("Please provide Goods Price...");
        return false;
    }   
    if((this.addItem.itemDiscount=="")||(this.addItem.itemDiscount==undefined)||(this.addItem.itemDiscount==0))
       this.addItem.itemDiscount=0; 
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
}
