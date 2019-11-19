var fs=require("fs");
var pdf=require("html-pdf");
var htmlContent=require("./htmlContent");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",port:3306,
  database : 'garmentsdb',
  user: "root",
  password: ""
});


var html2=fs.readFileSync("./New Folder/samplepage2.html","utf8");
var options={format:"letter"};

var dynamic_content="<tr><td >Suresh</td><td ></td><td>55</td><td ></td><td ></td><td ></td>       <td></td><td ></td><td ></td><td ></td><td ></td><td ></td><td ></td><td></td><td></td></tr>";
/*
pdf.create(htmlContent.dynamicHTMLContent1()+""+dynamic_content+""+html2,options).toFile("./sample.pdf",function(err,res){
	if (err) console.log(err);
	console.log(res);	
});
*/

function generateBillId(){
	con.query( "select * from bill_details_tb where Bill_Date= ? order by Bill_Id desc",htmlContent.getTodaysDate(),function(err,rows){
		if(err)
			console.log(err);		
		else{			
			console.log(getBillId(rows));
		}
	})
}
//generateBillId();

function getBillId(rows){
	console.log(rows);
	let date=(htmlContent.getTodaysDate().split("/").slice(0,-1).join(""));
	if(rows.length==0){
		return "FRS"+date+"A001";
	}else{
		let lastOrderId=rows[0].Bill_Id;
		let lastCharSeq=lastOrderId.substr(7,1);
		let lastItemSeq=parseInt(lastOrderId.substr(8));
		let nextItemSeq="";
		if(lastItemSeq==999){
			lastCharSeq=String.fromCharCode(lastCharSeq.charCodeAt(0) + 1);
			nextItemSeq="001";
		}else{
			lastItemSeq+=1;
			nextItemSeq= lastItemSeq < 10 ? "00" + lastItemSeq.toString() : (lastItemSeq < 100 ? "0" + lastItemSeq.toString() : lastItemSeq.toString());
		}
		return "FRS"+date+""+lastCharSeq+""+nextItemSeq;
	}		
}


