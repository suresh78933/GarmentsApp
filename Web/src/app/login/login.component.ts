import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HTTPSerService } from "../HttpServer.service";
import { CommonFunctions } from "../common.function";


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginInfo:any;
  preUser:string
  constructor(private titleService:Title,private route:Router,private httpServ:HTTPSerService,private commFunc:CommonFunctions) { 
   this.LoginInfo={};
   this.preUser="User";
   titleService.setTitle("Login");
   //this is for desktop application only....
   this.commFunc.showSerConnSwal();
  }

  ngOnInit() {
    
  }

  validateLogin()
  {  
    if(this.LoginInfo.UserName==""||this.LoginInfo.UserName==undefined){
      this.commFunc.showSwlInfo("User Name is required...");
      return false;
    }   
    if(this.LoginInfo.PassWord==""||this.LoginInfo.PassWord==undefined){
      this.commFunc.showSwlInfo("Password is required...");
      return false;
    }
    let userDet={"userName":this.LoginInfo.UserName,"userPword":this.LoginInfo.PassWord};
    let that=this;
    this.httpServ.isValidAdmRUser(userDet).subscribe((data)=>{      
      localStorage.setItem("UserDet",data);   
      if(data!="false"){
        if(data.split("/")[1]=="true")
          that.route.navigate(["/admin"]);
        else
          that.route.navigate(["/billIte"]);
      }else{       
        this.commFunc.showSwlInfo("User name/password is Invalid");
      }
    });
    /*if(this.isAdmin)
      this.route.navigate(["/admin"]);
    else
      this.route.navigate(["/billIte"]);*/
  }

}
