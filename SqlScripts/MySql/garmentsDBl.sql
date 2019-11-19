drop table taxes_info_tb;
drop table shop_info_tb;
drop table return_bill_det_tb;
drop table productstb;
drop table empty_stock_tb;
drop table employee_tb;
drop table bill_items_tb;
drop table bill_details_tb;


CREATE TABLE `bill_details_tb` (
  `Bill_Id` varchar(11) NOT NULL,
  `Emp_Id` varchar(15) DEFAULT NULL,
  `Cust_Name` varchar(45) DEFAULT NULL,
  `Cust_Ph_Num` int(11) DEFAULT NULL,
  `Bill_Date` date DEFAULT NULL,
  `Bill_Total` float DEFAULT NULL,
  `Special_Discount` int(11) DEFAULT NULL,
  `Bill_Round_Amount` float DEFAULT NULL,
  `Bill_Final_Amount` float DEFAULT NULL,
  PRIMARY KEY (`Bill_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `bill_items_tb` (
  `Bill_Id` varchar(11) NOT NULL,
  `P_ID` varchar(15) NOT NULL,
  `Sold_Item_Qty` int(11) DEFAULT NULL,
  `P_Name` varchar(45) DEFAULT NULL,
  `P_taxIncluded` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`Bill_Id`,`P_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `employee_tb` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `Emp_Id` varchar(45) NOT NULL,
  `Emp_Name` varchar(45) NOT NULL,
  `Emp_Pword` varchar(45) NOT NULL,
  `Emp_Type` varchar(45) DEFAULT NULL,
  `Emp_Mobile` int(11) DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;


CREATE TABLE `empty_stock_tb` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `P_ID` varchar(45) DEFAULT NULL,
  `P_Name` varchar(45) DEFAULT NULL,
  `Sold_Date` date DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `productstb` (
  `P_ID` varchar(50) NOT NULL,
  `P_Name` varchar(45) NOT NULL,
  `P_Qty` int(11) NOT NULL,
  `P_Price` float NOT NULL,
  `tax_id` varchar(45) DEFAULT NULL,
  `P_discount` float DEFAULT NULL,
  `P_taxIncluded` tinyint(4) DEFAULT NULL,
  `P_basePrice` float DEFAULT NULL,
  `P_Hsn_Code` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`P_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='	';


CREATE TABLE `return_bill_det_tb` (
  `Bill_Id` varchar(11) NOT NULL,
  `Return_Dt` date DEFAULT NULL,
  PRIMARY KEY (`Bill_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `shop_info_tb` (
  `shop_id` varchar(10) NOT NULL,
  `shop_name` varchar(45) DEFAULT NULL,
  `shop_no` varchar(45) DEFAULT NULL,
  `shop_street` varchar(45) DEFAULT NULL,
  `shop_area` varchar(45) DEFAULT NULL,
  `shop_city` varchar(45) DEFAULT NULL,
  `pincode` int(6) DEFAULT NULL,
  `shop_ph_num` double DEFAULT NULL,
  `shop_gstin_num` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`shop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `taxes_info_tb` (
  `shop_id` varchar(10) NOT NULL,
  `tax_id` varchar(45) NOT NULL,
  `tax_type` varchar(45) DEFAULT NULL,
  `cgst` decimal(5,2) DEFAULT NULL,
  `sgst` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`shop_id`,`tax_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


SET SQL_SAFE_UPDATES = 0;
delete from employee_tb;

INSERT INTO `garmentsdb`.`employee_tb`
(`sno`,
`Emp_Id`,
`Emp_Name`,
`Emp_Pword`,
`Emp_Type`,
`Emp_Mobile`)
VALUES
(1, "admin123","admin123", "admin123","admin",1237890456);

INSERT INTO `garmentsdb`.`employee_tb`
(`sno`,
`Emp_Id`,
`Emp_Name`,
`Emp_Pword`,
`Emp_Type`,
`Emp_Mobile`)
VALUES
(2, "suresh001","Suresh BGV", "suresh@123","empl",null);