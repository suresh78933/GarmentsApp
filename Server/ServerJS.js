var express = require('express');
var app = express();
var fs=require("fs");
var cors = require('cors');
var path    = require("path");
var mysql = require("mysql");
app.use(cors({origin: '*'}));
app.use(express.static(__dirname + '/dist/GarmApp'));
var pdf=require("html-pdf");
var htmlContent=require("./htmlContent");
let stackBillNos=0;

var con = mysql.createConnection({
  host: "localhost",port:3306,
  database : 'garmentsdb',
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/',function(req,res){	
	res.sendFile(path.join(__dirname));
});

app.get('/testConn',function(req,res){	
	res.send(JSON.stringify("true"));
});

app.get('/isValidId/:id',function(req,res){		
	con.query( "select * from ProductsTB where P_ID= ?",req.params.id,function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("isValidId",err);		
		else
			res.send(JSON.stringify(rows.length==0 ? "true":"false"));
	})	
});

app.get('/getAllItems',function(req,res){		
	con.query( "SELECT * FROM productstb natural join taxes_info_tb ",function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getAllItems",err);		
		else
			res.send(JSON.stringify(rows.length==0 ?"false":rows));		
	})	
});

app.get('/getOldItems',function(req,res){		
	con.query( "SELECT * FROM productstb where P_Qty<=5",function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getOldItems",err);	
		else
			res.send(JSON.stringify(rows.length==0 ?"false":rows));		
	})	
});

app.post('/storeAllItems',function(req,res){	
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let prodItem=JSON.parse(responseString);		
        let sqlInsQury = "INSERT INTO ProductsTB (P_ID,P_Name,P_Qty,P_Price,P_Hsn_Code,tax_id,p_discount,p_taxIncluded,p_basePrice) VALUES ('"+prodItem.itemNo+"','"+prodItem.itemName+"',"+prodItem.itemQty+","+prodItem.itemPrice+",'"+prodItem.itemHSNCode.toUpperCase()+"','"+prodItem.TaxApplied.tax_id+"',"+prodItem.itemDiscount+","+prodItem.isTaxIncluded+","+prodItem.itemBasPrice+")";		
		con.query( sqlInsQury,function(err,result){			
			if(err){
				htmlContent.writeErrorLogInfo("storeAllItems",err);
				res.send(JSON.stringify("Some error went...."));	
			}
			else
				res.send(JSON.stringify("success"));
		})		     
    });	
});

app.post('/updateItemDet',function(req,res){	
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let editItem=JSON.parse(responseString);
        let sqlUpdQury = "update ProductsTB set P_Name='"+editItem.P_Name+"',P_Qty="+editItem.P_Qty+",P_Price="+editItem.P_Price+",P_Hsn_Code ='"+editItem.P_Hsn_Code.toUpperCase()+"',tax_id='"+editItem.tax_id+"',P_basePrice="+editItem.P_basePrice+",P_discount="+editItem.P_discount+" where P_ID='"+editItem.P_ID+"'";	
		//console.log(sqlUpdQury);
		con.query( sqlUpdQury,function(err,result){
			if(err){
				htmlContent.writeErrorLogInfo("updateItemDet",err);
				res.send(JSON.stringify("Some error went...."));	
			}
			else
				res.send(JSON.stringify("success updated"));
		})		     
    });	
});

app.get('/searchForItem/:id',function(req,res){		
	con.query( "select * from ProductsTB where P_ID= ?",req.params.id,function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("searchForItem",err);		
		else
			res.send(JSON.stringify(rows.length!=0 ? rows:"false"));
	})	
});

app.get('/deleteItem/:id',function(req,res){		
	con.query( "delete from ProductsTB where P_ID= ?",req.params.id,function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("deleteItem",err);		
		else
			res.send(JSON.stringify(rows.length==0 ? "true":"false"));
	})	
});

app.post('/addUserDet',function(req,res){
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let userDet=JSON.parse(responseString);
       	con.query( "select * from employee_tb ",function(err,rows){
			if(err)
				console.log(err);		
			else{			
				let insQuery="insert into employee_tb (Emp_Id,Emp_Name,Emp_Pword,Emp_Type) values('"+htmlContent.getUserId(rows.length+1,userDet.userName)+"','"+userDet.userName+"','"+userDet.passWord+"','empl') ";
				con.query( insQuery,function(err,rows){
					if(err)
						htmlContent.writeErrorLogInfo("addUserDet",err);		
					else{
						res.send(JSON.stringify("success"));
					}
				});
			}
		})	     
    });		
});

app.get('/getAllUsers',function(req,res){		
	con.query( "select * from employee_tb where Emp_Type='empl'",function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getAllUsers",err);		
		else
			res.send(JSON.stringify(rows));
	})	
});

app.post('/updateUserDet',function(req,res){	
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let editUser=JSON.parse(responseString);
        let updUserQury = "update employee_tb set Emp_Name='"+editUser.Emp_Name+"',Emp_Pword='"+editUser.Emp_Pword+"' where Emp_Id='"+editUser.Emp_Id+"'";
		con.query( updUserQury,function(err,result){
			if(err){
				htmlContent.writeErrorLogInfo("updateUserDet",err);
				res.send(JSON.stringify("Some error went...."));	
			}
			else
				res.send(JSON.stringify("success updated"));
		})		     
    });	
});

app.get('/deleteUser/:id',function(req,res){		
	con.query( "delete from employee_tb where Emp_Id= ?",req.params.id,function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("deleteUser",err);		
		else
			res.send(JSON.stringify(rows.length==0 ? "true":"false"));
	})	
});

app.get('/findProdDet/:id',function(req,res){		
	con.query( "select * from ProductsTB natural join taxes_info_tb where ProductsTB.P_ID= ?",req.params.id,function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("findProdDet",err);		
		else
			res.send(JSON.stringify(rows));
	})	
});

app.post('/isValidAdmRUser',function(req,res){		
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let userDet=JSON.parse(responseString);
		let queryStr="";       
			queryStr="select * from employee_tb where (Emp_Id='"+userDet.userName+"' and Emp_Pword='"+userDet.userPword+"' )";		
		//console.log(queryStr);
		con.query(queryStr,function(err,rows){			
			if(err)
				htmlContent.writeErrorLogInfo("isValidAdmRUser",err);		
			else			
				res.send(JSON.stringify(rows.length!=0 ? rows[0].Emp_Id+"/"+(rows[0].Emp_Type=="admin"?true:false):"false"));			
		})
    });	
});

app.post('/updatePassword',function(req,res){	
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let userDet=JSON.parse(responseString);
		con.query("select * from employee_tb where (Emp_Id='"+userDet.userId+"' and Emp_Pword='"+userDet.oldPwd+"')",function(err,rows){
			if(err){
				htmlContent.writeErrorLogInfo("updatePassword",err);
				res.send(JSON.stringify("Some error went...."));	
			}
			else{
				if(rows.length==0)
					res.send(JSON.stringify("Old Password was incorrect..."));
				else{
					con.query("update employee_tb set Emp_Pword='"+userDet.newPwd+"' where Emp_Id='"+userDet.userId+"'",function(err,rows){						
						if(err){
							htmlContent.writeErrorLogInfo("updatePassword",err);
							res.send(JSON.stringify("Some error went...."));	
						}
						else{
							res.send(JSON.stringify("true"));
						}
					})
				}
			}			
		})
		
    });	
});

app.get('/getAllTaxes',function(req,res){		
	con.query( "select * from taxes_info_tb",function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getAllTaxes",err);		
		else
			res.send(JSON.stringify(rows));
	})	
});

app.get('/getShopInfo',function(req,res){		
	con.query( "select * from shop_info_tb",function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getShopInfo",err);		
		else
			res.send(JSON.stringify(rows));
	})	
});

app.post('/updateTaxInfo',function(req,res){	
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let editTax=JSON.parse(responseString);
        let updTaxQury = "update taxes_info_tb set cgst="+editTax.cgst+",sgst="+editTax.sgst+" where tax_id='"+editTax.tax_id+"'";	
		con.query( updTaxQury,function(err,result){
			if(err){
				htmlContent.writeErrorLogInfo("updateTaxInfo",err);
				res.send(JSON.stringify("Some error went...."));	
			}
			else
				res.send(JSON.stringify("success updated"));
		})		     
    });	
});

app.post('/updateShopInfo',function(req,res){	
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let editShopInfo=JSON.parse(responseString);
        let updShopQury = "update shop_info_tb set shop_name='"+editShopInfo.shop_name+"',shop_ph_num="+editShopInfo.shop_ph_num+",shop_no='"+editShopInfo.shop_no+"' ,shop_street='"+editShopInfo.shop_street+"' ,shop_area='"+editShopInfo.shop_area+"' ,shop_city='"+editShopInfo.shop_city+"', pincode="+editShopInfo.pincode+",shop_gstin_num='"+editShopInfo.shop_gstin_num+"' where shop_id='"+editShopInfo.shop_id+"'";	
		con.query( updShopQury,function(err,result){
			if(err){
				htmlContent.writeErrorLogInfo("updateShopInfo",err);
				res.send(JSON.stringify("Some error went...."));	
			}
			else
				res.send(JSON.stringify("success updated"));
		})		     
    });	
});

app.get('/getBillId',function(req,res){		
	con.query( "select * from bill_details_tb",function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getBillId",err);		
		else{
			let dataRowLength=rows.length;
			con.query( "select * from return_bill_det_tb",function(err,returnrows){
				if(err)
					htmlContent.writeErrorLogInfo("getBillId",err);		
				else{
					let newBillNo=returnrows.length+dataRowLength+1+stackBillNos;					
					res.send(JSON.stringify(htmlContent.getBillId(newBillNo)));
					stackBillNos++;
				}
			})			
		}
	})	
});

app.get('/getBillDetById/:billId',function(req,res){		
	con.query( "select * from bill_details_tb natural join employee_tb where Bill_Id=?",req.params.billId,function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getBillDetById",err);		
		else{			
			res.send(JSON.stringify(rows));			
		}
	})	
});

app.get('/getBillItemsDet/:billId',function(req,res){		
	con.query( "select P_ID,P_Name,Sold_Item_Qty from bill_items_tb where Bill_Id=?",req.params.billId,function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getBillItemsDet",err);		
		else{
			res.send(JSON.stringify(rows));			
		}
	})	
});

app.get('/getOldStockDetails',function(req,res){		
	con.query( "SELECT P_ID,P_Name,P_Qty FROM productstb where P_Qty<=5;",function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("getOldStockDetails",err);		
		else{
			res.send(JSON.stringify(rows));			
		}
	})	
});

app.post('/generatePDF',function(req,res){	
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
		stackBillNos--;
        let billItemsInfo=JSON.parse(responseString);
		//to create pdf file...
		createPDF(billItemsInfo);
		let billInfo=billItemsInfo.totBillInfo;
		//insert bill information...
		let billInfoQuery="INSERT INTO bill_details_tb(Bill_Id,Emp_Id,Cust_Name,Cust_Ph_Num,Bill_Date,Bill_Total,Special_Discount,Bill_Round_Amount,Bill_Final_Amount) VALUES ('"+billInfo.billId+"','"+billInfo.empId+"','"+billInfo.custDet.custName+"',"+billInfo.custDet.custMobile+",'"+htmlContent.dateFormatForSql(billInfo.billdate)+"',"+billInfo.totItemsAmount+","+billInfo.specialDisVal+","+billInfo.roundValue+","+billInfo.roundAmount+")";
		con.query( billInfoQuery,function(err,result){
			if(err)
				htmlContent.writeErrorLogInfo("generatePDF",err);		
			else{
				htmlContent.writeSuccessLogInfo("generatePDF","Bill Info inserted successfully...");
				let billItemsQuery=htmlContent.getItemInsArr(billItemsInfo.billItems,billItemsInfo.totBillInfo.billId);
				//console.log(billItemsQuery);
				con.query("INSERT INTO bill_items_tb (Bill_Id,P_ID,Sold_Item_Qty,P_Name,P_taxIncluded) VALUES ?",[billItemsQuery] ,function(err,insResult){
					if(err)
						htmlContent.writeErrorLogInfo("generatePDF",err);		
					else{
						htmlContent.writeSuccessLogInfo("generatePDF","Bill items inserted successfully...");
						con.query( htmlContent.getItemRowsQuery(billItemsInfo.billItems),function(err,rows){
							if(err)
								htmlContent.writeErrorLogInfo("generatePDF",err);		
							else{								
								callBack(rows,billItemsQuery);
								checkForEmptyStock();
								res.send(JSON.stringify("success"));								
							}
						})
					}
				});
			}
		});	
    });	
});

app.post('/getSalesReports',function(req,res){	
	let responseString="";
	req.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    req.on("end", function () {
        let queryInfo=JSON.parse(responseString);
		let query="";
        if(queryInfo.queryByEmp)
			query="select * from bill_details_tb natural join employee_tb where Bill_Date='"+queryInfo.fromDate+"' and Emp_id='"+queryInfo.empId+"'";
		else
			query="SELECT * FROM bill_details_tb natural join employee_tb where (Bill_Date between '"+queryInfo.fromDate+"' and '"+queryInfo.toDate+"')";
		con.query(query,function(err,rows){
			if(err)
				htmlContent.writeErrorLogInfo("getSalesReports",err);		
			else{
				res.send(JSON.stringify(rows));			
			}
		})
    });	
});

app.get('/deleteBillDet/:billId',function(req,res){		
	con.query( "delete from bill_details_tb where Bill_Id=?",req.params.billId,function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("deleteBillDet",err);		
		else{			
			let returnProdRows;
			con.query( "select * from bill_items_tb where Bill_Id=?",req.params.billId,function(err,rows){
				if(err)
					htmlContent.writeErrorLogInfo("deleteBillDet",err);		
				else{
					returnProdRows=rows;
					let returnProdIds=[];
					rows.forEach(function(item,idx){
						returnProdIds.push(item.P_ID);
					});
					con.query("delete from bill_items_tb where Bill_Id=?",req.params.billId,function(err,rows){
						if(err)
							htmlContent.writeErrorLogInfo("deleteBillDet",err);	
					})
					con.query(htmlContent.getItemRowsQuery(returnProdRows),function(err,oldProductRows){
						if(err)
							htmlContent.writeErrorLogInfo("deleteBillDet",err);		
						else{
							updateReturnProducts(returnProdRows,oldProductRows);
							updateRetBillDet(req.params.billId);
							res.send(JSON.stringify("success"));
						}
					})
				}
			})	
		}
	})	
});

app.get('/resetBillIds',function(req,res){		
	//for reset bill Ids after the finalcial year...
	con.query("select * from bill_details_tb",function(err,billInfoRows){
	   if(err){
			htmlContent.writeErrorLogInfo("ResetBillIds_e_1",JSON.stringify(err));
			res.send(JSON.stringify("error"));
	   }
	   else{
			fs.appendFile("./oldData/billDetailInfo.txt",JSON.stringify(billInfoRows),function(err,suc){
				if (err) console.log(err);
			})
			con.query("select * from bill_items_tb",function(err,billItemsRows){
				if(err){
					htmlContent.writeErrorLogInfo("ResetBillIds_e_2",JSON.stringify(err));
					res.send(JSON.stringify("error"));
				} else{
					fs.appendFile("./oldData/billItemsInfo.txt",JSON.stringify(billItemsRows),function(err,suc){
						if (err) console.log(err);
					})
					con.query("truncate table bill_details_tb",function(err,info){
						if(err){
							htmlContent.writeErrorLogInfo("ResetBillIds_e_3",JSON.stringify(err));
							res.send(JSON.stringify("error"));
						}
						else{
						  con.query("truncate table bill_items_tb",function(err,info){
							if(err){
								htmlContent.writeErrorLogInfo("ResetBillIds_e_4",JSON.stringify(err));
								res.send(JSON.stringify("error"));
							}else{
								htmlContent.writeSuccessLogInfo("ResetBillIds_s_1","Successfully");
								res.send(JSON.stringify("success"));
							 }
						  });					
						}
					});				
				 }
			});
		 }
	});
});

function checkForEmptyStock(){
	con.query("select * from productstb where P_Qty=0",function(err,rows){
		if(err)
			htmlContent.writeErrorLogInfo("checkForEmptyStock",err);		
		else{
			let emptyProducts=htmlContent.getEmptyItemsInsArr(rows);
			if(rows.length!=0){
				/*con.query("delete from productstb where P_Qty=0",function(err,res){
					if(err)
						htmlContent.writeErrorLogInfo("checkForEmptyStock",err);
				})*/
				con.query("INSERT INTO empty_stock_tb (P_ID,P_Name,Sold_Date) VALUES ?",[emptyProducts] ,function(err,insResult){
					if(err)
						htmlContent.writeErrorLogInfo("checkForEmptyStock",err);
				})
			}
		}
	})
}


function updateRetBillDet(billId){
	con.query("INSERT INTO return_bill_det_tb (Bill_Id,Return_Dt) VALUES ('"+billId+"','"+htmlContent.dateFormatForSql(htmlContent.getTodaysDate())+"')",function(err,insResult){
		if(err)
			htmlContent.writeErrorLogInfo("deleteBillDet",err);
	})
}

function callBack(rows,billItemsQuery){
  for(let i=0;i<rows.length;i++){
    let updateQty=rows[i].P_Qty-htmlContent.getSoldProducts(rows[i].P_ID,billItemsQuery);
	let updateItemsQuery="update productstb set P_Qty= "+updateQty+" where P_ID='"+rows[i].P_ID+"'";
	con.query(updateItemsQuery,function(err,result){
		if(err)
			htmlContent.writeErrorLogInfo("generatePDF",err);		
		else{
			htmlContent.writeSuccessLogInfo("generatePDF","Products Info updated successfully...");	
		}
	})
  }
}

function updateReturnProducts(returnProdRows,oldProductRows){
	for(let i=0;i<returnProdRows.length;i++){
    let updateQty=returnProdRows[i].Sold_Item_Qty+oldProductRows[i].P_Qty;
	let updateItemsQuery="update productstb set P_Qty= "+updateQty+" where P_ID='"+oldProductRows[i].P_ID+"'";
	con.query(updateItemsQuery,function(err,result){
		if(err)
			htmlContent.writeErrorLogInfo("deleteBillDet",err);		
		else{
			htmlContent.writeSuccessLogInfo("deleteBillDet","Return Products Info updated successfully...");	
		}
	})
  }
}

function createPDF(billItemsInfo){
	let options={format:"letter"};
	let htmlContent1=htmlContent.dynamicHTMLContent1(billItemsInfo.totBillInfo)+""+htmlContent.dynamicHTMLContent2(billItemsInfo.billItems)+""+htmlContent.dynamicHTMLContent3(billItemsInfo.totBillInfo);
	pdf.create(htmlContent1,options).toFile("./bills/"+billItemsInfo.totBillInfo.billId+".pdf",function(err,res){
		if (err) console.log(err);
		console.log(res);	
	});
}


var server = app.listen(5000, function () {
    console.log('Server is running..');
});