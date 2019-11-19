import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HTTPSerService } from "../HttpServer.service";
import { CommonFunctions } from "../common.function";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  addAllUsers:any; 
  closeResult:string; 
  addUser:any;  
  constructor(private route:Router,private titelService:Title,private httpServ:HTTPSerService,private commFunc:CommonFunctions) {
    titelService.setTitle("Add User");
    this.addAllUsers=[];    
    this.addUser={};
  }

  ngOnInit() {
  }
  goToDashBor(){
  	this.route.navigate(["/admin"]);
  }
  saveUser(){
  	let uName=this.addUser.userName;
  	let pWord=this.addUser.passWord;
  	if((uName==""||uName==undefined)||(pWord==""||pWord==undefined)){
  		this.commFunc.showSwlInfo("User name and Password are required...");
  		return false;
  	}
  	else if(uName.length<6){
  		this.commFunc.showSwlInfo("User name must contain 6 characters...");
  		return false;
  	}
  	this.httpServ.saveUserDet(this.addUser).subscribe((data)=>{
  		if(data=="success"){
  			this.commFunc.showSwlInfo("Successfully added the user...");
  			this.addUser={};  			
  		}
  		else
  			this.commFunc.showSwlInfo("Some error went...");
  	});
  }   
}
