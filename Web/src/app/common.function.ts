import { Injectable } from '@angular/core';
import  Swal from 'sweetalert2';
import { ServerName } from './ser.name';
import { HTTPSerService } from './HttpServer.service';
import { AppLoaderSer } from './app.loader';
@Injectable({
  providedIn: 'root'
})
export class CommonFunctions{
  loader:any;
  showLoader:boolean; 
   constructor(private serName:ServerName,private httpServ:HTTPSerService ) {
   
   }
   
   isValidDecimalRNum(values:any):boolean{
     let result=true;
     for(let i=0;i<values.length;i++){
       let regExp;
       try{
          regExp=(values[i]).toString().indexOf(".")==-1?/^[0-9]$/:/^[0-9].[0-9]{1,2}$/;
       }
       catch(e){ return false;}
       if(!regExp.test(values[i])){
         result=false;
         break;
       }
     }
     return result;
   }
   checkForEmptyValues(obj:any):boolean{
      let result=true;
      if(!(Object.keys(obj).length === 0 && obj.constructor === Object)){
        let allKeys=Object.keys(obj);
        for(let i=0;i<allKeys.length;i++){        
          if((allKeys[i]=="P_discount")){
            if(obj[allKeys[i]]<0){
              result=false;
              break;
            }
          }
          else if((obj[allKeys[i]]=="")||(obj[allKeys[i]]==undefined)){
            result=false;
            break;
          }         
        }       
     }else
       result=false;
     return result;     
   }
   validateDates(d1:any,d2:any){
     if(+(new Date(d1.year,d1.month,d1.day))==(+(new Date(d2.year,d2.month,d2.day))))
       return true;
     else
       return (new Date(d1.year,d1.month,d1.day))<((new Date(d2.year,d2.month,d2.day)));
   }
   getTodaysDate(){
    let todayDate=new Date();
    return (todayDate.getDate()+"/"+(todayDate.getMonth()+1)+"/"+todayDate.getFullYear());
   }
  convertToFloat(cost){
    return parseFloat(parseFloat(cost).toFixed(2));
  }
  dateFormatForSql(insDate){
    if(!(Object.keys(insDate).length === 0)){
      let month=insDate.month<10?"0"+insDate.month:insDate.month;
      let day=insDate.day<10?"0"+insDate.day:insDate.day;        
      return insDate.year+"-"+month+"-"+day;
    }
  }
  salesRepQuery(queryInfoDet:any,queryByDt:any,queryByEmp:any){
     let queryInfo:any={};
     queryInfo.fromDate=this.dateFormatForSql(queryInfoDet.selectedFromDate);
     queryInfo.toDate=this.dateFormatForSql(queryInfoDet.selectedToDate);
     queryInfo.queryByDt=queryByDt;
     queryInfo.queryByEmp=queryByEmp;
     queryInfo.empId=queryInfoDet.selectedEmp.Emp_Id;
     return queryInfo;
   }  
   showSwlInfo(infoText) {
     Swal({title:"Info",text:infoText, allowOutsideClick: false});
   }
  showDelSwl(textInfo?:any):Promise<any>{
    textInfo==undefined?"You want to remove this from the list...":textInfo;
    return new Promise((resolve,reject)=>{
      Swal({
      title: 'Are you sure?',
      text: textInfo,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No', 
      allowOutsideClick: false
      }).then((result) => {
        if (result.value) {             
          resolve(result.value);
        }else
          reject(result.value);
      })
    }); 
  }
  showDelSuccSwal(statText:string){
    Swal({
      title: "Deleted!",
      text: statText,      
      type: "success",
      timer: 1000,
      allowOutsideClick: false,
      showConfirmButton:false
    });
  }
  showDelErrSwal(errText:string){
    Swal({
      title: "Error!",
      text: errText,
      type: "error",
      timer: 1000,
      allowOutsideClick: false,
      //showConfirmButton:fa
    });
  }
  showConnErrSwal():Promise<any>{
    return new Promise((resolve,reject)=>{
      Swal({
        title: 'Error!',
        text: "Server connection was lost....",
        type: 'warning',    
        confirmButtonText: 'Ok',
        showCancelButton:false,      
        allowOutsideClick: false
      }).then((result) => {
         if (result.value) {             
            resolve(result.value);
          }else
            reject(result.value);
      });
    }); 
  }
  showSerConnSwal(){
    let that=this;
    Swal({
      title:"Please enter Server Url...",
      input: "text",
      inputValue:that.serName.server_name,
      showConfirmButton:true,
      confirmButtonText:"Test Connection",
      allowOutsideClick: false
    })
    .then((value) => {  
        //that.appComp.           
        this.httpServ.testSerConn(value.value).subscribe((data)=>{              
          that.serName.setSerName(value.value);
          Swal({
            title: "Success!",
            text: "Server Connection established",      
            type: "success",
            timer: 2000,
            allowOutsideClick: false,
            showConfirmButton:false
          });
        },(Error)=>{
          Swal({
            title: "Error!",
            text: "Unable to connect server...",
            type: "error",            
            allowOutsideClick: false
          }).then((res)=>{
            that.showSerConnSwal();
          });                             
        });
    });    
  }
}
