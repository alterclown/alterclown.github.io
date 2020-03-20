(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.html": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.html ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n    <button mat-mini-fab (click)=\"addAccountDetail()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n      <input matInput  placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\">\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"  (click)=\"onSearchClear()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <!-- <mat-card-content>\n    <div class=\"mat-elevation-z8\">\n      <table class=\"table\">\n        <thead>\n          <th>Account Group Detail Id</th>\n          <th>Account Group Name</th>\n          <th>Group Under</th>\n          <th>Affect Gross Profit</th>\n          <th>Narration</th>\n          <th>Nature</th>\n          <th>Extra1</th>\n          <th>Extra2</th>\n          <th>Edit/Delete</th>\n         \n        </thead>\n        <tr *ngFor=\"let account of addAccountDetailList\">\n          <td>{{account.AccountGroupDetailId}}</td>\n          <td>{{account.AccountGroupName}}</td>\n          <td>{{account.GroupUnder}}</td>\n          <td>{{account.AffectGrossProfit}}</td>\n          <td>{{account.Narration}}</td>\n          <td>{{account.Nature}}</td>\n          <td>{{account.Extra1}}</td>\n          <td>{{account.Extra2}}</td>\n          <td>\n              <button mat-icon-button color=\"accent\"(click)=\"editAccountDetail(account.Id)\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button color=\"warn\" (click)=\"deleteAccountDetail(account.Id)\"><mat-icon>delete_outline</mat-icon></button>\n          </td>\n       </tr>\n       </table>\n      </div>\n  </mat-card-content> -->\n\n  <div style=\"float:left;padding:10px;margin:0 auto;\" *ngIf=\"myBooks\">\n    <table>\n        <tr>\n            <th>Book ID</th>\n                <th>Book Name</th>\n                    <th>Category</th>\n                        <th>Price</th>\n        </tr>\n        <tr *ngFor=\"let books of myBooks\">    <!-- LOOP -->\n            <td>{{books.AccountGroupDetailId}}</td>\n                <td>{{books.AccountGroupName}}</td>\n                    <td>{{books.GroupUnder}}</td>\n                        <td>{{books.AffectGrossProfit}}</td>\n        </tr>\n    </table>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account-group-detail/account-group-detail.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-group-detail/account-group-detail.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  <mat-toolbar>\n    <span></span>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\"><mat-icon>clear</mat-icon></button>\n  </mat-toolbar>\n  <form [formGroup]=\"_accountForm\" class=\"normal-form\">\n    <mat-grid-list cols=\"2\" rowHeight=\"550px\">\n      <mat-grid-tile>\n        <div class=\"controles-container\">\n          <!-- <input type=\"hidden\" formControlName=\"$key\"> -->\n           <mat-form-field>\n            <input formControlName=\"AccountGroupDetailId\" matInput placeholder=\"Account GroupDetail Id\">\n            <mat-error>This field is mandatory.</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input formControlName=\"AccountGroupName\" matInput placeholder=\"Account GroupName\">\n            <mat-error>Invalid email address.</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input formControlName=\"GroupUnder\" matInput placeholder=\"Group Under\">\n          </mat-form-field>\n          <mat-form-field>\n            <input formControlName=\"AffectGrossProfit\" matInput placeholder=\"Affect Gross Profit\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input formControlName=\"ExtraDate\" matInput placeholder=\"Extra Date\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input formControlName=\"Narration\" matInput placeholder=\"Narration\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input formControlName=\"Nature\" matInput placeholder=\"Nature\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input formControlName=\"Extra1\" matInput placeholder=\"Extra1\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input formControlName=\"Extra2\" matInput placeholder=\"Extra2\">\n          </mat-form-field>\n        </div>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <div class=\"controles-container\">          \n          <div class=\"button-row\">\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" >Submit</button>\n            <button mat-raised-button color=\"warn\" (click)=\"onClear()\">Clear</button>\n          </div>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </form>\n\n  <!-- <h1 mat-dialog-title> <strong></strong></h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input formControlName=\"AddTaxesId\" matInput placeholder=\"Add Taxes Id*\">\n    <mat-error>This field is mandatory.</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input formControlName=\"TaxName\" matInput placeholder=\"Tax Name\">\n    <mat-error>Invalid email address.</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input formControlName=\"TaxValue\" matInput placeholder=\"Tax Value*\">\n  </mat-form-field>\n  <mat-form-field>\n    <input formControlName=\"Status\" matInput placeholder=\"Status\">\n  </mat-form-field>\n  <ng-template #elseTemplate>\n    Sure to delete <b></b>?\n  </ng-template>\n</div>\n<div mat-dialog-actions>\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" >Submit</button>\n    <button mat-raised-button color=\"warn\">Clear</button>\n  </div>\n</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-tax/add-tax-list/add-tax-list.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-tax/add-tax-list/add-tax-list.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n    <button mat-mini-fab  (click)=\"addAddTax()\">\n      <mat-icon>add</mat-icon>\n    </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n      <input matInput  placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"  (click)=\"onSearchClear()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <div class=\"mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\"  matSort>\n      <ng-container matColumnDef=\"addtaxid\">\n        <mat-header-cell *matHeaderCellDef  mat-sort-header>Add Taxes Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.AddTaxesId}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"taxname\">\n        <mat-header-cell *matHeaderCellDef  mat-sort-header>Tax Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.TaxName}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"taxvalue\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Tax Value</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.TaxValue}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.Status}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button (click)=\"editAddTax(row.id)\"><mat-icon>launch</mat-icon></button>\n          <button mat-icon-button color=\"warn\" (click)=\"deleteAddTax(row.id)\"><mat-icon>delete_outline</mat-icon></button>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"loading\">\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\n          Loading data...\n        </mat-footer-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"noData\">\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\n          No data.\n        </mat-footer-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      <mat-footer-row *matFooterRowDef=\"['loading']\"[ngClass]=\"{'hide':dataSource!=null}\" ></mat-footer-row>\n      <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(dataSource!=null && dataSource.data.length==0)}\"></mat-footer-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\n  </div>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-tax/add-tax.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-tax/add-tax.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  <!-- <mat-toolbar>\n    <span></span>\n    <span class=\"fill-remaining-space\" ></span>\n  </mat-toolbar> -->\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\"><mat-icon>clear</mat-icon></button>\n  \n  <form [formGroup]=\"_taxForm\" class=\"normal-form\">\n    <mat-grid-list cols=\"1\" rowHeight=\"250px\" >\n      <mat-grid-tile>\n        <div class=\"controles-container\">\n          <!-- <input type=\"hidden\" formControlName=\"$key\"> -->\n          <mat-form-field>\n            <input formControlName=\"AddTaxesId\" matInput placeholder=\"Add Taxes Id*\">\n            <mat-error>This field is mandatory.</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input formControlName=\"TaxName\" matInput placeholder=\"Tax Name\">\n            <mat-error>Invalid email address.</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input formControlName=\"TaxValue\" matInput placeholder=\"Tax Value*\">\n          </mat-form-field>\n          <mat-form-field>\n            <input formControlName=\"Status\" matInput placeholder=\"Status\">\n          </mat-form-field>\n        </div>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <div class=\"controles-container\">          \n          <div class=\"button-row\">\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" >Submit</button>\n            <button mat-raised-button color=\"warn\" (click)=\"onClear()\">Clear</button>\n          </div>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </form>\n<!-- \n  <h1 mat-dialog-title> <strong></strong></h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input formControlName=\"AddTaxesId\" matInput placeholder=\"Add Taxes Id*\">\n    <mat-error>This field is mandatory.</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input formControlName=\"TaxName\" matInput placeholder=\"Tax Name\">\n    <mat-error>Invalid email address.</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input formControlName=\"TaxValue\" matInput placeholder=\"Tax Value*\">\n  </mat-form-field>\n  <mat-form-field>\n    <input formControlName=\"Status\" matInput placeholder=\"Status\">\n  </mat-form-field>\n  <ng-template #elseTemplate>\n    Sure to delete <b></b>?\n  </ng-template>\n</div>\n<div mat-dialog-actions>\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" >Submit</button>\n    <button mat-raised-button color=\"warn\" (click)=\"onClear()\">Clear</button>\n  </div>\n</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (" <app-navbar></app-navbar>\n<!-- <app-dashboard></app-dashboard>  -->\n<router-outlet></router-outlet> \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands-add/brands-add-list/brands-add-list.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brands-add/brands-add-list/brands-add-list.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Brands-add Works</h1>>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands-add/brands-add.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brands-add/brands-add.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>brands-add works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-list/customers-list.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-list/customers-list.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n    <button mat-mini-fab (click)=\"test()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    <!-- <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n      <input matInput  placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\">\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"  (click)=\"onSearchClear()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field> -->\n  </div>\n  <mat-card-content>\n    <div class=\"mat-elevation-z8\">\n      <table class=\"table\">\n        <thead>\n          <th>Customer ID</th>\n          <th>Name</th>\n          <th>Company</th>\n          <th>Company Address</th>\n\n          <!-- <th>Delete</th> -->\n        </thead>\n        <tr *ngFor=\"let customer of customerList\">\n          <td>{{customer.CustomerId}}</td>\n          <td>{{customer.Name}}</td>\n          <td>{{customer.Company}}</td>\n          <td>{{customer.CompanyAddress}}</td>\n          <!-- <td>\n              <button mat-icon-button color=\"accent\"(click)=\"editAccountDetail(account.Id)\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button color=\"warn\" (click)=\"deleteAccountDetail(account.Id)\"><mat-icon>delete_outline</mat-icon></button>\n          </td> -->\n       </tr>\n       </table>\n      </div>\n  </mat-card-content>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>customers works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\n    <button class=\"button\" mat-raised-button  routerLink=\"app-add-tax-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Tax\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-customers-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Customers\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-employees-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Employees\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-product-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Products\n    </button>\n</div>\n<div class=\"box\">\n    <button class=\"button\" mat-raised-button  routerLink=\"app-add-tax-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Tax\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n</div>\n\n<div class=\"box\">\n    <button class=\"button\" mat-raised-button  routerLink=\"app-add-tax-list\" routerLinkActive=\"active\">\n        <mat-icon>note_add</mat-icon>\n    </button>\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-account-group-detail-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add Account\n    </button>\n</div>\n\n\n\n<!-- <router-outlet></router-outlet> -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-list/employees-list.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-list/employees-list.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n  <button mat-mini-fab (click)=\"test()\">\n      <mat-icon>add</mat-icon>\n    </button>\n  <!-- <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput  placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"  (click)=\"onSearchClear()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field> -->\n</div>\n<mat-card-content>\n  <div class=\"mat-elevation-z8\">\n    <table class=\"table\">\n      <thead>\n        <th>Employees ID</th>\n        <th>Employees Name</th>\n        <th>Designation</th>\n        <th>Mobile No </th>\n\n\n        <!-- <th>Delete</th> -->\n      </thead>\n      <tr *ngFor=\"let employee of employeeList\">\n        <td>{{employee.EmployeesId}}</td>\n        <td>{{employee.EmployeesName}}</td>\n        <td>{{employee.Designation}}</td>\n        <td>{{employee.MobileNo}}</td>\n        <!-- <td>\n            <button mat-icon-button color=\"accent\"(click)=\"editAccountDetail(account.Id)\"><mat-icon>edit</mat-icon></button>\n            <button mat-icon-button color=\"warn\" (click)=\"deleteAccountDetail(account.Id)\"><mat-icon>delete_outline</mat-icon></button>\n        </td> -->\n     </tr>\n     </table>\n    </div>\n</mat-card-content>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>employees works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color =\"primary\" class=\"navbar\">\n    <div>Accounting\n        <a  routerLink=\"app-dashboard\" routerLinkActive=\"active\"></a>\n    </div>\n    <div>\n     <span >Login</span>\n     <span></span>\n\n    </div>\n </mat-toolbar>\n\n ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n  <button mat-mini-fab (click)=\"test()\">\n      <mat-icon>add</mat-icon>\n    </button>\n  <!-- <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput  placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"  (click)=\"onSearchClear()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field> -->\n</div>\n<mat-card-content>\n  <div class=\"mat-elevation-z8\">\n    <table class=\"table\">\n      <thead>\n        <th>Product ID</th>\n        <th>Product Name</th>\n        <th>Location</th>\n        <th>Product Warehouse</th>\n\n        <!-- <th>Delete</th> -->\n      </thead>\n      <tr *ngFor=\"let product of productList\">\n        <td>{{product.ProductID}}</td>\n        <td>{{product.ProductName}}</td>\n        <td>{{product.Location}}</td>\n        <td>{{product.ProductWarehouse}}</td>\n        <!-- <td>\n            <button mat-icon-button color=\"accent\"(click)=\"editAccountDetail(account.Id)\"><mat-icon>edit</mat-icon></button>\n            <button mat-icon-button color=\"warn\" (click)=\"deleteAccountDetail(account.Id)\"><mat-icon>delete_outline</mat-icon></button>\n        </td> -->\n     </tr>\n     </table>\n    </div>\n</mat-card-content>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>products works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.css": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.css ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtZ3JvdXAtZGV0YWlsL2FjY291bnQtZ3JvdXAtZGV0YWlsLWxpc3QvYWNjb3VudC1ncm91cC1kZXRhaWwtbGlzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: AccountGroupDetailListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountGroupDetailListComponent", function () { return AccountGroupDetailListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_account_group_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/account-group-detail.service */ "./src/app/account-group-detail/services/account-group-detail.service.ts");
            /* harmony import */ var _account_group_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account-group-detail.component */ "./src/app/account-group-detail/account-group-detail.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AccountGroupDetailListComponent = /** @class */ (function () {
                function AccountGroupDetailListComponent(dialog, service, httpService) {
                    this.dialog = dialog;
                    this.service = service;
                    this.httpService = httpService;
                    this.displayedColumns = ['accountGroupDetailId', 'accountGroupName', 'groupUnder', 'affectGrossProfit', 'extraDate', 'narration', 'nature', 'extra1', 'extra2', 'actions'];
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.service.getAccountDetail());
                    this.accountDetailList = [];
                }
                AccountGroupDetailListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this.accountDetailList = this.service.getAccount();
                    this.httpService.get('https://localhost:44330/api/AccountGroupDetail/GetAccountGroupDetail').subscribe(function (data) {
                        _this.myBooks = data;
                    });
                };
                Object.defineProperty(AccountGroupDetailListComponent.prototype, "addAccountDetailList", {
                    get: function () {
                        return this.service.getAccount();
                    },
                    enumerable: true,
                    configurable: true
                });
                AccountGroupDetailListComponent.prototype.addAccountDetail = function () {
                    var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
                    this.isPopupOpened = true;
                    var dialogRef = this.dialog.open(_account_group_detail_component__WEBPACK_IMPORTED_MODULE_4__["AccountGroupDetailComponent"], {
                        data: {}
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                    });
                    dialogConfig.width = '60px';
                };
                AccountGroupDetailListComponent.prototype.editAccountDetail = function (id) {
                    this.isPopupOpened = true;
                    var account = this.service.getAccountDetail().filter(function (c) { return c.AccountGroupDetailId === id; });
                    var dialogRef = this.dialog.open(_account_group_detail_component__WEBPACK_IMPORTED_MODULE_4__["AccountGroupDetailComponent"], {
                        data: {}
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        data: account;
                    });
                };
                AccountGroupDetailListComponent.prototype.deleteAccountDetail = function (id) {
                    this.service.deleteAccountDetail(id);
                };
                return AccountGroupDetailListComponent;
            }());
            AccountGroupDetailListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _services_account_group_detail_service__WEBPACK_IMPORTED_MODULE_3__["AccountGroupDetailService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
            ]; };
            AccountGroupDetailListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-account-group-detail-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-group-detail-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-group-detail-list.component.css */ "./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.css")).default]
                })
            ], AccountGroupDetailListComponent);
            /***/ 
        }),
        /***/ "./src/app/account-group-detail/account-group-detail.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/account-group-detail/account-group-detail.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtZ3JvdXAtZGV0YWlsL2FjY291bnQtZ3JvdXAtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/account-group-detail/account-group-detail.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/account-group-detail/account-group-detail.component.ts ***!
          \************************************************************************/
        /*! exports provided: AccountGroupDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountGroupDetailComponent", function () { return AccountGroupDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_account_group_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/account-group-detail.service */ "./src/app/account-group-detail/services/account-group-detail.service.ts");
            var AccountGroupDetailComponent = /** @class */ (function () {
                function AccountGroupDetailComponent(_formBuilder, data, _accountservice, dialogRef) {
                    this._formBuilder = _formBuilder;
                    this.data = data;
                    this._accountservice = _accountservice;
                    this.dialogRef = dialogRef;
                }
                AccountGroupDetailComponent.prototype.ngOnInit = function () {
                    this._accountForm = this._formBuilder.group({
                        AccountGroupDetailId: [this.data.AccountGroupDetailId],
                        AccountGroupName: [this.data.AccountGroupName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        GroupUnder: [this.data.GroupUnder, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        AffectGrossProfit: [this.data.AffectGrossProfit, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        ExtraDate: [this.data.ExtraDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        Narration: [this.data.Narration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        Nature: [this.data.Nature, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        Extra1: [this.data.Extra1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        Extra2: [this.data.Extra2, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                };
                AccountGroupDetailComponent.prototype.onSubmit = function () {
                    if (isNaN(this.data.ID)) {
                        this._accountservice.addAccountDetail(this._accountForm.value);
                        this.dialogRef.close();
                    }
                    else {
                        this._accountservice.deleteAccountDetail(this._accountForm.value);
                        this.dialogRef.close();
                    }
                };
                AccountGroupDetailComponent.prototype.onClose = function () {
                    this.dialogRef.close();
                };
                return AccountGroupDetailComponent;
            }());
            AccountGroupDetailComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _services_account_group_detail_service__WEBPACK_IMPORTED_MODULE_4__["AccountGroupDetailService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            AccountGroupDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-account-group-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-group-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account-group-detail/account-group-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-group-detail.component.css */ "./src/app/account-group-detail/account-group-detail.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], AccountGroupDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/account-group-detail/services/account-group-detail.service.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/account-group-detail/services/account-group-detail.service.ts ***!
          \*******************************************************************************/
        /*! exports provided: AccountGroupDetailService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountGroupDetailService", function () { return AccountGroupDetailService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AccountGroupDetailService = /** @class */ (function () {
                function AccountGroupDetailService(httpClient, httpService) {
                    this.httpClient = httpClient;
                    this.httpService = httpService;
                    this._list = [];
                    this._accountDetail = [];
                    this._addAccountDetail = [
                        { AccountGroupDetailId: 1, AccountGroupName: 'Hydrogen', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                        { AccountGroupDetailId: 1, AccountGroupName: 'Helium', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                        { AccountGroupDetailId: 1, AccountGroupName: 'Lithium', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                        { AccountGroupDetailId: 1, AccountGroupName: 'Boron', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                        { AccountGroupDetailId: 1, AccountGroupName: 'Hydrogen', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                        { AccountGroupDetailId: 1, AccountGroupName: 'Helium', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                        { AccountGroupDetailId: 1, AccountGroupName: 'Lithium', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                        { AccountGroupDetailId: 1, AccountGroupName: 'Beryllium', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                        { AccountGroupDetailId: 1, AccountGroupName: 'Boron', GroupUnder: 'acc', AffectGrossProfit: 8, ExtraDate: 'sd', Narration: 'asd', Nature: 're', Extra1: 'ex1', Extra2: 'ex2' },
                    ];
                }
                AccountGroupDetailService.prototype.addAccountDetail = function (addAccountDetail) {
                    addAccountDetail.AccountGroupDetailId = this._addAccountDetail.length + 1;
                    this._addAccountDetail.push(addAccountDetail);
                };
                AccountGroupDetailService.prototype.editAccountDetail = function (addAccountDetail) {
                    var index = this._addAccountDetail.findIndex(function (c) { return c.AccountGroupDetailId === addAccountDetail.AccountGroupDetailId; });
                    this._addAccountDetail[index] = addAccountDetail;
                    this._addAccountDetail.push(addAccountDetail);
                };
                AccountGroupDetailService.prototype.deleteAccountDetail = function (id) {
                    var addTax = this._addAccountDetail.findIndex(function (c) { return c.AccountGroupDetailId === id; });
                    this._addAccountDetail.splice(addTax, 1);
                };
                AccountGroupDetailService.prototype.getAccountDetail = function () {
                    return this._addAccountDetail;
                };
                AccountGroupDetailService.prototype.getAccount = function () {
                    var _this = this;
                    this.httpService.get('https://localhost:44330/api/AccountGroupDetail/GetAccountGroupDetail').subscribe(function (data) {
                        _this._accountDetail = data;
                    });
                };
                //   getAccount(){
                //     return this.httpClient.get('https://localhost:44330/api/AccountGroupDetail/GetAccountGroupDetail').subscribe((res: AccountGroupDetail) => {
                //       return <AccountGroupDetail><unknown>{
                //         id: res.AccountGroupDetailId,
                //         title: res.AccountGroupName
                //       };
                //   }
                // }
                AccountGroupDetailService.prototype.getAll = function () {
                    return this.httpClient.get('https://localhost:44330/api/AccountGroupDetail/GetAccountGroupDetail');
                };
                return AccountGroupDetailService;
            }());
            AccountGroupDetailService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AccountGroupDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AccountGroupDetailService);
            /***/ 
        }),
        /***/ "./src/app/add-tax/add-tax-list/add-tax-list.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/add-tax/add-tax-list/add-tax-list.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC10YXgvYWRkLXRheC1saXN0L2FkZC10YXgtbGlzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/add-tax/add-tax-list/add-tax-list.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/add-tax/add-tax-list/add-tax-list.component.ts ***!
          \****************************************************************/
        /*! exports provided: AddTaxListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaxListComponent", function () { return AddTaxListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_add_tax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/add-tax.service */ "./src/app/add-tax/services/add-tax.service.ts");
            /* harmony import */ var _add_tax_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-tax.component */ "./src/app/add-tax/add-tax.component.ts");
            var AddTaxListComponent = /** @class */ (function () {
                function AddTaxListComponent(dialog, service) {
                    this.dialog = dialog;
                    this.service = service;
                    this.displayedColumns = ['addtaxid', 'taxname', 'taxvalue', 'status', 'actions'];
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.service._addTaxList);
                }
                AddTaxListComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(AddTaxListComponent.prototype, "addTaxtList", {
                    get: function () {
                        return this.service.getAddTax();
                    },
                    enumerable: true,
                    configurable: true
                });
                AddTaxListComponent.prototype.addAddTax = function () {
                    var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
                    this.isPopupOpened = true;
                    var dialogRef = this.dialog.open(_add_tax_component__WEBPACK_IMPORTED_MODULE_4__["AddTaxComponent"], {
                        data: {}
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                    });
                    dialogConfig.width = '60px';
                };
                AddTaxListComponent.prototype.editAddTax = function (id) {
                    this.isPopupOpened = true;
                    var tax = this.service.getAddTax().find(function (c) { return c.AddTaxesId === id; });
                    var dialogRef = this.dialog.open(_add_tax_component__WEBPACK_IMPORTED_MODULE_4__["AddTaxComponent"], {
                        data: {}
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        data: tax;
                    });
                };
                AddTaxListComponent.prototype.deleteAddTax = function (id) {
                    this.service.deleteAddTax(id);
                };
                return AddTaxListComponent;
            }());
            AddTaxListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _services_add_tax_service__WEBPACK_IMPORTED_MODULE_3__["AddTaxService"] }
            ]; };
            AddTaxListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-tax-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-tax-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-tax/add-tax-list/add-tax-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-tax-list.component.css */ "./src/app/add-tax/add-tax-list/add-tax-list.component.css")).default]
                })
            ], AddTaxListComponent);
            /***/ 
        }),
        /***/ "./src/app/add-tax/add-tax.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/add-tax/add-tax.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC10YXgvYWRkLXRheC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/add-tax/add-tax.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/add-tax/add-tax.component.ts ***!
          \**********************************************/
        /*! exports provided: AddTaxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaxComponent", function () { return AddTaxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_add_tax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/add-tax.service */ "./src/app/add-tax/services/add-tax.service.ts");
            var AddTaxComponent = /** @class */ (function () {
                function AddTaxComponent(_formBuilder, data, _taxservice, dialogRef) {
                    this._formBuilder = _formBuilder;
                    this.data = data;
                    this._taxservice = _taxservice;
                    this.dialogRef = dialogRef;
                }
                AddTaxComponent.prototype.ngOnInit = function () {
                    this._taxForm = this._formBuilder.group({
                        AddTaxesId: [this.data.AddTaxesId],
                        TaxName: [this.data.TaxName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        TaxValue: [this.data.TaxValue, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        Status: [this.data.Status, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    });
                };
                AddTaxComponent.prototype.onSubmit = function () {
                    if (isNaN(this.data.ID)) {
                        this._taxservice.addAddTax(this._taxForm.value);
                        this.dialogRef.close();
                    }
                    else {
                        this._taxservice.deleteAddTax(this._taxForm.value);
                        this.dialogRef.close();
                    }
                };
                AddTaxComponent.prototype.onClose = function () {
                    this.dialogRef.close();
                };
                return AddTaxComponent;
            }());
            AddTaxComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _services_add_tax_service__WEBPACK_IMPORTED_MODULE_4__["AddTaxService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            AddTaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-tax',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-tax.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-tax/add-tax.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-tax.component.css */ "./src/app/add-tax/add-tax.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], AddTaxComponent);
            /***/ 
        }),
        /***/ "./src/app/add-tax/services/add-tax.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/add-tax/services/add-tax.service.ts ***!
          \*****************************************************/
        /*! exports provided: AddTaxService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaxService", function () { return AddTaxService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AddTaxService = /** @class */ (function () {
                function AddTaxService() {
                    this._addTaxList = [
                    // {AddTaxesId: 1, TaxName: 'Hydrogen', TaxValue: 1.0079, Status: 'H'},
                    // {AddTaxesId: 1, TaxName: 'Helium', TaxValue: 1.0079, Status: 'He'},
                    // {AddTaxesId: 1, TaxName: 'Lithium', TaxValue: 1.0079, Status: 'Li'},
                    // {AddTaxesId: 1, TaxName: 'Beryllium', TaxValue: 1.0079, Status: 'Be'},
                    // {AddTaxesId: 1, TaxName: 'Boron', TaxValue: 1.0079, Status: 'B'},
                    // {AddTaxesId: 1, TaxName: 'Hydrogen', TaxValue: 1.0079, Status: 'H'},
                    // {AddTaxesId: 1, TaxName: 'Helium', TaxValue: 1.0079, Status: 'He'},
                    // {AddTaxesId: 1, TaxName: 'Lithium', TaxValue: 1.0079, Status: 'Li'},
                    // {AddTaxesId: 1, TaxName: 'Beryllium', TaxValue: 1.0079, Status: 'Be'},
                    // {AddTaxesId: 1, TaxName: 'Boron', TaxValue: 1.0079, Status: 'B'},
                    ];
                }
                AddTaxService.prototype.addAddTax = function (addTax) {
                    addTax.AddTaxesId = this._addTaxList.length + 1;
                    this._addTaxList.push(addTax);
                };
                AddTaxService.prototype.editAddTax = function (addTax) {
                    var index = this._addTaxList.findIndex(function (c) { return c.AddTaxesId === addTax.AddTaxesId; });
                    this._addTaxList[index] = addTax;
                };
                AddTaxService.prototype.deleteAddTax = function (id) {
                    var addTax = this._addTaxList.findIndex(function (c) { return c.AddTaxesId === id; });
                    this._addTaxList.splice(addTax, 1);
                };
                AddTaxService.prototype.getAddTax = function () {
                    return this._addTaxList;
                };
                return AddTaxService;
            }());
            AddTaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AddTaxService);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'AccountingWebUi';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _add_tax_add_tax_list_add_tax_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-tax/add-tax-list/add-tax-list.component */ "./src/app/add-tax/add-tax-list/add-tax-list.component.ts");
            /* harmony import */ var _account_group_detail_account_group_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./account-group-detail/account-group-detail.component */ "./src/app/account-group-detail/account-group-detail.component.ts");
            /* harmony import */ var _account_group_detail_account_group_detail_list_account_group_detail_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./account-group-detail/account-group-detail-list/account-group-detail-list.component */ "./src/app/account-group-detail/account-group-detail-list/account-group-detail-list.component.ts");
            /* harmony import */ var _add_tax_add_tax_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-tax/add-tax.component */ "./src/app/add-tax/add-tax.component.ts");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _brands_add_brands_add_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./brands-add/brands-add.component */ "./src/app/brands-add/brands-add.component.ts");
            /* harmony import */ var _brands_add_brands_add_list_brands_add_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./brands-add/brands-add-list/brands-add-list.component */ "./src/app/brands-add/brands-add-list/brands-add-list.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
            /* harmony import */ var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./customers/customers-list/customers-list.component */ "./src/app/customers/customers-list/customers-list.component.ts");
            /* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
            /* harmony import */ var _employees_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./employees/employees-list/employees-list.component */ "./src/app/employees/employees-list/employees-list.component.ts");
            /* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
            /* harmony import */ var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./products/product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _add_tax_add_tax_component__WEBPACK_IMPORTED_MODULE_26__["AddTaxComponent"],
                        _add_tax_add_tax_list_add_tax_list_component__WEBPACK_IMPORTED_MODULE_23__["AddTaxListComponent"],
                        _account_group_detail_account_group_detail_component__WEBPACK_IMPORTED_MODULE_24__["AccountGroupDetailComponent"],
                        _account_group_detail_account_group_detail_list_account_group_detail_list_component__WEBPACK_IMPORTED_MODULE_25__["AccountGroupDetailListComponent"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__["NavbarComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
                        _brands_add_brands_add_component__WEBPACK_IMPORTED_MODULE_29__["BrandsAddComponent"],
                        _brands_add_brands_add_list_brands_add_list_component__WEBPACK_IMPORTED_MODULE_30__["BrandsAddListComponent"],
                        _customers_customers_component__WEBPACK_IMPORTED_MODULE_32__["CustomersComponent"],
                        _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_33__["CustomersListComponent"],
                        _employees_employees_component__WEBPACK_IMPORTED_MODULE_34__["EmployeesComponent"],
                        _employees_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_35__["EmployeesListComponent"],
                        _products_products_component__WEBPACK_IMPORTED_MODULE_36__["ProductsComponent"],
                        _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_37__["ProductListComponent"],
                    ],
                    imports: [
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"].forRoot([
                            { path: 'app-add-tax-list', component: _add_tax_add_tax_list_add_tax_list_component__WEBPACK_IMPORTED_MODULE_23__["AddTaxListComponent"] },
                            { path: 'app-account-group-detail-list', component: _account_group_detail_account_group_detail_list_account_group_detail_list_component__WEBPACK_IMPORTED_MODULE_25__["AccountGroupDetailListComponent"] },
                            { path: 'app-navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__["NavbarComponent"] },
                            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"] },
                            { path: 'app-customers-list', component: _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_33__["CustomersListComponent"] },
                            { path: 'app-employees-list', component: _employees_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_35__["EmployeesListComponent"] },
                            { path: 'app-Product-list', component: _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_37__["ProductListComponent"] },
                            { path: '**', redirectTo: '/' }
                        ])
                    ],
                    entryComponents: [_add_tax_add_tax_component__WEBPACK_IMPORTED_MODULE_26__["AddTaxComponent"], _account_group_detail_account_group_detail_component__WEBPACK_IMPORTED_MODULE_24__["AccountGroupDetailComponent"]],
                    exports: [
                    // MatToolbarModule,
                    // MatGridListModule,
                    // MatFormFieldModule,
                    // MatInputModule,
                    // MatRadioModule,
                    // MatSelectModule,
                    // MatCheckboxModule,
                    // MatDatepickerModule,
                    // MatNativeDateModule,
                    // MatButtonModule,
                    // MatSnackBarModule,
                    // MatTableModule,
                    // MatIconModule,
                    // MatSortModule,
                    // MatDialogModule,
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/brands-add/brands-add-list/brands-add-list.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/brands-add/brands-add-list/brands-add-list.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kcy1hZGQvYnJhbmRzLWFkZC1saXN0L2JyYW5kcy1hZGQtbGlzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/brands-add/brands-add-list/brands-add-list.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/brands-add/brands-add-list/brands-add-list.component.ts ***!
          \*************************************************************************/
        /*! exports provided: BrandsAddListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsAddListComponent", function () { return BrandsAddListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BrandsAddListComponent = /** @class */ (function () {
                function BrandsAddListComponent() {
                }
                BrandsAddListComponent.prototype.ngOnInit = function () {
                };
                return BrandsAddListComponent;
            }());
            BrandsAddListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-brands-add-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./brands-add-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands-add/brands-add-list/brands-add-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./brands-add-list.component.css */ "./src/app/brands-add/brands-add-list/brands-add-list.component.css")).default]
                })
            ], BrandsAddListComponent);
            /***/ 
        }),
        /***/ "./src/app/brands-add/brands-add.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/brands-add/brands-add.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kcy1hZGQvYnJhbmRzLWFkZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/brands-add/brands-add.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/brands-add/brands-add.component.ts ***!
          \****************************************************/
        /*! exports provided: BrandsAddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsAddComponent", function () { return BrandsAddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BrandsAddComponent = /** @class */ (function () {
                function BrandsAddComponent() {
                }
                BrandsAddComponent.prototype.ngOnInit = function () {
                };
                return BrandsAddComponent;
            }());
            BrandsAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-brands-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./brands-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands-add/brands-add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./brands-add.component.css */ "./src/app/brands-add/brands-add.component.css")).default]
                })
            ], BrandsAddComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/customers-list/customers-list.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/customers/customers-list/customers-list.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMtbGlzdC9jdXN0b21lcnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/customers/customers-list/customers-list.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/customers/customers-list/customers-list.component.ts ***!
          \**********************************************************************/
        /*! exports provided: CustomersListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function () { return CustomersListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customers.service */ "./src/app/customers/services/customers.service.ts");
            var CustomersListComponent = /** @class */ (function () {
                function CustomersListComponent(service) {
                    this.service = service;
                }
                CustomersListComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(CustomersListComponent.prototype, "customerList", {
                    get: function () {
                        return this.service.getCustomer();
                    },
                    enumerable: true,
                    configurable: true
                });
                return CustomersListComponent;
            }());
            CustomersListComponent.ctorParameters = function () { return [
                { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] }
            ]; };
            CustomersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customers-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-list/customers-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers-list.component.css */ "./src/app/customers/customers-list/customers-list.component.css")).default]
                })
            ], CustomersListComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/customers.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/customers/customers.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/customers/customers.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/customers/customers.component.ts ***!
          \**************************************************/
        /*! exports provided: CustomersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () { return CustomersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CustomersComponent = /** @class */ (function () {
                function CustomersComponent() {
                }
                CustomersComponent.prototype.ngOnInit = function () {
                };
                return CustomersComponent;
            }());
            CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")).default]
                })
            ], CustomersComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/services/customers.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/customers/services/customers.service.ts ***!
          \*********************************************************/
        /*! exports provided: CustomersService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function () { return CustomersService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CustomersService = /** @class */ (function () {
                function CustomersService() {
                    this._customers = [
                        { CustomerId: 1, Name: 'Rahi', Company: 'OptoCoder', CompanyAddress: 'Mirpur' },
                        { CustomerId: 1, Name: 'Rahi', Company: 'OptoCoder', CompanyAddress: 'Mirpur' },
                        { CustomerId: 1, Name: 'Rahi', Company: 'OptoCoder', CompanyAddress: 'Mirpur' },
                        { CustomerId: 1, Name: 'Rahi', Company: 'OptoCoder', CompanyAddress: 'Mirpur' },
                        { CustomerId: 1, Name: 'Rahi', Company: 'OptoCoder', CompanyAddress: 'Mirpur' },
                        { CustomerId: 1, Name: 'Rahi', Company: 'OptoCoder', CompanyAddress: 'Mirpur' },
                    ];
                }
                CustomersService.prototype.addCustomer = function (addCustomers) {
                    addCustomers.CustomerId = this._customers.length + 1;
                    this._customers.push(addCustomers);
                };
                CustomersService.prototype.editCustomerDetail = function (addCustomers) {
                    var index = this._customers.findIndex(function (c) { return c.CustomerId === addCustomers.CustomerId; });
                    this._customers[index] = addCustomers;
                    this._customers.push(addCustomers);
                };
                CustomersService.prototype.deleteCustomerDetail = function (id) {
                    var customer = this._customers.findIndex(function (c) { return c.CustomerId === id; });
                    this._customers.splice(customer, 1);
                };
                CustomersService.prototype.getCustomer = function () {
                    return this._customers;
                };
                return CustomersService;
            }());
            CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CustomersService);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".button { /* Safari */\r\n    transition-duration: 0.4s;\r\n    height:50px;\r\n    width:50px;\r\n    padding-right: 4px 12px;\r\n    font-size: 10px;\r\n    margin: 10px;\r\n  }\r\n  \r\n  .button:hover {\r\n    background-color: #4cafad; /* Green */\r\n    color: white;\r\n  }\r\n  \r\n  .box {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .box div {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n       \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQ3VDLFdBQVc7SUFDOUMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZmFkOyAvKiBHcmVlbiAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYm94IGRpdiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgICAgICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent() {
                }
                DashboardComponent.prototype.ngOnInit = function () {
                };
                return DashboardComponent;
            }());
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/employees/employees-list/employees-list.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/employees/employees-list/employees-list.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMtbGlzdC9lbXBsb3llZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/employees/employees-list/employees-list.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/employees/employees-list/employees-list.component.ts ***!
          \**********************************************************************/
        /*! exports provided: EmployeesListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesListComponent", function () { return EmployeesListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/employees.service */ "./src/app/employees/services/employees.service.ts");
            var EmployeesListComponent = /** @class */ (function () {
                function EmployeesListComponent(service) {
                    this.service = service;
                }
                EmployeesListComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(EmployeesListComponent.prototype, "employeeList", {
                    get: function () {
                        return this.service.getEmployee();
                    },
                    enumerable: true,
                    configurable: true
                });
                return EmployeesListComponent;
            }());
            EmployeesListComponent.ctorParameters = function () { return [
                { type: _services_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"] }
            ]; };
            EmployeesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employees-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employees-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-list/employees-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employees-list.component.css */ "./src/app/employees/employees-list/employees-list.component.css")).default]
                })
            ], EmployeesListComponent);
            /***/ 
        }),
        /***/ "./src/app/employees/employees.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/employees/employees.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/employees/employees.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/employees/employees.component.ts ***!
          \**************************************************/
        /*! exports provided: EmployeesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function () { return EmployeesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EmployeesComponent = /** @class */ (function () {
                function EmployeesComponent() {
                }
                EmployeesComponent.prototype.ngOnInit = function () {
                };
                return EmployeesComponent;
            }());
            EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employees',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")).default]
                })
            ], EmployeesComponent);
            /***/ 
        }),
        /***/ "./src/app/employees/services/employees.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/employees/services/employees.service.ts ***!
          \*********************************************************/
        /*! exports provided: EmployeesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function () { return EmployeesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EmployeesService = /** @class */ (function () {
                function EmployeesService() {
                    this._employees = [
                        { EmployeesId: 1, EmployeesName: 'Rahi', Designation: 'Executive', MobileNo: '+8801823578649' },
                        { EmployeesId: 1, EmployeesName: 'Rahi', Designation: 'Executive', MobileNo: '+8801823578649' },
                        { EmployeesId: 1, EmployeesName: 'Rahi', Designation: 'Executive', MobileNo: '+8801823578649' },
                        { EmployeesId: 1, EmployeesName: 'Rahi', Designation: 'Executive', MobileNo: '+8801823578649' },
                    ];
                }
                EmployeesService.prototype.addEmployee = function (addEmployees) {
                    addEmployees.EmployeesId = this._employees.length + 1;
                    this._employees.push(addEmployees);
                };
                EmployeesService.prototype.editEmployeeDetail = function (addEmployees) {
                    var index = this._employees.findIndex(function (c) { return c.EmployeesId === addEmployees.EmployeesId; });
                    this._employees[index] = addEmployees;
                    this._employees.push(addEmployees);
                };
                EmployeesService.prototype.deleteEmployeeDetail = function (id) {
                    var employee = this._employees.findIndex(function (c) { return c.EmployeesId === id; });
                    this._employees.splice(employee, 1);
                };
                EmployeesService.prototype.getEmployee = function () {
                    return this._employees;
                };
                return EmployeesService;
            }());
            EmployeesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EmployeesService);
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/navbar/navbar.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\njustify-content: space-between;\r\nheight: 45px;\r\n}\r\n.span {\r\n    padding-right: 3 rem ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOEJBQThCO0FBQzlCLFlBQVk7QUFDWjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5zcGFuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMgcmVtIDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navbar/navbar.component.ts ***!
          \********************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/products/product-list/product-list.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/products/product-list/product-list.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/products/product-list/product-list.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/products/product-list/product-list.component.ts ***!
          \*****************************************************************/
        /*! exports provided: ProductListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () { return ProductListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/products/services/products.service.ts");
            var ProductListComponent = /** @class */ (function () {
                function ProductListComponent(service) {
                    this.service = service;
                }
                ProductListComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(ProductListComponent.prototype, "productList", {
                    get: function () {
                        return this.service.getProduct();
                    },
                    enumerable: true,
                    configurable: true
                });
                return ProductListComponent;
            }());
            ProductListComponent.ctorParameters = function () { return [
                { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
            ]; };
            ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-product-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list/product-list.component.css")).default]
                })
            ], ProductListComponent);
            /***/ 
        }),
        /***/ "./src/app/products/products.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/products/products.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/products/products.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/products/products.component.ts ***!
          \************************************************/
        /*! exports provided: ProductsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () { return ProductsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProductsComponent = /** @class */ (function () {
                function ProductsComponent() {
                }
                ProductsComponent.prototype.ngOnInit = function () {
                };
                return ProductsComponent;
            }());
            ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-products',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")).default]
                })
            ], ProductsComponent);
            /***/ 
        }),
        /***/ "./src/app/products/services/products.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/products/services/products.service.ts ***!
          \*******************************************************/
        /*! exports provided: ProductsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function () { return ProductsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProductsService = /** @class */ (function () {
                function ProductsService() {
                    this._products = [
                        { ProductID: 1, ProductName: 'Rahi', Location: 'OptoCoder', ProductWarehouse: 'Mirpur' },
                        { ProductID: 1, ProductName: 'Rahi', Location: 'OptoCoder', ProductWarehouse: 'Mirpur' },
                        { ProductID: 1, ProductName: 'Rahi', Location: 'OptoCoder', ProductWarehouse: 'Mirpur' },
                        { ProductID: 1, ProductName: 'Rahi', Location: 'OptoCoder', ProductWarehouse: 'Mirpur' },
                        { ProductID: 1, ProductName: 'Rahi', Location: 'OptoCoder', ProductWarehouse: 'Mirpur' },
                    ];
                }
                ProductsService.prototype.addProduct = function (addProducts) {
                    addProducts.ProductID = this._products.length + 1;
                    this._products.push(addProducts);
                };
                ProductsService.prototype.editProductDetail = function (addProducts) {
                    var index = this._products.findIndex(function (c) { return c.ProductID === addProducts.ProductID; });
                    this._products[index] = addProducts;
                    this._products.push(addProducts);
                };
                ProductsService.prototype.deleteProductDetail = function (id) {
                    var product = this._products.findIndex(function (c) { return c.ProductID === id; });
                    this._products.splice(product, 1);
                };
                ProductsService.prototype.getProduct = function () {
                    return this._products;
                };
                return ProductsService;
            }());
            ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProductsService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: "https://localhost:44330/"
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\User\source\repos\AspAccounting\AccountingWebUi\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map