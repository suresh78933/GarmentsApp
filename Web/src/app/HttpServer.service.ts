import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ServerName } from "./ser.name";
import {  HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', 
})
export class HTTPSerService {
   headers:any;
   options:any;
   printInfo:any;
   constructor(private sernam:ServerName,private http:Http) {
     this.headers= new Headers ({ 'Content-Type': 'application/json' });
     this.options = new RequestOptions({ headers: this.headers, method: "post" });

   }
  testSerConn(serUrl?:any){
    let url=serUrl==undefined?this.sernam.server_name:serUrl;    
    return this.http.get(url+"testConn").pipe(map((response:Response) => response));     
  }
  isValidProdId(id){   	
   	return this.http.get(this.sernam.server_name+"isValidId/"+id).pipe(map((response:Response) => response.json()));
  }
   storeAllProducts(prodArr:any){   	
    return this.http.post(this.sernam.server_name+"storeAllItems",JSON.stringify(prodArr),this.options ).pipe(map((response:Response) => response.json())); 
   }
   getAllItems(){
   	 return this.http.get(this.sernam.server_name+"getAllItems").pipe(map((response:Response) => response.json()));
   }
   getOldItems(){
      return this.http.get(this.sernam.server_name+"getOldItems").pipe(map((response:Response) => response.json()));
   }
   updateItemDet(item:any){   
    return this.http.post(this.sernam.server_name+"updateItemDet",JSON.stringify(item),this.options ).pipe(map((response:Response) => response.json()));
   }
   deletItem(itemId:any){
      return this.http.get(this.sernam.server_name+"deleteItem/"+itemId).pipe(map((response:Response) => response.json()));
   }
   searchForItem(itemID){
      return this.http.get(this.sernam.server_name+"searchForItem/"+itemID).pipe(map((response:Response) => response.json()));
   }
   saveUserDet(user:any){    
     return this.http.post(this.sernam.server_name+"addUserDet",JSON.stringify(user),this.options ).pipe(map((response:Response) => response.json()));
   }
   getAllUsers(){
     return this.http.get(this.sernam.server_name+"getAllUsers").pipe(map((response:Response) => response.json()));
   }
   updateUser(user:any){     
    return this.http.post(this.sernam.server_name+"updateUserDet",JSON.stringify(user),this.options ).pipe(map((response:Response) => response.json()));
   }
   deleteUser(u_id:any){
     return this.http.get(this.sernam.server_name+"deleteUser/"+u_id).pipe(map((response:Response) => response.json()));
   }
   findProdDet(p_id){
      return this.http.get(this.sernam.server_name+"findProdDet/"+p_id).pipe(map((response:Response) => response.json()));   
   }
   isValidAdmRUser(userDet:any){       
    return this.http.post(this.sernam.server_name+"isValidAdmRUser",JSON.stringify(userDet),this.options ).pipe(map((response:Response) => response.json()));   
   }   

   updatePassword(userDet:any){ 
    return this.http.post(this.sernam.server_name+"updatePassword",JSON.stringify(userDet),this.options ).pipe(map((response:Response) => response.json())); 
   }
   getAllTaxes(){
      return this.http.get(this.sernam.server_name+"getAllTaxes").pipe(map((response:Response) => response.json()));   
   }
   getShopInfo(){
     return this.http.get(this.sernam.server_name+"getShopInfo").pipe(map((response:Response) => response.json()));
   }
   updateTaxInfo(tax:any){
     return this.http.post(this.sernam.server_name+"updateTaxInfo",JSON.stringify(tax),this.options ).pipe(map((response:Response) => response.json()));
   }
   updateShopInfo(tax:any){
     return this.http.post(this.sernam.server_name+"updateShopInfo",JSON.stringify(tax),this.options ).pipe(map((response:Response) => response.json()));
   } 

   getBillId(){
      return this.http.get(this.sernam.server_name+"getBillId").pipe(map((response:Response) => response.json()));   
   }

   generatePDF(billInfo:any){
     return this.http.post(this.sernam.server_name+"generatePDF",JSON.stringify(billInfo),this.options ).pipe(map((response:Response) => response.json()));
   }
   getBillDetById(billId){
      return this.http.get(this.sernam.server_name+"getBillDetById/"+billId).pipe(map((response:Response) => response.json()));   
   }
   getOldStockDetails(){
      return this.http.get(this.sernam.server_name+"getOldStockDetails/").pipe(map((response:Response) => response.json()));   
   }
   getSalesReports(salesQuery:any){
     return this.http.post(this.sernam.server_name+"getSalesReports",JSON.stringify(salesQuery),this.options ).pipe(map((response:Response) => response.json()));
   }
   getBillItemsDet(billId){
      return this.http.get(this.sernam.server_name+"getBillItemsDet/"+billId).pipe(map((response:Response) => response.json()));   
   }
   deleteBillDet(billId){
      return this.http.get(this.sernam.server_name+"deleteBillDet/"+billId).pipe(map((response:Response) => response.json()));   
   }
   resetBillIds(){
      return this.http.get(this.sernam.server_name+"resetBillIds").pipe(map((response:Response) => response.json()));   
   }
}
