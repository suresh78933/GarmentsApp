import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HTTPSerService } from "../HttpServer.service";
import { CommonFunctions } from "../common.function";

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  addAllItems:any; 
  closeResult:string; 
  editItem:any;
  allTaxesArr:any;
  selectedTax:any;  
  isValidItemNo:boolean;
  taxIncluded:any;
  searchItem:any;
  searchItemId:any;
  oldStockItems:any;
  constructor(private route:Router,private titelService:Title,private modalService: NgbModal,private httpServ:HTTPSerService,private commFunc:CommonFunctions) {
    titelService.setTitle("Edit Item");
    this.addAllItems=[];
    this.allTaxesArr=[];
    this.selectedTax="";
    this.taxIncluded=true;
  	this.getAllItems();
    this.searchItem=false;
    this.searchItemId="";
    this.getTaxes();
    this.oldStockItems=[];
  }

  ngOnInit() {
  }
  getTaxes(){
    let that=this;
    this.httpServ.getAllTaxes().subscribe((data)=>{     
      that.allTaxesArr=data;
    })
  }
  getAllItems(){
  	this.httpServ.getAllItems().subscribe((data)=>{      
  		this.addAllItems=(data);
  	})
  }
 
  goToDashBor(){
  	this.route.navigate(["/admin"]);
  }
  editItemDet(item,content){
  	this.editItem=JSON.parse(JSON.stringify(item));
    this.allTaxesArr.forEach((item,idx)=>{
        if(item.tax_id==this.editItem.tax_id){
          this.selectedTax=item;          
        }
    });

  	this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',backdrop:"static",keyboard:false}).result.then((result) => {
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
  upadeItemDet(){    
    if(this.commFunc.checkForEmptyValues(this.editItem)==false){
      this.commFunc.showSwlInfo("All values are required...");
      return false;
    }
  	this.modalService.dismissAll();  	
  	let that=this;

  	this.httpServ.updateItemDet(this.editItem).subscribe((data)=>{  
     if(!this.searchItem)		
  		 that.getAllItems();
  	});
  }
  deleteItem(){
    let that=this;
    this.modalService.dismissAll();
    this.commFunc.showDelSwl("You want to delete this item from stock...").then((success)=>{      
      that.httpServ.deletItem(that.editItem.P_ID).subscribe((data)=>{
        that.getAllItems();
      })
    },(fail)=>{});
  }

  onTaxChange(){
    this.editItem.tax_id="";
    if(this.selectedTax!=""){ 
      this.editItem.tax_id=this.selectedTax.tax_id;      
    }
    this.calTotAmount();
  }

  gstApplied(gstPer,itemCost){    
    return (itemCost*gstPer)/100;
  }

  discountApp(){
     if((this.editItem.P_discount==0)){
       return 0;
     }
     return (this.editItem.P_Price*this.editItem.P_discount)/100; 
  }

  calTotAmount(){     
     if(this.editItem.P_Qty>=1){ 
       if(this.editItem.P_taxIncluded==1)      
         this.editItem.P_basePrice=this.editItem.P_Price-this.discountApp();
       else
         this.editItem.P_basePrice=(this.editItem.P_Price-this.discountApp())+this.gstApplied(this.selectedTax.cgst+this.selectedTax.sgst,this.editItem.P_Price);
       this.editItem.P_basePrice=parseFloat(this.editItem.P_basePrice.toFixed(2));
     }
  }
  searchItemDet(){   
    if((this.searchItemId=="")&&(this.searchItem)){
       this.getAllItems();
    }else if(this.searchItemId!=""){
      this.httpServ.searchForItem(this.searchItemId).subscribe((data)=>{  
        if(data=="false"){
          this.commFunc.showSwlInfo("No details found for this id..."+this.searchItemId);
          return false;
        }else{
          this.addAllItems=(data);
          this.searchItem=true;
        }
      })
    }
  }

  showOldStock(content){
    let that=this;
    this.httpServ.getOldStockDetails().subscribe((data)=>{
      if(data.length==0){
        this.commFunc.showSwlInfo("No old stock found....");
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
