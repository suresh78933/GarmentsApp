import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
// import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { AppLoaderSer } from './app.loader';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material';
import { BillItemsComponent } from './bill-items/bill-items.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdditemComponent } from './additem/additem.component';
import { EdititemComponent } from './edititem/edititem.component';
import { ServerName } from "./ser.name";
import {HttpModule} from '@angular/http';
import { SalesComponent } from './sales/sales.component';
import { SinTaxComponent } from './sin-tax/sin-tax.component';
import { PrintPageComponent } from './print-page/print-page.component';
import { NgxElectronModule } from 'ngx-electron';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: LoginComponent },
  { path: "billIte", component:BillItemsComponent },
  { path: "printPage", component:PrintPageComponent },
  { path: "admin", component:AdminPageComponent},
  { path :"admin/addUser",component : AdduserComponent},
  { path :"admin/editUser",component : EdituserComponent},    
  { path :"admin/addItem",component : AdditemComponent},
  { path :"admin/editItem",component : EdititemComponent},
  { path :"admin/sales",component : SalesComponent},
  { path :"admin/InfoNTax",component : SinTaxComponent}  
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BillItemsComponent,
    AdminPageComponent,
    AdduserComponent,
    EdituserComponent,
    AdditemComponent,
    EdititemComponent,
    SalesComponent,
    SinTaxComponent,
    PrintPageComponent
  ],
   imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,    
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    MatSnackBarModule,NgxElectronModule,
    NgbModule.forRoot()
  ],
  providers: [    
    AppLoaderSer,ServerName
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
