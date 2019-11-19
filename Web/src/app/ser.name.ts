export class ServerName {
  server_name:string
  constructor() { 
   this.server_name="http://192.168.1.12:5000/";
  }
  getSerName(){
  	return this.server_name;
  }
  setSerName(ser_name:string){
  	this.server_name=ser_name;
  }
}
