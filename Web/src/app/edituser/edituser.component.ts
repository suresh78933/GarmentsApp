import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HTTPSerService } from "../HttpServer.service";
import { CommonFunctions } from '../common.function';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  allUsers:any; 
  editUser:any;
  closeResult:string;
  constructor(private route:Router,private titelService:Title,private modalService: NgbModal,private httpServ:HTTPSerService,private commFunc:CommonFunctions) {
    titelService.setTitle("Edit Item");
    this.allUsers=[];
    this.editUser={};
    this.getAllUsers();
  }
  getAllUsers(){
    this.httpServ.getAllUsers().subscribe((data)=>{      
      this.allUsers=(data);
    })
  } 
  goToDashBor(){
  	//this.loader.display(false);
  	this.route.navigate(["/admin"]);
  }
  editUserDet(user,content){
    this.editUser=user;
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
  updateUser(){
    let pWord=this.editUser.user_pword;
    let cpword=this.editUser.user_cpword;
    if((pWord==""||pWord==undefined)||(cpword==""||cpword==undefined)){
      this.commFunc.showSwlInfo("Password or Confirm password are missing...");
      return false;
    }
    if(pWord!=cpword){
      this.commFunc.showSwlInfo("Password and Confirm password are not same...");
      return false;
    }
    this.modalService.dismissAll();    
    let that=this;
    this.httpServ.updateUser(that.editUser).subscribe((data)=>{      
      that.getAllUsers();
    });
  }
  delUser(){
    let that=this;
    this.modalService.dismissAll();
    this.commFunc.showDelSwl("You want to delete this user...").then((success)=>{      
      this.httpServ.deleteUser(this.editUser.Emp_Id).subscribe((data)=>{
        this.getAllUsers();
      })     
    },(fail)=>{});
  }
}
