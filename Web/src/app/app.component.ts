import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppLoaderSer } from './app.loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.loader.css']
})
export class AppComponent implements OnInit {
  title = 'GarmApp';
  showLoader:boolean; 
  constructor(private route:Router,private loader:AppLoaderSer) {      
    window.onpopstate=()=>{
      history.go(1);     
    }    
  }
  ngOnInit(){
    
    //localStorage.removeItem("printPage"); 
    //alert(localStorage.getItem("printPage"));    
    if(localStorage.getItem("printPage")=="true"){
      this.route.navigate(["/printPage"]);
    }else{
    	localStorage.removeItem("UserDet");  
      this.route.navigate(["/home"]);
    }
  }
}
