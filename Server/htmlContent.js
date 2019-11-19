var fs=require("fs");
module.exports ={
	dynamicHTMLContent1:function(billInfo){
		let html="";
		try{
			html="<!doctype html><html lang='en'><head>";
			html+="<meta charset='utf-8'>";
			html+="<title>Sample5</title>";
			html+="<style>";
			html+=".container{ position: absolute; top: 30px; border: 2px black solid;left: 30px; }";
			html+=".headRow{ min-height: 60px; }";
			html+=".printHeader{ background-color: green; }";
			html+=".printHeader .pheader1,.printHeader .pheader2{ color: white; }";
			html+=".printHeader .pheader2{ font-size: 44px;    font-family: Brush Script MT;margin-left:277px}";
			html+=".printHeader .pheader1{ position: absolute;    left: 120px;    top: 5px; }.printHeader .pheader3{ position: absolute;left: 572px;top: 19px; font-weight: bold; }.headRow2 { min-height: 34px;background-color: white; font-size:14px;    }.printHeader2 .pheader1{ position: absolute; left: 4px;top: 61px; }.printHeader2 .pheader2{ position: absolute;  left: 4px;top: 79px; }.printHeader2 .pheader3{ position: absolute; left: 303px; top: 79px;}.headRow3 { min-height: 30px;background-color: lightblue;text-align: center; }.headRow3 .pheader1{ font-size: 20px;font-weight: bold;  font-family: Times New Roman; }.custDetRow{ background-color: white;min-height: 82px; }.custDetRow .billDetCol{ text-align: right;}.custDetRow .billDetCol2{ text-align: left;display: grid;position: absolute;left: 580px; }.custDetRow .col-8{ padding-left: 5px; }.custDetRow hr{ border-top: black 2px solid; }.custDetRow .hrclass1{ width: 250px;position: absolute;top: 170px; }.custDetRow .hrclass2{ width: 400px;position: absolute;top: 201px; }.custDetRow .custName{ position:absolute;top: 160px;left: 28px;}.custDetRow .custPhNum { position:absolute;top: 190px;left: 28px;}.thead{ background-color: lightblue;color: black; }.headEmptyRow{ min-height: 12px;background-color: white;  }.borderTopNBot{ border-top: black 2px solid;border-bottom: black 2px solid; }.table{ font-size: 13px;background-color: white;margin-bottom: 0rem;    border-collapse: collapse; }.table th,.table tbody tr td{ padding: 0px;vertical-align: middle;border-top: 0px black solid; border-bottom: 0px black solid; }.table thead tr th{ border-right: 1px solid black;border-bottom: 1px solid black;padding:1.5px; }.table thead tr th:last-child{ border-bottom: 1px solid black;border-right: 1px solid black; }.table tbody tr td{ border-right: 1px solid black;border-bottom: 1px solid black;}.table tbody tr:last-child td{ border-right: 1px solid black; border-bottom: 1px solid black;}.emptyValArr{ visibility: hidden; }.table td{ text-align:center; }.alignLeft{ text-align: left;padding-left: 3px; }.bglightGreen{ background-color: lightblue; }.rotate{ -webkit-transform: rotate(-38deg);color: darkgray; -moz-transform: rotate(-38deg);  -ms-transform: rotate(-38deg);  -o-transform: rotate(-38deg);  transform: rotate(-38deg); } ";
			html+="</style></head><body >";
			html+="<div class='container' id='printContent' #printContent>";
			html+='<div class="row headRow">';
			html+='<div class="col col-12 printHeader">';
			html+='<span class="pheader1">Aswa India FAB</span>';
			html+='<span class="pheader2">Free Styles</span>';
			html+='</div></div><div class="row headRow2"><div class="col col-12 printHeader2">';
			//shop details...
			html+='<span class="pheader1">'+billInfo.shopInfo.shop_no+'&nbsp;&nbsp;'+billInfo.shopInfo.shop_street+'</span>';
			html+='<span class="pheader2">Tel:+91-'+billInfo.shopInfo.shop_ph_num+'</span>';
			html+='<span class="pheader3">GSTIN:'+billInfo.shopInfo.shop_gstin_num+'</span> </div></div>    <div class="row headEmptyRow borderTopNBot"><div class="col col-12"> </div>	    </div>';
			html+='<div class="row headRow3"><div class="col col-12"><span class="pheader1">Tax Invoice</span>        </div></div><div class="row custDetRow borderTopNBot"><div class="col col-8"> <span class="pheader1">Customer Name & Address</span>';
			//customer details
			html+='<span class="custName">'+billInfo.custDet.custName+'</span>';
			html+='<span class="custPhNum">'+billInfo.custDet.custMobile+'</span>';
			html+='<hr class="hrclass1"><hr class="hrclass2"></div><div class="col col-2 billDetCol"><span style="position: absolute;left: 505px;">Bill No</span><span style="position: absolute;left: 505px;top:180px">Date</span><span style="position: absolute;left: 505px;top:201px">Pay Mode</span></div>	<div class="col col-2 billDetCol2">';
			//blil id
			html+='<span>:&nbsp;&nbsp;'+billInfo.billId+'</span>';
			//bill date
			html+='<span  style="position: absolute;top:20px;left:0px;">:&nbsp;&nbsp;'+billInfo.billdate+'</span>';
			html+='<span style="position: absolute;top:40px;left:0px;">:&nbsp;&nbsp;Cash-bill</span></div> </div>';
			html+='<div class="row"><table class="table"><thead><tr class="thead"><th rowspan="2" style="border-right:1px solid black;">S.No</th><th rowspan="2" >CODE</th><th rowspan="2" >Description of Goods</th><th rowspan="2" >HSN Code</th><th rowspan="2" >Qty</th><th rowspan="2" >Rate</th><th rowspan="2" >Amount</th><th rowspan="2" >Discount</th><th rowspan="2" >Taxable Value</th><th colspan="2" >CGST</th><th colspan="2" >SGST</th> <th rowspan="2" >Total</th></tr><tr class="thead"><th >Rate</th><th >Amount</th><th >Rate</th><th >Amount</th> </tr></thead><tbody>';
		}
		catch(e){ 
			this.writeErrorLogInfo("dynamicHtml1",JSON.stringify(e));
		}
		return html;
	},
	//bill items
	dynamicHTMLContent2:function(itemsArr){
		let html="";
		for(let i=0;i<itemsArr.length;i++){
			try{
				html+='<tr><td >'+(i+1)+'</td><td >'+itemsArr[i].P_ID+'</td><td>'+itemsArr[i].P_Name+'</td><td >'+itemsArr[i].P_Hsn_Code+'</td><td >'+itemsArr[i].Req_P_Qty+'</td><td>'+itemsArr[i].P_Price.toFixed(2)+'</td><td >'+(itemsArr[i].Amount.toFixed(2))+'</td><td >'+itemsArr[i].disAmount+'</td><td >'+itemsArr[i].taxableVal.toFixed(2)+'</td><td >'+itemsArr[i].cgst+'</td><td >'+itemsArr[i].cgstAmount+'</td><td >'+itemsArr[i].sgst+'</td><td>'+itemsArr[i].sgstAmount+'</td><td>'+itemsArr[i].itemTotAmt.toFixed(2)+'</td></tr>';
			}
			catch(e){ 
				this.writeErrorLogInfo("dynamicHtml2_"+i,JSON.stringify(e));
			}
		}		
		return html;
	},
	//footer content
	dynamicHTMLContent3:function(billInfo){
		let html="";
		//empty rows
		try{
			html+='<tr><td ></td><td ></td><td class="emptyValArr">55</td><td ></td><td ></td><td ></td>          <td></td><td ></td><td ></td><td ></td><td ></td>  <td ></td> <td></td> <td></td></tr>';
			html+='<tr > <td ></td> <td ></td> <td ></td><td></td> <td></td> <td ></td><td class="emptyValArr">33</td><td ></td><td ></td><td ></td><td ></td><td ></td><td></td>	            <td></td></tr>';
			//fill data here
			html+='<tr ><td colspan="4" class="bglightGreen"></td><td >'+billInfo.totItemQty+'</td><td></td><td >'+billInfo.totAmount.toFixed(2)+'</td><td >'+billInfo.totItemDisAmount+'</td>    <td >'+billInfo.totTaxableAmount+'</td><td ></td><td >'+billInfo.totCgstAmount.toFixed(2)+'</td><td ></td><td>'+billInfo.totSgstAmount.toFixed(2)+'</td><td>'+billInfo.totItemsAmount.toFixed(2)+'</td></tr>';
			html+='<tr><td colspan="9" class="bglightGreen"></td><td colspan="4" style="text-align:left;">Total amount before Tax</td><td>'+billInfo.totTaxableAmount.toFixed(2)+'</td></tr>';
			if(billInfo.hasSpecialDis)
				html+='<tr><td colspan="9" rowspan="7">';
			else
				html+='<tr><td colspan="9" rowspan="5">';
			html+='</td><td colspan="4" style="text-align:left;">Add:CGST</td><td>'+billInfo.totCgstAmount.toFixed(2)+'</td></tr>';
			html+='<tr><td colspan="4" style="text-align:left;">Add:SGST</td><td>'+billInfo.totSgstAmount.toFixed(2)+'</td></tr>';
			html+='<tr><td colspan="4" style="text-align:left;">Total Tax Amount</td><td>'+(billInfo.totCgstAmount+billInfo.totSgstAmount).toFixed(2)+'</td></tr>';
			if(billInfo.hasSpecialDis){
				html+='<tr><td colspan="4" style="text-align:left;">Special Discount</td><td>'+billInfo.specialDisVal+'%</td></tr><tr><td colspan="4" style="text-align:left;">Discount Amount</td><td>'+billInfo.specialDisAmount.toFixed(2)+'</td></tr>';
			}
			html+='<tr><td colspan="4" style="text-align:left;">Round of Adjustment</td><td>'+billInfo.roundValue.toFixed(2)+'</td></tr>';
			html+='<tr><td colspan="4" style="text-align:left;">Total amount after Tax</td><td>'+billInfo.roundAmount.toFixed(2)+'</td></tr>';
			html+='<tr><td colspan="6" rowspan="4" class="bglightGreen"></td>';
			html+='<td colspan="3" rowspan="3" ><p class="rotate">Cash paid seal</p></td><td colspan="4" class="bglightGreen" style="text-align:left;">GST on reverse charges</td><td>0.00</td></tr>';
			html+='<tr><td colspan="5" ><br/>Certified that the particulars given above <br/>are true and correct<br/><br/> </td></tr><tr><td colspan="6"	rowspan="2">For Free Styles<br/><br/><br/><br/>Authorised Signature</td></tr>';
			html+='<tr> <td colspan="3">Common Seal</td></tr></tbody></table></div></div></body></html>';
		}
		catch(e){ 
			this.writeErrorLogInfo("dynamicHtml3",JSON.stringify(e));
		}		
		return html;
	},
	getTodaysDate:function(){
		let todayDate=new Date();
		let date=todayDate.getDate()<10? "0"+todayDate.getDate():todayDate.getDate();
		let mon=(todayDate.getMonth()+1)<10? "0"+(todayDate.getMonth()+1):(todayDate.getMonth()+1);
		return (date+"/"+mon+"/"+todayDate.getFullYear());
	},
	getTodaysDateFile:function(){
		let todayDate=new Date();
		return (todayDate.getDate()+"-"+(todayDate.getMonth()+1)+"-"+todayDate.getFullYear());
	},
	getBillId:function(newIdNo){			
		return newIdNo<10? "000000"+newIdNo:newIdNo<100?"00000"+newIdNo:newIdNo<1000?"0000"+newIdNo:newIdNo<10000?"000"+newIdNo:newIdNo<100000?"00"+newIdNo:newIdNo<100000?"0"+newIdNo:newIdNo;		
	},
	getUserId:function(num,name){
		let u_id=name.split(" ").join("").substr(0,6).toLowerCase();
		if(num<10)
		  return u_id+="000"+num;
		if(num<100)
		  return u_id+="00"+num;
		if(num<1000)
		  return u_id+="0"+num;
	},	
	getItemInsArr:function(itemArr,billId){
		let insArr=[];
	    for(let i=0;i<itemArr.length;i++)			
		     insArr.push([billId,itemArr[i].P_ID,itemArr[i].Req_P_Qty,itemArr[i].P_Name,itemArr[i].P_taxIncluded]);		
		return insArr;
	},
	getEmptyItemsInsArr:function(itemArr){
		let insArr=[];
		for(let i=0;i<itemArr.length;i++)			
			insArr.push([itemArr[i].P_ID,itemArr[i].P_Name,this.dateFormatForSql(this.getTodaysDate())]);
		return insArr;
	},
	getItemRowsQuery:function(itemArr){
		let query="select * from productstb where ";
		for(let i=0;i<itemArr.length;i++){
			if(i==itemArr.length-1)
				query+=" P_ID ='"+itemArr[i].P_ID+"' ";
			else
				query+=" P_ID ='"+itemArr[i].P_ID+"' or ";
		}
		return query;
	},
	getSoldProducts:function(itemId,soldProdArr){
		let soldCount=0;
		for(let i=0;i<soldProdArr.length;i++){
			if(soldProdArr[i][1]==itemId){
				soldCount=soldProdArr[i][2];
				break;
			}
		}
		return soldCount;
	},
	writeErrorLogInfo:function(servieName,info){
		let fileNameWithPath="./ServerLog/Error/"+this.getTodaysDateFile()+".txt";
		let Fileinfo=servieName+":\nInfo:"+JSON.stringify(info)+"\n\n";
		fs.appendFile(fileNameWithPath,Fileinfo, function (err) {
			if (err) console.log(err);			
		});
	},
	writeSuccessLogInfo:function(servieName,info){
		let fileNameWithPath="./ServerLog/Success/"+this.getTodaysDateFile()+".txt";
		let Fileinfo=servieName+":\nInfo"+info+"\n\n";
		fs.appendFile(fileNameWithPath,Fileinfo, function (err) {
			if (err) console.log(err);				
		});
	},
	dateFormatForSql(insDate){
		let dateValArr=insDate.split("/");
		
		return dateValArr[2]+"-"+dateValArr[1]+"-"+dateValArr[0];
	}
};