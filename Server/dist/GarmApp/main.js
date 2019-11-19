(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/HttpServer.service.ts":
/*!***************************************!*\
  !*** ./src/app/HttpServer.service.ts ***!
  \***************************************/
/*! exports provided: HTTPSerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPSerService", function() { return HTTPSerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ser_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ser.name */ "./src/app/ser.name.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HTTPSerService = /** @class */ (function () {
    function HTTPSerService(sernam, http) {
        this.sernam = sernam;
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers, method: "post" });
    }
    HTTPSerService.prototype.testSerConn = function (serUrl) {
        var url = serUrl == undefined ? this.sernam.server_name : serUrl;
        return this.http.get(url + "testConn").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    HTTPSerService.prototype.isValidProdId = function (id) {
        return this.http.get(this.sernam.server_name + "isValidId/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.storeAllProducts = function (prodArr) {
        return this.http.post(this.sernam.server_name + "storeAllItems", JSON.stringify(prodArr), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getAllItems = function () {
        return this.http.get(this.sernam.server_name + "getAllItems").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getOldItems = function () {
        return this.http.get(this.sernam.server_name + "getOldItems").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.updateItemDet = function (item) {
        return this.http.post(this.sernam.server_name + "updateItemDet", JSON.stringify(item), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.deletItem = function (itemId) {
        return this.http.get(this.sernam.server_name + "deleteItem/" + itemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.searchForItem = function (itemID) {
        return this.http.get(this.sernam.server_name + "searchForItem/" + itemID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.saveUserDet = function (user) {
        return this.http.post(this.sernam.server_name + "addUserDet", JSON.stringify(user), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getAllUsers = function () {
        return this.http.get(this.sernam.server_name + "getAllUsers").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.updateUser = function (user) {
        return this.http.post(this.sernam.server_name + "updateUserDet", JSON.stringify(user), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.deleteUser = function (u_id) {
        return this.http.get(this.sernam.server_name + "deleteUser/" + u_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.findProdDet = function (p_id) {
        return this.http.get(this.sernam.server_name + "findProdDet/" + p_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.isValidAdmRUser = function (userDet) {
        return this.http.post(this.sernam.server_name + "isValidAdmRUser", JSON.stringify(userDet), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.updatePassword = function (userDet) {
        return this.http.post(this.sernam.server_name + "updatePassword", JSON.stringify(userDet), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getAllTaxes = function () {
        return this.http.get(this.sernam.server_name + "getAllTaxes").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getShopInfo = function () {
        return this.http.get(this.sernam.server_name + "getShopInfo").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.updateTaxInfo = function (tax) {
        return this.http.post(this.sernam.server_name + "updateTaxInfo", JSON.stringify(tax), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.updateShopInfo = function (tax) {
        return this.http.post(this.sernam.server_name + "updateShopInfo", JSON.stringify(tax), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getBillId = function () {
        return this.http.get(this.sernam.server_name + "getBillId").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.generatePDF = function (billInfo) {
        return this.http.post(this.sernam.server_name + "generatePDF", JSON.stringify(billInfo), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getBillDetById = function (billId) {
        return this.http.get(this.sernam.server_name + "getBillDetById/" + billId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getOldStockDetails = function () {
        return this.http.get(this.sernam.server_name + "getOldStockDetails/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getSalesReports = function (salesQuery) {
        return this.http.post(this.sernam.server_name + "getSalesReports", JSON.stringify(salesQuery), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.getBillItemsDet = function (billId) {
        return this.http.get(this.sernam.server_name + "getBillItemsDet/" + billId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.deleteBillDet = function (billId) {
        return this.http.get(this.sernam.server_name + "deleteBillDet/" + billId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService.prototype.resetBillIds = function () {
        return this.http.get(this.sernam.server_name + "resetBillIds").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    HTTPSerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_ser_name__WEBPACK_IMPORTED_MODULE_2__["ServerName"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HTTPSerService);
    return HTTPSerService;
}());



/***/ }),

/***/ "./src/app/additem/additem.component.css":
/*!***********************************************!*\
  !*** ./src/app/additem/additem.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addItemClass{\ttext-align: right;\tpadding-bottom: 8px;}\r\n.addItemClass img{\tcursor: pointer;padding-left: 10px; }\r\ntextarea { resize: none; }\r\n.container{ margin-top: 40px; }\r\n.table .tax-radio label{  margin-right: 10px;cursor: pointer; }\r\n.modalFooter { text-align: right; }\r\n.modalFooter img,button{\tcursor: pointer;margin-right: 17px; }\r\nbutton{ background-color: white; }\r\n.table{ background-color: darkgrey; }\r\n.selGroup{ font-size: 18px;    padding: 14px; }\r\ninput[type=number]::-webkit-outer-spin-button, \r\ninput[type=number]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n.table td,.table th{ padding: 8px; }\r\ntextarea,input[type]{     padding: 15px;    font-size: 18px; }\r\n.itemPercent{ position: absolute; top: 28px; left: 170px; font-size: 1.8rem; }\r\n.iconClass { font-size: 30px; background-color: darkcyan; }\r\nbutton:disabled,\r\nbutton[disabled]{ cursor: default;}\r\n.closeButt{ background-color: unset; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRlbS9hZGRpdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQztBQUN2RCxtQkFBbUIsZ0JBQWdCLG1CQUFtQixFQUFFO0FBQ3hELFdBQVcsYUFBYSxFQUFFO0FBQzFCLFlBQVksaUJBQWlCLEVBQUU7QUFDL0IsMEJBQTBCLG1CQUFtQixnQkFBZ0IsRUFBRTtBQUMvRCxlQUFlLGtCQUFrQixFQUFFO0FBQ25DLHlCQUF5QixnQkFBZ0IsbUJBQW1CLEVBQUU7QUFDOUQsUUFBUSx3QkFBd0IsRUFBRTtBQUNsQyxRQUFRLDJCQUEyQixFQUFFO0FBQ3JDLFdBQVcsZ0JBQWdCLElBQUksY0FBYyxFQUFFO0FBQy9DOztJQUVJLHlCQUF5QjtJQUN6QixVQUFVO0NBQ2I7QUFDRCxxQkFBcUIsYUFBYSxFQUFFO0FBQ3BDLDBCQUEwQixjQUFjLElBQUksZ0JBQWdCLEVBQUU7QUFDOUQsY0FBYyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFO0FBQzlFLGFBQWEsZ0JBQWdCLENBQUMsMkJBQTJCLEVBQUU7QUFDM0Q7a0JBQ2tCLGdCQUFnQixDQUFDO0FBQ25DLFlBQVksd0JBQXdCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hZGRpdGVtL2FkZGl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRJdGVtQ2xhc3N7XHR0ZXh0LWFsaWduOiByaWdodDtcdHBhZGRpbmctYm90dG9tOiA4cHg7fVxyXG4uYWRkSXRlbUNsYXNzIGltZ3tcdGN1cnNvcjogcG9pbnRlcjtwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cclxudGV4dGFyZWEgeyByZXNpemU6IG5vbmU7IH1cclxuLmNvbnRhaW5lcnsgbWFyZ2luLXRvcDogNDBweDsgfVxyXG4udGFibGUgLnRheC1yYWRpbyBsYWJlbHsgIG1hcmdpbi1yaWdodDogMTBweDtjdXJzb3I6IHBvaW50ZXI7IH1cclxuLm1vZGFsRm9vdGVyIHsgdGV4dC1hbGlnbjogcmlnaHQ7IH1cclxuLm1vZGFsRm9vdGVyIGltZyxidXR0b257XHRjdXJzb3I6IHBvaW50ZXI7bWFyZ2luLXJpZ2h0OiAxN3B4OyB9XHJcbmJ1dHRvbnsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cclxuLnRhYmxleyBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTsgfVxyXG4uc2VsR3JvdXB7IGZvbnQtc2l6ZTogMThweDsgICAgcGFkZGluZzogMTRweDsgfVxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi50YWJsZSB0ZCwudGFibGUgdGh7IHBhZGRpbmc6IDhweDsgfVxyXG50ZXh0YXJlYSxpbnB1dFt0eXBlXXsgICAgIHBhZGRpbmc6IDE1cHg7ICAgIGZvbnQtc2l6ZTogMThweDsgfVxyXG4uaXRlbVBlcmNlbnR7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAyOHB4OyBsZWZ0OiAxNzBweDsgZm9udC1zaXplOiAxLjhyZW07IH1cclxuLmljb25DbGFzcyB7IGZvbnQtc2l6ZTogMzBweDsgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47IH1cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRdeyBjdXJzb3I6IGRlZmF1bHQ7fVxyXG4uY2xvc2VCdXR0eyBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/additem/additem.component.html":
/*!************************************************!*\
  !*** ./src/app/additem/additem.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-billItem100\">\t\t\n\t\t<div class=\"container\">\t\t    \n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t \t<img src=\"./assets/images/back.png\" class=\"backButtonCss\" title=\"Dashboard\" (click)=\"goToDashBor();\">\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project prjHed\">  \n\t\t                    <span class=\"headerDashB\">Add Item</span>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t\n\t\t    </div>\t\t   \n\t\t\t<form>\n\t\t      <div class=\"form-group\">\n\t\t       <div class=\"row\">\n\t\t          <div class='col col-3'>\n\t\t          \t<label for=\"itemid\">Item #:</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t            <input type=\"text\"  autocomplete=\"off\" class=\"form-control\" placeholder=\"Item Number\" name=\"itemNo\" [disabled]=\"isValidItemNo\" [(ngModel)]=\"addItem.itemNo\">\n\t\t\t            <span class=\"input-group-btn\">\n\t\t\t\t\t    <button [disabled]=\"isValidItemNo\" (click)=\"searchId(addItem.itemNo)\" title=\"Search for Id\" class=\"btn btn-default iconClass\" type=\"submit\">\n\t\t\t\t\t        <i class=\"fa fa-search\"></i>\n\t\t\t\t\t    </button>\n\t\t\t\t\t  </span>\n\t\t\t        </div>\n\t\t          </div>\n\t\t          <div class='col col-4'>\n\t\t          \t<label for=\"itemname\">Item Name:</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t          <input type=\"text\" class=\"form-control\" placeholder=\"Item Name\" name=\"itemName\" [(ngModel)]=\"addItem.itemName\">\n\t\t\t        </div>\n\t\t          </div>\n\t\t          <div class='col col-3'>\n\t\t          \t<label for=\"itemtype\">Item Type:</label>\n\t\t\t        <div class=\"input-group\">\t         \n\t\t\t          <select [(ngModel)]=\"selectedTax\" name=\"seleTax\" class=\"selGroup\" (ngModelChange)=\"onTaxChange()\">\n\t\t\t          \t<option value=\"\">--Select Tax Group--</option>\n\t\t\t\t\t  \t<option *ngFor=\"let tax of allTaxesArr\" [ngValue]=\"tax\">{{tax.tax_type}}</option>\n\t\t\t\t\t</select>\n\t\t\t        </div>\n\t\t          </div>\n\t\t          <div class='col col-2'>\n\t\t          \t<label for=\"itemHSNCode\">HSN Code:</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t          <input type=\"text\" class=\"form-control\" placeholder=\"HSN Code\" name=\"itemHSNCode\" [(ngModel)]=\"addItem.itemHSNCode\">\n\t\t\t        </div>\n\t\t          </div>\n\t\t        </div>\n\t\t        <br/>        \n\t\t        <div class=\"row\">\n\t\t         <div class='col col-2'>\n\t\t          \t<label for=\"itemqty\">Qty:</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t          <input class=\"form-control\" placeholder=\"Qty\" name=\"itemQty\" type=\"number\" min=\"1\" [(ngModel)]=\"addItem.itemQty\">\n\t\t\t        </div>\n\t\t          </div>\n\t\t          <div class='col col-2'>\n\t\t          \t<label for=\"itemprice\">Price(Rs.):</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t          <input class=\"form-control\" min=\"1\" type=\"number\" placeholder=\"Price\" name=\"itemPric\" (ngModelChange)=\"calTotAmount()\" [(ngModel)]=\"addItem.itemPrice\">\n\t\t\t        </div>\n\t\t          </div>\n\t\t          <div class='col col-2'>\n\t\t          \t<label for=\"itemdiscount\">Discount(%):</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t          <input class=\"form-control\" min=\"0\" type=\"number\" placeholder=\"Discount\" (ngModelChange)=\"calTotAmount()\" name=\"itemdisc\" [(ngModel)]=\"addItem.itemDiscount\">\n\t\t\t        </div>\n\t\t\t        <!-- <p class=\"itemPercent\">%</p> -->\n\t\t          </div>\n\t\t           <div class='col col-2'>\n\t\t          \t<label for=\"baceprice\">Base Price:</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t          <input class=\"form-control\" [disabled]=\"true\" type=\"number\" placeholder=\"Price\" name=\"itembasePri\" [(ngModel)]=\"addItem.itemBasPrice\">\n\t\t\t        </div>\t       \n\t\t          </div>\n\t\t          <div class='col col-4 selectedTax'>\n\t\t          \t<table class=\"table\" *ngIf=\"selectedTax\">\n\t\t\t\t\t\t\t  <thead>\n\t\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t      <th scope=\"col\">C GST</th>\n\t\t\t\t\t\t\t      <th scope=\"col\">S GST</th>\n\t\t\t\t\t\t\t      <th scope=\"col\">Tax</th>\n\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t\t\t<td>{{addItem.TaxApplied.cgst|number:'1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{addItem.TaxApplied.sgst |number:'1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"tax-radio\">\t\t\n\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\n\t\t\t\t\t\t\t\t\t      <input type=\"radio\" [value]=\"true\" [(ngModel)]=\"taxIncluded\" name=\"tax\" (click)=\"checkTaxInclude('true')\">Include\n\t\t\t\t\t\t\t\t\t    </label>\n\t\t\t\t\t\t\t\t\t    <label class=\"radio-inline\">\n\t\t\t\t\t\t\t\t\t      <input type=\"radio\" [value]=\"false\" [(ngModel)]=\"taxIncluded\" name=\"tax\" (click)=\"checkTaxInclude('false')\">Exclude\n\t\t\t\t\t\t\t\t\t    </label>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t</table>\n\t\t          </div>\n\t\t        </div>\t\t       \n\t\t        <div class=\"row modalFooter\">\n\t\t        \t<div class=\"col col-6\">\t\t        \t\t\n\t\t        \t</div>\n\t\t        \t<div class=\"col col-6\">\t\t        \t\t  \n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"confirmDet(content)\" *ngIf=\"isValidItemNo\">Confirm</button>\t\t\t\n\t\t        \t</div>\n\t\t        </div>\t\t           \n\t\t      </div>\n\t\t    </form>\n\t\t</div>\n\t</div>\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">Confirm Item Details</h3> \n    <button type=\"button\" class=\"close closeButt\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\" title=\"Close\">&times;</span>\n    </button>   \n  </div>\n  <div class=\"modal-body\">\t\t      \n        <div class=\"row selectedTax\">\n        \t<div class=\"col col-6\">\n\t        \t<table class=\"table\">\n\t\t\t\t\t  <thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" colspan=\"2\">Product Details</th>\n\t\t\t\t\t    </tr>\n\t\t\t\t\t  </thead>\n\t\t\t\t\t  <tbody>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t<td>Item #</td>\n\t\t\t\t\t\t\t<td>{{addItem.itemNo}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t\t<td>{{addItem.itemName}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Qty</td>\n\t\t\t\t\t\t\t<td>{{addItem.itemQty}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Price</td>\n\t\t\t\t\t\t\t<td>{{addItem.itemPrice}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Discount</td>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<td *ngIf=\"addItem.itemDiscount==0\">--</td>\n\t\t\t\t\t\t\t<td *ngIf=\"addItem.itemDiscount!=0\">{{addItem.itemDiscount}}%</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Base Price</td>\n\t\t\t\t\t\t\t<td>Rs.{{addItem.itemBasPrice}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>HSN Code</td>\n\t\t\t\t\t\t\t<td>{{addItem.itemHSNCode}}</td>\n\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t   \n\t\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"col col-6\">\n\t        \t<table class=\"table\">\n\t\t\t\t\t  <thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" colspan=\"2\">Tax Details</th>\n\t\t\t\t\t    </tr>\n\t\t\t\t\t  </thead>\n\t\t\t\t\t  <tbody>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t<td>Item Group</td>\n\t\t\t\t\t\t\t<td>{{addItem.TaxApplied.tax_type}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Tax Included</td>\n\t\t\t\t\t\t\t<td>{{addItem.isTaxIncluded}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>SGST</td>\n\t\t\t\t\t\t\t<td>{{addItem.TaxApplied.sgst}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>CGST</td>\n\t\t\t\t\t\t\t<td>{{addItem.TaxApplied.cgst}}</td>\n\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t   \n\t\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n        </div>\n  </div>\n  <div class=\"modal-footer\">  \t  \t  \n\t\t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"saveToServer()\" *ngIf=\"isValidItemNo\">Save</button>\n\t\t<!-- <button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"modal.close()\">Close</button>  -->     \n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/additem/additem.component.ts":
/*!**********************************************!*\
  !*** ./src/app/additem/additem.component.ts ***!
  \**********************************************/
/*! exports provided: AdditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemComponent", function() { return AdditemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.function */ "./src/app/common.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdditemComponent = /** @class */ (function () {
    function AdditemComponent(route, titelService, modalService, httpServ, commFunc) {
        this.route = route;
        this.titelService = titelService;
        this.modalService = modalService;
        this.httpServ = httpServ;
        this.commFunc = commFunc;
        titelService.setTitle("Add Item");
        this.addAllItems = [];
        this.addItem = {};
        this.isValidItemNo = false;
        this.allTaxesArr = [];
        this.selectedTax = "";
        this.addItem.TaxApplied = {};
        this.taxIncluded = true;
        this.getTaxes();
    }
    AdditemComponent.prototype.ngOnInit = function () {
    };
    AdditemComponent.prototype.checkTaxInclude = function (val) {
        this.taxIncluded = (val == "false") ? false : true;
        this.calTotAmount();
    };
    AdditemComponent.prototype.gstApplied = function (gstPer, itemCost) {
        return (itemCost * gstPer) / 100;
    };
    AdditemComponent.prototype.discountApp = function () {
        if ((this.addItem.itemDiscount == "") || (this.addItem.itemDiscount == undefined) || (this.addItem.itemDiscount == 0)) {
            return 0;
        }
        return (this.addItem.itemPrice * this.addItem.itemDiscount) / 100;
    };
    AdditemComponent.prototype.calTotAmount = function () {
        this.addItem.itemBasPrice = 0;
        if (this.addItem.itemQty >= 1) {
            if (!this.taxIncluded)
                this.addItem.itemBasPrice = (this.addItem.itemPrice - this.discountApp()) + this.gstApplied(this.addItem.TaxApplied.cgst + this.addItem.TaxApplied.sgst, this.addItem.itemPrice);
            else
                this.addItem.itemBasPrice = this.addItem.itemPrice - this.discountApp();
            this.addItem.itemBasPrice = parseFloat(this.addItem.itemBasPrice.toFixed(2));
        }
    };
    AdditemComponent.prototype.onTaxChange = function () {
        if (this.selectedTax != "") {
            this.addItem.TaxApplied = {};
            this.addItem.TaxApplied = this.selectedTax;
            this.calTotAmount();
        }
    };
    AdditemComponent.prototype.getTaxes = function () {
        var that = this;
        this.httpServ.getAllTaxes().subscribe(function (data) {
            that.allTaxesArr = data;
        });
    };
    AdditemComponent.prototype.goToDashBor = function () {
        this.route.navigate(["/admin"]);
    };
    AdditemComponent.prototype.onKey = function (event) {
        console.log(event.target.value);
    };
    AdditemComponent.prototype.searchId = function (itemNo) {
        var _this = this;
        if (itemNo == "" || itemNo == undefined) {
            this.commFunc.showSwlInfo("Item number required...");
            return false;
        }
        this.httpServ.isValidProdId(itemNo).subscribe(function (data) {
            if (data == "false") {
                _this.commFunc.showSwlInfo("This id is already registered with other product...");
                _this.addItem.itemNo = "";
            }
            else {
                _this.isValidItemNo = true;
                _this.addItem.itemQty = 1;
                _this.addItem.itemDiscount = 0;
            }
        });
    };
    AdditemComponent.prototype.saveToServer = function () {
        var that = this;
        this.httpServ.storeAllProducts(this.addItem).subscribe(function (data) {
            that.modalService.dismissAll();
            if (data == "success") {
                that.addItem = {};
                that.selectedTax = "";
                that.addItem.TaxApplied = {};
                that.isValidItemNo = false;
                that.commFunc.showSwlInfo("Product details added successfully...");
            }
            else
                that.commFunc.showSwlInfo(data);
        });
    };
    AdditemComponent.prototype.confirmDet = function (content) {
        var _this = this;
        this.calTotAmount();
        this.addItem.isTaxIncluded = this.taxIncluded;
        if (this.addItem.itemName == "" || this.addItem.itemName == undefined) {
            this.commFunc.showSwlInfo("Goods name required...");
            return false;
        }
        if (this.addItem.itemHSNCode == "" || this.addItem.itemHSNCode == undefined) {
            this.commFunc.showSwlInfo("HSN Code required...");
            return false;
        }
        if (this.selectedTax == "" || this.selectedTax == undefined) {
            this.commFunc.showSwlInfo("Select tax group...");
            return false;
        }
        if (this.addItem.itemQty == "" || this.addItem.itemQty == undefined) {
            this.commFunc.showSwlInfo("Please provide qunatity...");
            return false;
        }
        if (this.addItem.itemDiscount != null && this.addItem.itemDiscount < 0) {
            this.commFunc.showSwlInfo("Discount should be atleast 1% or 0 ...");
            return false;
        }
        if (this.addItem.itemPrice == "" || this.addItem.itemPrice == undefined) {
            this.commFunc.showSwlInfo("Please provide Goods Price...");
            return false;
        }
        if ((this.addItem.itemDiscount == "") || (this.addItem.itemDiscount == undefined) || (this.addItem.itemDiscount == 0))
            this.addItem.itemDiscount = 0;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    AdditemComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AdditemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./additem.component.html */ "./src/app/additem/additem.component.html"),
            styles: [__webpack_require__(/*! ./additem.component.css */ "./src/app/additem/additem.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__["HTTPSerService"], _common_function__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"]])
    ], AdditemComponent);
    return AdditemComponent;
}());



/***/ }),

/***/ "./src/app/adduser/adduser.component.css":
/*!***********************************************!*\
  !*** ./src/app/adduser/adduser.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addItemClass{\r\n\ttext-align: right;\r\n\tpadding-bottom: 8px;\r\n}\r\n.addItemClass img{\r\n\tcursor: pointer;\r\n\tpadding-left: 10px;\r\n}\r\n.addUserTitle {\ttext-align: center; font-size: 34px; padding: 13px 0 0 0; }\r\n.userDetRow { padding: 37px; }\r\n.container{ width: 735px; }\r\n.form-control{ padding: 1rem 1rem; font-size: 1.6rem; }\r\n.userDetRow label{ font-size: 1.45rem; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkdXNlci9hZGR1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CO0FBQ0QsZ0JBQWdCLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFO0FBQzNFLGNBQWMsY0FBYyxFQUFFO0FBQzlCLFlBQVksYUFBYSxFQUFFO0FBQzNCLGVBQWUsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUU7QUFDdkQsbUJBQW1CLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYWRkdXNlci9hZGR1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkSXRlbUNsYXNze1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuLmFkZEl0ZW1DbGFzcyBpbWd7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uYWRkVXNlclRpdGxlIHtcdHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzNHB4OyBwYWRkaW5nOiAxM3B4IDAgMCAwOyB9XHJcbi51c2VyRGV0Um93IHsgcGFkZGluZzogMzdweDsgfVxyXG4uY29udGFpbmVyeyB3aWR0aDogNzM1cHg7IH1cclxuLmZvcm0tY29udHJvbHsgcGFkZGluZzogMXJlbSAxcmVtOyBmb250LXNpemU6IDEuNnJlbTsgfVxyXG4udXNlckRldFJvdyBsYWJlbHsgZm9udC1zaXplOiAxLjQ1cmVtOyB9Il19 */"

/***/ }),

/***/ "./src/app/adduser/adduser.component.html":
/*!************************************************!*\
  !*** ./src/app/adduser/adduser.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-billItem100\">\t\t\n\t\t<div class=\"container\">\t\t    \n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t \t<img src=\"./assets/images/back.png\" class=\"backButtonCss\" title=\"Dashboard\" (click)=\"goToDashBor();\">\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project prjHed\"> \n\t\t                    <span class=\"headerDashB\">Add User</span>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t\n\t\t    </div>\n\t\t    <div class=\"row addUserTitle\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t\t<span>User Details</span>\n\t\t    \t</div>\n\t\t    </div>\n\t\t    <div class=\"row userDetRow\">\n\t          <div class='col col-6'>\n\t          \t<label for=\"dateOfBirth\">User Name</label>\n\t\t        <div class=\"input-group\">\n\t\t          <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"itemNo\" [(ngModel)]=\"addUser.userName\">\n\t\t        </div>\n\t          </div>\n\t          <div class='col col-6'>\n\t          \t<label for=\"dateOfBirth\">Password</label>\n\t\t        <div class=\"input-group\">\n\t\t          <input class=\"form-control\" autocomplete=\"off\" placeholder=\"Password\" name=\"itemName\" type=\"text\" [(ngModel)]=\"addUser.passWord\">\n\t\t        </div>\n\t          </div>\n\t        </div>\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12 addItemClass\">\t\t    \t\t\n\t\t    \t\t<img src=\"assets/images/save.png\" title=\"Send to Server\" (click)=\"saveUser()\" >\t\t    \t\t\n\t\t    \t</div>\n\t\t    </div>  \n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/adduser/adduser.component.ts":
/*!**********************************************!*\
  !*** ./src/app/adduser/adduser.component.ts ***!
  \**********************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.function */ "./src/app/common.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(route, titelService, httpServ, commFunc) {
        this.route = route;
        this.titelService = titelService;
        this.httpServ = httpServ;
        this.commFunc = commFunc;
        titelService.setTitle("Add User");
        this.addAllUsers = [];
        this.addUser = {};
    }
    AdduserComponent.prototype.ngOnInit = function () {
    };
    AdduserComponent.prototype.goToDashBor = function () {
        this.route.navigate(["/admin"]);
    };
    AdduserComponent.prototype.saveUser = function () {
        var _this = this;
        var uName = this.addUser.userName;
        var pWord = this.addUser.passWord;
        if ((uName == "" || uName == undefined) || (pWord == "" || pWord == undefined)) {
            this.commFunc.showSwlInfo("User name and Password are required...");
            return false;
        }
        else if (uName.length < 6) {
            this.commFunc.showSwlInfo("User name must contain 6 characters...");
            return false;
        }
        this.httpServ.saveUserDet(this.addUser).subscribe(function (data) {
            if (data == "success") {
                _this.commFunc.showSwlInfo("Successfully added the user...");
                _this.addUser = {};
            }
            else
                _this.commFunc.showSwlInfo("Some error went...");
        });
    };
    AdduserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__(/*! ./adduser.component.html */ "./src/app/adduser/adduser.component.html"),
            styles: [__webpack_require__(/*! ./adduser.component.css */ "./src/app/adduser/adduser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_3__["HTTPSerService"], _common_function__WEBPACK_IMPORTED_MODULE_4__["CommonFunctions"]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./src/app/admin-page/admin-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project .prjHed { text-align: right; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLGtCQUFrQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdCAucHJqSGVkIHsgdGV4dC1hbGlnbjogcmlnaHQ7IH0iXX0= */"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-billItem100\">\t\t\n\t\t<div class=\"container\">\t\t    \n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t\t<img src=\"./assets/images/logout1.png\" class=\"backButtonCss\" title=\"LogOut\" (click)=\"logOut();\">\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project prjHed\">  \n\t\t                    <span class=\"headerDashB\">Dashboard</span>\n\t\t                    \n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t\t       \n\t\t    </div>    \n\t\t    <div class=\"row\">\n\t\t        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project\">\n\t\t\t                <figure class=\"img-responsive\" (click)=\"goTo('addItem');\">\n\t\t\t                    <img src=\"./assets/images/add-item.png\">\n\t\t\t                    <span class=\"actions\">\n\t\t\t                        <span class=\"project-details\">Add Item</span>\n\t\t\t                    </span>\n\t\t\t                </figure>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t\t        \t        \n\t\t        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project\">\n\t\t\t                <figure class=\"img-responsive\" (click)=\"goTo('editItem');\">\n\t\t\t                    <img src=\"./assets/images/edit-item.png\">\n\t\t\t                    <span class=\"actions\">\n\t\t\t                        <span class=\"project-details\">Edit Item</span>\n\t\t\t                    </span>\n\t\t\t                </figure>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project\">\n\t\t\t                <figure class=\"img-responsive\" (click)=\"goTo('infonTax');\">\n\t\t\t                    <img src=\"./assets/images/info.png\">\n\t\t\t                    <span class=\"actions\">\n\t\t\t                        <span class=\"project-details\">Shop Info / Taxes</span>\n\t\t\t                    </span>\n\t\t\t                </figure>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t        \t\t       \n\t\t    </div>\n\t\t    <div class=\"row\">\n\t\t        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n\t\t            <div class=\"box-part text-center\">\n\t\t\t            <div class=\"project\">\n\t\t\t                <figure class=\"img-responsive\" (click)=\"goTo('addUser');\">\n\t\t\t                   <img src=\"./assets/images/add-user.png\">\n\t\t\t                    <span class=\"actions\">\n\t\t\t                        <span class=\"project-details\">Add User</span>\n\t\t\t                    </span>\n\t\t\t                </figure>\n\t\t            \t</div>\n\t\t            </div>\n\t\t        </div>\t\t        \t\t        \n\t\t        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n\t\t            <div class=\"box-part text-center\">\n\t\t\t            <div class=\"project\">\n\t\t\t                <figure class=\"img-responsive\" (click)=\"goTo('editUser');\">\n\t\t\t                    <img src=\"./assets/images/edit-user.png\">\n\t\t\t                    <span class=\"actions\">\n\t\t\t                       <span class=\"project-details\">User's List</span>\n\t\t\t                    </span>\n\t\t\t                </figure>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n\t\t            <div class=\"box-part text-center\">\n\t\t\t            <div class=\"project\">\n\t\t\t                <figure class=\"img-responsive\" (click)=\"goTo('sales');\">\n\t\t\t                   <img src=\"./assets/images/sales.png\">\n\t\t\t                    <span class=\"actions\">\n\t\t\t                        <span class=\"project-details\">Sales</span>\n\t\t\t                    </span>\n\t\t\t                </figure>\n\t\t            \t</div>\n\t\t            </div>\n\t\t        </div>\t\t    \t    \n\t\t    </div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(route, titelService) {
        this.route = route;
        this.titelService = titelService;
        titelService.setTitle("DashBoard");
    }
    AdminPageComponent.prototype.ngOnInit = function () {
    };
    AdminPageComponent.prototype.removeItem = function () {
        localStorage.removeItem("UserDet");
    };
    AdminPageComponent.prototype.logOut = function () {
        localStorage.removeItem("UserDet");
        this.route.navigate(["home"]);
    };
    AdminPageComponent.prototype.goTo = function (pName) {
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
    };
    AdminPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-container {\r\n\tposition: absolute;\r\n    top: 181px;\r\n    background: white;\r\n    width: 93%;\r\n    height: 49%;\r\n    left: 30px;\r\n}\r\n\r\n.custom-modalbox >  mat-dialog-container {\r\n    padding: 0px;\r\n    position: absolute;\r\n    top: 181px;\r\n    background: white;\r\n    width: 93%;\r\n    height: 49%;\r\n    left: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRpYWxvZy1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTgxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBoZWlnaHQ6IDQ5JTtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tbW9kYWxib3ggPiAgbWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxODFweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIGhlaWdodDogNDklO1xyXG4gICAgbGVmdDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n\t<div *ngIf=\"showLoader\" class=\"loading\"></div>\t\r\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.loader */ "./src/app/app.loader.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(route, loader) {
        this.route = route;
        this.loader = loader;
        this.title = 'GarmApp';
        window.onpopstate = function () {
            history.go(1);
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        //localStorage.removeItem("printPage"); 
        //alert(localStorage.getItem("printPage"));    
        if (localStorage.getItem("printPage") == "true") {
            this.route.navigate(["/printPage"]);
        }
        else {
            localStorage.removeItem("UserDet");
            this.route.navigate(["/home"]);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./app.loader.css */ "./src/app/app.loader.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_loader__WEBPACK_IMPORTED_MODULE_2__["AppLoaderSer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.loader.css":
/*!********************************!*\
  !*** ./src/app/app.loader.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tootlbar-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.tootlbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/* Absolute Center Spinner */\r\n\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n/* Transparent Overlay */\r\n\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\r\n}\r\n\r\n/* :not(:required) hides these rules from IE9 and below */\r\n\r\n.loading:not(:required)  {\r\n  /* hide \"loading...\" text */\r\n  /*font: 0/0 a;*/\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 1500ms infinite linear;\r\n  animation: spinner 1500ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.ring {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%); \r\n  width: 150px;\r\n  height: 150px;\r\n  background: transparent;\r\n  border: 3px solid #3c3c3c;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 150px;\r\n  font-family: sans-serif;\r\n  font-size: 20px;\r\n  color: #fff000;\r\n  letter-spacing:4px;\r\n  text-transform: uppercase;\r\n  text-shadow:0 0 10px #fff000;\r\n  box-shadow: 0 0 20px rgba(0,0,0,.5);\r\n}\r\n\r\n.ring:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -3px;\r\n  left: -3px;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 3px solid transparent;\r\n  border-top: 3px solid #fff000;\r\n  border-right: 3px solid #fff000;\r\n  border-radius: 50%;\r\n  -webkit-animation: animateCircle 2s linear infinite;\r\n          animation: animateCircle 2s linear infinite;\r\n}\r\n\r\nspan {\r\n  display: block;\r\n  position: absolute;\r\n  top: calc(50% - 2px);\r\n  left: 50%;\r\n  width: 50%;\r\n  height: 4px;\r\n  background: transparent;\r\n  -webkit-transform-origin:left;\r\n          transform-origin:left;\r\n  -webkit-animation: animate 2s linear infinite;\r\n          animation: animate 2s linear infinite;\r\n}\r\n\r\nspan:before {\r\n  content:'';\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  background-color: #fff000;\r\n  top: -6px;\r\n  right: -8px;\r\n  box-shadow: 0 0 20px #fff000;\r\n}\r\n\r\n@-webkit-keyframes animateCircle\r\n{\r\n  0%\r\n  {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100%\r\n  {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animateCircle\r\n{\r\n  0%\r\n  {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100%\r\n  {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes animate\r\n{\r\n  0%\r\n  {\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n  }\r\n  100%\r\n  {\r\n    -webkit-transform: rotate(405deg);\r\n            transform: rotate(405deg);\r\n  }\r\n}\r\n\r\n@keyframes animate\r\n{\r\n  0%\r\n  {\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n  }\r\n  100%\r\n  {\r\n    -webkit-transform: rotate(405deg);\r\n            transform: rotate(405deg);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmxvYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVELDZCQUE2Qjs7QUFDN0I7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7RUFDVixTQUFTO0NBQ1Y7O0FBRUQseUJBQXlCOztBQUN6QjtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7Q0FDbkM7O0FBRUQsMERBQTBEOztBQUMxRDtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsVUFBVTtDQUNYOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0RBQWtEO0VBSWxELDBDQUEwQztFQUMxQyxxQkFBcUI7RUFFckIseVNBQXlTO0NBQzFTOztBQUVELGVBQWU7O0FBRWY7RUFDRTtJQUNFLGdDQUFnQztJQUloQyx3QkFBd0I7R0FDekI7RUFDRDtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7R0FDM0I7Q0FDRjs7QUFpQ0Q7RUFDRTtJQUNFLGdDQUFnQztJQUloQyx3QkFBd0I7R0FDekI7RUFDRDtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7R0FDM0I7Q0FDRjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLG9DQUFvQztDQUNyQzs7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixvREFBNEM7VUFBNUMsNENBQTRDO0NBQzdDOztBQUNEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsOENBQXNDO1VBQXRDLHNDQUFzQztDQUN2Qzs7QUFDRDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixZQUFZO0VBQ1osNkJBQTZCO0NBQzlCOztBQUVBOztFQUVDOztJQUVFLGdDQUF3QjtZQUF4Qix3QkFBd0I7R0FDekI7RUFDRDs7SUFFRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCO0NBQ0Y7O0FBVkE7O0VBRUM7O0lBRUUsZ0NBQXdCO1lBQXhCLHdCQUF3QjtHQUN6QjtFQUNEOztJQUVFLGtDQUEwQjtZQUExQiwwQkFBMEI7R0FDM0I7Q0FDRjs7QUFDRDs7RUFFRTs7SUFFRSxpQ0FBeUI7WUFBekIseUJBQXlCO0dBQzFCO0VBQ0Q7O0lBRUUsa0NBQTBCO1lBQTFCLDBCQUEwQjtHQUMzQjtDQUNGOztBQVZEOztFQUVFOztJQUVFLGlDQUF5QjtZQUF6Qix5QkFBeUI7R0FDMUI7RUFDRDs7SUFFRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAubG9hZGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b290bGJhci1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi50b290bGJhci1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4vKiBBYnNvbHV0ZSBDZW50ZXIgU3Bpbm5lciAqL1xyXG4ubG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIG92ZXJmbG93OiBzaG93O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIFRyYW5zcGFyZW50IE92ZXJsYXkgKi9cclxuLmxvYWRpbmc6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKSAge1xyXG4gIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gIC8qZm9udDogMC8wIGE7Ki9cclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgbWFyZ2luLXRvcDogLTAuNWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbXMtYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW8tYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNSkgLTEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAtMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjVlbSAwIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAxLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAtMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4ucmluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpOyBcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjM2MzYzNjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZjAwMDtcclxuICBsZXR0ZXItc3BhY2luZzo0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LXNoYWRvdzowIDAgMTBweCAjZmZmMDAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwwLDAsLjUpO1xyXG59XHJcbi5yaW5nOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTNweDtcclxuICBsZWZ0OiAtM3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjAwMDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGFuaW1hdGVDaXJjbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbnNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQ7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5zcGFuOmJlZm9yZSB7XHJcbiAgY29udGVudDonJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMDAwO1xyXG4gIHRvcDogLTZweDtcclxuICByaWdodDogLThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZmZmMDAwO1xyXG59XHJcblxyXG4gQGtleWZyYW1lcyBhbmltYXRlQ2lyY2xlXHJcbntcclxuICAwJVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBhbmltYXRlXHJcbntcclxuICAwJVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgMTAwJVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.loader.ts":
/*!*******************************!*\
  !*** ./src/app/app.loader.ts ***!
  \*******************************/
/*! exports provided: AppLoaderSer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderSer", function() { return AppLoaderSer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppLoaderSer = /** @class */ (function () {
    function AppLoaderSer() {
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    AppLoaderSer.prototype.display = function (value) {
        this.status.next(value);
    };
    AppLoaderSer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppLoaderSer);
    return AppLoaderSer;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.loader */ "./src/app/app.loader.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bill_items_bill_items_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bill-items/bill-items.component */ "./src/app/bill-items/bill-items.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/adduser/adduser.component.ts");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edituser/edituser.component */ "./src/app/edituser/edituser.component.ts");
/* harmony import */ var _additem_additem_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./additem/additem.component */ "./src/app/additem/additem.component.ts");
/* harmony import */ var _edititem_edititem_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edititem/edititem.component */ "./src/app/edititem/edititem.component.ts");
/* harmony import */ var _ser_name__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ser.name */ "./src/app/ser.name.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _sin_tax_sin_tax_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sin-tax/sin-tax.component */ "./src/app/sin-tax/sin-tax.component.ts");
/* harmony import */ var _print_page_print_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./print-page/print-page.component */ "./src/app/print-page/print-page.component.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { AppRoutingModule } from './app-routing.module';

















var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "billIte", component: _bill_items_bill_items_component__WEBPACK_IMPORTED_MODULE_11__["BillItemsComponent"] },
    { path: "printPage", component: _print_page_print_page_component__WEBPACK_IMPORTED_MODULE_21__["PrintPageComponent"] },
    { path: "admin", component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__["AdminPageComponent"] },
    { path: "admin/addUser", component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_13__["AdduserComponent"] },
    { path: "admin/editUser", component: _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_14__["EdituserComponent"] },
    { path: "admin/addItem", component: _additem_additem_component__WEBPACK_IMPORTED_MODULE_15__["AdditemComponent"] },
    { path: "admin/editItem", component: _edititem_edititem_component__WEBPACK_IMPORTED_MODULE_16__["EdititemComponent"] },
    { path: "admin/sales", component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_19__["SalesComponent"] },
    { path: "admin/InfoNTax", component: _sin_tax_sin_tax_component__WEBPACK_IMPORTED_MODULE_20__["SinTaxComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _bill_items_bill_items_component__WEBPACK_IMPORTED_MODULE_11__["BillItemsComponent"],
                _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__["AdminPageComponent"],
                _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_13__["AdduserComponent"],
                _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_14__["EdituserComponent"],
                _additem_additem_component__WEBPACK_IMPORTED_MODULE_15__["AdditemComponent"],
                _edititem_edititem_component__WEBPACK_IMPORTED_MODULE_16__["EdititemComponent"],
                _sales_sales_component__WEBPACK_IMPORTED_MODULE_19__["SalesComponent"],
                _sin_tax_sin_tax_component__WEBPACK_IMPORTED_MODULE_20__["SinTaxComponent"],
                _print_page_print_page_component__WEBPACK_IMPORTED_MODULE_21__["PrintPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], ngx_electron__WEBPACK_IMPORTED_MODULE_22__["NgxElectronModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot()
            ],
            providers: [
                _app_loader__WEBPACK_IMPORTED_MODULE_8__["AppLoaderSer"], _ser_name__WEBPACK_IMPORTED_MODULE_17__["ServerName"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bill-items/bill-items.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bill-items/bill-items.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonCol{ padding-top: 20px;text-align: right; }\r\n.buttonCol button,.buttonCol img{ margin-right: 10px; }\r\n.addItem-class{\tposition: relative; text-align: right; margin-top: 20px; }\r\n.addItem-class img{ padding: 9px; }\r\n.noItems{ text-align: center;\tcolor: red; }\r\nimg,.table .speDiscount,.taxFont label:hover,.taxFont input:hover{ cursor: pointer; }\r\n.addItemClass{ text-align: right; padding-bottom: 8px; }\r\n.addItemClass img{ cursor: pointer; padding-left: 10px; }\r\n.bilItemLastrow { background-color:white;color:black;font-size: 22px }\r\n.bliItemLastrowtd { text-align:right; }\r\n.heading4{ color:red; }\r\n.backButtonCss1{ position: absolute;top: 20px; }\r\n.backButtonCss1 img{ background-color: cyan; }\r\n.backButtonCss1 .dropdown-items{display: none;}\r\n.backButtonCss1:hover .dropdown-items{display: block;}\r\n.backButtonCss1 ul{ z-index: 999; position: absolute; width: 200px;background-color: #f9f9f9;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);}\r\n.backButtonCss1 ul li{ padding: 15px;}\r\n.backButtonCss1 ul li:hover {cursor:pointer; background-color: lightcoral; color: #e7ece3;}\r\n.iconClass { font-size: 16px; background-color: darkcyan; }\r\nbutton:disabled,\r\nbutton[disabled]{ cursor: default;}\r\n.container{ margin-top: 40px; }\r\n.table td,.table th{ padding: 8px; }\r\n.padTop{ padding-top: 13px; }\r\n.rangeWidth{ max-width: 165px;display: contents; }\r\n.taxFont{ font-size: 20px; }\r\n.taxFont label:first-child{ margin-right: 18px }\r\n{  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC1pdGVtcy9iaWxsLWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxrQkFBa0Isa0JBQWtCLEVBQUU7QUFDbEQsa0NBQWtDLG1CQUFtQixFQUFFO0FBQ3ZELGdCQUFnQixtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRTtBQUMxRSxvQkFBb0IsYUFBYSxFQUFFO0FBQ25DLFVBQVUsbUJBQW1CLENBQUMsV0FBVyxFQUFFO0FBQzNDLG1FQUFtRSxnQkFBZ0IsRUFBRTtBQUNyRixlQUFlLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFO0FBQ3hELG1CQUFtQixnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRTtBQUN6RCxrQkFBa0IsdUJBQXVCLFlBQVksZUFBZSxFQUFFO0FBQ3RFLG9CQUFvQixpQkFBaUIsRUFBRTtBQUN2QyxXQUFXLFVBQVUsRUFBRTtBQUN2QixpQkFBaUIsbUJBQW1CLFVBQVUsRUFBRTtBQUNoRCxxQkFBcUIsdUJBQXVCLEVBQUU7QUFDOUMsZ0NBQWdDLGNBQWMsQ0FBQztBQUMvQyxzQ0FBc0MsZUFBZSxDQUFDO0FBQ3RELG9CQUFvQixhQUFhLENBQUMsbUJBQW1CLENBQUMsYUFBYSwwQkFBMEI7SUFDekYsNkNBQTZDLENBQUM7QUFDbEQsdUJBQXVCLGNBQWMsQ0FBQztBQUN0Qyw2QkFBNkIsZUFBZSxDQUFDLDZCQUE2QixDQUFDLGVBQWUsQ0FBQztBQUMzRixhQUFhLGdCQUFnQixDQUFDLDJCQUEyQixFQUFFO0FBQzNEO2tCQUNrQixnQkFBZ0IsQ0FBQztBQUNuQyxZQUFZLGlCQUFpQixFQUFFO0FBQy9CLHFCQUFxQixhQUFhLEVBQUU7QUFDcEMsU0FBUyxrQkFBa0IsRUFBRTtBQUM3QixhQUFhLGlCQUFpQixrQkFBa0IsRUFBRTtBQUNsRCxVQUFVLGdCQUFnQixFQUFFO0FBQzVCLDRCQUE0QixrQkFBa0IsRUFBRTtBQUNoRCxJQUFJIiwiZmlsZSI6InNyYy9hcHAvYmlsbC1pdGVtcy9iaWxsLWl0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uQ29seyBwYWRkaW5nLXRvcDogMjBweDt0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4uYnV0dG9uQ29sIGJ1dHRvbiwuYnV0dG9uQ29sIGltZ3sgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbi5hZGRJdGVtLWNsYXNze1x0cG9zaXRpb246IHJlbGF0aXZlOyB0ZXh0LWFsaWduOiByaWdodDsgbWFyZ2luLXRvcDogMjBweDsgfVxyXG4uYWRkSXRlbS1jbGFzcyBpbWd7IHBhZGRpbmc6IDlweDsgfVxyXG4ubm9JdGVtc3sgdGV4dC1hbGlnbjogY2VudGVyO1x0Y29sb3I6IHJlZDsgfVxyXG5pbWcsLnRhYmxlIC5zcGVEaXNjb3VudCwudGF4Rm9udCBsYWJlbDpob3ZlciwudGF4Rm9udCBpbnB1dDpob3ZlcnsgY3Vyc29yOiBwb2ludGVyOyB9XHJcbi5hZGRJdGVtQ2xhc3N7IHRleHQtYWxpZ246IHJpZ2h0OyBwYWRkaW5nLWJvdHRvbTogOHB4OyB9XHJcbi5hZGRJdGVtQ2xhc3MgaW1neyBjdXJzb3I6IHBvaW50ZXI7IHBhZGRpbmctbGVmdDogMTBweDsgfVxyXG4uYmlsSXRlbUxhc3Ryb3cgeyBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZTogMjJweCB9XHJcbi5ibGlJdGVtTGFzdHJvd3RkIHsgdGV4dC1hbGlnbjpyaWdodDsgfVxyXG4uaGVhZGluZzR7IGNvbG9yOnJlZDsgfVxyXG4uYmFja0J1dHRvbkNzczF7IHBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDIwcHg7IH1cclxuLmJhY2tCdXR0b25Dc3MxIGltZ3sgYmFja2dyb3VuZC1jb2xvcjogY3lhbjsgfVxyXG4uYmFja0J1dHRvbkNzczEgLmRyb3Bkb3duLWl0ZW1ze2Rpc3BsYXk6IG5vbmU7fVxyXG4uYmFja0J1dHRvbkNzczE6aG92ZXIgLmRyb3Bkb3duLWl0ZW1ze2Rpc3BsYXk6IGJsb2NrO31cclxuLmJhY2tCdXR0b25Dc3MxIHVseyB6LWluZGV4OiA5OTk7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDIwMHB4O2JhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTt9XHJcbi5iYWNrQnV0dG9uQ3NzMSB1bCBsaXsgcGFkZGluZzogMTVweDt9XHJcbi5iYWNrQnV0dG9uQ3NzMSB1bCBsaTpob3ZlciB7Y3Vyc29yOnBvaW50ZXI7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7IGNvbG9yOiAjZTdlY2UzO31cclxuLmljb25DbGFzcyB7IGZvbnQtc2l6ZTogMTZweDsgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47IH1cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRdeyBjdXJzb3I6IGRlZmF1bHQ7fVxyXG4uY29udGFpbmVyeyBtYXJnaW4tdG9wOiA0MHB4OyB9XHJcbi50YWJsZSB0ZCwudGFibGUgdGh7IHBhZGRpbmc6IDhweDsgfVxyXG4ucGFkVG9weyBwYWRkaW5nLXRvcDogMTNweDsgfVxyXG4ucmFuZ2VXaWR0aHsgbWF4LXdpZHRoOiAxNjVweDtkaXNwbGF5OiBjb250ZW50czsgfVxyXG4udGF4Rm9udHsgZm9udC1zaXplOiAyMHB4OyB9XHJcbi50YXhGb250IGxhYmVsOmZpcnN0LWNoaWxkeyBtYXJnaW4tcmlnaHQ6IDE4cHggfVxyXG57ICB9Il19 */"

/***/ }),

/***/ "./src/app/bill-items/bill-items.component.html":
/*!******************************************************!*\
  !*** ./src/app/bill-items/bill-items.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-billItem100\">\n\t\t<div class=\"container\">\t\t    \n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t\t<div class=\"backButtonCss1\">\n\t\t    \t\t\t<img src=\"./assets/images/list1.png\">\n\t\t    \t\t\t<ul class=\"dropdown-items\">\t\t\n\t\t    \t\t\t\t<li (click)=\"logOut()\">Log Out</li>\n\t\t    \t\t\t\t<li (click)=\"cPWord(cpword)\">Change Password</li>\n\t\t    \t\t\t\t<li *ngIf=\"!billItems.length\"  (click)=\"showOldStock(content2)\">Former Stock</li>\n\t\t    \t\t\t</ul>\t\t    \t\t\t\n\t\t    \t\t</div>\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project prjHed\">  \n\t\t                    <span class=\"headerDashB\">Bill Items</span>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t\n\t\t    </div>\n\t\t    <div>\n\t\t\t\t<table class=\"table\" *ngIf=\"billItems.length&&!customerInfo\" >\n\t\t\t\t  <thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">S.No</th>\n\t\t\t\t      <th scope=\"col\">Item #</th>\n\t\t\t\t      <th scope=\"col\">Name</th>\t\t\t\t      \n\t\t\t\t      <th scope=\"col\">Qty</th>\n\t\t\t\t      <th scope=\"col\">Price</th>\n\t\t\t\t      <th scope=\"col\">Amount</th>\n\t\t\t\t      <th scope=\"col\">Discount</th>\n\t\t\t\t      <th scope=\"col\">Taxable Value</th>\n\t\t\t\t      <th scope=\"col\">All Taxes</th>\n\t\t\t\t      <th scope=\"col\">Total</th>\t\t\t\t      \n\t\t\t\t    </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t    <tr *ngFor=\"let item of billItems;index as i\" [ngClass]=\"{'table-warning':i%2==0}\" (click)=\"open(content,item)\" class=\"hover-row\">\n\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t<td>{{item.P_ID}}</td>\n\t\t\t\t\t\t<td>{{item.P_Name}}</td>\t\t\t\t\t\t\n\t\t\t\t\t\t<td>{{item.Req_P_Qty}}</td>\t\t\t\t\t\t\n\t\t\t\t\t\t<td>{{item.P_Price |number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td>{{item.Amount |number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td>{{item.disAmount|number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td>{{item.taxableVal |number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td>{{item.cgstAmount+item.sgstAmount|number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td>{{item.itemTotAmt |number :'0.2-2'}}</td>\t\t\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t      <td class=\"bliItemLastrowtd\" scope=\"col\" colspan=\"9\">Total (Rs.) :</td>\n\t\t\t\t      <td scope=\"col\">{{billAmount |number :'0.2-2'}}</td>\t      \n\t\t\t\t    </tr>\t\t\t\t   \n\t\t\t\t    <tr class=\"bilItemLastrow hover-row\">\n\t\t\t\t      <td class=\"bliItemLastrowtd\" scope=\"col\" colspan=\"10\" (click)=\"fnSpecialDisco()\">Special Discount</td>\t      \n\t\t\t\t    </tr>\t\t\t   \n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col col-6\">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class='col col-6' *ngIf=\"!customerInfo&&hasSpecialDis\">\n\t          \t<table class=\"table\">\n\t\t\t\t  <thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Amount</th>\n\t\t\t\t      <th scope=\"col\">Special Discount</th>\n\t\t\t\t      <th scope=\"col\">Final Amount</th>\n\t\t\t\t    </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody>\n\t\t\t\t\t<tr class=\"table-warning \">\n\t\t\t\t      <td scope=\"col\">{{totalBillItemsInfo.totItemsAmount |number :'0.2-2'}}</td>\n\t\t\t\t      <td scope=\"col\" class=\"rangeWidth\"><input type=\"range\" min=\"0\" max=\"5\" value=\"1\" class=\"slider\" name=\"specialDisVal\" (change)=\"calSpecialDisValue()\"  [(ngModel)]=\"totalBillItemsInfo.specialDisVal\">&nbsp;&nbsp;{{totalBillItemsInfo.specialDisVal}}%</td>\n\t\t\t\t      <td scope=\"col\">{{totalBillItemsInfo.specialDisAmount|number :'0.2-2'}}</td>\t      \n\t\t\t\t    </tr>\t\t\t\t   \t\t\t   \n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t          </div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"!billItems.length\">\n\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t<h3>No items added....</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"customerInfo\">\n\t          <div class='col col-2'>\n\t          \t<label for=\"custName\">Customer Name:</label>\n\t\t        <div class=\"input-group\">\n\t\t            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" placeholder=\"Customer Name\" name=\"custName\" [(ngModel)]=\"custDet.custName\">\n\t\t        </div>\n\t          </div>\n\t          <div class='col col-3'>\n\t          \t<label for=\"custMobile\">Mobile #:</label>\n\t\t        <div class=\"input-group\">\n\t\t          <input class=\"form-control\" type=\"number\" maxlength=\"10\" placeholder=\"Mobile Number\" name=\"custMobile\" [(ngModel)]=\"custDet.custMobile\">\n\t\t        </div>\n\t          </div>\n\t          <div class='col col-7'>\n\t          \t<table class=\"table\">\n\t\t\t\t  <thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Bill Amount</th>\n\t\t\t\t      <th scope=\"col\">Round Amount</th>\n\t\t\t\t      <th scope=\"col\">Final Amount</th>\n\t\t\t\t    </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody>\n\t\t\t\t\t<tr class=\"table-warning\">\n\t\t\t\t      <td scope=\"col\">{{totalBillItemsInfo.specialDisAmount|number :'0.2-2'}}</td>\n\t\t\t\t      <td scope=\"col\" class=\"rangeWidth\">\n\t\t\t      \t\t<input type=\"range\" min=\"0\" max=\"10\" value=\"1\" class=\"slider\" name=\"roundVal\" (change)=\"calRoundValue()\" [(ngModel)]=\"totalBillItemsInfo.roundVal\">&nbsp;&nbsp;Rs.{{(totalBillItemsInfo.roundVal+decVal) |number :'0.2-2'}}</td>\n\t\t\t\t      <td scope=\"col\">{{totalBillItemsInfo.roundAmount|number :'0.2-2'}}</td>\t      \n\t\t\t\t    </tr>\t\t\t\t   \t\t\t   \n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t          </div>\n\t        </div>\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12 addItemClass\">\n\t\t    \t\t<img src=\"assets/images/print-out.png\" title=\"Print Bill\" (click)=\"printBill()\" *ngIf=\"customerInfo\">\n\t\t    \t\t<img src=\"assets/images/go-back.png\" title=\"Back\" (click)=\"showBillItems()\" *ngIf=\"customerInfo\">\n\t\t    \t\t<img src=\"assets/images/continue.jpg\" title=\"Continue\" (click)=\"fillExtradet()\" *ngIf=\"!customerInfo\">\n\t\t   \t\t\t<img src=\"assets/images/additem.png\" title=\"Add item\" (click)=\"open(content)\" *ngIf=\"showAddSym\">\n\t\t    \t</div>\n\t\t    </div>    \n\t\t</div>\n\t</div>\t\t\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">{{modalTit}} Item</h3>\n    <button type=\"button\" class=\"close closeButt\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\" title=\"Close\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n       <div class=\"row\">\n          <div class='col col-4'>\n          \t<label for=\"itemNo\">Item #:</label>\n\t        <div class=\"input-group\">\n\t            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" placeholder=\"Item Number\" name=\"number\" [disabled]=\"itemDetFound\" [(ngModel)]=\"addItem.P_ID\">\n\t            <span class=\"input-group-btn\">\n\t\t\t\t\t<button [disabled]=\"itemDetFound\" (click)=\"searchId(addItem.P_ID)\" title=\"Search for Id\" class=\"btn btn-default iconClass\" type=\"submit\">\n\t\t\t\t\t        <i class=\"fa fa-search\"></i>\n\t\t\t\t\t</button>\n\t\t\t    </span>\n\t        </div>\n          </div>\n          <div class='col col-4'>\n          \t<label for=\"itemname\">Item Name:</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" [disabled]=\"true\" placeholder=\"Item Name\" name=\"name\" [(ngModel)]=\"addItem.P_Name\">\n\t        </div>\n          </div>\n          <div class='col col-2'>\n          \t<label for=\"price\">Price(Rs.):</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" [(ngModel)]=\"addItem.P_Price\" [disabled]=\"true\" placeholder=\"Price\" name=\"price\">\n\t        </div>\n          </div>\n          <div class='col col-2'>\n          \t<label for=\"baseprice\">B Price(Rs.):</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" [(ngModel)]=\"addItem.P_basePrice\" [disabled]=\"true\" placeholder=\"B Price\" name=\"baseprice\">\n\t        </div>\n          </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n         <div class='col col-2'>\n          \t<label for=\"availableitemqty\">Avl Qty:</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"addItem.P_Qty\" [disabled]=\"true\" placeholder=\"Qty\" name=\"availableitemqty\">\n\t        </div>\n          </div>          \n          <div class='col col-2'>\n          \t<label for=\"itemqty\">Req Qty:</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"addItem.Req_P_Qty\" [disabled]=\"!itemDetFound\" placeholder=\"Qty\" name=\"itemqty\">\n\t        </div>\n          </div>\n          <div class=\"col col-4\" *ngIf=\"itemDetFound\">\n          \t<label for=\"tax\">Tax:</label>\n\t        <div class=\"input-group taxFont\">\n\t          \t<label class=\"radio-inline\">\n\t\t\t       <input type=\"radio\" [value]=\"true\" [(ngModel)]=\"taxIncluded\" name=\"tax\" (click)=\"checkTaxInclude('true')\">Include\n\t\t\t    </label>\n\t\t\t    <label class=\"radio-inline\">\n\t\t\t      <input type=\"radio\" [value]=\"false\" [(ngModel)]=\"taxIncluded\" name=\"tax\" (click)=\"checkTaxInclude('false')\">Exclude\n\t\t\t    </label>\n\t\t    </div>\n          </div>\n          <div class='col col-4 buttonCol'>\n          \t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"addItemToBill()\" *ngIf=\"itemDetFound\">{{modalTit}}</button>\n          \t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" *ngIf=\"addItem.isDelete\" (click)=\"deleteItemFromBill(addItem.P_ID)\">Delete</button>\n          </div>\n        </div>       \n      </div>\n    </form>\n  </div>\n</ng-template>\n<ng-template #cpword let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">Change Password</h3>\n    <button type=\"button\" class=\"close closeButt\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\" title=\"Close\">&times;</span>\n    </button>   \n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n       <div class=\"row\">\n          <div class='col s6'>\n          \t<label for=\"itemNo\">Old Password :</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"password\" class=\"form-control\" placeholder=\"enter Old Password\" name=\"number\" [(ngModel)]=\"updPassWord.oldPwd\">\n\t        </div>\n          </div>\n          <div class='col s6'>\n          \t<label for=\"itemname\">New Password:</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"password\" class=\"form-control\"placeholder=\"Item Name\" name=\"name\" [(ngModel)]=\"updPassWord.newPwd\" placeholder=\"Enter New Password\">\n\t        </div>\n          </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n         <div class='col col-6'>\n          \t<label for=\"itemqty\">Confirm new Password</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" type=\"password\" [(ngModel)]=\"updPassWord.cnewPwd\" placeholder=\"Confirm Passwrod\" name=\"qty\">\n\t        </div>\n          </div>         \n          <div class='col col-6 buttonCol'>          \t\n          \t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"fnUpdPassWord()\">Update</button>          \t\n       \t\t<!-- <button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"modal.close()\">Close</button> -->\n          </div>\n        </div>       \n      </div>\n    </form>\n  </div>\n</ng-template>\n<ng-template #content2 let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">Former Items</h3>\n    <button type=\"button\" class=\"close closeButt\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\" title=\"Close\">&times;</span>\n    </button>   \n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n       <div class=\"row\">\n       \t\t<div class=\"col col-12\">\n\t        \t<table class=\"table\">\n\t\t\t\t\t  <thead>\t\t\t\t\t   \n\t\t\t\t\t    <tr>\n\t\t\t\t\t    \t<th scope=\"col\" >S.No</th>\n\t\t\t\t\t\t    <th scope=\"col\" >Goods #</th>\n\t\t\t\t\t\t    <th scope=\"col\" >Goods Name</th>\n\t\t\t\t\t\t    <th scope=\"col\">Available Qty</th>\n\t\t\t\t\t    </tr>\t\t\t\t\t   \n\t\t\t\t\t  </thead>\n\t\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t\t    <tr *ngFor=\"let item of oldStockItems;index as i\" [ngClass]=\"{'table-warning':i%2==0}\" >\n\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t<td>{{item.P_ID}}</td>\n\t\t\t\t\t\t\t<td>{{item.P_Name}}</td>\n\t\t\t\t\t\t\t<td>{{item.P_Qty}}</td>\n\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t   \n\t\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n       </div>\n      </div>   \n    </form>\n  </div>  \n</ng-template>"

/***/ }),

/***/ "./src/app/bill-items/bill-items.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bill-items/bill-items.component.ts ***!
  \****************************************************/
/*! exports provided: BillItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillItemsComponent", function() { return BillItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.function */ "./src/app/common.function.ts");
/* harmony import */ var _ser_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ser.name */ "./src/app/ser.name.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BillItemsComponent = /** @class */ (function () {
    function BillItemsComponent(titelService, modalService, router, httpServ, commFunc, serName, ipcServ) {
        this.titelService = titelService;
        this.modalService = modalService;
        this.router = router;
        this.httpServ = httpServ;
        this.commFunc = commFunc;
        this.serName = serName;
        this.ipcServ = ipcServ;
        titelService.setTitle("Bill Items");
        this.initializeValues();
        this.shopInfo = {};
        this.getShopInfo();
    }
    BillItemsComponent.prototype.ngOnInit = function () {
    };
    //initialize the component values.....
    BillItemsComponent.prototype.initializeValues = function () {
        this.billItems = [];
        this.addItem = {};
        this.updPassWord = {};
        this.customerInfo = false;
        this.totalBillItemsInfo = {};
        this.totalBillItemsInfo.roundVal = 0;
        this.totalBillItemsInfo.specialDisVal = 0;
        this.hasSpecialDis = false;
        this.custDet = {};
        this.custDet.custName = "";
        this.showAddSym = true;
        this.billId = "";
        this.taxIncluded = true;
        this.hasBillId = false;
    };
    BillItemsComponent.prototype.getShopInfo = function () {
        var that = this;
        that.httpServ.getShopInfo().subscribe(function (shopInfodata) {
            that.shopInfo = shopInfodata[0];
        });
    };
    //to open a particular modal.....
    BillItemsComponent.prototype.open = function (content, item) {
        var _this = this;
        if (item == undefined) {
            this.modalTit = "Add";
            this.addItem = {};
            this.addItem.isDelete = false;
            this.itemDetFound = false;
        }
        else {
            this.modalTit = "Modify";
            this.addItem = JSON.parse(JSON.stringify(item));
            this.itemDetFound = item.itemDetFound;
            this.taxIncluded = item.P_taxIncluded == 1 ? true : false;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    //excecutes when a modal closes....
    BillItemsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    BillItemsComponent.prototype.deleteItemFromBill = function (itemid) {
        var _this = this;
        var that = this;
        this.modalService.dismissAll();
        this.commFunc.showDelSwl().then(function (success) {
            that.billItems.forEach(function (item, idx, object) {
                if (item.P_ID == itemid) {
                    object.splice(idx, 1);
                }
            });
            that.findTotAmount();
            _this.commFunc.showDelSuccSwal("Deleted the item from the bill..");
        }, function (fail) { });
    };
    //when a item is added to the bill....
    BillItemsComponent.prototype.addItemToBill = function () {
        var _this = this;
        if (this.addItem.Req_P_Qty <= 0) {
            this.commFunc.showSwlInfo("Quantity should be atleast 1");
            return false;
        }
        if (this.addItem.Req_P_Qty > this.addItem.P_Qty) {
            this.commFunc.showSwlInfo("For this goods only " + this.addItem.P_Qty + " quantity are available...");
            return false;
        }
        if (!this.addItem.itemDetFound) {
            this.addItem.isDelete = true;
            this.addItem.itemDetFound = true;
            this.addItem.P_taxIncluded = this.taxIncluded ? 1 : 0;
            var existingItem_1 = false;
            this.billItems.forEach(function (item, idx) {
                if (item.P_ID == _this.addItem.P_ID) {
                    existingItem_1 = true;
                    item.Req_P_Qty += _this.addItem.Req_P_Qty;
                }
            });
            if (!existingItem_1)
                this.billItems.push(this.addItem);
            this.addItem = {};
            this.addItem.isDelete = false;
            this.itemDetFound = false;
        }
        else {
            this.billItems.forEach(function (item, idx) {
                if (item.P_ID == _this.addItem.P_ID) {
                    item.Req_P_Qty = _this.addItem.Req_P_Qty;
                    item.P_taxIncluded = _this.taxIncluded ? 1 : 0;
                }
            });
            this.modalService.dismissAll();
        }
        this.taxIncluded = true;
        this.findTotAmount();
    };
    //caliculate the particulat item all amounts...
    BillItemsComponent.prototype.findTotAmount = function () {
        var _this = this;
        this.billAmount = 0;
        this.billItems.forEach(function (item) {
            item.Amount = item.Req_P_Qty * item.P_Price;
            item.disAmount = _this.commFunc.convertToFloat((item.P_discount * item.Amount) / 100);
            item.itemTotAmt = item.Amount - item.disAmount;
            var totItemTax = item.cgstAmount + item.sgstAmount;
            if (item.P_taxIncluded == 1) {
                item.taxSymbol = "+";
                var taxableAmount = _this.commFunc.convertToFloat(item.P_basePrice * 100 / (item.cgst + item.sgst + 100));
                item.taxableVal = taxableAmount * item.Req_P_Qty;
                item.cgstAmount = _this.commFunc.convertToFloat(((taxableAmount * item.cgst) / 100) * item.Req_P_Qty);
                item.sgstAmount = _this.commFunc.convertToFloat(((taxableAmount * item.sgst) / 100) * item.Req_P_Qty);
            }
            else {
                item.taxSymbol = "-";
                item.itemTotAmt = item.Amount - item.disAmount + totItemTax;
                item.taxableVal = _this.commFunc.convertToFloat(item.Amount - item.disAmount);
            }
            _this.billAmount += item.itemTotAmt;
        });
        console.log(this.billItems);
    };
    //to caliculate total amounts of the bill....
    BillItemsComponent.prototype.calAllAmounts = function (billId) {
        this.totalBillItemsInfo.totItemQty = 0;
        this.totalBillItemsInfo.totItemDisAmount = 0;
        this.totalBillItemsInfo.totTaxableAmount = 0;
        this.totalBillItemsInfo.totCgstAmount = 0;
        this.totalBillItemsInfo.totSgstAmount = 0;
        this.totalBillItemsInfo.totItemsAmount = 0;
        this.totalBillItemsInfo.totAmount = 0;
        var totItemTax;
        for (var i = 0; i < this.billItems.length; i++) {
            this.totalBillItemsInfo.totItemQty += this.billItems[i].Req_P_Qty;
            this.totalBillItemsInfo.totAmount += this.billItems[i].Amount;
            this.totalBillItemsInfo.totItemsAmount += this.billItems[i].itemTotAmt;
            this.totalBillItemsInfo.totItemDisAmount += this.billItems[i].disAmount;
            this.totalBillItemsInfo.totTaxableAmount += this.billItems[i].taxableVal;
            if (this.billItems[i].P_taxIncluded == 1) {
                this.totalBillItemsInfo.totCgstAmount += this.billItems[i].cgstAmount;
                this.totalBillItemsInfo.totSgstAmount += this.billItems[i].sgstAmount;
            }
        }
        this.totalBillItemsInfo.billdate = this.commFunc.getTodaysDate();
        this.totalBillItemsInfo.billId = billId;
        this.totalBillItemsInfo.custDet = this.custDet;
        this.totalBillItemsInfo.hasSpecialDis = this.hasSpecialDis;
        this.totalBillItemsInfo.roundValue = this.totalBillItemsInfo.roundVal + this.decVal;
        this.totalBillItemsInfo.totItemsAmount = this.commFunc.convertToFloat(this.totalBillItemsInfo.totItemsAmount);
        var userId = localStorage.getItem("UserDet").split("/")[0];
        this.totalBillItemsInfo.empId = userId;
    };
    //when if the user click on special discount...
    BillItemsComponent.prototype.fnSpecialDisco = function () {
        this.hasSpecialDis = !this.hasSpecialDis;
        this.showAddSym = !this.showAddSym;
        this.calAmounts();
    };
    //after selecting particular discount percentage....
    BillItemsComponent.prototype.calSpecialDisValue = function () {
        this.totalBillItemsInfo.specialDisAmount = this.totalBillItemsInfo.totItemsAmount - ((this.totalBillItemsInfo.totItemsAmount * this.totalBillItemsInfo.specialDisVal) / 100);
        this.totalBillItemsInfo.specialDisAmount = this.commFunc.convertToFloat(this.totalBillItemsInfo.specialDisAmount);
    };
    BillItemsComponent.prototype.calAmounts = function () {
        this.calAllAmounts();
        this.totalBillItemsInfo.specialDisVal = 0;
        this.calSpecialDisValue();
    };
    //to print the bill...
    BillItemsComponent.prototype.printBill = function () {
        var that = this;
        if (!this.commFunc.checkForEmptyValues(this.custDet)) {
            this.commFunc.showSwlInfo("Please provide customer details....");
            return false;
        }
        if (this.custDet.custMobile.toString().length != 10) {
            this.commFunc.showSwlInfo("Mobile number should be 10 digits...");
            return false;
        }
        that.calAllAmounts(this.billId);
        if (this.totalBillItemsInfo.specialDisVal == 0) {
            this.totalBillItemsInfo.hasSpecialDis = false;
        }
        this.totalBillItemsInfo.shopInfo = this.shopInfo;
        that.httpServ.generatePDF({ "totBillInfo": this.totalBillItemsInfo, "billItems": this.billItems }).subscribe(function (data) {
            if (data == "success") {
                that.initializeValues();
            }
            else
                that.commFunc.showSwlInfo(data);
        });
        localStorage.setItem("billInfo", JSON.stringify({ "totBillInfo": this.totalBillItemsInfo, "billItems": this.billItems }));
        localStorage.setItem("printPage", "true");
        //for development purpose
        //window.open("http://localhost:4200/","_blank");
        //for deployment purpose --web
        window.open(this.serName.server_name, "_blank");
        //for deployment purpose --desktop
        //that.ipcServ.ipcRenderer.send('openPrintBill');
    };
    BillItemsComponent.prototype.fillExtradet = function () {
        if (this.billItems.length == 0) {
            this.commFunc.showSwlInfo("Add atleast one item to continue...");
            return false;
        }
        else {
            if (!this.hasSpecialDis) {
                this.calAmounts();
                this.showAddSym = false;
            }
            this.decVal = this.totalBillItemsInfo.specialDisAmount - parseInt(this.totalBillItemsInfo.specialDisAmount);
            this.decVal = parseFloat((this.decVal).toFixed(2));
            this.totalBillItemsInfo.roundVal = 0;
            this.calRoundValue();
            this.customerInfo = true;
        }
        if (!this.hasBillId)
            this.getBillId();
    };
    BillItemsComponent.prototype.getBillId = function () {
        var _this = this;
        this.httpServ.getBillId().subscribe(function (data) {
            console.log(data);
            _this.billId = data;
            _this.hasBillId = true;
        });
    };
    BillItemsComponent.prototype.checkTaxInclude = function (val) {
        this.taxIncluded = (val == "false") ? false : true;
        var baseAmount = this.calBasePrice();
        var taxAmount = this.gstApplied();
        if (this.taxIncluded) {
            this.addItem.P_basePrice = baseAmount;
        }
        else
            this.addItem.P_basePrice = baseAmount + taxAmount;
        this.addItem.P_basePrice = this.commFunc.convertToFloat(this.addItem.P_basePrice);
    };
    BillItemsComponent.prototype.calBasePrice = function () {
        return this.addItem.P_Price - this.discountApp();
    };
    BillItemsComponent.prototype.gstApplied = function () {
        return (this.addItem.P_Price * (this.addItem.cgst + this.addItem.sgst)) / 100;
    };
    BillItemsComponent.prototype.discountApp = function () {
        if (this.addItem.P_discount == 0) {
            return 0;
        }
        return (this.addItem.P_Price * this.addItem.P_discount) / 100;
    };
    BillItemsComponent.prototype.showBillItems = function () {
        this.customerInfo = false;
        if (!this.hasSpecialDis)
            this.showAddSym = true;
    };
    BillItemsComponent.prototype.calRoundValue = function () {
        this.totalBillItemsInfo.roundAmount = this.totalBillItemsInfo.specialDisAmount - (this.totalBillItemsInfo.roundVal + this.decVal);
    };
    BillItemsComponent.prototype.logOut = function () {
        localStorage.removeItem("UserDet");
        this.router.navigate(["/home"]);
    };
    BillItemsComponent.prototype.searchId = function (itemId) {
        var _this = this;
        this.httpServ.findProdDet(itemId).subscribe(function (data) {
            if (data[0] == undefined) {
                _this.commFunc.showSwlInfo("Product details not found....");
                _this.addItem.P_ID = "";
            }
            else {
                _this.addItem = JSON.parse(JSON.stringify(data[0]));
                _this.addItem.Req_P_Qty = 1;
                if (_this.addItem.P_taxIncluded == 1)
                    _this.taxIncluded = true;
                else
                    _this.taxIncluded = false;
                _this.itemDetFound = true;
            }
        });
    };
    BillItemsComponent.prototype.cPWord = function (cpword) {
        var _this = this;
        this.modalService.open(cpword, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    BillItemsComponent.prototype.fnUpdPassWord = function () {
        if ((this.updPassWord.oldPwd == "") || (this.updPassWord.oldPwd == undefined) || (this.updPassWord.newPwd == "") || (this.updPassWord.newPwd == undefined) || (this.updPassWord.cnewPwd == "") || (this.updPassWord.cnewPwd == undefined)) {
            this.commFunc.showSwlInfo("All fields are required...");
            return false;
        }
        if (this.updPassWord.newPwd != this.updPassWord.cnewPwd) {
            this.commFunc.showSwlInfo("New Password / Confirm new Password should be same...");
            return false;
        }
        this.updPassWord.userId = localStorage.getItem("UserDet").split("/")[0];
        //this.updPassWord.userId="suresh0001";    
        var that = this;
        this.httpServ.updatePassword(this.updPassWord).subscribe(function (data) {
            that.modalService.dismissAll();
            if (data == "true") {
                that.commFunc.showSwlInfo("Password updated successfully...");
                that.updPassWord = {};
            }
            else {
                that.commFunc.showSwlInfo(data);
            }
        });
    };
    BillItemsComponent.prototype.showOldStock = function (content) {
        var _this = this;
        var that = this;
        this.httpServ.getOldStockDetails().subscribe(function (data) {
            if (data.length == 0) {
                _this.commFunc.showSwlInfo("No old stock found....");
                return false;
            }
            else {
                that.oldStockItems = data;
                that.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
                    that.closeResult = "Closed with: " + result;
                }, function (reason) {
                    that.closeResult = "Dismissed " + that.getDismissReason(reason);
                });
            }
        });
    };
    BillItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngb-basic-model',
            template: __webpack_require__(/*! ./bill-items.component.html */ "./src/app/bill-items/bill-items.component.html"),
            styles: [__webpack_require__(/*! ./bill-items.component.css */ "./src/app/bill-items/bill-items.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__["HTTPSerService"], _common_function__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"], _ser_name__WEBPACK_IMPORTED_MODULE_6__["ServerName"], ngx_electron__WEBPACK_IMPORTED_MODULE_7__["ElectronService"]])
    ], BillItemsComponent);
    return BillItemsComponent;
}());



/***/ }),

/***/ "./src/app/common.function.ts":
/*!************************************!*\
  !*** ./src/app/common.function.ts ***!
  \************************************/
/*! exports provided: CommonFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFunctions", function() { return CommonFunctions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ser_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ser.name */ "./src/app/ser.name.ts");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpServer.service */ "./src/app/HttpServer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonFunctions = /** @class */ (function () {
    function CommonFunctions(serName, httpServ) {
        this.serName = serName;
        this.httpServ = httpServ;
    }
    CommonFunctions.prototype.isValidDecimalRNum = function (values) {
        var result = true;
        for (var i = 0; i < values.length; i++) {
            var regExp = void 0;
            try {
                regExp = (values[i]).toString().indexOf(".") == -1 ? /^[0-9]$/ : /^[0-9].[0-9]{1,2}$/;
            }
            catch (e) {
                return false;
            }
            if (!regExp.test(values[i])) {
                result = false;
                break;
            }
        }
        return result;
    };
    CommonFunctions.prototype.checkForEmptyValues = function (obj) {
        var result = true;
        if (!(Object.keys(obj).length === 0 && obj.constructor === Object)) {
            var allKeys = Object.keys(obj);
            for (var i = 0; i < allKeys.length; i++) {
                if ((allKeys[i] == "P_discount")) {
                    if (obj[allKeys[i]] < 0) {
                        result = false;
                        break;
                    }
                }
                else if ((obj[allKeys[i]] == "") || (obj[allKeys[i]] == undefined)) {
                    result = false;
                    break;
                }
            }
        }
        else
            result = false;
        return result;
    };
    CommonFunctions.prototype.validateDates = function (d1, d2) {
        if (+(new Date(d1.year, d1.month, d1.day)) == (+(new Date(d2.year, d2.month, d2.day))))
            return true;
        else
            return (new Date(d1.year, d1.month, d1.day)) < ((new Date(d2.year, d2.month, d2.day)));
    };
    CommonFunctions.prototype.getTodaysDate = function () {
        var todayDate = new Date();
        return (todayDate.getDate() + "/" + (todayDate.getMonth() + 1) + "/" + todayDate.getFullYear());
    };
    CommonFunctions.prototype.convertToFloat = function (cost) {
        return parseFloat(parseFloat(cost).toFixed(2));
    };
    CommonFunctions.prototype.dateFormatForSql = function (insDate) {
        if (!(Object.keys(insDate).length === 0)) {
            var month = insDate.month < 10 ? "0" + insDate.month : insDate.month;
            var day = insDate.day < 10 ? "0" + insDate.day : insDate.day;
            return insDate.year + "-" + month + "-" + day;
        }
    };
    CommonFunctions.prototype.salesRepQuery = function (queryInfoDet, queryByDt, queryByEmp) {
        var queryInfo = {};
        queryInfo.fromDate = this.dateFormatForSql(queryInfoDet.selectedFromDate);
        queryInfo.toDate = this.dateFormatForSql(queryInfoDet.selectedToDate);
        queryInfo.queryByDt = queryByDt;
        queryInfo.queryByEmp = queryByEmp;
        queryInfo.empId = queryInfoDet.selectedEmp.Emp_Id;
        return queryInfo;
    };
    CommonFunctions.prototype.showSwlInfo = function (infoText) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({ title: "Info", text: infoText, allowOutsideClick: false });
    };
    CommonFunctions.prototype.showDelSwl = function (textInfo) {
        textInfo == undefined ? "You want to remove this from the list..." : textInfo;
        return new Promise(function (resolve, reject) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'Are you sure?',
                text: textInfo,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'No',
                allowOutsideClick: false
            }).then(function (result) {
                if (result.value) {
                    resolve(result.value);
                }
                else
                    reject(result.value);
            });
        });
    };
    CommonFunctions.prototype.showDelSuccSwal = function (statText) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: "Deleted!",
            text: statText,
            type: "success",
            timer: 1000,
            allowOutsideClick: false,
            showConfirmButton: false
        });
    };
    CommonFunctions.prototype.showDelErrSwal = function (errText) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: "Error!",
            text: errText,
            type: "error",
            timer: 1000,
            allowOutsideClick: false,
        });
    };
    CommonFunctions.prototype.showConnErrSwal = function () {
        return new Promise(function (resolve, reject) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'Error!',
                text: "Server connection was lost....",
                type: 'warning',
                confirmButtonText: 'Ok',
                showCancelButton: false,
                allowOutsideClick: false
            }).then(function (result) {
                if (result.value) {
                    resolve(result.value);
                }
                else
                    reject(result.value);
            });
        });
    };
    CommonFunctions.prototype.showSerConnSwal = function () {
        var _this = this;
        var that = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: "Please enter Server Url...",
            input: "text",
            inputValue: that.serName.server_name,
            showConfirmButton: true,
            confirmButtonText: "Test Connection",
            allowOutsideClick: false
        })
            .then(function (value) {
            //that.appComp.           
            _this.httpServ.testSerConn(value.value).subscribe(function (data) {
                that.serName.setSerName(value.value);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: "Success!",
                    text: "Server Connection established",
                    type: "success",
                    timer: 2000,
                    allowOutsideClick: false,
                    showConfirmButton: false
                });
            }, function (Error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: "Error!",
                    text: "Unable to connect server...",
                    type: "error",
                    allowOutsideClick: false
                }).then(function (res) {
                    that.showSerConnSwal();
                });
            });
        });
    };
    CommonFunctions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ser_name__WEBPACK_IMPORTED_MODULE_2__["ServerName"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_3__["HTTPSerService"]])
    ], CommonFunctions);
    return CommonFunctions;
}());



/***/ }),

/***/ "./src/app/edititem/edititem.component.css":
/*!*************************************************!*\
  !*** ./src/app/edititem/edititem.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addItemClass img{\r\n\tcursor: pointer;\r\n\tpadding-left: 10px;\r\n}\r\n.container{ margin-top: 40px; }\r\n.table td,.table th{ padding: 8px; }\r\n.table thead tr th{ vertical-align: middle; }\r\n.iconClass { font-size: 20px; background-color: darkcyan; }\r\n.backButtonCss1{ position: absolute;top: 20px; }\r\n.backButtonCss1 img{ background-color: cyan; }\r\n.backButtonCss1 .dropdown-items{display: none;}\r\n.backButtonCss1:hover .dropdown-items{display: block;}\r\n.backButtonCss1 ul{ z-index: 999; position: absolute; width: 200px;background-color: #f9f9f9;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);}\r\n.backButtonCss1 ul li{ padding: 15px;}\r\n.backButtonCss1 ul li:hover {cursor:pointer; background-color: lightcoral; color: #e7ece3;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGl0ZW0vZWRpdGl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7QUFDRCxZQUFZLGlCQUFpQixFQUFFO0FBQy9CLHFCQUFxQixhQUFhLEVBQUU7QUFDcEMsb0JBQW9CLHVCQUF1QixFQUFFO0FBQzdDLGFBQWEsZ0JBQWdCLENBQUMsMkJBQTJCLEVBQUU7QUFFM0QsaUJBQWlCLG1CQUFtQixVQUFVLEVBQUU7QUFDaEQscUJBQXFCLHVCQUF1QixFQUFFO0FBQzlDLGdDQUFnQyxjQUFjLENBQUM7QUFDL0Msc0NBQXNDLGVBQWUsQ0FBQztBQUN0RCxvQkFBb0IsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsMEJBQTBCO0lBQ3pGLDZDQUE2QyxDQUFDO0FBQ2xELHVCQUF1QixjQUFjLENBQUM7QUFDdEMsNkJBQTZCLGVBQWUsQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9lZGl0aXRlbS9lZGl0aXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZEl0ZW1DbGFzcyBpbWd7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uY29udGFpbmVyeyBtYXJnaW4tdG9wOiA0MHB4OyB9XHJcbi50YWJsZSB0ZCwudGFibGUgdGh7IHBhZGRpbmc6IDhweDsgfVxyXG4udGFibGUgdGhlYWQgdHIgdGh7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cclxuLmljb25DbGFzcyB7IGZvbnQtc2l6ZTogMjBweDsgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47IH1cclxuXHJcbi5iYWNrQnV0dG9uQ3NzMXsgcG9zaXRpb246IGFic29sdXRlO3RvcDogMjBweDsgfVxyXG4uYmFja0J1dHRvbkNzczEgaW1neyBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuOyB9XHJcbi5iYWNrQnV0dG9uQ3NzMSAuZHJvcGRvd24taXRlbXN7ZGlzcGxheTogbm9uZTt9XHJcbi5iYWNrQnV0dG9uQ3NzMTpob3ZlciAuZHJvcGRvd24taXRlbXN7ZGlzcGxheTogYmxvY2s7fVxyXG4uYmFja0J1dHRvbkNzczEgdWx7IHotaW5kZXg6IDk5OTsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjAwcHg7YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO31cclxuLmJhY2tCdXR0b25Dc3MxIHVsIGxpeyBwYWRkaW5nOiAxNXB4O31cclxuLmJhY2tCdXR0b25Dc3MxIHVsIGxpOmhvdmVyIHtjdXJzb3I6cG9pbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDsgY29sb3I6ICNlN2VjZTM7fSJdfQ== */"

/***/ }),

/***/ "./src/app/edititem/edititem.component.html":
/*!**************************************************!*\
  !*** ./src/app/edititem/edititem.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-billItem100\">\t\t\n\t\t<div class=\"container\">\t\t    \n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12\">\t\t    \t\t\n\t\t    \t\t<div class=\"backButtonCss1\">\n\t\t    \t\t\t<img src=\"./assets/images/list1.png\">\n\t\t    \t\t\t<ul class=\"dropdown-items\">\t\t\n\t\t    \t\t\t\t<li (click)=\"goToDashBor()\">Dashboard</li>\n\t\t    \t\t\t\t<li (click)=\"showOldStock(content2)\">Former Stock</li>\n\t\t    \t\t\t</ul>\t\t    \t\t\t\n\t\t    \t\t</div>\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project prjHed\">\n\t\t                    <span class=\"headerDashB\">Edit Item</span>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t\n\t\t    </div>\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-3\">\n\t\t    \t\t<!-- <label for=\"itemid\">Search Item #:</label> -->\n\t\t\t        <div class=\"input-group\">\n\t\t\t            <input type=\"text\"  autocomplete=\"off\" class=\"form-control\" placeholder=\"Goods #\" name=\"itemNo\" [(ngModel)]=\"searchItemId\">\n\t\t\t            <span class=\"input-group-btn\">\n\t\t\t\t\t    <button (click)=\"searchItemDet()\" title=\"Search for Goods\" class=\"btn btn-default iconClass\" type=\"submit\">\n\t\t\t\t\t        <i class=\"fa fa-search\"></i>\n\t\t\t\t\t    </button>\n\t\t\t\t\t  </span>\n\t\t\t        </div>\n\t\t        </div>\t\n\t\t    </div>\n\t\t    <div>\n\t\t\t\t<table class=\"table\" *ngIf=\"addAllItems.length\">\n\t\t\t\t  <thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">S.No</th>\n\t\t\t\t      <th scope=\"col\">Item #</th>\n\t\t\t\t      <th scope=\"col\">Goods Name</th>\n\t\t\t\t      <th scope=\"col\">Qty</th>\n\t\t\t\t      <th scope=\"col\">Price</th>\n\t\t\t\t      <th scope=\"col\">Discount</th>\n\t\t\t\t      <th scope=\"col\">Tax</th>\n\t\t\t\t      <th scope=\"col\">HSN Code</th>\n\t\t\t\t    </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t    <tr *ngFor=\"let item of addAllItems;index as i\" [ngClass]=\"{'table-warning':i%2==0}\" class=\"hover-row\" (click)=\"editItemDet(item,content)\">\n\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t<td>{{item.P_ID}}</td>\n\t\t\t\t\t\t<td>{{item.P_Name}}</td>\n\t\t\t\t\t\t<td>{{item.P_Qty}}</td>\n\t\t\t\t\t\t<td >{{item.P_Price|number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td *ngIf=\"item.P_discount==0\">--</td>\n\t\t\t\t\t\t<td *ngIf=\"item.P_discount!=0\">{{item.P_discount}}%</td>\n\t\t\t\t\t\t<td *ngIf=\"item.P_taxIncluded==1\">Included</td>\n\t\t\t\t\t\t<td *ngIf=\"item.P_taxIncluded==0\">Excluded</td>\n\t\t\t\t\t\t<td>{{item.P_Hsn_Code}}</td>\n\t\t\t\t\t</tr>\t\t\t\t   \n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\t\t\t\n\t\t\t<div class=\"row\" *ngIf=\"!addAllItems.length\">\n\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t<h3>No items to show...</h3>\n\t\t\t\t</div>\n\t\t\t</div>   \n\t\t</div>\n\t</div>\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">Modify Item</h3>\n    <button type=\"button\" class=\"close closeButt\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\" title=\"Close\">&times;</span>\n    </button>   \n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n       <div class=\"row\">\n          <div class='col col-3'>\n          \t<label for=\"dateOfBirth\">Item #:</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"text\" class=\"form-control\" placeholder=\"Item Number\" name=\"itemNo\" [disabled]=\"true\" [(ngModel)]=\"editItem.P_ID\">\n\t        </div>\n          </div>\n          <div class='col col-3'>\n          \t<label for=\"dateOfBirth\">Goods Description:</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" placeholder=\"Item Name\" name=\"itemName\" [(ngModel)]=\"editItem.P_Name\">\n\t        </div>\n          </div>\n          <div class='col col-2'>\n          \t<label for=\"hsncode\">HSN Code:</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" placeholder=\"HSN Code\" name=\"hsncode\" [(ngModel)]=\"editItem.P_Hsn_Code\">\n\t        </div>\n          </div>\n           <div class='col col-3'>\n\t          \t<label for=\"itemtype\">Item Type:</label>\n\t\t        <div class=\"input-group\">\t         \n\t\t          <select [(ngModel)]=\"selectedTax\" name=\"seleTax\" class=\"selGroup\" (ngModelChange)=\"onTaxChange()\">\n\t\t          \t<option value=\"\">--Select Tax Group--</option>\n\t\t\t\t  \t<option *ngFor=\"let tax of allTaxesArr\" [ngValue]=\"tax\">{{tax.tax_type}}</option>\n\t\t\t\t</select>\n\t\t        </div>\n\t        </div>\n        </div>       \n        <div class=\"row\">\n         <div class='col col-2'>\n          \t<label for=\"dateOfBirth\">Qty:</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" min=\"1\" type=\"number\" placeholder=\"Item Qty\" name=\"itemQty\" [(ngModel)]=\"editItem.P_Qty\">\n\t        </div>\n          </div>\n          <div class='col col-2'>\n          \t<label for=\"itemPric\">Price(Rs.):</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" type=\"number\" autocomplete=\"off\" placeholder=\"Item Price\" name=\"itemPric\" (ngModelChange)=\"calTotAmount()\" [(ngModel)]=\"editItem.P_Price\">\n\t        </div>\n          </div>\n          <div class='col col-2'>\n          \t<label for=\"discount\">Discount(%)</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" min=\"0\" type=\"number\" [(ngModel)]=\"editItem.P_discount\" (ngModelChange)=\"calTotAmount()\" placeholder=\"Discount\" name=\"discount\">\n\t        </div>\n          </div>\n          <div class='col col-2'>\n          \t<label for=\"baseprice\">Base Price</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" [disabled]=\"true\" type=\"number\" [(ngModel)]=\"editItem.P_basePrice\" placeholder=\"Base price\" name=\"baseprice\">\n\t        </div>\n          </div>          \n        </div>       \n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"upadeItemDet()\" >Save</button>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"deleteItem()\" >Delete</button>\n\t\t<!-- <button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"modal.close()\">Close</button> -->      \n  </div>\n</ng-template>\n<ng-template #content2 let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">Former Items</h3>\n    <button type=\"button\" class=\"close closeButt\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\" title=\"Close\">&times;</span>\n    </button>   \n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n       <div class=\"row\">\n       \t\t<div class=\"col col-12\">\n\t        \t<table class=\"table\">\n\t\t\t\t\t  <thead>\t\t\t\t\t   \n\t\t\t\t\t    <tr>\n\t\t\t\t\t    \t<th scope=\"col\" >S.No</th>\n\t\t\t\t\t\t    <th scope=\"col\" >Goods #</th>\n\t\t\t\t\t\t    <th scope=\"col\" >Goods Name</th>\n\t\t\t\t\t\t    <th scope=\"col\">Available Qty</th>\n\t\t\t\t\t    </tr>\t\t\t\t\t   \n\t\t\t\t\t  </thead>\n\t\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t\t    <tr *ngFor=\"let item of oldStockItems;index as i\" [ngClass]=\"{'table-warning':i%2==0}\" >\n\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t<td>{{item.P_ID}}</td>\n\t\t\t\t\t\t\t<td>{{item.P_Name}}</td>\n\t\t\t\t\t\t\t<td>{{item.P_Qty}}</td>\n\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t   \n\t\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n       </div>\n      </div>   \n    </form>\n  </div>  \n</ng-template>"

/***/ }),

/***/ "./src/app/edititem/edititem.component.ts":
/*!************************************************!*\
  !*** ./src/app/edititem/edititem.component.ts ***!
  \************************************************/
/*! exports provided: EdititemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdititemComponent", function() { return EdititemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.function */ "./src/app/common.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EdititemComponent = /** @class */ (function () {
    function EdititemComponent(route, titelService, modalService, httpServ, commFunc) {
        this.route = route;
        this.titelService = titelService;
        this.modalService = modalService;
        this.httpServ = httpServ;
        this.commFunc = commFunc;
        titelService.setTitle("Edit Item");
        this.addAllItems = [];
        this.allTaxesArr = [];
        this.selectedTax = "";
        this.taxIncluded = true;
        this.getAllItems();
        this.searchItem = false;
        this.searchItemId = "";
        this.getTaxes();
        this.oldStockItems = [];
    }
    EdititemComponent.prototype.ngOnInit = function () {
    };
    EdititemComponent.prototype.getTaxes = function () {
        var that = this;
        this.httpServ.getAllTaxes().subscribe(function (data) {
            that.allTaxesArr = data;
        });
    };
    EdititemComponent.prototype.getAllItems = function () {
        var _this = this;
        this.httpServ.getAllItems().subscribe(function (data) {
            _this.addAllItems = (data);
        });
    };
    EdititemComponent.prototype.goToDashBor = function () {
        this.route.navigate(["/admin"]);
    };
    EdititemComponent.prototype.editItemDet = function (item, content) {
        var _this = this;
        this.editItem = JSON.parse(JSON.stringify(item));
        this.allTaxesArr.forEach(function (item, idx) {
            if (item.tax_id == _this.editItem.tax_id) {
                _this.selectedTax = item;
            }
        });
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EdititemComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    EdititemComponent.prototype.upadeItemDet = function () {
        var _this = this;
        if (this.commFunc.checkForEmptyValues(this.editItem) == false) {
            this.commFunc.showSwlInfo("All values are required...");
            return false;
        }
        this.modalService.dismissAll();
        var that = this;
        this.httpServ.updateItemDet(this.editItem).subscribe(function (data) {
            if (!_this.searchItem)
                that.getAllItems();
        });
    };
    EdititemComponent.prototype.deleteItem = function () {
        var that = this;
        this.modalService.dismissAll();
        this.commFunc.showDelSwl("You want to delete this item from stock...").then(function (success) {
            that.httpServ.deletItem(that.editItem.P_ID).subscribe(function (data) {
                that.getAllItems();
            });
        }, function (fail) { });
    };
    EdititemComponent.prototype.onTaxChange = function () {
        this.editItem.tax_id = "";
        if (this.selectedTax != "") {
            this.editItem.tax_id = this.selectedTax.tax_id;
        }
        this.calTotAmount();
    };
    EdititemComponent.prototype.gstApplied = function (gstPer, itemCost) {
        return (itemCost * gstPer) / 100;
    };
    EdititemComponent.prototype.discountApp = function () {
        if ((this.editItem.P_discount == 0)) {
            return 0;
        }
        return (this.editItem.P_Price * this.editItem.P_discount) / 100;
    };
    EdititemComponent.prototype.calTotAmount = function () {
        if (this.editItem.P_Qty >= 1) {
            if (this.editItem.P_taxIncluded == 1)
                this.editItem.P_basePrice = this.editItem.P_Price - this.discountApp();
            else
                this.editItem.P_basePrice = (this.editItem.P_Price - this.discountApp()) + this.gstApplied(this.selectedTax.cgst + this.selectedTax.sgst, this.editItem.P_Price);
            this.editItem.P_basePrice = parseFloat(this.editItem.P_basePrice.toFixed(2));
        }
    };
    EdititemComponent.prototype.searchItemDet = function () {
        var _this = this;
        if ((this.searchItemId == "") && (this.searchItem)) {
            this.getAllItems();
        }
        else if (this.searchItemId != "") {
            this.httpServ.searchForItem(this.searchItemId).subscribe(function (data) {
                if (data == "false") {
                    _this.commFunc.showSwlInfo("No details found for this id..." + _this.searchItemId);
                    return false;
                }
                else {
                    _this.addAllItems = (data);
                    _this.searchItem = true;
                }
            });
        }
    };
    EdititemComponent.prototype.showOldStock = function (content) {
        var _this = this;
        var that = this;
        this.httpServ.getOldStockDetails().subscribe(function (data) {
            if (data.length == 0) {
                _this.commFunc.showSwlInfo("No old stock found....");
                return false;
            }
            else {
                that.oldStockItems = data;
                that.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
                    that.closeResult = "Closed with: " + result;
                }, function (reason) {
                    that.closeResult = "Dismissed " + that.getDismissReason(reason);
                });
            }
        });
    };
    EdititemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edititem',
            template: __webpack_require__(/*! ./edititem.component.html */ "./src/app/edititem/edititem.component.html"),
            styles: [__webpack_require__(/*! ./edititem.component.css */ "./src/app/edititem/edititem.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__["HTTPSerService"], _common_function__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"]])
    ], EdititemComponent);
    return EdititemComponent;
}());



/***/ }),

/***/ "./src/app/edituser/edituser.component.css":
/*!*************************************************!*\
  !*** ./src/app/edituser/edituser.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prjHed1{ margin-top: 20px; }\r\n.container{ width: 680px }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHVzZXIvZWRpdHVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLGlCQUFpQixFQUFFO0FBQzdCLFlBQVksWUFBWSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvZWRpdHVzZXIvZWRpdHVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmpIZWQxeyBtYXJnaW4tdG9wOiAyMHB4OyB9XHJcbi5jb250YWluZXJ7IHdpZHRoOiA2ODBweCB9Il19 */"

/***/ }),

/***/ "./src/app/edituser/edituser.component.html":
/*!**************************************************!*\
  !*** ./src/app/edituser/edituser.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-billItem100\">\t\n\t<i class=\"fas fa-stroopwafel\"></i>\t\n\t\t<div class=\"container\">\t\t    \n\t\t    <div class=\"row\">\t\t    \t\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t    <img src=\"./assets/images/back.png\" class=\"backButtonCss\" title=\"Dashboard\" (click)=\"goToDashBor();\">\n\t\t    \t\t<div class=\"box-part text-center\">\n\t\t         \t    <div class=\"project prjHed\">                          \n\t\t                    <span class=\"headerDashB\">User's List</span>\n\t\t\t            </div>\t\t   \n\t\t            </div>\n\t\t        </div>\t\n\t\t    </div>\n\t\t    <div>\n\t\t\t\t<table class=\"table\" *ngIf=\"allUsers.length\">\n\t\t\t\t  <thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">S.No</th>\n\t\t\t\t      <th scope=\"col\">User #</th>\n\t\t\t\t      <th scope=\"col\">Name</th>\t\t\t\t      \n\t\t\t\t    </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t    <tr *ngFor=\"let user of allUsers;index as i\" [ngClass]=\"{'table-warning':i%2==0}\" class=\"hover-row\" (click)=\"editUserDet(user,content)\">\n\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t<td>{{user.Emp_Id}}</td>\n\t\t\t\t\t\t<td>{{user.Emp_Name}}</td>\t\t\t\t\t\t\n\t\t\t\t\t</tr>\t\t\t\t   \n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"!allUsers.length\">\n\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t<h3>No Users to show...</h3>\n\t\t\t\t</div>\n\t\t\t</div>    \n\t\t</div>\n\t</div>\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">User Info.</h3>    \n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n       <div class=\"row\">\n          <div class='col s6'>\n          \t<label for=\"dateOfBirth\">User #:</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"text\" class=\"form-control\" name=\"itemNo\" [disabled]=\"true\" [(ngModel)]=\"editUser.Emp_Id\">\n\t        </div>\n          </div>\n          <div class='col s6'>\n          \t<label for=\"dateOfBirth\">User Name:</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" placeholder=\"User Name\" name=\"itemName\" [disabled]=\"true\" [(ngModel)]=\"editUser.Emp_Name\">\n\t        </div>\n          </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n         <div class='col col-6'>\n          \t<label for=\"dateOfBirth\">Password :</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" placeholder=\"User password\" name=\"itemQty\" [disabled]=\"true\" [(ngModel)]=\"editUser.Emp_Pword\">\n\t        </div>\n          </div>         \n        </div>       \n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\t\t\n\t\t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"delUser()\" >Delete</button>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"modal.close()\">Close</button>      \n  </div>\n</ng-template>   "

/***/ }),

/***/ "./src/app/edituser/edituser.component.ts":
/*!************************************************!*\
  !*** ./src/app/edituser/edituser.component.ts ***!
  \************************************************/
/*! exports provided: EdituserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdituserComponent", function() { return EdituserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.function */ "./src/app/common.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(route, titelService, modalService, httpServ, commFunc) {
        this.route = route;
        this.titelService = titelService;
        this.modalService = modalService;
        this.httpServ = httpServ;
        this.commFunc = commFunc;
        titelService.setTitle("Edit Item");
        this.allUsers = [];
        this.editUser = {};
        this.getAllUsers();
    }
    EdituserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.httpServ.getAllUsers().subscribe(function (data) {
            _this.allUsers = (data);
        });
    };
    EdituserComponent.prototype.goToDashBor = function () {
        //this.loader.display(false);
        this.route.navigate(["/admin"]);
    };
    EdituserComponent.prototype.editUserDet = function (user, content) {
        var _this = this;
        this.editUser = user;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EdituserComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    EdituserComponent.prototype.updateUser = function () {
        var pWord = this.editUser.user_pword;
        var cpword = this.editUser.user_cpword;
        if ((pWord == "" || pWord == undefined) || (cpword == "" || cpword == undefined)) {
            this.commFunc.showSwlInfo("Password or Confirm password are missing...");
            return false;
        }
        if (pWord != cpword) {
            this.commFunc.showSwlInfo("Password and Confirm password are not same...");
            return false;
        }
        this.modalService.dismissAll();
        var that = this;
        this.httpServ.updateUser(that.editUser).subscribe(function (data) {
            that.getAllUsers();
        });
    };
    EdituserComponent.prototype.delUser = function () {
        var _this = this;
        var that = this;
        this.modalService.dismissAll();
        this.commFunc.showDelSwl("You want to delete this user...").then(function (success) {
            _this.httpServ.deleteUser(_this.editUser.Emp_Id).subscribe(function (data) {
                _this.getAllUsers();
            });
        }, function (fail) { });
    };
    EdituserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edituser',
            template: __webpack_require__(/*! ./edituser.component.html */ "./src/app/edituser/edituser.component.html"),
            styles: [__webpack_require__(/*! ./edituser.component.css */ "./src/app/edituser/edituser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__["HTTPSerService"], _common_function__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"]])
    ], EdituserComponent);
    return EdituserComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fpCss{ position: absolute;margin-left: 150px; }\r\n.fpCss div{ cursor: pointer; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLG1CQUFtQixtQkFBbUIsRUFBRTtBQUNoRCxZQUFZLGdCQUFnQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcENzc3sgcG9zaXRpb246IGFic29sdXRlO21hcmdpbi1sZWZ0OiAxNTBweDsgfVxyXG4uZnBDc3MgZGl2eyBjdXJzb3I6IHBvaW50ZXI7IH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-login100\">  \n\t\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-35 p-b-54\">\n\t\t\t<div class=\"login100-form1 validate-form1\">\n\t\t\t\t<span class=\"login100-form-title p-b-20\">\n\t\t\t\t\tLogin\n\t\t\t\t</span>\n\t\t\t\t<div class=\"wrap-input100 validate-input m-b-23\">\n\t\t\t\t\t<span class=\"label-input100\">User #</span>\n\t\t\t\t\t<input class=\"input100\" type=\"text\" [(ngModel)]=\"LoginInfo.UserName\" name=\"username\" placeholder=\"User #\">\n\t\t\t\t\t<span class=\"focus-input100\" data-symbol=\"&#xf206;\"></span>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div class=\"wrap-input100 validate-input m-b-23\">\n\t\t\t\t\t<span class=\"label-input100\">Password</span>\n\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"Password\" [(ngModel)]=\"LoginInfo.PassWord\">\n\t\t\t\t\t<span class=\"focus-input100\" data-symbol=\"&#xf190;\"></span>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div class=\"row fpCss\">\n\t\t\t\t    <div class=\"col float-right\">\n\t\t\t\t\t\tForgot password?\n\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div class=\"container-login100-form-btn p-t-30\">\n\t\t\t\t\t<div class=\"wrap-login100-form-btn\">\n\t\t\t\t\t\t<div class=\"login100-form-bgbtn\"></div>\n\t\t\t\t\t\t<button class=\"login100-form-btn\" (click)=\"validateLogin()\">\n\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.function */ "./src/app/common.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(titleService, route, httpServ, commFunc) {
        this.titleService = titleService;
        this.route = route;
        this.httpServ = httpServ;
        this.commFunc = commFunc;
        this.LoginInfo = {};
        this.preUser = "User";
        titleService.setTitle("Login");
        //this is for desktop application only....
        this.commFunc.showSerConnSwal();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.validateLogin = function () {
        var _this = this;
        if (this.LoginInfo.UserName == "" || this.LoginInfo.UserName == undefined) {
            this.commFunc.showSwlInfo("User Name is required...");
            return false;
        }
        if (this.LoginInfo.PassWord == "" || this.LoginInfo.PassWord == undefined) {
            this.commFunc.showSwlInfo("Password is required...");
            return false;
        }
        var userDet = { "userName": this.LoginInfo.UserName, "userPword": this.LoginInfo.PassWord };
        var that = this;
        this.httpServ.isValidAdmRUser(userDet).subscribe(function (data) {
            localStorage.setItem("UserDet", data);
            if (data != "false") {
                if (data.split("/")[1] == "true")
                    that.route.navigate(["/admin"]);
                else
                    that.route.navigate(["/billIte"]);
            }
            else {
                _this.commFunc.showSwlInfo("User name/password is Invalid");
            }
        });
        /*if(this.isAdmin)
          this.route.navigate(["/admin"]);
        else
          this.route.navigate(["/billIte"]);*/
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_3__["HTTPSerService"], _common_function__WEBPACK_IMPORTED_MODULE_4__["CommonFunctions"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/print-page/print-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/print-page/print-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@page { size: auto;  margin: 0mm; }\r\n.container { max-width: 1033px; }\r\n.headRow{ min-height: 60px; }\r\n.printHeader{ background-color: green; }\r\n.printHeader .pheader1,.printHeader .pheader2{ color: white; }\r\n.printHeader .pheader2{ font-size: 44px;    font-family: Brush Script MT;    position: absolute; left: 440px; }\r\n.printHeader .pheader1{ position: absolute;    left: 270px;    top: 5px; }\r\n.printHeader .pheader3{ position: absolute;left: 852px;top: 15px; font-weight: bold; }\r\n.headRow2 { min-height: 34px;background-color: white; font-size:14px;    }\r\n.printHeader2 .pheader1{ position: absolute; left: 4px;top: 0px; }\r\n.printHeader2 .pheader2{ position: absolute;  left: 4px;top: 16px; }\r\n.printHeader2 .pheader3{ position: absolute;left: 450px; top: 14px;}\r\n.headRow3 { min-height: 30px;background-color: lightblue;text-align: center; }\r\n.headRow3 .pheader1{ font-size: 20px;font-weight: bold;  font-family: Times New Roman; }\r\n.custDetRow{ background-color: white;min-height: 50px; }\r\n.custDetRow .billDetCol{ text-align: right;display: grid;padding-right: 6px }\r\n.custDetRow .billDetCol2{ text-align: left;display: grid;padding-left: 2px }\r\n.custDetRow .col-8{ padding-left: 5px; }\r\n.custDetRow hr{ border-top: black 2px solid; }\r\n.custDetRow .pheader2{ position: absolute;top: 19px;left: 30px }\r\n.custDetRow .pheader3{position: absolute;top: 41px;left: 30px }\r\n.custDetRow .hrclass1{ width: 250px;position: absolute;top: 24px; }\r\n.custDetRow .hrclass2{ width: 400px;position: absolute;top: 46px; }\r\n.thead{ background-color: lightblue;color: black; }\r\n.headEmptyRow{ min-height: 12px;background-color: white;  }\r\n.borderTopNBot{ border-top: black 2px solid;border-bottom: black 2px solid; }\r\n.borderTop{ border-top: black 2px solid; }\r\n.borderRnLeft{ border-right: black 1px solid;border-left: black 1px solid; }\r\n.table{ font-size: 13px;background-color: white;margin-bottom: 0rem;border-left: 1px solid black; }\r\n.table th,.table td{ padding: 0px;vertical-align: middle;border-top: 1px black solid; border-bottom: 0px black solid; }\r\n/*table, th, td {  border: 1px solid black;}*/\r\n.table thead tr th{ border-right: 1px solid black;border-bottom: 1px solid black; }\r\n.table thead tr th:last-child{ border-bottom: 1px solid black;border-right: 1px solid black; }\r\n.table tbody tr td{ border-right: 1px solid black;border-bottom: 1px solid black;}\r\n.table tbody tr:last-child td{ border-right: 1px solid black; border-bottom: 1px solid black;}\r\n.emptyValArr{ visibility: hidden; }\r\n.alignLeft{ text-align: left;padding-left: 3px; }\r\n.bglightGreen{ background-color: lightblue; }\r\n.rotate{ -webkit-transform: rotate(-38deg);color: darkgray;  transform: rotate(-38deg); }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQtcGFnZS9wcmludC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxXQUFXLEVBQUUsWUFBWSxFQUFFO0FBQ25DLGFBQWEsa0JBQWtCLEVBQUU7QUFDakMsVUFBVSxpQkFBaUIsRUFBRTtBQUM3QixjQUFjLHdCQUF3QixFQUFFO0FBQ3hDLCtDQUErQyxhQUFhLEVBQUU7QUFDOUQsd0JBQXdCLGdCQUFnQixJQUFJLDZCQUE2QixJQUFJLG1CQUFtQixDQUFDLFlBQVksRUFBRTtBQUMvRyx3QkFBd0IsbUJBQW1CLElBQUksWUFBWSxJQUFJLFNBQVMsRUFBRTtBQUMxRSx3QkFBd0IsbUJBQW1CLFlBQVksVUFBVSxDQUFDLGtCQUFrQixFQUFFO0FBQ3RGLFlBQVksaUJBQWlCLHdCQUF3QixDQUFDLGVBQWUsS0FBSztBQUMxRSx5QkFBeUIsbUJBQW1CLENBQUMsVUFBVSxTQUFTLEVBQUU7QUFDbEUseUJBQXlCLG1CQUFtQixFQUFFLFVBQVUsVUFBVSxFQUFFO0FBQ3BFLHlCQUF5QixtQkFBbUIsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUNwRSxZQUFZLGlCQUFpQiw0QkFBNEIsbUJBQW1CLEVBQUU7QUFDOUUscUJBQXFCLGdCQUFnQixrQkFBa0IsRUFBRSw2QkFBNkIsRUFBRTtBQUN4RixhQUFhLHdCQUF3QixpQkFBaUIsRUFBRTtBQUN4RCx5QkFBeUIsa0JBQWtCLGNBQWMsa0JBQWtCLEVBQUU7QUFDN0UsMEJBQTBCLGlCQUFpQixjQUFjLGlCQUFpQixFQUFFO0FBQzVFLG9CQUFvQixrQkFBa0IsRUFBRTtBQUN4QyxnQkFBZ0IsNEJBQTRCLEVBQUU7QUFDOUMsdUJBQXVCLG1CQUFtQixVQUFVLFVBQVUsRUFBRTtBQUNoRSxzQkFBc0IsbUJBQW1CLFVBQVUsVUFBVSxFQUFFO0FBQy9ELHVCQUF1QixhQUFhLG1CQUFtQixVQUFVLEVBQUU7QUFDbkUsdUJBQXVCLGFBQWEsbUJBQW1CLFVBQVUsRUFBRTtBQUNuRSxRQUFRLDRCQUE0QixhQUFhLEVBQUU7QUFDbkQsZUFBZSxpQkFBaUIsd0JBQXdCLEdBQUc7QUFDM0QsZ0JBQWdCLDRCQUE0QiwrQkFBK0IsRUFBRTtBQUM3RSxZQUFZLDRCQUE0QixFQUFFO0FBQzFDLGVBQWUsOEJBQThCLDZCQUE2QixFQUFFO0FBQzVFLFFBQVEsZ0JBQWdCLHdCQUF3QixvQkFBb0IsNkJBQTZCLEVBQUU7QUFDbkcscUJBQXFCLGFBQWEsdUJBQXVCLDRCQUE0QixDQUFDLCtCQUErQixFQUFFO0FBQ3ZILDhDQUE4QztBQUM5QyxvQkFBb0IsOEJBQThCLCtCQUErQixFQUFFO0FBQ25GLCtCQUErQiwrQkFBK0IsOEJBQThCLEVBQUU7QUFDOUYsb0JBQW9CLDhCQUE4QiwrQkFBK0IsQ0FBQztBQUNsRiwrQkFBK0IsOEJBQThCLENBQUMsK0JBQStCLENBQUM7QUFDOUYsY0FBYyxtQkFBbUIsRUFBRTtBQUNuQyxZQUFZLGlCQUFpQixrQkFBa0IsRUFBRTtBQUNqRCxlQUFlLDRCQUE0QixFQUFFO0FBQzdDLFNBQVMsa0NBQWtDLGdCQUFnQixFQUFpRywwQkFBMEIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3ByaW50LXBhZ2UvcHJpbnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHBhZ2UgeyBzaXplOiBhdXRvOyAgbWFyZ2luOiAwbW07IH1cclxuLmNvbnRhaW5lciB7IG1heC13aWR0aDogMTAzM3B4OyB9XHJcbi5oZWFkUm93eyBtaW4taGVpZ2h0OiA2MHB4OyB9XHJcbi5wcmludEhlYWRlcnsgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47IH1cclxuLnByaW50SGVhZGVyIC5waGVhZGVyMSwucHJpbnRIZWFkZXIgLnBoZWFkZXIyeyBjb2xvcjogd2hpdGU7IH1cclxuLnByaW50SGVhZGVyIC5waGVhZGVyMnsgZm9udC1zaXplOiA0NHB4OyAgICBmb250LWZhbWlseTogQnJ1c2ggU2NyaXB0IE1UOyAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDQ0MHB4OyB9XHJcbi5wcmludEhlYWRlciAucGhlYWRlcjF7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgbGVmdDogMjcwcHg7ICAgIHRvcDogNXB4OyB9XHJcbi5wcmludEhlYWRlciAucGhlYWRlcjN7IHBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiA4NTJweDt0b3A6IDE1cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB9XHJcbi5oZWFkUm93MiB7IG1pbi1oZWlnaHQ6IDM0cHg7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGZvbnQtc2l6ZToxNHB4OyAgICB9XHJcbi5wcmludEhlYWRlcjIgLnBoZWFkZXIxeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDRweDt0b3A6IDBweDsgfVxyXG4ucHJpbnRIZWFkZXIyIC5waGVhZGVyMnsgcG9zaXRpb246IGFic29sdXRlOyAgbGVmdDogNHB4O3RvcDogMTZweDsgfVxyXG4ucHJpbnRIZWFkZXIyIC5waGVhZGVyM3sgcG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDQ1MHB4OyB0b3A6IDE0cHg7fVxyXG4uaGVhZFJvdzMgeyBtaW4taGVpZ2h0OiAzMHB4O2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTt0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLmhlYWRSb3czIC5waGVhZGVyMXsgZm9udC1zaXplOiAyMHB4O2ZvbnQtd2VpZ2h0OiBib2xkOyAgZm9udC1mYW1pbHk6IFRpbWVzIE5ldyBSb21hbjsgfVxyXG4uY3VzdERldFJvd3sgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7bWluLWhlaWdodDogNTBweDsgfVxyXG4uY3VzdERldFJvdyAuYmlsbERldENvbHsgdGV4dC1hbGlnbjogcmlnaHQ7ZGlzcGxheTogZ3JpZDtwYWRkaW5nLXJpZ2h0OiA2cHggfVxyXG4uY3VzdERldFJvdyAuYmlsbERldENvbDJ7IHRleHQtYWxpZ246IGxlZnQ7ZGlzcGxheTogZ3JpZDtwYWRkaW5nLWxlZnQ6IDJweCB9XHJcbi5jdXN0RGV0Um93IC5jb2wtOHsgcGFkZGluZy1sZWZ0OiA1cHg7IH1cclxuLmN1c3REZXRSb3cgaHJ7IGJvcmRlci10b3A6IGJsYWNrIDJweCBzb2xpZDsgfVxyXG4uY3VzdERldFJvdyAucGhlYWRlcjJ7IHBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDE5cHg7bGVmdDogMzBweCB9XHJcbi5jdXN0RGV0Um93IC5waGVhZGVyM3twb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA0MXB4O2xlZnQ6IDMwcHggfVxyXG4uY3VzdERldFJvdyAuaHJjbGFzczF7IHdpZHRoOiAyNTBweDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAyNHB4OyB9XHJcbi5jdXN0RGV0Um93IC5ocmNsYXNzMnsgd2lkdGg6IDQwMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDQ2cHg7IH1cclxuLnRoZWFkeyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7Y29sb3I6IGJsYWNrOyB9XHJcbi5oZWFkRW1wdHlSb3d7IG1pbi1oZWlnaHQ6IDEycHg7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICB9XHJcbi5ib3JkZXJUb3BOQm90eyBib3JkZXItdG9wOiBibGFjayAycHggc29saWQ7Ym9yZGVyLWJvdHRvbTogYmxhY2sgMnB4IHNvbGlkOyB9XHJcbi5ib3JkZXJUb3B7IGJvcmRlci10b3A6IGJsYWNrIDJweCBzb2xpZDsgfVxyXG4uYm9yZGVyUm5MZWZ0eyBib3JkZXItcmlnaHQ6IGJsYWNrIDFweCBzb2xpZDtib3JkZXItbGVmdDogYmxhY2sgMXB4IHNvbGlkOyB9XHJcbi50YWJsZXsgZm9udC1zaXplOiAxM3B4O2JhY2tncm91bmQtY29sb3I6IHdoaXRlO21hcmdpbi1ib3R0b206IDByZW07Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjazsgfVxyXG4udGFibGUgdGgsLnRhYmxlIHRkeyBwYWRkaW5nOiAwcHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTtib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7IGJvcmRlci1ib3R0b206IDBweCBibGFjayBzb2xpZDsgfVxyXG4vKnRhYmxlLCB0aCwgdGQgeyAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7fSovXHJcbi50YWJsZSB0aGVhZCB0ciB0aHsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrOyB9XHJcbi50YWJsZSB0aGVhZCB0ciB0aDpsYXN0LWNoaWxkeyBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7IH1cclxuLnRhYmxlIHRib2R5IHRyIHRkeyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7fVxyXG4udGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZHsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazt9XHJcbi5lbXB0eVZhbEFycnsgdmlzaWJpbGl0eTogaGlkZGVuOyB9XHJcbi5hbGlnbkxlZnR7IHRleHQtYWxpZ246IGxlZnQ7cGFkZGluZy1sZWZ0OiAzcHg7IH1cclxuLmJnbGlnaHRHcmVlbnsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyB9XHJcbi5yb3RhdGV7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM4ZGVnKTtjb2xvcjogZGFya2dyYXk7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTM4ZGVnKTsgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMzhkZWcpOyAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTM4ZGVnKTsgIHRyYW5zZm9ybTogcm90YXRlKC0zOGRlZyk7IH0iXX0= */"

/***/ }),

/***/ "./src/app/print-page/print-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/print-page/print-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container page1\">\t\n\t<div class=\"row headRow borderRnLeft\">\n    \t<div class=\"col col-12 printHeader\"> \n            <span class=\"pheader1\">Aswa India FAB</span>\n            <span class=\"pheader2\">Free Styles</span>\n            <span class=\"pheader3\">Original For Buyer</span>\n        </div>\t\n    </div>\n    <div class=\"row headRow2 borderRnLeft\">\n    \t<div class=\"col col-12 printHeader2\"> \n            <span class=\"pheader1\">{{totBillInfo.shopInfo.shop_no}}&nbsp;&nbsp;{{totBillInfo.shopInfo.shop_street}}</span>\n            <span class=\"pheader2\">Tel:+91-{{totBillInfo.shopInfo.shop_ph_num}}</span>\n            <span class=\"pheader3\">GSTIN:{{totBillInfo.shopInfo.shop_gstin_num}}</span>\n        </div>\t\n    </div>\n    <div class=\"row headEmptyRow\" \n     style=\"border-right:black 1px solid;border-left:black 1px solid;border-top:black 1px solid;border-bottom:black 1px solid;\">\n    \t<div class=\"col col-12\">\n        </div>\t\n    </div>\n    <div class=\"row headRow3 borderRnLeft\">\n    \t<div class=\"col col-12\"> \n            <span class=\"pheader1\">Tax Invoice</span>\n        </div>\t\n    </div>\n    <div class=\"row custDetRow borderTop borderRnLeft\">\n    \t<div class=\"col col-8\"> \n            <span class=\"pheader1\">Customer Name & Address</span>\n            <span class=\"pheader2\">{{totBillInfo.custDet.custName}}</span>\n            <span class=\"pheader3\">{{totBillInfo.custDet.custMobile}}</span>\n            <hr class=\"hrclass1\">\n            <hr class=\"hrclass2\">\n        </div>\n        <div class=\"col col-2 billDetCol\">\n        \t<span>Bill No</span>\n        \t<span>Date</span>\n        \t<span>Pay Mode</span>\n        </div>\t\n        <div class=\"col col-2 billDetCol2\">\n        \t<span>:&nbsp;&nbsp;{{totBillInfo.billId}}</span>\n        \t<span>:&nbsp;&nbsp;{{totBillInfo.billdate}}</span>\n        \t<span>:&nbsp;&nbsp;Cash-bill</span>\n        </div>\n    </div>\n    <div class=\"row\">\n    \t<table class=\"table\">\n\t\t\t<thead>\n\t\t\t\t<tr class=\"thead\">\n\t\t            <th rowspan=\"2\" >S.No</th>\n\t\t            <th rowspan=\"2\" >CODE</th>\n\t\t            <th rowspan=\"2\" >Description of Goods</th>\n\t\t            <th rowspan=\"2\" >HSN Code</th>\t\t           \n\t\t            <th rowspan=\"2\" >Qty</th>\n\t\t            <th rowspan=\"2\" >Rate</th>\n\t\t            <th rowspan=\"2\" >Amount</th>\n\t\t            <th rowspan=\"2\" >Discount</th>\n\t\t            <th rowspan=\"2\" >Taxable Value</th>\n\t\t            <th colspan=\"2\" >CGST</th>\n\t\t            <th colspan=\"2\" >SGST</th>\n\t\t            <th rowspan=\"2\" >Total</th>\n\t\t        </tr>\n\t\t        <tr class=\"thead\">\n\t\t            <th >Rate</th>\n\t\t            <th >Amount</th>\n\t\t            <th >Rate</th>\n\t\t            <th >Amount</th>           \n\t\t        </tr>\t\t       \n\t\t\t</thead>\n\t\t\t<tbody>\t\t\t\t\n\t\t        <tr *ngFor=\"let item of billItems;index as i\">\n\t\t            <td >{{i+1}}</td>\n\t\t            <td >{{item.P_ID}}</td>\n\t\t            <td >{{item.P_Name}}</td>\n\t\t            <td >{{item.P_Hsn_Code}}</td>\t\t           \n\t\t            <td >{{item.Req_P_Qty}}</td>\n\t\t            <td>{{item.P_Price |number :'0.2-2'}}</td>\n\t\t            <td >{{item.Amount|number :'0.2-2'}}</td>\n\t\t            <td >{{item.disAmount |number :'0.2-2'}}</td>\n\t\t            <td >{{item.taxableVal|number :'0.2-2'}}</td>\n\t\t            <td >{{item.cgst}}</td>\n\t\t            <td >{{item.cgstAmount| number :'0.2-2' }}</td>\n\t\t            <td >{{item.sgst}}</td>\n\t\t            <td>{{item.sgstAmount | number :'0.2-2' }}</td>\n\t\t            <td>{{item.itemTotAmt |number :'0.2-2'}}</td>     \n\t\t        </tr>\t\t       \n\t\t        <tr *ngIf=\"billItems.length<5\">\n\t\t        \t<td ></td>\n\t\t            <td class=\"emptyValArr\">{{emptyval}}</td>            \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\t\t           \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td></td>\t\t            \n\t\t        </tr>\n\t\t        <tr *ngIf=\"billItems.length<5\">\t\t            \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td class=\"emptyValArr\">{{emptyval}}</td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\t\t            \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td></td>\t\t            \n\t\t        </tr>\n\t\t        <tr >\t\t           \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td class=\"emptyValArr\">{{emptyval}}</td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td ></td>\t\t         \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td></td>\t\t            \n\t\t        </tr>\n\t\t        <tr >\t\t           \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td >{{emptyval}}</td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td ></td>\t\t         \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td class=\"emptyValArr\"></td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td></td>\t\t            \n\t\t        </tr>\n\t\t        <tr >\n\t\t            <td colspan=\"4\" class=\"bglightGreen\"></td> \n\t\t            <td >{{totBillInfo.totItemQty}}</td>\n\t\t            <td></td>\n\t\t            <td >{{totBillInfo.totAmount | number :'0.2-2'}}</td>\n\t\t            <td >{{totBillInfo.totItemDisAmount}}</td>\n\t\t            <td >{{totBillInfo.totTaxableAmount | number :'0.2-2'}}</td>\n\t\t            <td ></td>\n\t\t            <td >{{totBillInfo.totCgstAmount}}</td>\n\t\t            <td ></td>\n\t\t            <td>{{totBillInfo.totSgstAmount}}</td>\n\t\t            <td>{{totBillInfo.totItemsAmount | number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr>\n\t\t            <td colspan=\"9\" class=\"bglightGreen\"></td>\n\t\t            <td colspan=\"4\" class=\"alignLeft\">Total amount before Tax</td>\n\t\t            <td>{{totBillInfo.totTaxableAmount | number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr>\n\t\t            <td *ngIf=\"!totBillInfo.hasSpecialDis\" colspan=\"9\" rowspan=\"5\"></td>\n\t\t            <td *ngIf=\"totBillInfo.hasSpecialDis\" colspan=\"9\" rowspan=\"7\"></td>\t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Add:CGST</td>\n\t\t            <td>{{totBillInfo.totCgstAmount}}</td>\n\t\t        </tr>\n\t\t        <tr>\t\t            \t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Add:SGST</td>\n\t\t            <td>{{totBillInfo.totSgstAmount}}</td>\n\t\t        </tr>\n\t\t        <tr>\t\t            \t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Total Tax Amount</td>\n\t\t            <td>{{(totBillInfo.totCgstAmount+totBillInfo.totSgstAmount)| number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr *ngIf=\"totBillInfo.hasSpecialDis\">\n\t\t            <td colspan=\"4\" class=\"alignLeft\">Special Discount</td>\n\t\t            <td>{{totBillInfo.specialDisVal}}%</td>\n\t\t        </tr>\n\t\t        <tr *ngIf=\"totBillInfo.hasSpecialDis\">\n\t\t            <td colspan=\"4\" class=\"alignLeft\">Discount Amount</td>\n\t\t            <td>{{totBillInfo.specialDisAmount| number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr>\t\t            \t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Round of Adjustment</td>\n\t\t            <td>{{totBillInfo.roundValue| number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr>\t\t            \t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Total amount after Tax</td>\n\t\t            <td>{{totBillInfo.roundAmount| number :'0.2-2'}}</td>\n\t\t        </tr>\t\t        \n\t\t        <tr>\n\t\t        \t<td colspan=\"6\" rowspan=\"4\" class=\"bglightGreen\"></td>\n\t\t        \t<td colspan=\"3\" rowspan=\"3\" ><p class=\"rotate\">Cash paid seal</p></td>\n\t\t        \t<td colspan=\"4\" class=\"bglightGreen alignLeft\">GST on reverse charges</td>\n\t\t        \t<td>0.00</td>\n\t\t        </tr>\n\t\t        <tr>        \t\n\t\t        \t<td colspan=\"5\" ><br/>Certified that the particulars given above <br/>are true and correct<br/><br/> </td>\n\t\t        </tr>\n\t\t        <tr>        \t\n\t\t        \t<td colspan=\"6\"\trowspan=\"2\">For Free Styles<br/><br/><br/><br/>\n\t\t        \t Authorised Signature</td>\n\t\t        </tr>\n\t\t        <tr> <td colspan=\"3\">Common Seal</td>\n\n\t\t        </tr>\t        \t\t        \n\t\t    </tbody>\n\t\t</table>\n    </div>\n</div>\n\n<div class=\"container page2\" style=\"margin-top: 60px;\">\t\n\t<div class=\"row headRow borderRnLeft\">\n    \t<div class=\"col col-12 printHeader\"> \n            <span class=\"pheader1\">Aswa India FAB</span>\n            <span class=\"pheader2\">Free Styles</span>\n            <span class=\"pheader3\">Duplicate Copy</span>\n        </div>\t\n    </div>\n    <div class=\"row headRow2 borderRnLeft\">\n    \t<div class=\"col col-12 printHeader2\"> \n            <span class=\"pheader1\">{{totBillInfo.shopInfo.shop_no}}&nbsp;&nbsp;{{totBillInfo.shopInfo.shop_street}}</span>\n            <span class=\"pheader2\">Tel:+91-{{totBillInfo.shopInfo.shop_ph_num}}</span>\n            <span class=\"pheader3\">GSTIN:{{totBillInfo.shopInfo.shop_gstin_num}}</span>\n        </div>\t\n    </div>\n    <div class=\"row headEmptyRow\" \n     style=\"border-right:black 1px solid;border-left:black 1px solid;border-top:black 1px solid;border-bottom:black 1px solid;\">\n    \t<div class=\"col col-12\">\n        </div>\t\n    </div>\n    <div class=\"row headRow3 borderRnLeft\">\n    \t<div class=\"col col-12\"> \n            <span class=\"pheader1\">Tax Invoice</span>\n        </div>\t\n    </div>\n    <div class=\"row custDetRow borderTop borderRnLeft\">\n    \t<div class=\"col col-8\"> \n            <span class=\"pheader1\">Customer Name & Address</span>\n            <span class=\"pheader2\">{{totBillInfo.custDet.custName}}</span>\n            <span class=\"pheader3\">{{totBillInfo.custDet.custMobile}}</span>\n            <hr class=\"hrclass1\">\n            <hr class=\"hrclass2\">\n        </div>\n        <div class=\"col col-2 billDetCol\">\n        \t<span>Bill No</span>\n        \t<span>Date</span>\n        \t<span>Pay Mode</span>\n        </div>\t\n        <div class=\"col col-2 billDetCol2\">\n        \t<span>:&nbsp;&nbsp;{{totBillInfo.billId}}</span>\n        \t<span>:&nbsp;&nbsp;{{totBillInfo.billdate}}</span>\n        \t<span>:&nbsp;&nbsp;Cash-bill</span>\n        </div>\n    </div>\n    <div class=\"row\">\n    \t<table class=\"table\">\n\t\t\t<thead>\n\t\t\t\t<tr class=\"thead\">\n\t\t            <th rowspan=\"2\" >S.No</th>\n\t\t            <th rowspan=\"2\" >CODE</th>\n\t\t            <th rowspan=\"2\" >Description of Goods</th>\n\t\t            <th rowspan=\"2\" >HSN Code</th>\t\t           \n\t\t            <th rowspan=\"2\" >Qty</th>\n\t\t            <th rowspan=\"2\" >Rate</th>\n\t\t            <th rowspan=\"2\" >Amount</th>\n\t\t            <th rowspan=\"2\" >Discount</th>\n\t\t            <th rowspan=\"2\" >Taxable Value</th>\n\t\t            <th colspan=\"2\" >CGST</th>\n\t\t            <th colspan=\"2\" >SGST</th>\n\t\t            <th rowspan=\"2\" >Total</th>\n\t\t        </tr>\n\t\t        <tr class=\"thead\">\n\t\t            <th >Rate</th>\n\t\t            <th >Amount</th>\n\t\t            <th >Rate</th>\n\t\t            <th >Amount</th>           \n\t\t        </tr>\t\t       \n\t\t\t</thead>\n\t\t\t<tbody>\t\t\t\t\n\t\t        <tr *ngFor=\"let item of billItems;index as i\">\n\t\t            <td >{{i+1}}</td>\n\t\t            <td >{{item.P_ID}}</td>\n\t\t            <td >{{item.P_Name}}</td>\n\t\t            <td >{{item.P_Hsn_Code}}</td>\t\t           \n\t\t            <td >{{item.Req_P_Qty}}</td>\n\t\t            <td>{{item.P_Price |number :'0.2-2'}}</td>\n\t\t            <td >{{item.Amount|number :'0.2-2'}}</td>\n\t\t            <td >{{item.disAmount |number :'0.2-2'}}</td>\n\t\t            <td >{{item.taxableVal|number :'0.2-2'}}</td>\n\t\t            <td >{{item.cgst}}</td>\n\t\t            <td >{{item.cgstAmount| number :'0.2-2' }}</td>\n\t\t            <td >{{item.sgst}}</td>\n\t\t            <td>{{item.sgstAmount | number :'0.2-2' }}</td>\n\t\t            <td>{{item.itemTotAmt |number :'0.2-2'}}</td>     \n\t\t        </tr>\t\t       \n\t\t        <tr *ngIf=\"billItems.length<5\">\n\t\t        \t<td ></td>\n\t\t            <td class=\"emptyValArr\">{{emptyval}}</td>\n\t\t            \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\t\t           \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td></td>\t\t            \n\t\t        </tr>\n\t\t        <tr *ngIf=\"billItems.length<5\">\t\t            \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td class=\"emptyValArr\">{{emptyval}}</td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\t\t            \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td></td>\t\t            \n\t\t        </tr>\n\t\t        <tr >\t\t           \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td class=\"emptyValArr\">{{emptyval}}</td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td ></td>\t\t         \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td></td>\t\t            \n\t\t        </tr>\n\t\t        <tr >\t\t           \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td >{{emptyval}}</td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td ></td>\t\t         \n\t\t            <td ></td>\n\t\t            <td ></td>\n\t\t            <td class=\"emptyValArr\"></td>\n\t\t            <td ></td>\n\t\t            <td></td>\n\t\t            <td></td>\t\t            \n\t\t        </tr>\n\t\t        <tr >\n\t\t            <td colspan=\"4\" class=\"bglightGreen\"></td> \n\t\t            <td >{{totBillInfo.totItemQty}}</td>\n\t\t            <td></td>\n\t\t            <td >{{totBillInfo.totAmount | number :'0.2-2'}}</td>\n\t\t            <td >{{totBillInfo.totItemDisAmount}}</td>\n\t\t            <td >{{totBillInfo.totTaxableAmount | number :'0.2-2'}}</td>\n\t\t            <td ></td>\n\t\t            <td >{{totBillInfo.totCgstAmount}}</td>\n\t\t            <td ></td>\n\t\t            <td>{{totBillInfo.totSgstAmount}}</td>\n\t\t            <td>{{totBillInfo.totItemsAmount | number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr>\n\t\t            <td colspan=\"9\" class=\"bglightGreen\"></td>\n\t\t            <td colspan=\"4\" class=\"alignLeft\">Total amount before Tax</td>\n\t\t            <td>{{totBillInfo.totTaxableAmount | number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr>\n\t\t            <td *ngIf=\"!totBillInfo.hasSpecialDis\" colspan=\"9\" rowspan=\"5\"></td>\n\t\t            <td *ngIf=\"totBillInfo.hasSpecialDis\" colspan=\"9\" rowspan=\"7\"></td>\t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Add:CGST</td>\n\t\t            <td>{{totBillInfo.totCgstAmount}}</td>\n\t\t        </tr>\n\t\t        <tr>\t\t            \t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Add:SGST</td>\n\t\t            <td>{{totBillInfo.totSgstAmount}}</td>\n\t\t        </tr>\n\t\t        <tr>\t\t            \t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Total Tax Amount</td>\n\t\t            <td>{{(totBillInfo.totCgstAmount+totBillInfo.totSgstAmount)| number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr *ngIf=\"totBillInfo.hasSpecialDis\">\n\t\t            <td colspan=\"4\" class=\"alignLeft\">Special Discount</td>\n\t\t            <td>{{totBillInfo.specialDisVal}}%</td>\n\t\t        </tr>\n\t\t        <tr *ngIf=\"totBillInfo.hasSpecialDis\">\n\t\t            <td colspan=\"4\" class=\"alignLeft\">Discount Amount</td>\n\t\t            <td>{{totBillInfo.specialDisAmount| number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr>\t\t            \t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Round of Adjustment</td>\n\t\t            <td>{{totBillInfo.roundValue| number :'0.2-2'}}</td>\n\t\t        </tr>\n\t\t        <tr>\t\t            \t\t           \n\t\t            <td colspan=\"4\" class=\"alignLeft\">Total amount after Tax</td>\n\t\t            <td>{{totBillInfo.roundAmount| number :'0.2-2'}}</td>\n\t\t        </tr>\t\t        \n\t\t        <tr>\n\t\t        \t<td colspan=\"6\" rowspan=\"4\" class=\"bglightGreen\"></td>\n\t\t        \t<td colspan=\"3\" rowspan=\"3\" ><p class=\"rotate\">Cash paid seal</p></td>\n\t\t        \t<td colspan=\"4\" class=\"bglightGreen alignLeft\">GST on reverse charges</td>\n\t\t        \t<td>0.00</td>\n\t\t        </tr>\n\t\t        <tr>        \t\n\t\t        \t<td colspan=\"5\" ><br/>Certified that the particulars given above <br/>are true and correct<br/><br/> </td>\n\t\t        </tr>\n\t\t        <tr>        \t\n\t\t        \t<td colspan=\"6\"\trowspan=\"2\">For Free Styles<br/><br/><br/><br/>\n\t\t        \t Authorised Signature</td>\n\t\t        </tr>\n\t\t        <tr> <td colspan=\"3\">Common Seal</td>\n\n\t\t        </tr>\t        \t\t        \n\t\t    </tbody>\n\t\t</table>\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/print-page/print-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/print-page/print-page.component.ts ***!
  \****************************************************/
/*! exports provided: PrintPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintPageComponent", function() { return PrintPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrintPageComponent = /** @class */ (function () {
    function PrintPageComponent(httpServ, ipcServ, route) {
        this.httpServ = httpServ;
        this.ipcServ = ipcServ;
        this.route = route;
        this.emptyval = "dssd";
    }
    //for web
    PrintPageComponent.prototype.ngOnInit = function () {
        this.billItemsInfo = (JSON.parse(localStorage.getItem("billInfo")));
        this.totBillInfo = this.billItemsInfo.totBillInfo;
        this.billItems = this.billItemsInfo.billItems;
        window.print();
        window.addEventListener("afterprint", function (event) {
            localStorage.removeItem("billInfo");
            localStorage.removeItem("printPage");
            window.close();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('printContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrintPageComponent.prototype, "printDiv", void 0);
    PrintPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-page',
            template: __webpack_require__(/*! ./print-page.component.html */ "./src/app/print-page/print-page.component.html"),
            styles: [__webpack_require__(/*! ./print-page.component.css */ "./src/app/print-page/print-page.component.css")]
        }),
        __metadata("design:paramtypes", [_HttpServer_service__WEBPACK_IMPORTED_MODULE_1__["HTTPSerService"], ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PrintPageComponent);
    return PrintPageComponent;
}());



/***/ }),

/***/ "./src/app/sales/sales.component.css":
/*!*******************************************!*\
  !*** ./src/app/sales/sales.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n  color:green;\r\n  border-bottom: solid 3px white;\r\n}\r\n.not-active{\r\n  color:black;\r\n}\r\n.selectionRow span{  cursor: pointer; }\r\n.iconClass { font-size: 20px; background-color: darkcyan; }\r\n.selGroup { padding: 4px 5px 4px 10px;}\r\n.input-group-append { background-color: darkgray; }\r\n.container{ margin-top: 40px; }\r\n.selectionRow { padding-bottom: 12px;font-size: 24px; }\r\n.selectionRow span:not([last-child]){ margin-right: 30px; }\r\n.seleCol { top:20px; }\r\n.seleCol button { background-color: white; }\r\n.seleCol button:hover{ background-color: gray;color:white; }\r\n.table{ font-size: 16px;background-color: white; }\r\n.table th,.table td{ padding: 0px;vertical-align: middle;  }\r\n.table td{ padding: 6px; }\r\n.modal-body .row span{ font-size: 20px;background-color: #0b0bef; color: white; }\r\n.backButtonCss1{ position: absolute;top: 20px; }\r\n.backButtonCss1 img{ background-color: cyan; }\r\n.backButtonCss1 .dropdown-items{display: none;}\r\n.backButtonCss1:hover .dropdown-items{display: block;}\r\n.backButtonCss1 ul{ z-index: 999; position: absolute; width: 200px;background-color: #f9f9f9;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);}\r\n.backButtonCss1 ul li{ padding: 15px;}\r\n.backButtonCss1 ul li:hover {cursor:pointer; background-color: lightcoral; color: #e7ece3;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNELHFCQUFxQixnQkFBZ0IsRUFBRTtBQUN2QyxhQUFhLGdCQUFnQixDQUFDLDJCQUEyQixFQUFFO0FBQzNELFlBQVksMEJBQTBCLENBQUM7QUFDdkMsc0JBQXNCLDJCQUEyQixFQUFFO0FBQ25ELFlBQVksaUJBQWlCLEVBQUU7QUFDL0IsZ0JBQWdCLHFCQUFxQixnQkFBZ0IsRUFBRTtBQUN2RCxzQ0FBc0MsbUJBQW1CLEVBQUU7QUFDM0QsV0FBVyxTQUFTLEVBQUU7QUFDdEIsa0JBQWtCLHdCQUF3QixFQUFFO0FBQzVDLHVCQUF1Qix1QkFBdUIsWUFBWSxFQUFFO0FBQzVELFFBQVEsZ0JBQWdCLHdCQUF3QixFQUFFO0FBQ2xELHFCQUFxQixhQUFhLHVCQUF1QixHQUFHO0FBQzVELFdBQVcsYUFBYSxFQUFFO0FBQzFCLHVCQUF1QixnQkFBZ0IsMEJBQTBCLENBQUMsYUFBYSxFQUFFO0FBQ2pGLGlCQUFpQixtQkFBbUIsVUFBVSxFQUFFO0FBQ2hELHFCQUFxQix1QkFBdUIsRUFBRTtBQUM5QyxnQ0FBZ0MsY0FBYyxDQUFDO0FBQy9DLHNDQUFzQyxlQUFlLENBQUM7QUFDdEQsb0JBQW9CLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLDBCQUEwQjtJQUN6Riw2Q0FBNkMsQ0FBQztBQUNsRCx1QkFBdUIsY0FBYyxDQUFDO0FBQ3RDLDZCQUE2QixlQUFlLENBQUMsNkJBQTZCLENBQUMsZUFBZSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XHJcbiAgY29sb3I6Z3JlZW47XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHdoaXRlO1xyXG59XHJcbi5ub3QtYWN0aXZle1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5zZWxlY3Rpb25Sb3cgc3BhbnsgIGN1cnNvcjogcG9pbnRlcjsgfVxyXG4uaWNvbkNsYXNzIHsgZm9udC1zaXplOiAyMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjsgfVxyXG4uc2VsR3JvdXAgeyBwYWRkaW5nOiA0cHggNXB4IDRweCAxMHB4O31cclxuLmlucHV0LWdyb3VwLWFwcGVuZCB7IGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5OyB9XHJcbi5jb250YWluZXJ7IG1hcmdpbi10b3A6IDQwcHg7IH1cclxuLnNlbGVjdGlvblJvdyB7IHBhZGRpbmctYm90dG9tOiAxMnB4O2ZvbnQtc2l6ZTogMjRweDsgfVxyXG4uc2VsZWN0aW9uUm93IHNwYW46bm90KFtsYXN0LWNoaWxkXSl7IG1hcmdpbi1yaWdodDogMzBweDsgfVxyXG4uc2VsZUNvbCB7IHRvcDoyMHB4OyB9XHJcbi5zZWxlQ29sIGJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XHJcbi5zZWxlQ29sIGJ1dHRvbjpob3ZlcnsgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtjb2xvcjp3aGl0ZTsgfVxyXG4udGFibGV7IGZvbnQtc2l6ZTogMTZweDtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxyXG4udGFibGUgdGgsLnRhYmxlIHRkeyBwYWRkaW5nOiAwcHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTsgIH1cclxuLnRhYmxlIHRkeyBwYWRkaW5nOiA2cHg7IH1cclxuLm1vZGFsLWJvZHkgLnJvdyBzcGFueyBmb250LXNpemU6IDIwcHg7YmFja2dyb3VuZC1jb2xvcjogIzBiMGJlZjsgY29sb3I6IHdoaXRlOyB9XHJcbi5iYWNrQnV0dG9uQ3NzMXsgcG9zaXRpb246IGFic29sdXRlO3RvcDogMjBweDsgfVxyXG4uYmFja0J1dHRvbkNzczEgaW1neyBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuOyB9XHJcbi5iYWNrQnV0dG9uQ3NzMSAuZHJvcGRvd24taXRlbXN7ZGlzcGxheTogbm9uZTt9XHJcbi5iYWNrQnV0dG9uQ3NzMTpob3ZlciAuZHJvcGRvd24taXRlbXN7ZGlzcGxheTogYmxvY2s7fVxyXG4uYmFja0J1dHRvbkNzczEgdWx7IHotaW5kZXg6IDk5OTsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjAwcHg7YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO31cclxuLmJhY2tCdXR0b25Dc3MxIHVsIGxpeyBwYWRkaW5nOiAxNXB4O31cclxuLmJhY2tCdXR0b25Dc3MxIHVsIGxpOmhvdmVyIHtjdXJzb3I6cG9pbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDsgY29sb3I6ICNlN2VjZTM7fSJdfQ== */"

/***/ }),

/***/ "./src/app/sales/sales.component.html":
/*!********************************************!*\
  !*** ./src/app/sales/sales.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-billItem100\">\t\t\n\t\t<div class=\"container\">\t\t    \n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12\">\t\t    \t \t\n\t\t    \t \t<div class=\"backButtonCss1\">\n\t\t    \t\t\t<img src=\"./assets/images/list1.png\">\n\t\t    \t\t\t<ul class=\"dropdown-items\">\t\t\n\t\t    \t\t\t\t<li (click)=\"goToDashBor()\">Dashboard</li>\n\t\t    \t\t\t\t<li (click)=\"resetBillId()\">Reset Bill Id</li>\n\t\t    \t\t\t\t<!-- <li (click)=\"showOldStock(content2)\">Former Stock</li> -->\n\t\t    \t\t\t</ul>\t\t    \t\t\t\n\t\t    \t\t</div>\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project prjHed\">  \n\t\t                    <span class=\"headerDashB\">Sales</span>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t\n\t\t    </div>\n\t\t    <div class=\"row selectionRow\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t\t<div class=\"box-part text-center\">\n\t\t    \t\t\t<span [ngClass]=\"{'active':searchById === true, 'not-active':searchById === false}\" (click)=\"sales('billId')\">Search Bill</span>\n\t\t\t    \t\t<span [ngClass]=\"{'active':salesByDate === true, 'not-active':salesByDate === false}\" (click)=\"sales('date')\">By Date</span>\t    \t\n\t\t\t    \t\t<span [ngClass]=\"{'active':salesByEmp === true, 'not-active':salesByEmp === false}\" (click)=\"sales('emp')\">By Employee</span>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t    </div>\t\t   \n\t\t    <div class=\"row form-group\" *ngIf=\"salesByEmp||salesByDate\">\n\t\t    \t<div class=\"col col-3\">\n\t\t    \t    <label for=\"dp\">{{dateStr}}</label>\n\t\t\t    \t<div class=\"input-group\">\t\t\t    \t  \n\t\t\t\t      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t             name=\"dp\" [(ngModel)]=\"salesQery.selectedFromDate\" ngbDatepicker #d=\"ngbDatepicker\">\n\t\t\t\t      <div class=\"input-group-append\">\n\t\t\t\t        <button class=\"btn btn-outline-secondary calendar fa fa-calendar fa-lg\" (click)=\"d.toggle()\" type=\"button\"></button>\n\t\t\t\t      </div>\n\t\t\t\t    </div>\t\t\t\t   \n\t\t    \t</div>\n\t\t    \t<div class=\"col col-3\" *ngIf=\"salesByDate\">\n\t\t    \t    <label for=\"dpto\">To Date</label>\n\t\t\t    \t<div class=\"input-group\">\t\t\t    \t  \n\t\t\t\t      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t             name=\"dpto\" [(ngModel)]=\"salesQery.selectedToDate\" ngbDatepicker #d=\"ngbDatepicker\">\n\t\t\t\t      <div class=\"input-group-append\">\n\t\t\t\t        <button class=\"btn btn-outline-secondary calendar fa fa-calendar fa-lg\" (click)=\"d.toggle()\" type=\"button\"></button>\n\t\t\t\t      </div>\n\t\t\t\t    </div>\t\t\t\t   \n\t\t    \t</div>\n\t\t    \t<div class=\"col col-3\" *ngIf=\"salesByEmp\">\n\t\t    \t    <label for=\"selEmp\">Employee</label>\t\t\t   \t\n\t\t\t\t    <div class=\"input-group\">\t         \n\t\t\t            <select [(ngModel)]=\"salesQery.selectedEmp\" name=\"selEmp\"class=\"selGroup\">\n\t\t\t\t          \t<option value=\"\">--Select Employee--</option>\n\t\t\t\t\t\t  \t<option *ngFor=\"let emp of allEmployees\" [ngValue]=\"emp\">{{emp.Emp_Name}}</option>\n\t\t\t\t\t   </select>\n\t\t\t        </div>\t\t\t\t   \n\t\t    \t</div>\n\t\t    \t<div class=\"col col-3 seleCol\">\n\t\t    \t   <button type=\"button\" (click)=\"showReports();\" class=\"btn btn-lg\">Sales</button>\n\t\t    \t</div>\t\t    \t\n\t\t    </div>\n\t\t    <div class=\"row form-group\" >\n\t\t    \t<div class=\"col col-3\" *ngIf=\"searchById\">\n\t\t    \t\t<label for=\"billNo\">Search Bill #:</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t            <input type=\"text\"  autocomplete=\"off\" class=\"form-control\" placeholder=\"Bill Number\" name=\"billNo\" [(ngModel)]=\"salesQery.searchBillId\">\n\t\t\t            <span class=\"input-group-btn\">\n\t\t\t\t\t\t    <button (click)=\"searchBillDet()\" title=\"Search for Bill\" class=\"btn btn-default iconClass\" type=\"submit\">\n\t\t\t\t\t\t        <i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t    </button>\n\t\t\t\t\t    </span>\n\t\t\t        </div>\n\t\t        </div>\t\n\t\t    </div>\n\t\t    <div>\n\t\t\t\t<table class=\"table\" *ngIf=\"allBilldetails.length\">\n\t\t\t\t  <thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" rowspan=\"2\">S.No</th>\n\t\t\t\t      <th scope=\"col\" rowspan=\"2\">Bill #</th>\n\t\t\t\t      <th scope=\"col\" colspan=\"2\">Custmar Details</th>\n\t\t\t\t      <th scope=\"col\" rowspan=\"2\">Bill Date</th>\n\t\t\t\t      <th scope=\"col\" rowspan=\"2\">Emp Name</th>\n\t\t\t\t      <th scope=\"col\" rowspan=\"2\">Bill Total</th>\n\t\t\t\t      <th scope=\"col\" rowspan=\"2\">Special Discount</th>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Name</th>\n\t\t\t\t      <th scope=\"col\">Phone Number</th>\n\t\t\t\t    </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t    <tr *ngFor=\"let bill of allBilldetails;index as i\" [ngClass]=\"{'table-warning':i%2==0}\" class=\"hover-row\" (click)=\"showBillDet(bill,content)\">\n\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t<td>{{bill.Bill_Id}}</td>\n\t\t\t\t\t\t<td>{{bill.Cust_Name}}</td>\n\t\t\t\t\t\t<td>{{bill.Cust_Ph_Num}}</td>\t\t\t\t\t\n\t\t\t\t\t\t<td>{{bill.Bill_Date|date:'dd/MM/yyyy'}}</td>\n\t\t\t\t\t\t<td>{{bill.Emp_Name}}</td>\n\t\t\t\t\t\t<td >{{bill.Bill_Total|number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td *ngIf=\"bill.Special_Discount==0\">--</td>\n\t\t\t\t\t\t<td *ngIf=\"bill.Special_Discount!=0\">{{bill.Special_Discount}}%</td>\n\t\t\t\t\t</tr>\t\t\t\t   \n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t </div>\n\t</div>\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">{{showBill.Bill_Id}} Details</h3>\n    <button type=\"button\" class=\"close closeButt\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\" title=\"Close\">&times;</span>\n    </button>  \n  </div>\n  <div class=\"modal-body\">\n  \t<div class=\"row\">\n  \t\t<div class=\"col col-12\">\n  \t\t\t<span>Bill Details</span>\n  \t\t</div>\n  \t</div>\n    <div class=\"row\">\n    \t<div class=\"col col-12\">\n        \t<table class=\"table\">\n\t\t\t\t<thead>\t\t\t\t    \n\t\t\t\t    <tr>\n\t\t\t\t    \t<th scope=\"col\">S.No</th>\n\t\t\t\t\t    <th scope=\"col\" >Custmar Name</th>\n\t\t\t\t\t    <th scope=\"col\">Phone Number</th>\n\t\t\t\t\t    <th scope=\"col\" >Bill Date</th>\n\t\t\t\t\t    <th scope=\"col\" >Emp Name</th>\n\t\t\t\t    </tr>\t\t\t\t  \n\t\t\t\t</thead>\n\t\t\t\t<tbody class=\"table-dark\">\n\t\t\t\t    <tr>\n\t\t\t\t\t\t<td>1</td>\t\t\t\t\t\t\t\n\t\t\t\t\t\t<td>{{showBill.Cust_Name}}</td>\n\t\t\t\t\t\t<td>{{showBill.Cust_Ph_Num}}</td>\t\t\t\n\t\t\t\t\t\t<td>{{showBill.Bill_Date|date:'dd/MM/yyyy'}}</td>\n\t\t\t\t\t\t<td>{{showBill.Emp_Name}}</td>\n\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t   \n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n  \t\t<div class=\"col col-12\">\n  \t\t\t<span>Amount Details</span>\n  \t\t</div>\n  \t</div>\n    <div class=\"row\">\n    \t<div class=\"col col-12\">\n        \t<table class=\"table\">\n\t\t\t\t<thead>\t\t\t\t    \n\t\t\t\t    <tr>\n\t\t\t\t    \t<th scope=\"col\" >S.No</th>\n\t\t\t\t\t    <th scope=\"col\" >Bill Total</th>\n\t\t\t\t\t    <th scope=\"col\" >Special Discount</th>\n\t\t\t\t\t    <th scope=\"col\" >Round Amount</th>\n\t\t\t\t\t    <th scope=\"col\" >Final Amount</th>\n\t\t\t\t    </tr>\t\t\t\t   \n\t\t\t\t</thead>\n\t\t\t\t<tbody class=\"table-dark\">\n\t\t\t\t    <tr>\n\t\t\t\t\t\t<td>1</td>\n\t\t\t\t\t\t<td>{{showBill.Bill_Total|number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td *ngIf=\"showBill.Special_Discount==0\">--</td>\n\t\t\t\t\t\t<td *ngIf=\"showBill.Special_Discount!=0\">{{showBill.Special_Discount}}%</td>\n\t\t\t\t\t\t<td>{{showBill.Bill_Round_Amount|number :'0.2-2'}}</td>\n\t\t\t\t\t\t<td>{{showBill.Bill_Final_Amount|number :'0.2-2'}}</td>\n\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t   \n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n  \t\t<div class=\"col col-12\">\n  \t\t\t<span>Goods Details</span>\n  \t\t</div>\n  \t</div>\n\t<div class=\"row\">\n\t\t\t<div class=\"col col-12\">\n\t        \t<table class=\"table\">\n\t\t\t\t\t  <thead>\t\t\t\t\t   \n\t\t\t\t\t    <tr>\n\t\t\t\t\t    \t<th scope=\"col\" >S.No</th>\n\t\t\t\t\t\t    <th scope=\"col\" >Goods #</th>\n\t\t\t\t\t\t    <th scope=\"col\" >Goods Name</th>\n\t\t\t\t\t\t    <th scope=\"col\">Sold Quantity</th>\n\t\t\t\t\t    </tr>\t\t\t\t\t   \n\t\t\t\t\t  </thead>\n\t\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t\t    <tr *ngFor=\"let item of showBill.billItems;index as i\" [ngClass]=\"{'table-warning':i%2==0}\" >\n\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t<td>{{item.P_ID}}</td>\n\t\t\t\t\t\t\t<td>{{item.P_Name}}</td>\n\t\t\t\t\t\t\t<td>{{item.Sold_Item_Qty}}</td>\n\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t   \n\t\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n        </div>\n  </div>\n  <div class=\"modal-footer\">\t\t\n\t\t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"deleteBillDet()\" >Return Bill</button>\t\t      \n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/sales/sales.component.ts":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.function */ "./src/app/common.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SalesComponent = /** @class */ (function () {
    function SalesComponent(route, titelService, modalService, httpServ, commonFunc) {
        this.route = route;
        this.titelService = titelService;
        this.modalService = modalService;
        this.httpServ = httpServ;
        this.commonFunc = commonFunc;
        titelService.setTitle("Sales");
        this.initializeVal();
        this.allEmployees = [];
        this.getEmployees();
    }
    SalesComponent.prototype.initializeVal = function () {
        this.salesByDate = false;
        this.salesByEmp = false;
        this.searchById = false;
        this.salesQery = {};
        this.dateStr = "";
        this.allBilldetails = [];
        this.minDate = new Date().toJSON().split('T')[0];
    };
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent.prototype.goToDashBor = function () {
        this.route.navigate(["/admin"]);
    };
    SalesComponent.prototype.sales = function (selection) {
        this.salesByDate = false;
        this.salesByEmp = false;
        this.searchById = false;
        selection == "billId" ? this.searchById = true : selection == "emp" ? this.salesByEmp = true : this.salesByDate = true;
        this.salesQery = {};
        this.salesQery.selectedEmp = "";
        this.salesQery.searchBillId = "";
        this.salesQery.selectedFromDate = {};
        this.salesQery.selectedToDate = {};
        this.salesByEmp == true ? this.dateStr = "Date" : this.dateStr = "From Date";
        this.allBilldetails = [];
    };
    SalesComponent.prototype.getEmployees = function () {
        var that = this;
        this.httpServ.getAllUsers().subscribe(function (data) {
            that.allEmployees = data;
        });
    };
    SalesComponent.prototype.showReports = function () {
        var _this = this;
        var dateValid = this.commonFunc.validateDates(this.salesQery.selectedFromDate, this.salesQery.selectedToDate);
        console.log(dateValid);
        if ((this.salesByDate) && (!dateValid)) {
            this.commonFunc.showSwlInfo("From date should be less than to date...");
            return false;
        }
        if (Object.keys(this.salesQery.selectedFromDate).length == 0) {
            this.commonFunc.showSwlInfo("Please select date...");
            return false;
        }
        if ((this.salesByEmp) && (this.salesQery.selectedEmp == "")) {
            this.commonFunc.showSwlInfo("Please select any employee...");
            return false;
        }
        this.httpServ.getSalesReports(this.commonFunc.salesRepQuery(this.salesQery, this.salesByDate, this.salesByEmp)).subscribe(function (data) {
            console.log(data);
            if (data.length == 0) {
                _this.allBilldetails = [];
                _this.commonFunc.showSwlInfo("No Reports found for this query...");
                return false;
            }
            else {
                _this.allBilldetails = data;
            }
        });
    };
    SalesComponent.prototype.searchBillDet = function () {
        var _this = this;
        if (this.salesQery.searchBillId == "" || this.salesQery.searchBillId == undefined) {
            this.commonFunc.showSwlInfo("Please Provide Bill id...");
            return false;
        }
        if (this.salesQery.searchBillId.length != 7) {
            this.commonFunc.showSwlInfo("Bill Id length should be 7...");
            return false;
        }
        this.httpServ.getBillDetById(this.salesQery.searchBillId).subscribe(function (data) {
            if (data.length == 0) {
                _this.allBilldetails = [];
                _this.commonFunc.showSwlInfo("No details found for this bill Id:" + _this.salesQery.searchBillId);
                return false;
            }
            else {
                _this.allBilldetails = data;
            }
        });
    };
    SalesComponent.prototype.showBillDet = function (billInfo, content) {
        var _this = this;
        this.showBill = JSON.parse(JSON.stringify(billInfo));
        var that = this;
        this.httpServ.getBillItemsDet(billInfo.Bill_Id).subscribe(function (data) {
            that.showBill.billItems = data;
            console.log(that.showBill.billItems);
        });
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    SalesComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    SalesComponent.prototype.deleteBillDet = function () {
        var _this = this;
        var that = this;
        this.modalService.dismissAll();
        this.commonFunc.showDelSwl("You want to return this bill...").then(function (success) {
            _this.httpServ.deleteBillDet(_this.showBill.Bill_Id).subscribe(function (data) {
                if (data == "success") {
                    if (_this.searchById)
                        that.initializeVal();
                    else
                        that.showReports();
                }
                else {
                    that.commonFunc.showDelErrSwal("Some error went....");
                }
            });
        }, function (fail) { });
    };
    SalesComponent.prototype.resetBillId = function () {
        var that = this;
        this.commonFunc.showDelSwl("You want to reset Bill id...").then(function (success) {
            that.httpServ.resetBillIds().subscribe(function (data) {
                if (data == "success")
                    that.initializeVal();
            }, function (error) {
                that.commonFunc.showDelErrSwal("Some error went...");
            });
        }, function (fail) { });
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.css */ "./src/app/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__["HTTPSerService"], _common_function__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/ser.name.ts":
/*!*****************************!*\
  !*** ./src/app/ser.name.ts ***!
  \*****************************/
/*! exports provided: ServerName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerName", function() { return ServerName; });
var ServerName = /** @class */ (function () {
    function ServerName() {
        this.server_name = "http://192.168.1.12:5000/";
    }
    ServerName.prototype.getSerName = function () {
        return this.server_name;
    };
    ServerName.prototype.setSerName = function (ser_name) {
        this.server_name = ser_name;
    };
    return ServerName;
}());



/***/ }),

/***/ "./src/app/sin-tax/sin-tax.component.css":
/*!***********************************************!*\
  !*** ./src/app/sin-tax/sin-tax.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleCss{ text-align: center;padding: 7px; }\r\n.addItemClass{ text-align: right; padding-bottom: 8px; }\r\n.addItemClass img{ cursor: pointer; padding-left: 10px; }\r\n.custom-day {\r\n      text-align: center;\r\n      padding: 0.185rem 0.25rem;\r\n      display: inline-block;\r\n      height: 2rem;\r\n      width: 2rem;\r\n    }\r\n.custom-day.focused {\r\n      background-color: #e6e6e6;\r\n    }\r\n.custom-day.range, .custom-day:hover {\r\n      background-color: rgb(2, 117, 216);\r\n      color: white;\r\n    }\r\n.custom-day.faded {\r\n      background-color: rgba(2, 117, 216, 0.5);\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luLXRheC9zaW4tdGF4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxtQkFBbUIsYUFBYSxFQUFFO0FBQzdDLGVBQWUsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUU7QUFDeEQsbUJBQW1CLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFO0FBQ3pEO01BQ00sbUJBQW1CO01BQ25CLDBCQUEwQjtNQUMxQixzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLFlBQVk7S0FDYjtBQUNEO01BQ0UsMEJBQTBCO0tBQzNCO0FBQ0Q7TUFDRSxtQ0FBbUM7TUFDbkMsYUFBYTtLQUNkO0FBQ0Q7TUFDRSx5Q0FBeUM7S0FDMUMiLCJmaWxlIjoic3JjL2FwcC9zaW4tdGF4L3Npbi10YXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUNzc3sgdGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDdweDsgfVxyXG4uYWRkSXRlbUNsYXNzeyB0ZXh0LWFsaWduOiByaWdodDsgcGFkZGluZy1ib3R0b206IDhweDsgfVxyXG4uYWRkSXRlbUNsYXNzIGltZ3sgY3Vyc29yOiBwb2ludGVyOyBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cclxuLmN1c3RvbS1kYXkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICB3aWR0aDogMnJlbTtcclxuICAgIH1cclxuICAgIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/sin-tax/sin-tax.component.html":
/*!************************************************!*\
  !*** ./src/app/sin-tax/sin-tax.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n\t<div class=\"container-billItem100\">\t\t\n\t\t<div class=\"container\">\t\t    \n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t \t<img src=\"./assets/images/back.png\" class=\"backButtonCss\" title=\"Dashboard\" (click)=\"goToDashBor();\">\n\t\t         \t<div class=\"box-part text-center\">\n\t\t\t            <div class=\"project prjHed\">  \n\t\t                    <span class=\"headerDashB\">Shop Info and Tax(s)</span>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\t\n\t\t    </div>\n\t\t    <div class=\"row titleCss\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t\t<h2>Shop Details</h2>\n\t\t    \t</div>\n\t\t    </div>\n\t\t    <div>\n\t\t    \t<table class=\"table\">\n\t\t\t\t\t  <thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">Shop Name</th>\n\t\t\t\t\t      <th scope=\"col\">Mobile No</th>\n\t\t\t\t\t      <th scope=\"col\">Address</th>\n\t\t\t\t\t      <th scope=\"col\">GSTIN</th>\n\t\t\t\t\t    </tr>\n\t\t\t\t\t  </thead>\n\t\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t\t    <tr class=\"hover-row table-warning\" (click)=\"openInfo('shop',content)\">\t\n\t\t\t\t\t\t\t<td>{{shopInfo_RO.shop_name}}</td>\t\n\t\t\t\t\t\t\t<td>+91-{{shopInfo_RO.shop_ph_num}}</td>\n\t\t\t\t\t\t\t<td>{{shopInfo_RO.shop_no}},{{shopInfo_RO.shop_street}},{{shopInfo_RO.shop_area}},{{shopInfo_RO.shop_city}},<br/>{{shopInfo_RO.pincode}}</td>\n\t\t\t\t\t\t\t<td>{{shopInfo_RO.shop_gstin_num}}</td>\n\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t    </div>\n\t\t    <div class=\"row titleCss\">\n\t\t    \t<div class=\"col col-12\">\n\t\t    \t\t<h2>Tax Details</h2>\n\t\t    \t</div>\n\t\t    </div>\n\t\t    <div>\n\t\t    \t<table class=\"table\">\n\t\t\t\t\t  <thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">S.No</th>     \n\t\t\t\t\t      <th scope=\"col\">Tax Type</th>\n\t\t\t\t\t      <th scope=\"col\">CGST</th>\n\t\t\t\t\t      <th scope=\"col\">SGST</th>\t\t\t\t      \n\t\t\t\t\t    </tr>\n\t\t\t\t\t  </thead>\n\t\t\t\t\t  <tbody class=\"table-dark\">\n\t\t\t\t\t    <tr *ngFor=\"let tax of allTaxesArr;index as i\" [ngClass]=\"{'table-warning':i%2==0}\" class=\"hover-row\" (click)=\"openInfo('tax',content,tax)\">\t\t\n\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t<td>{{tax.tax_type}}</td>\n\t\t\t\t\t\t\t<td>{{tax.cgst|number:'1.2-2'}}</td>\n\t\t\t\t\t\t\t<td>{{tax.sgst|number:'1.2-2'}}</td>\n\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t    </div>\n\t\t </div>\n\t</div>\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-basic-title\">{{modTitle}} Info.</h3>\n    <button type=\"button\" class=\"close closeButt\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\" title=\"Close\">&times;</span>\n    </button>    \n  </div>\n  <div class=\"modal-body\" >\n    <form>\n      <div class=\"form-group\" *ngIf=\"shoinfoClick\">\n       <div class=\"row\">\n          <div class='col col-3'>\n          \t<label for=\"sName\">Shop Name</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"text\" class=\"form-control\" name=\"sname\" [(ngModel)]=\"shopInfo.shop_name\">\n\t        </div>\n          </div>          \n          <div class='col col-3'>\n          \t<label for=\"smobilenum\">Mobile Number</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" type=\"number\" placeholder=\"Mobile number\" name=\"smobilenum\" [(ngModel)]=\"shopInfo.shop_ph_num\">\n\t        </div>\n          </div>   \n          <div class='col col-4'>\n          \t<label for=\"gstin_num\">GSTIN</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" type=\"text\" placeholder=\"GSIN Number\" name=\"gstin_num\" [(ngModel)]=\"shopInfo.shop_gstin_num\">\n\t        </div>\n          </div>      \n          <div class='col col-2'>\n          \t<label for=\"saddr1\">Shop #:</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" placeholder=\"Shop Number\" name=\"saddr1\" [(ngModel)]=\"shopInfo.shop_no\">\n\t        </div>\n          </div>         \n        </div>\n        <br/>\n        <div class=\"row\">         \n          <div class='col col-3'>\n          \t<label for=\"saddr2\">Street :</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" placeholder=\"Street Name\" name=\"saddr2\" [(ngModel)]=\"shopInfo.shop_street\">\n\t        </div>\n          </div>\n          <div class='col col-3'>\n          \t<label for=\"saddr3\">Area :</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" placeholder=\"Area\" name=\"saddr3\" [(ngModel)]=\"shopInfo.shop_area\">\n\t        </div>\n          </div>\n          <div class='col col-3'>\n          \t<label for=\"saddr4\">City :</label>\n\t        <div class=\"input-group\">\n\t          <input class=\"form-control\" placeholder=\"City\" name=\"saddr4\" [(ngModel)]=\"shopInfo.shop_city\">\n\t        </div>\n          </div>\n          <div class='col col-3'>\n          \t<label for=\"saddr5\">Pincode :</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"number\" class=\"form-control\" placeholder=\"Pincode\" name=\"saddr5\" [(ngModel)]=\"shopInfo.pincode\">\n\t        </div>\n          </div>        \n        </div>       \n      </div>\n      <div class=\"form-group\" *ngIf=\"taxinfoClick\">\n       <div class=\"row\">\n          <div class='col col-4'>\n          \t<label for=\"taxtype\">Tax Type :</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"text\" [disabled]=\"true\" class=\"form-control\" name=\"taxtype\" [(ngModel)]=\"editTax.tax_type\">\n\t        </div>\n          </div>\n          <div class='col col-2'>\n          \t<label for=\"cgst\">CGST(%) :</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"number\" class=\"form-control\" placeholder=\"CGST\" name=\"cgst\" [(ngModel)]=\"editTax.cgst\">\n\t        </div>\n          </div>\n          <div class='col col-2'>\n          \t<label for=\"sgst\">SGST(%) :</label>\n\t        <div class=\"input-group\">\n\t          <input type=\"number\" class=\"form-control\" placeholder=\"SGST\" name=\"sgst\" [(ngModel)]=\"editTax.sgst\">\n\t        </div>\n          </div>          \n        </div>             \n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\t\t\n\t\t<button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"updateInfo()\">Update</button>\n\t\t<!-- <button type=\"button\" class=\"btn btn-lg btn-outline-dark\" (click)=\"modal.close()\">Close</button> -->      \n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/sin-tax/sin-tax.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sin-tax/sin-tax.component.ts ***!
  \**********************************************/
/*! exports provided: SinTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinTaxComponent", function() { return SinTaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HttpServer.service */ "./src/app/HttpServer.service.ts");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.function */ "./src/app/common.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SinTaxComponent = /** @class */ (function () {
    function SinTaxComponent(route, titelService, modalService, httpServ, calendar, commonFunc) {
        this.route = route;
        this.titelService = titelService;
        this.modalService = modalService;
        this.httpServ = httpServ;
        this.commonFunc = commonFunc;
        titelService.setTitle("Info N Tax");
        this.shopInfo = {};
        this.shopInfo_RO = {};
        this.allTaxesArr = [];
        this.addNewTaxInfo = {};
        this.editTax = {};
        this.getAllTaxes();
        this.getShopInfo();
    }
    SinTaxComponent.prototype.ngOnInit = function () {
    };
    SinTaxComponent.prototype.goToDashBor = function () {
        this.route.navigate(["/admin"]);
    };
    SinTaxComponent.prototype.getAllTaxes = function () {
        var that = this;
        this.httpServ.getAllTaxes().subscribe(function (data) {
            that.allTaxesArr = data;
        });
    };
    SinTaxComponent.prototype.getShopInfo = function () {
        var that = this;
        this.httpServ.getShopInfo().subscribe(function (data) {
            that.shopInfo_RO = data[0];
        });
    };
    SinTaxComponent.prototype.openInfo = function (param, content, tax) {
        this.shoinfoClick = false;
        this.taxinfoClick = false;
        if (param == "shop") {
            this.modTitle = "Shop";
            this.shoinfoClick = true;
            this.shopInfo = JSON.parse(JSON.stringify(this.shopInfo_RO));
        }
        else if (param == "tax") {
            this.editTax = JSON.parse(JSON.stringify(tax));
            this.modTitle = "Tax";
            this.taxinfoClick = true;
        }
        this.openModel(content);
    };
    SinTaxComponent.prototype.openModel = function (modelName) {
        var _this = this;
        this.modalService.open(modelName, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", keyboard: false }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    SinTaxComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    SinTaxComponent.prototype.updateInfo = function () {
        if (this.shoinfoClick)
            this.updateShopInfo();
        else
            this.updateTaxInfo();
    };
    SinTaxComponent.prototype.updateShopInfo = function () {
        if (!this.commonFunc.checkForEmptyValues(this.shopInfo)) {
            this.commonFunc.showSwlInfo("All values are required...");
            return false;
        }
        if (((this.shopInfo.pincode).toString().indexOf(".") != -1) || ((this.shopInfo.pincode).toString().length != 6)) {
            this.commonFunc.showSwlInfo("Invalid pincode");
            return false;
        }
        if ((this.shopInfo.shop_ph_num).toString().length != 10) {
            this.commonFunc.showSwlInfo("Mobile number should be 10 digits");
            return false;
        }
        var that = this;
        this.httpServ.updateShopInfo(this.shopInfo).subscribe(function (data) {
            that.modalService.dismissAll();
            that.getShopInfo();
        });
    };
    SinTaxComponent.prototype.updateTaxInfo = function () {
        if ((this.editTax.cgst == "") || (this.editTax.sgst == "")) {
            this.commonFunc.showSwlInfo("Please fill all the fields...");
            return false;
        }
        if (!(this.commonFunc.isValidDecimalRNum([this.editTax.cgst, this.editTax.sgst]))) {
            this.commonFunc.showSwlInfo("Invalid tax values....");
            return false;
        }
        var that = this;
        this.httpServ.updateTaxInfo(this.editTax).subscribe(function (data) {
            that.modalService.dismissAll();
            that.getAllTaxes();
        });
    };
    SinTaxComponent.prototype.addNewTax = function (content) {
        this.openModel(content);
    };
    SinTaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sin-tax',
            template: __webpack_require__(/*! ./sin-tax.component.html */ "./src/app/sin-tax/sin-tax.component.html"),
            styles: [__webpack_require__(/*! ./sin-tax.component.css */ "./src/app/sin-tax/sin-tax.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _HttpServer_service__WEBPACK_IMPORTED_MODULE_4__["HTTPSerService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], _common_function__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"]])
    ], SinTaxComponent);
    return SinTaxComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Apart Office\GarmApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map