import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private route:Router,private titelService:Title){
    titelService.setTitle("DashBoard");
  }

  ngOnInit() {
  }
  removeItem(){
    localStorage.removeItem("UserDet");
  }
  logOut(){
    localStorage.removeItem("UserDet");
    this.route.navigate(["home"]);
  }
  goTo(pName)
  {    
    switch (pName) {
      case "addItem":
        //alert("Add item clicked...");
        this.route.navigate(["admin/addItem"]);
        break;
      case "editItem":
         //alert("Edit item clicked...");
         this.route.navigate(["admin/editItem"]);
      break;
      case "addUser":
       //alert("Add User clicked...");
       this.route.navigate(["admin/addUser"]);
      break;
      case "editUser":
       //alert("Edit User clicked...");
       this.route.navigate(["admin/editUser"]);
      break;
       case "sales":
       //alert("Edit User clicked...");
       this.route.navigate(["admin/sales"]);
      break;
       case "infonTax":
       //alert("Edit User clicked...");
       this.route.navigate(["admin/InfoNTax"]);
      break;
      default:
        // code...
      break;
    }
  }
}
