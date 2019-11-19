import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { HTTPSerService } from "../HttpServer.service";
import {ElectronService} from 'ngx-electron';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css']
})
export class PrintPageComponent implements OnInit {
  @ViewChild('printContent') printDiv: ElementRef;

  billItemsInfo:any;
  billItems:any;
  totBillInfo:any;
  emptyval:any;
  ipcRenderer:any;
  constructor(private httpServ:HTTPSerService,private ipcServ:ElectronService,private route:Router) {    
    this.emptyval="dssd";
  }

  //for web
  ngOnInit() {  
    this.billItemsInfo=(JSON.parse(localStorage.getItem("billInfo")));    
    this.totBillInfo=this.billItemsInfo.totBillInfo;
    this.billItems=this.billItemsInfo.billItems;   
    window.print();
    window.addEventListener("afterprint",function(event){      
      localStorage.removeItem("billInfo");
      localStorage.removeItem("printPage");
      window.close();
    })
  }
  //for election
  /*ngOnInit() {
    this.billItemsInfo=(JSON.parse(localStorage.getItem("billInfo")));    
    this.totBillInfo=this.billItemsInfo.totBillInfo;
    this.billItems=this.billItemsInfo.billItems;
    this.ipcServ.ipcRenderer.send('printBill');
    setTimeout(function(){
      localStorage.removeItem("billInfo");
      localStorage.removeItem("printPage");
    },500);    
  }*/

}
