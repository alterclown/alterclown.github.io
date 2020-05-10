(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\n    <button class=\"button\" mat-raised-button  routerLink=\"/user-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Users\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"/employee-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Employee\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"/leave-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Leave\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"/loan-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Loan\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"/payroll-list\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Payroll\n    </button>\n</div>\n\n<!-- <div class=\"box\">\n    <button class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n</div>\n\n<div class=\"box\">\n    <button class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n        <mat-icon>note_add</mat-icon>\n    </button>\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n\n    <button  class=\"button\" mat-raised-button  routerLink=\"app-dashboard\" routerLinkActive=\"active\">\n    <mat-icon>note_add</mat-icon>Add User\n    </button>\n</div> -->\n\n<!-- <router-outlet></router-outlet> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee-list/employee-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee-list/employee-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n    <button mat-mini-fab>\n        <mat-icon>add</mat-icon>\n      </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n      <input matInput  placeholder=\"Search\" autocomplete=\"off\"  [(ngModel)]=\"searchText\" (input) = \"search()\">\n      <!-- {{searchText}} -->\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" >\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <mat-card-content>\n    <div class=\"mat-elevation-z8\">\n      <table class=\"table\">\n        <thead>\n          <!-- <th>Employee Id</th>\n          <th>Employee First Name</th>\n          <th>Employee Last Name</th> -->\n          <th>Employee Full Name</th>\n          <!-- <th>Employee Father Name</th> -->\n          <th>Employee Date Of Birth</th>\n          <th>Employee Sex</th>\n          <th>Employee Religion</th>\n          <th>Employee Marital Status</th>\n          <th>Employee Nationality</th>\n          <!-- <th>Employee House</th>\n          <th>Employee Street</th>\n          <th>Employee City</th>\n          <th>Employee State</th>\n          <th>Employee PIN</th> -->\n          <th>Employee Phone Number</th>\n          <th>Employee Mobile Number</th>\n          <th>Employee Image</th>\n          <th>Employee Email</th>\n          <th>Employee Date Of Join</th>\n          <th>Employee Date Of Confirm</th>\n          <th>Employee Department</th>\n          <!-- <th>Employee Designation</th>\n          <th>Employee Basic Salary</th>\n          <th>Employee Salary PerDay</th> -->\n          <th>Edit/Delete</th>\n        </thead>\n        <tr *ngFor=\"let employee of employeeFullList \">\n          <!-- <td>{{employee.EmployeeId}}</td>\n          <td>{{employee.EmployeeFirstName}}</td>\n          <td>{{employee.EmployeeLastName}}</td> -->\n          <td>{{employee.EmployeeFullName}}</td>\n          <!-- <td>{{employee.EmployeeFatherName}}</td> -->\n          <td>{{employee.EmployeeDateOfBirth}}</td>\n          <td>{{employee.EmployeeSex}}</td>\n\n          <td>{{employee.EmployeeReligion}}</td>\n          <td>{{employee.EmployeeMaritalStatus}}</td>\n          <td>{{employee.EmployeeNationality}}</td>\n          <!-- <td>{{employee.EmployeeHouse}}</td>\n          <td>{{employee.EmployeeStreet}}</td>\n          <td>{{employee.EmployeeCity}}</td>\n          <td>{{employee.EmployeeState}}</td>\n\n          <td>{{employee.EmployeePIN}}</td> -->\n          <td>{{employee.EmployeePhoneNumber}}</td>\n          <td>{{employee.EmployeeMobileNumber}}</td>\n          <td>{{employee.EmployeeImage}}</td>\n          <td>{{employee.EmployeeEmail}}</td>\n          <td>{{employee.EmployeeDateOfJoin}}</td>\n          <td>{{employee.EmployeeDateOfConfirm}}</td>\n          <td>{{employee.EmployeeDepartment}}</td>\n          <!-- <td>{{employee.EmployeeDesignation}}</td>\n          <td>{{employee.EmployeeBasicSalary}}</td>\n          <td>{{employee.EmployeeSalaryPerDay}}</td> -->\n          \n          <td>\n              <button mat-icon-button color=\"accent\"(click)=\"editemployee(employee.Id)\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button color=\"warn\" (click)=\"deleteemployee(employee.Id)\"><mat-icon>delete_outline</mat-icon></button>\n          </td>\n       </tr>\n       </table>\n      </div>\n  </mat-card-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>employee works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>hrm-attendance-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrm-login/hrm-login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrm-login/hrm-login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"row\">\n    <div class=\"col\"></div>\n    <div class=\"col-sm-5 margin\"> \n      <h1 class=\"display-3 text-center\">HRM</h1> \n      <form >  \n        <div class=\"form-group\">\n          <label >Username</label>\n          <input class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Kindly provide your username.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n        </div>\n          <!-- <button type=\"submit\" class=\"btn btn-outline-info btn-block\"  (click)=\"login();valueChanged()\" >Submit</button> -->\n          <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"login($event)\">Login</button>\n      </form>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n\n  <!-- <div class=\"signin-content\">\n    <mat-card>\n      <mat-card-content>\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n          <p>Please login to continue</p>\n          <mat-form-field class=\"half-width-input\">\n            <input matInput placeholder=\"User\" formControlName=\"userName\" required>\n            <mat-error *ngIf=\"isFieldInvalid('userName')\">\n              Please inform your user name\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"half-width-input\">\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n            <mat-error *ngIf=\"isFieldInvalid('userName')\">\n              Please inform your password\n            </mat-error>\n          </mat-form-field>\n          <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave-list/leave-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave-list/leave-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n    <button mat-mini-fab (click) = \"addLeave()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput  placeholder=\"Search\" autocomplete=\"off\" [(ngModel)]=\"searchText\" (input) = \"search()\">\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" >\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <mat-card-content>\n    <div class=\"mat-elevation-z8\">\n      <table class=\"table\">\n        <thead>\n          <th>Leave Id</th>\n          <th>Employee Id</th>\n          <th>Month</th>\n          <th>From Date</th>\n          <th>To Date</th>\n          <th>No Of Days</th>\n          <th>Leave Period</th>\n          <th>Edit/Delete</th>\n         \n        </thead>\n        <tr *ngFor=\"let leave of leaveFullList \">\n          <td>{{leave.LeaveId}}</td>\n          <td>{{leave.EmployeeId}}</td>\n          <td>{{leave.Month}}</td>\n          <td>{{leave.FromDate}}</td>\n          <td>{{leave.ToDate}}</td>\n          <td>{{leave.NoOfDays}}</td>\n          <td>{{leave.LeavePeriod}}</td>\n          <td>\n              <button mat-icon-button color=\"accent\"(click)=\"editLeave(leave.Id)\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button color=\"warn\" (click)=\"deleteLeave(leave.Id)\"><mat-icon>delete_outline</mat-icon></button>\n          </td>\n       </tr>\n       </table>\n      </div>\n  </mat-card-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3 mat-dialog-title>Add New User</h3>\n  \n    <form class=\"mat-dialog-content\"  #formControl=\"ngForm\">\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #input class=\"form-control\" placeholder=\"Leave Id\"  required >\n        </mat-form-field>\n      </div>\n  \n      <!--Textarea for demo purposes-->\n      <!-- <div class=\"form\">\n        <mat-form-field color=\"accent\">\n            <input matInput #input class=\"form-control\" placeholder=\"Employee Id\"  required >\n        </mat-form-field>\n      </div> -->\n  \n      <!--Contains mat-hint for characters count and has maxLengt set-->\n      <!-- <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputstate class=\"form-control\" placeholder=\"State\"   maxlength=\"10\" required >\n          <mat-hint align=\"end\"></mat-hint>\n        </mat-form-field>\n      </div> -->\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Month\" >\n        </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"From Date\" >\n        </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"To Date\" >\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"No Of Days\" >\n        </mat-form-field>\n      </div>\n      \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Leave Period\" >\n        </mat-form-field>\n      </div>\n      <div mat-dialog-actions>\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n      </div>\n    </form>\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan-list/loan-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan-list/loan-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n    <button mat-mini-fab (click)=\"addLoan()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n      <input matInput  placeholder=\"Search\" autocomplete=\"off\"  [(ngModel)]=\"searchText\" (input) = \"search()\" >\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" >\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <mat-card-content>\n    <div class=\"mat-elevation-z8\">\n      <table class=\"table\">\n        <thead>\n          <th>Loan Id</th>\n          <th>Type Of Loan</th>\n          <th>Date Of Application</th>\n          <th>Proposed Amount</th>\n          <th>No Of Inst Recovery</th>\n          <th>Start Date Of Recovery</th>\n          <th>End Date Of Recovery</th>\n          <th>No Of Days</th>\n          <th>Interest Rate</th>\n          <th>Interest Amount</th>\n          <th>Edit/Delete</th>\n         \n        </thead>\n        <tr *ngFor=\"let loan of loanFullList \">\n          <td>{{loan.LoanId}}</td>\n          <td>{{loan.TypeOfLoan}}</td>\n          <td>{{loan.DateOfApplication}}</td>\n          <td>{{loan.ProposedAmount}}</td>\n          <td>{{loan.NoOfInstRecovery}}</td>\n          <td>{{loan.StartDateOfRecovery}}</td>\n          <td>{{loan.EndDateOfRecovery}}</td>\n          <td>{{loan.NoOfDays}}</td>\n          <td>{{loan.InterestRate}}</td>\n          <td>{{loan.InterestAmount}}</td>\n          <td>\n              <button mat-icon-button color=\"accent\"(click)=\"editLoan(loan.Id)\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button color=\"warn\" (click)=\"deleteLoan(loan.Id)\"><mat-icon>delete_outline</mat-icon></button>\n          </td>\n       </tr>\n       </table>\n      </div>\n  </mat-card-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3 mat-dialog-title>Add New User</h3>\n  \n    <form class=\"mat-dialog-content\"  #formControl=\"ngForm\">\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #input class=\"form-control\" placeholder=\"Loan Id\"  required >\n        </mat-form-field>\n      </div>\n  \n      <!--Textarea for demo purposes-->\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n            <input matInput #input class=\"form-control\" placeholder=\"Type Of Loan\"  required >\n        </mat-form-field>\n      </div>\n  \n      <!--Contains mat-hint for characters count and has maxLengt set-->\n      <!-- <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputstate class=\"form-control\" placeholder=\"State\"   maxlength=\"10\" required >\n          <mat-hint align=\"end\"></mat-hint>\n        </mat-form-field>\n      </div> -->\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Date Of Application\" >\n        </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Proposed Amount\" >\n        </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"No Of Inst Recovery\" >\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Start Date Of Recovery\" >\n        </mat-form-field>\n      </div>\n      \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"End Date Of Recovery\" >\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"No Of Days\" >\n        </mat-form-field>\n      </div>\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Interest Rate\" >\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Interest Amount\" >\n        </mat-form-field>\n      </div>\n\n      <div mat-dialog-actions>\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n      </div>\n    </form>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color =\"warn\" class=\"navbar\">\n    <div class=\"logout\">\n        <mat-icon *ngIf=\"this.authService.isLoggedIn()\"  routerLink=\"/dashboard\" routerLinkActive=\"active\">apps</mat-icon>\n    </div>\n\n    <div> \n        HRM\n    </div>\n   \n    <div class=\"logout\">\n        <span *ngIf=\"!this.authService.isLoggedIn()\" routerLink=\"/login\">\n            Login\n            <mat-icon >account_box</mat-icon>\n        </span>\n    \n        <span *ngIf=\"this.authService.isLoggedIn()\" (click)=\"logOut()\">\n            Logout\n            <mat-icon> account_circle</mat-icon>\n        </span>\n    \n    </div>\n </mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll-list/payroll-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll-list/payroll-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n    <button mat-mini-fab>\n        <mat-icon>add</mat-icon>\n      </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n      <input matInput  placeholder=\"Search\" autocomplete=\"off\"  [(ngModel)]=\"searchText\" (input) = \"search()\" >\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" >\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <mat-card-content>\n    <div class=\"mat-elevation-z8\">\n      <table class=\"table\">\n        <thead>\n          <th>PayrollId</th>\n          <th>EmployeeId</th>\n          <th>Month</th>\n          <th>Year</th>\n          <th>TotalPresent</th>\n          <th>TotalAbsent</th>\n          <th>LeaveDays</th>\n\n          <th>Deduction</th>\n          <th>Leave</th>\n          <th>FestivalAdvance</th>\n          <th>HousingLoan</th>\n          <th>VehicleLoan</th>\n          <!-- <th>OtherLoan</th>\n          <th>LossOfPay</th>\n          <th>TDS</th>\n          <th>ProfessionalFees</th>\n          <th>OtherDeductions</th>\n          <th>TotalEarnings</th>\n          <th>OtherPay</th>\n          <th>BasicSalary</th>\n          <th>SalaryPerDay</th>\n          <th>Pay</th>\n          <th>Earnings</th>\n          <th>Deductions</th>\n          <th>NetPay</th> -->\n          <th>Edit/Delete</th>\n         \n        </thead>\n        <tr *ngFor=\"let payroll of payrollFullList \">\n          <td>{{payroll.PayrollId}}</td>\n          <td>{{payroll.EmployeeId}}</td>\n          <td>{{payroll.Month}}</td>\n          <td>{{payroll.Year}}</td>\n          <td>{{payroll.TotalPresent}}</td>\n          <td>{{payroll.TotalAbsent}}</td>\n          <td>{{payroll.LeaveDays}}</td>\n\n          <td>{{payroll.Deduction}}</td>\n          <td>{{payroll.Leave}}</td>\n          <td>{{payroll.FestivalAdvance}}</td>\n          <td>{{payroll.HousingLoan}}</td>\n          <td>{{payroll.VehicleLoan}}</td>\n          <!-- <td>{{payroll.OtherLoan}}</td>\n          <td>{{payroll.LossOfPay}}</td>\n\n          <td>{{payroll.TDS}}</td>\n          <td>{{payroll.ProfessionalFees}}</td>\n          <td>{{payroll.OtherDeductions}}</td>\n          <td>{{payroll.TotalEarnings}}</td>\n          <td>{{payroll.OtherPay}}</td>\n          <td>{{payroll.BasicSalary}}</td>\n          <td>{{payroll.SalaryPerDay}}</td>\n\n          <td>{{payroll.Pay}}</td>\n          <td>{{payroll.Earnings}}</td>\n          <td>{{payroll.Deductions}}</td>\n          <td>{{payroll.NetPay}}</td> -->\n          <td>\n              <button mat-icon-button color=\"accent\"(click)=\"editPayroll(payroll.Id)\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button color=\"warn\" (click)=\"deletePayroll(payroll.Id)\"><mat-icon>delete_outline</mat-icon></button>\n          </td>\n       </tr>\n       </table>\n      </div>\n  </mat-card-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>payroll works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/training/training-list/training-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/training-list/training-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>training-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/training/training.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/training.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>training works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list/user-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list/user-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-div\">\n    <button mat-mini-fab (click) = \"addUser()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n      <input matInput  placeholder=\"Search\" autocomplete=\"off\" >\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" >\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  <mat-icon  class =\"pdf\" value=\"CPTURE\" (click)=\"captureScreen()\">picture_as_pdf</mat-icon>\n   \n  </div>\n\n \n  <!-- <mat-card-content>\n    <div class=\"mat-elevation-z8\" id=\"content\" #content>\n      <table class=\"table\" id=\"contentToConvert\">\n        <thead>\n          <th>User Id</th>\n          <th>User Name</th>\n          <th>Password</th>\n          <th>User Gender</th>\n          <th>Role</th>\n          <th>Token</th>\n          <th>Attendance</th>\n          <th>Edit/Delete</th>\n         \n        </thead>\n        <tr *ngFor=\"let user of userList \">\n          <td>{{user.UserId}}</td>\n          <td>{{user.UserName}}</td>\n          <td>{{user.Password}}</td>\n          <td>{{user.UserGender}}</td>\n          <td>{{user.Role}}</td>\n          <td>{{user.Token}}</td>\n          <td>{{user.Attendance}}</td>\n          <td>\n              <button mat-icon-button color=\"accent\"(click)=\"editUser(user.Id)\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button color=\"warn\" (click)=\"deleteUser(user.Id)\"><mat-icon>delete_outline</mat-icon></button>\n          </td>\n       </tr>\n       </table>\n      </div>\n  </mat-card-content> -->\n\n  <div class=\"col-sm-6 col-md-4 col-xl-3\">\n    <div class=\"card bg-light\">\n        <div class=\"card-body\">\n          \n            <h6 class=\"card-title text-uppercase text-truncate py-2\">User Info\n              <button mat-stroked-button color=\"warn\" (click)=\"mapUser()\">Show Location</button>\n            </h6>\n            \n            <div class=\"items border border-light\" *ngFor=\"let user of getUserList \">\n                <div class=\"card draggable shadow-sm\" >\n                    <div class=\"card-body p-2\" >      \n                      <p><input type=\"checkbox\" [(ngModel)]=\"isChecked\"> Select</p>\n                        <p>\n                          {{user.UserName}} ||\n                          {{user.Attendance}} ||\n                          {{user.IpAddress}}\n                        </p>                        \n                    </div>\n                </div>\n                </div>\n              </div>\n            </div>\n          </div>         \n\n<div class=\"maps\">\n  <app-user-location ></app-user-location>\n</div>\n\n\n<!-- <div>\n  \nExample:{{exampleParent}} \n<app-hrm-login \n(valueChange) = \"parentMethod($event)\">\n</app-hrm-login>\n\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-location/user-location.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-location/user-location.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<agm-map [latitude]=\"lat\" [longitude] = \"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude] = \"lng\">\n  </agm-marker>\n  </agm-map>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <h3 mat-dialog-title>Add New User</h3>\n  \n    <form class=\"mat-dialog-content\"  #formControl=\"ngForm\">\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #input class=\"form-control\" placeholder=\"User Id\"  required >\n        </mat-form-field>\n      </div>\n  \n      <!--Textarea for demo purposes-->\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n            <input matInput #input class=\"form-control\" placeholder=\"User Name\"  required >\n        </mat-form-field>\n      </div>\n  \n      <!--Contains mat-hint for characters count and has maxLengt set-->\n      <!-- <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputstate class=\"form-control\" placeholder=\"State\"   maxlength=\"10\" required >\n          <mat-hint align=\"end\"></mat-hint>\n        </mat-form-field>\n      </div> -->\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Password\" >\n        </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"User Gender\" >\n        </mat-form-field>\n      </div>\n  \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Role\" >\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Token\" >\n        </mat-form-field>\n      </div>\n      \n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"Attendance\" >\n        </mat-form-field>\n      </div>\n\n      <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput placeholder=\"IpAddress\" >\n        </mat-form-field>\n      </div>\n  \n      <div mat-dialog-actions>\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n      </div>\n    </form>\n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'HRMUI';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hrm_login_hrm_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hrm-login/hrm-login.component */ "./src/app/hrm-login/hrm-login.component.ts");
/* harmony import */ var _hrm_login_hrm_attendance_list_hrm_attendance_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hrm-login/hrm-attendance-list/hrm-attendance-list.component */ "./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var _leave_leave_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./leave/leave.component */ "./src/app/leave/leave.component.ts");
/* harmony import */ var _leave_leave_list_leave_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./leave/leave-list/leave-list.component */ "./src/app/leave/leave-list/leave-list.component.ts");
/* harmony import */ var _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./payroll/payroll.component */ "./src/app/payroll/payroll.component.ts");
/* harmony import */ var _payroll_payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./payroll/payroll-list/payroll-list.component */ "./src/app/payroll/payroll-list/payroll-list.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./employee/employee-list/employee-list.component */ "./src/app/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _loan_loan_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./loan/loan.component */ "./src/app/loan/loan.component.ts");
/* harmony import */ var _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./loan/loan-list/loan-list.component */ "./src/app/loan/loan-list/loan-list.component.ts");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _training_training_list_training_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./training/training-list/training-list.component */ "./src/app/training/training-list/training-list.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _user_user_location_user_location_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./user/user-location/user-location.component */ "./src/app/user/user-location/user-location.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");











































//import { Ng2SearchPipeModule } from '@ng2-search-filter';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
            _hrm_login_hrm_login_component__WEBPACK_IMPORTED_MODULE_26__["HrmLoginComponent"],
            _hrm_login_hrm_attendance_list_hrm_attendance_list_component__WEBPACK_IMPORTED_MODULE_27__["HrmAttendanceListComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_28__["UserComponent"],
            _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_29__["UserListComponent"],
            _leave_leave_component__WEBPACK_IMPORTED_MODULE_30__["LeaveComponent"],
            _leave_leave_list_leave_list_component__WEBPACK_IMPORTED_MODULE_31__["LeaveListComponent"],
            _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_32__["PayrollComponent"],
            _payroll_payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_33__["PayrollListComponent"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_34__["EmployeeComponent"],
            _employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_35__["EmployeeListComponent"],
            _loan_loan_component__WEBPACK_IMPORTED_MODULE_36__["LoanComponent"],
            _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_37__["LoanListComponent"],
            _training_training_component__WEBPACK_IMPORTED_MODULE_38__["TrainingComponent"],
            _training_training_list_training_list_component__WEBPACK_IMPORTED_MODULE_39__["TrainingListComponent"],
            _user_user_location_user_location_component__WEBPACK_IMPORTED_MODULE_41__["UserLocationComponent"]
            // FormsModule,
            // ReactiveFormsModule
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
            // Ng2SearchPipeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"].forRoot([
                { path: 'navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"] },
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_28__["UserComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'user-list', component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_29__["UserListComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'login', component: _hrm_login_hrm_login_component__WEBPACK_IMPORTED_MODULE_26__["HrmLoginComponent"] },
                { path: 'attend', component: _hrm_login_hrm_attendance_list_hrm_attendance_list_component__WEBPACK_IMPORTED_MODULE_27__["HrmAttendanceListComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'leave', component: _leave_leave_component__WEBPACK_IMPORTED_MODULE_30__["LeaveComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'leave-list', component: _leave_leave_list_leave_list_component__WEBPACK_IMPORTED_MODULE_31__["LeaveListComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'payroll', component: _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_32__["PayrollComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'payroll-list', component: _payroll_payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_33__["PayrollListComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_34__["EmployeeComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'employee-list', component: _employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_35__["EmployeeListComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'loan', component: _loan_loan_component__WEBPACK_IMPORTED_MODULE_36__["LoanComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'loan-list', component: _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_37__["LoanListComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'training', component: _training_training_component__WEBPACK_IMPORTED_MODULE_38__["TrainingComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'training-list', component: _training_training_list_training_list_component__WEBPACK_IMPORTED_MODULE_39__["TrainingListComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: 'user-location', component: _user_user_location_user_location_component__WEBPACK_IMPORTED_MODULE_41__["UserLocationComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]] },
                { path: '**', redirectTo: '/' }
            ]),
            _agm_core__WEBPACK_IMPORTED_MODULE_40__["AgmCoreModule"].forRoot({
                apiKey: ''
            })
        ],
        entryComponents: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"]],
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



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate["login"];
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() {
        this.USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
        this.username = null;
    }
    setUsernameInsSession(username) {
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.username = username;
    }
    isLoggedIn() {
        let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        return !(user == null);
    }
    logout() {
        sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button { /* Safari */\r\n    transition-duration: 0.4s;\r\n    height:50px;\r\n    width:50px;\r\n    padding-right: 4px 12px;\r\n    font-size: 10px;\r\n    margin: 10px;\r\n  }\r\n  \r\n  .button:hover {\r\n    background-color: #4cafad; /* Green */\r\n    color: white;\r\n  }\r\n  \r\n  .box {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .box div {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n       \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQ3VDLFdBQVc7SUFDOUMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZmFkOyAvKiBHcmVlbiAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYm94IGRpdiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgICAgICAiXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
    parentMethod($event) {
        this.exampleParent = $event;
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/employee/employee-list/employee-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee/employee-list/employee-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/employee/services/employee.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let EmployeeListComponent = class EmployeeListComponent {
    constructor(_employeeService) {
        this._employeeService = _employeeService;
        this.displayedColumns = ['EmployeeId', 'EmployeeFirstName', 'EmployeeLastName', 'EmployeeFullName', 'EmployeeFatherName', 'EmployeeDateOfBirth', 'EmployeeSex', 'EmployeeReligion', 'EmployeeMaritalStatus', 'EmployeeNationality', 'EmployeeHouse', 'EmployeeStreet', 'EmployeeCity', 'EmployeeState', 'EmployeePIN', 'EmployeePhoneNumber', 'EmployeeMobileNumber', 'EmployeeImage', 'EmployeeEmail', 'EmployeeDateOfJoin', 'EmployeeDateOfConfirm', 'EmployeeDepartment', 'EmployeeDesignation', 'EmployeeBasicSalary', 'EmployeeSalaryPerDay'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this._employeeService._employeeDetail);
        this.employeeList = [];
        this.employeeFullList = [];
    }
    ngOnInit() {
        this.employeeList = this._employeeService.getEmployee();
        this.employeeFullList = this.employeeList;
    }
    // get employeeList() {
    //   return this._employeeService.getEmployee();
    // }
    search() {
        if (this.searchText != "") {
            this.employeeFullList = this.employeeFullList.filter(res => {
                return res.EmployeeFullName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
            });
        }
        else if (this.searchText == "") {
            this.ngOnInit();
        }
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
];
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee-list/employee-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee/employee-list/employee-list.component.css")).default]
    })
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeeComponent = class EmployeeComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/employee/services/employee.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee/services/employee.service.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmployeeService = class EmployeeService {
    constructor(httpClient, httpService) {
        this.httpClient = httpClient;
        this.httpService = httpService;
        this._employeeDetails = [];
        this._employeeDetail = [
            { EmployeeId: 1, EmployeeFirstName: 'admin', EmployeeLastName: 'admin', EmployeeFullName: 'Male', EmployeeFatherName: 'Admin', EmployeeDateOfBirth: '11/12/2000', EmployeeSex: 'Male', EmployeeReligion: 'Male', EmployeeMaritalStatus: 'Male', EmployeeNationality: 'Male', EmployeeHouse: 'Male', EmployeeStreet: '01', EmployeeCity: 'Dhaka', EmployeeState: 'Dhaka', EmployeePIN: '01', EmployeePhoneNumber: 'string', EmployeeMobileNumber: 'string', EmployeeImage: 'string', EmployeeEmail: 'string', EmployeeDateOfJoin: 'Date', EmployeeDateOfConfirm: 'string', EmployeeDepartment: 'string', EmployeeDesignation: 'string', EmployeeBasicSalary: 11, EmployeeSalaryPerDay: 11 },
            { EmployeeId: 1, EmployeeFirstName: 'admin', EmployeeLastName: 'admin', EmployeeFullName: 'Female', EmployeeFatherName: 'Admin', EmployeeDateOfBirth: '11/12/2000', EmployeeSex: 'Male', EmployeeReligion: 'Male', EmployeeMaritalStatus: 'Male', EmployeeNationality: 'Male', EmployeeHouse: 'Male', EmployeeStreet: '01', EmployeeCity: 'Dhaka', EmployeeState: 'Dhaka', EmployeePIN: '01', EmployeePhoneNumber: 'string', EmployeeMobileNumber: 'string', EmployeeImage: 'string', EmployeeEmail: 'string', EmployeeDateOfJoin: 'Date', EmployeeDateOfConfirm: 'string', EmployeeDepartment: 'string', EmployeeDesignation: 'string', EmployeeBasicSalary: 11, EmployeeSalaryPerDay: 11 },
            { EmployeeId: 1, EmployeeFirstName: 'admin', EmployeeLastName: 'admin', EmployeeFullName: 'Male', EmployeeFatherName: 'Admin', EmployeeDateOfBirth: '11/12/2000', EmployeeSex: 'Male', EmployeeReligion: 'Male', EmployeeMaritalStatus: 'Male', EmployeeNationality: 'Male', EmployeeHouse: 'Male', EmployeeStreet: '01', EmployeeCity: 'Dhaka', EmployeeState: 'Dhaka', EmployeePIN: '01', EmployeePhoneNumber: 'string', EmployeeMobileNumber: 'string', EmployeeImage: 'string', EmployeeEmail: 'string', EmployeeDateOfJoin: 'Date', EmployeeDateOfConfirm: 'string', EmployeeDepartment: 'string', EmployeeDesignation: 'string', EmployeeBasicSalary: 11, EmployeeSalaryPerDay: 11 },
            { EmployeeId: 1, EmployeeFirstName: 'admin', EmployeeLastName: 'admin', EmployeeFullName: 'Male', EmployeeFatherName: 'Admin', EmployeeDateOfBirth: '11/12/2000', EmployeeSex: 'Male', EmployeeReligion: 'Male', EmployeeMaritalStatus: 'Male', EmployeeNationality: 'Male', EmployeeHouse: 'Male', EmployeeStreet: '01', EmployeeCity: 'Dhaka', EmployeeState: 'Dhaka', EmployeePIN: '01', EmployeePhoneNumber: 'string', EmployeeMobileNumber: 'string', EmployeeImage: 'string', EmployeeEmail: 'string', EmployeeDateOfJoin: 'Date', EmployeeDateOfConfirm: 'string', EmployeeDepartment: 'string', EmployeeDesignation: 'string', EmployeeBasicSalary: 11, EmployeeSalaryPerDay: 11 },
            { EmployeeId: 1, EmployeeFirstName: 'admin', EmployeeLastName: 'admin', EmployeeFullName: 'Male', EmployeeFatherName: 'Admin', EmployeeDateOfBirth: '11/12/2000', EmployeeSex: 'Male', EmployeeReligion: 'Male', EmployeeMaritalStatus: 'Male', EmployeeNationality: 'Male', EmployeeHouse: 'Male', EmployeeStreet: '01', EmployeeCity: 'Dhaka', EmployeeState: 'Dhaka', EmployeePIN: '01', EmployeePhoneNumber: 'string', EmployeeMobileNumber: 'string', EmployeeImage: 'string', EmployeeEmail: 'string', EmployeeDateOfJoin: 'Date', EmployeeDateOfConfirm: 'string', EmployeeDepartment: 'string', EmployeeDesignation: 'string', EmployeeBasicSalary: 11, EmployeeSalaryPerDay: 11 },
        ];
    }
    addEmployee(addEmployee) {
        addEmployee.EmployeeId = this._employeeDetail.length + 1;
        this._employeeDetail.push(addEmployee);
    }
    editEmployee(editEmployee) {
        const index = this._employeeDetail.findIndex(c => c.EmployeeId === editEmployee.EmployeeId);
        this._employeeDetail[index] = editEmployee;
        this._employeeDetail.push(editEmployee);
    }
    deleteEmployee(id) {
        const delEmployee = this._employeeDetail.findIndex(c => c.EmployeeId === id);
        this._employeeDetail.splice(delEmployee, 1);
    }
    getEmployee() {
        return this._employeeDetail;
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hybS1sb2dpbi9ocm0tYXR0ZW5kYW5jZS1saXN0L2hybS1hdHRlbmRhbmNlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: HrmAttendanceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmAttendanceListComponent", function() { return HrmAttendanceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HrmAttendanceListComponent = class HrmAttendanceListComponent {
    constructor() { }
    ngOnInit() {
    }
};
HrmAttendanceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hrm-attendance-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hrm-attendance-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hrm-attendance-list.component.css */ "./src/app/hrm-login/hrm-attendance-list/hrm-attendance-list.component.css")).default]
    })
], HrmAttendanceListComponent);



/***/ }),

/***/ "./src/app/hrm-login/hrm-login.component.css":
/*!***************************************************!*\
  !*** ./src/app/hrm-login/hrm-login.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    max-width: 400px;\r\n    margin: 2em auto;\r\n    text-align: center;\r\n  }\r\n  .signin-content {\r\n    padding: 60px 1rem;\r\n  }\r\n  .full-width-input {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJtLWxvZ2luL2hybS1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvaHJtLWxvZ2luL2hybS1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zaWduaW4tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDFyZW07XHJcbiAgfVxyXG4gIC5mdWxsLXdpZHRoLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/hrm-login/hrm-login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hrm-login/hrm-login.component.ts ***!
  \**************************************************/
/*! exports provided: HrmLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmLoginComponent", function() { return HrmLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");





let HrmLoginComponent = class HrmLoginComponent {
    constructor(router, _user, authService) {
        this.router = router;
        this._user = _user;
        this.authService = authService;
        this.USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
        this.userInitials = [];
        this.attendance = 'You Are Attended Today';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        //this.userInitials = this._user._userDetails.values.name(this.username,this.password);
    }
    //   valueChanged() { 
    // }
    login() {
        if (this.username == 'admin' && this.password == 'admin') {
            this.valueChange.emit(this.attendance);
            this.authService.setUsernameInsSession(this.username);
            this.router.navigate(["dashboard"]);
            console.log(this.attendance);
        }
        else {
            alert("Invalid credentials");
        }
    }
};
HrmLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HrmLoginComponent.prototype, "valueChange", void 0);
HrmLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hrm-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hrm-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrm-login/hrm-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hrm-login.component.css */ "./src/app/hrm-login/hrm-login.component.css")).default]
    })
], HrmLoginComponent);



/***/ }),

/***/ "./src/app/leave/leave-list/leave-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/leave/leave-list/leave-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXZlL2xlYXZlLWxpc3QvbGVhdmUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/leave/leave-list/leave-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/leave/leave-list/leave-list.component.ts ***!
  \**********************************************************/
/*! exports provided: LeaveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveListComponent", function() { return LeaveListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/leave.service */ "./src/app/leave/services/leave.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _leave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../leave.component */ "./src/app/leave/leave.component.ts");





let LeaveListComponent = class LeaveListComponent {
    constructor(dialog, _leaveService) {
        this.dialog = dialog;
        this._leaveService = _leaveService;
        this.leaveList = [];
        this.leaveFullList = [];
    }
    ngOnInit() {
        this.leaveList = this._leaveService.getLeave();
        this.leaveFullList = this.leaveList;
    }
    search() {
        if (this.searchText != "") {
            this.leaveFullList = this.leaveFullList.filter(res => {
                return res.Month.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
            });
        }
        else if (this.searchText == "") {
            this.ngOnInit();
        }
    }
    editLeave(id) {
        this.isPopupOpened = true;
        const tax = this._leaveService.getLeave().find(c => c.LeaveId === id);
        const dialogRef = this.dialog.open(_leave_component__WEBPACK_IMPORTED_MODULE_4__["LeaveComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            data: tax;
        });
    }
    deleteLeave(id) {
        this._leaveService.deleteLeave(id);
    }
    addLeave() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(_leave_component__WEBPACK_IMPORTED_MODULE_4__["LeaveComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
        });
        // dialogConfig.width = '60px';
    }
};
LeaveListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"] }
];
LeaveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave-list/leave-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave-list.component.css */ "./src/app/leave/leave-list/leave-list.component.css")).default]
    })
], LeaveListComponent);



/***/ }),

/***/ "./src/app/leave/leave.component.css":
/*!*******************************************!*\
  !*** ./src/app/leave/leave.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 450px;\r\n  }\r\n  \r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form {\r\n    display: flex;\r\n    padding-top: 6px;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 16px;\r\n    flex-grow: 1;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUvbGVhdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9sZWF2ZS9sZWF2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/leave/leave.component.ts":
/*!******************************************!*\
  !*** ./src/app/leave/leave.component.ts ***!
  \******************************************/
/*! exports provided: LeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveComponent", function() { return LeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/leave.service */ "./src/app/leave/services/leave.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let LeaveComponent = class LeaveComponent {
    constructor(dialog, _leaveService, data) {
        this.dialog = dialog;
        this._leaveService = _leaveService;
        this.data = data;
    }
    ngOnInit() {
    }
    confirmAdd() {
        this._leaveService.addLeave(this.data);
    }
};
LeaveComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
LeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave.component.css */ "./src/app/leave/leave.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], LeaveComponent);



/***/ }),

/***/ "./src/app/leave/services/leave.service.ts":
/*!*************************************************!*\
  !*** ./src/app/leave/services/leave.service.ts ***!
  \*************************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LeaveService = class LeaveService {
    constructor(httpClient, httpService) {
        this.httpClient = httpClient;
        this.httpService = httpService;
        this._leaveDetails = [];
        this._leaveDetail = [
            { LeaveId: 1, EmployeeId: 1, Month: 'Jan', FromDate: '11/11/2019', ToDate: '13/11/2019', NoOfDays: '3', LeavePeriod: 'a' },
            { LeaveId: 2, EmployeeId: 2, Month: 'Feb', FromDate: '10/11/2019', ToDate: '12/11/2019', NoOfDays: '3', LeavePeriod: 'b' },
            { LeaveId: 3, EmployeeId: 3, Month: 'Mar', FromDate: '09/11/2019', ToDate: '11/11/2019', NoOfDays: '3', LeavePeriod: 'ca' },
            { LeaveId: 4, EmployeeId: 4, Month: 'April', FromDate: '08/11/2019', ToDate: '10/11/2019', NoOfDays: '3', LeavePeriod: 'd' },
        ];
    }
    addLeave(addLeave) {
        addLeave.LeaveId = this._leaveDetail.length + 1;
        this._leaveDetail.push(addLeave);
    }
    editLeave(editLeave) {
        const index = this._leaveDetail.findIndex(c => c.LeaveId === editLeave.LeaveId);
        this._leaveDetail[index] = editLeave;
        this._leaveDetail.push(editLeave);
    }
    deleteLeave(id) {
        const delLeave = this._leaveDetail.findIndex(c => c.LeaveId === id);
        this._leaveDetail.splice(delLeave, 1);
    }
    getLeave() {
        return this._leaveDetail;
    }
};
LeaveService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LeaveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LeaveService);



/***/ }),

/***/ "./src/app/loan/loan-list/loan-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/loan/loan-list/loan-list.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW4vbG9hbi1saXN0L2xvYW4tbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/loan/loan-list/loan-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/loan/loan-list/loan-list.component.ts ***!
  \*******************************************************/
/*! exports provided: LoanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanListComponent", function() { return LoanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loan.component */ "./src/app/loan/loan.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_loan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loan.service */ "./src/app/loan/services/loan.service.ts");





let LoanListComponent = class LoanListComponent {
    constructor(dialog, _loanService) {
        this.dialog = dialog;
        this._loanService = _loanService;
        this.loanList = [];
        this.loanFullList = [];
        this.displayedColumns = ['addtaxid', 'taxname', 'taxvalue', 'status', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this._loanService._loanDetails);
    }
    ngOnInit() {
        this.loanList = this._loanService.getLoan();
        this.loanFullList = this.loanList;
    }
    search() {
        if (this.searchText != "") {
            this.loanFullList = this.loanFullList.filter(res => {
                return res.TypeOfLoan.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
            });
        }
        else if (this.searchText == "") {
            this.ngOnInit();
        }
    }
    addLoan() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(_loan_component__WEBPACK_IMPORTED_MODULE_2__["LoanComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
        });
        // dialogConfig.width = '60px';
    }
    editUser(id) {
        this.isPopupOpened = true;
        const tax = this._loanService.getLoan().find(c => c.LoanId === id);
        const dialogRef = this.dialog.open(_loan_component__WEBPACK_IMPORTED_MODULE_2__["LoanComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            data: tax;
        });
    }
    deleteLoan(id) {
        this._loanService.deleteLoan(id);
    }
};
LoanListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_loan_service__WEBPACK_IMPORTED_MODULE_4__["LoanService"] }
];
LoanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan-list/loan-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-list.component.css */ "./src/app/loan/loan-list/loan-list.component.css")).default]
    })
], LoanListComponent);



/***/ }),

/***/ "./src/app/loan/loan.component.css":
/*!*****************************************!*\
  !*** ./src/app/loan/loan.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 450px;\r\n  }\r\n  \r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form {\r\n    display: flex;\r\n    padding-top: 6px;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 16px;\r\n    flex-grow: 1;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi9sb2FuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9hbi9sb2FuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiA0NTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/loan/loan.component.ts":
/*!****************************************!*\
  !*** ./src/app/loan/loan.component.ts ***!
  \****************************************/
/*! exports provided: LoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanComponent", function() { return LoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_loan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/loan.service */ "./src/app/loan/services/loan.service.ts");





let LoanComponent = class LoanComponent {
    constructor(dialog, _loanService, data) {
        this.dialog = dialog;
        this._loanService = _loanService;
        this.data = data;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            // Validators.email,
        ]);
    }
    ngOnInit() {
    }
    confirmAdd() {
        this._loanService.addLoan(this.data);
    }
};
LoanComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_loan_service__WEBPACK_IMPORTED_MODULE_4__["LoanService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
LoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan.component.css */ "./src/app/loan/loan.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], LoanComponent);



/***/ }),

/***/ "./src/app/loan/services/loan.service.ts":
/*!***********************************************!*\
  !*** ./src/app/loan/services/loan.service.ts ***!
  \***********************************************/
/*! exports provided: LoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanService", function() { return LoanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let LoanService = class LoanService {
    constructor(httpClient, httpService) {
        this.httpClient = httpClient;
        this.httpService = httpService;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._loanDetails = [];
        this._loanDetail = [
            { LoanId: 1, TypeOfLoan: 'A', DateOfApplication: '11/12/2010', ProposedAmount: '11/11/2019', NoOfInstRecovery: '13/11/2019', StartDateOfRecovery: '3', EndDateOfRecovery: 'True', NoOfDays: 'Test', InterestRate: '10', InterestAmount: '11' },
            { LoanId: 2, TypeOfLoan: 'B', DateOfApplication: '21/12/2010', ProposedAmount: '11/11/2019', NoOfInstRecovery: '13/11/2019', StartDateOfRecovery: '3', EndDateOfRecovery: 'True', NoOfDays: 'Test', InterestRate: '10', InterestAmount: '11' },
            { LoanId: 3, TypeOfLoan: 'C', DateOfApplication: '11/11/2010', ProposedAmount: '11/11/2019', NoOfInstRecovery: '13/11/2019', StartDateOfRecovery: '3', EndDateOfRecovery: 'True', NoOfDays: 'Test', InterestRate: '10', InterestAmount: '11' },
            { LoanId: 4, TypeOfLoan: 'D', DateOfApplication: '11/10/2010', ProposedAmount: '11/11/2019', NoOfInstRecovery: '13/11/2019', StartDateOfRecovery: '3', EndDateOfRecovery: 'True', NoOfDays: 'Test', InterestRate: '10', InterestAmount: '11' },
        ];
    }
    getDialogData() {
        return this.dialogData;
    }
    addLoan(addLoan) {
        addLoan.LoanId = this._loanDetail.length + 1;
        this._loanDetail.push(addLoan);
    }
    editLoan(editLoan) {
        const index = this._loanDetail.findIndex(c => c.LoanId === editLoan.LoanId);
        this._loanDetail[index] = editLoan;
        this._loanDetail.push(editLoan);
    }
    deleteLoan(id) {
        const delLoan = this._loanDetail.findIndex(c => c.LoanId === id);
        this._loanDetail.splice(delLoan, 1);
    }
    getLoan() {
        return this._loanDetail;
    }
};
LoanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoanService);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\njustify-content: space-between;\r\nheight: 45px;\r\nwidth: 83rem;\r\n}\r\n.span {\r\n    justify-content: space-between;\r\n    padding-right: 3 rem ;\r\n    float: right;\r\n    cursor: pointer;\r\n    margin: right;\r\n    float: none;\r\n}\r\n.logout {\r\ncursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOEJBQThCO0FBQzlCLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUE7QUFDQSxlQUFlO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5oZWlnaHQ6IDQ1cHg7XHJcbndpZHRoOiA4M3JlbTtcclxufVxyXG4uc3BhbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzIHJlbSA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logOut() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/payroll/payroll-list/payroll-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/payroll/payroll-list/payroll-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheXJvbGwvcGF5cm9sbC1saXN0L3BheXJvbGwtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/payroll/payroll-list/payroll-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payroll/payroll-list/payroll-list.component.ts ***!
  \****************************************************************/
/*! exports provided: PayrollListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollListComponent", function() { return PayrollListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_payroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/payroll.service */ "./src/app/payroll/services/payroll.service.ts");
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payroll.component */ "./src/app/payroll/payroll.component.ts");





let PayrollListComponent = class PayrollListComponent {
    constructor(dialog, _payrollService) {
        this.dialog = dialog;
        this._payrollService = _payrollService;
        this.displayedColumns = ['addtaxid', 'taxname', 'taxvalue', 'status', 'actions'];
        this.payrollList = [];
        this.payrollFullList = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this._payrollService._payrollDetails);
    }
    ngOnInit() {
        this.payrollList = this._payrollService.getPayroll();
        this.payrollFullList = this.payrollList;
    }
    search() {
        if (this.searchText != "") {
            this.payrollFullList = this.payrollFullList.filter(res => {
                return res.Month.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
            });
        }
        else if (this.searchText == "") {
            this.ngOnInit();
        }
    }
    addPayroll() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(_payroll_component__WEBPACK_IMPORTED_MODULE_4__["PayrollComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
        });
        dialogConfig.width = '60px';
    }
    editPayroll(id) {
        this.isPopupOpened = true;
        const tax = this._payrollService.getPayroll().find(c => c.PayrollId === id);
        const dialogRef = this.dialog.open(_payroll_component__WEBPACK_IMPORTED_MODULE_4__["PayrollComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            data: tax;
        });
    }
    deletePayroll(id) {
        this._payrollService.deletePayroll(id);
    }
};
PayrollListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_payroll_service__WEBPACK_IMPORTED_MODULE_3__["PayrollService"] }
];
PayrollListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payroll-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payroll-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll-list/payroll-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payroll-list.component.css */ "./src/app/payroll/payroll-list/payroll-list.component.css")).default]
    })
], PayrollListComponent);



/***/ }),

/***/ "./src/app/payroll/payroll.component.css":
/*!***********************************************!*\
  !*** ./src/app/payroll/payroll.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheXJvbGwvcGF5cm9sbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/payroll/payroll.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payroll/payroll.component.ts ***!
  \**********************************************/
/*! exports provided: PayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollComponent", function() { return PayrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PayrollComponent = class PayrollComponent {
    constructor() { }
    ngOnInit() {
    }
};
PayrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payroll',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payroll.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payroll.component.css */ "./src/app/payroll/payroll.component.css")).default]
    })
], PayrollComponent);



/***/ }),

/***/ "./src/app/payroll/services/payroll.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/payroll/services/payroll.service.ts ***!
  \*****************************************************/
/*! exports provided: PayrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollService", function() { return PayrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PayrollService = class PayrollService {
    constructor(httpClient, httpService) {
        this.httpClient = httpClient;
        this.httpService = httpService;
        this._payrollDetails = [];
        this._payrollDetail = [
            { PayrollId: 1, EmployeeId: 1, Month: 'May', Year: '2010', TotalPresent: '10', TotalAbsent: '1', LeaveDays: '3', Deduction: '2', Leave: '4', FestivalAdvance: '2', HousingLoan: '3', VehicleLoan: '2', OtherLoan: '3', LossOfPay: '4', TDS: '6', ProfessionalFees: '6', OtherDeductions: '4', TotalEarnings: '3', OtherPay: '2', BasicSalary: '3', SalaryPerDay: '4', Pay: '1', Earnings: '3', Deductions: '4', NetPay: '6' },
            { PayrollId: 1, EmployeeId: 9, Month: 'April', Year: '2010', TotalPresent: '10', TotalAbsent: '1', LeaveDays: '3', Deduction: '2', Leave: '4', FestivalAdvance: '2', HousingLoan: '3', VehicleLoan: '2', OtherLoan: '3', LossOfPay: '4', TDS: '6', ProfessionalFees: '6', OtherDeductions: '4', TotalEarnings: '3', OtherPay: '2', BasicSalary: '3', SalaryPerDay: '4', Pay: '1', Earnings: '3', Deductions: '4', NetPay: '6' },
            { PayrollId: 1, EmployeeId: 1, Month: 'March', Year: '2010', TotalPresent: '10', TotalAbsent: '1', LeaveDays: '3', Deduction: '2', Leave: '4', FestivalAdvance: '2', HousingLoan: '3', VehicleLoan: '2', OtherLoan: '3', LossOfPay: '4', TDS: '6', ProfessionalFees: '6', OtherDeductions: '4', TotalEarnings: '3', OtherPay: '2', BasicSalary: '3', SalaryPerDay: '4', Pay: '1', Earnings: '3', Deductions: '4', NetPay: '6' },
            { PayrollId: 1, EmployeeId: 1, Month: 'June', Year: '2010', TotalPresent: '10', TotalAbsent: '1', LeaveDays: '3', Deduction: '2', Leave: '4', FestivalAdvance: '2', HousingLoan: '3', VehicleLoan: '2', OtherLoan: '3', LossOfPay: '4', TDS: '6', ProfessionalFees: '6', OtherDeductions: '4', TotalEarnings: '3', OtherPay: '2', BasicSalary: '3', SalaryPerDay: '4', Pay: '1', Earnings: '3', Deductions: '4', NetPay: '6' },
            { PayrollId: 1, EmployeeId: 1, Month: 'July', Year: '2010', TotalPresent: '10', TotalAbsent: '1', LeaveDays: '3', Deduction: '2', Leave: '4', FestivalAdvance: '2', HousingLoan: '3', VehicleLoan: '2', OtherLoan: '3', LossOfPay: '4', TDS: '6', ProfessionalFees: '6', OtherDeductions: '4', TotalEarnings: '3', OtherPay: '2', BasicSalary: '3', SalaryPerDay: '4', Pay: '1', Earnings: '3', Deductions: '4', NetPay: '6' },
        ];
    }
    addPayroll(addPayroll) {
        addPayroll.PayrollId = this._payrollDetail.length + 1;
        this._payrollDetail.push(addPayroll);
    }
    editPayroll(editPayroll) {
        const index = this._payrollDetail.findIndex(c => c.PayrollId === editPayroll.PayrollId);
        this._payrollDetail[index] = editPayroll;
        this._payrollDetail.push(editPayroll);
    }
    deletePayroll(id) {
        const delPayroll = this._payrollDetail.findIndex(c => c.PayrollId === id);
        this._payrollDetail.splice(delPayroll, 1);
    }
    getPayroll() {
        return this._payrollDetail;
    }
};
PayrollService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PayrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PayrollService);



/***/ }),

/***/ "./src/app/training/training-list/training-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/training/training-list/training-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5nL3RyYWluaW5nLWxpc3QvdHJhaW5pbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/training/training-list/training-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/training/training-list/training-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TrainingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingListComponent", function() { return TrainingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrainingListComponent = class TrainingListComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrainingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/training/training-list/training-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training-list.component.css */ "./src/app/training/training-list/training-list.component.css")).default]
    })
], TrainingListComponent);



/***/ }),

/***/ "./src/app/training/training.component.css":
/*!*************************************************!*\
  !*** ./src/app/training/training.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5nL3RyYWluaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrainingComponent = class TrainingComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/training/training.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training.component.css */ "./src/app/training/training.component.css")).default]
    })
], TrainingComponent);



/***/ }),

/***/ "./src/app/user/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(httpClient, httpService) {
        this.httpClient = httpClient;
        this.httpService = httpService;
        this._userDetails = [];
        this._userDetail = [
            { UserId: 1, UserName: 'admin', Password: 'admin', UserGender: 'Male', Role: 'Admin', Token: 'asd55689654', Attendance: 1, IpAddress: '172.72.82.0' },
            { UserId: 2, UserName: 'Maria', Password: 'maria', UserGender: 'Female', Role: 'User', Token: 'asd588989654', Attendance: 2, IpAddress: '172.82.92.0' },
            { UserId: 3, UserName: 'Shaon', Password: 'shaon', UserGender: 'Male', Role: 'User', Token: 'asd567889654', Attendance: 5, IpAddress: '164.92.81.1' },
            { UserId: 4, UserName: 'Tara', Password: 'tara', UserGender: 'Female', Role: 'User', Token: 'asd5559589654', Attendance: 6, IpAddress: '172.72.82.0' },
            { UserId: 5, UserName: 'Rahi', Password: 'rahi', UserGender: 'Male', Role: 'User', Token: 'asd589654', Attendance: 3, IpAddress: '172.72.82.0' },
            { UserId: 6, UserName: 'Kriti', Password: 'kriti', UserGender: 'Female', Role: 'User', Token: 'asd589654', Attendance: 3, IpAddress: '172.72.82.0' },
            { UserId: 7, UserName: 'Raman', Password: 'raman', UserGender: 'Male', Role: 'User', Token: 'asdasd589654', Attendance: 2, IpAddress: '172.72.82.0' },
            { UserId: 8, UserName: 'Rashi', Password: 'rashi', UserGender: 'Female', Role: 'User', Token: 'asda245sd589654', Attendance: 10, IpAddress: '172.72.82.0' },
            { UserId: 9, UserName: 'Kiren', Password: 'kiren', UserGender: 'Male', Role: 'User', Token: 'asd578asd589654', Attendance: 11, IpAddress: '172.72.82.0' },
        ];
    }
    addUserDetail(addUser) {
        addUser.UserId = this._userDetail.length + 1;
        this._userDetail.push(addUser);
    }
    getLocation() {
        return this.httpClient.get('');
    }
    editUserDetail(addUser) {
        const index = this._userDetail.findIndex(c => c.UserId === addUser.UserId);
        this._userDetail[index] = addUser;
        this._userDetail.push(addUser);
    }
    deleteUserDetail(id) {
        const addUsers = this._userDetail.findIndex(c => c.UserId === id);
        this._userDetail.splice(addUsers, 1);
    }
    getUserDetail() {
        return this._userDetail;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/user/user-list/user-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pdf {\r\n    cursor: pointer;\r\n    margin:10px;\r\n}\r\n\r\n  .maps {\r\n\r\n    position: absolute;\r\n    margin-left: 3%;\r\n    top:100px;\r\n    width: 85%;\r\n    height: 85%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztFQUVFOztJQUVFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZGYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbn1cclxuXHJcbiAgLm1hcHMge1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIHRvcDoxMDBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);







let UserListComponent = class UserListComponent {
    constructor(dialog, _userService) {
        this.dialog = dialog;
        this._userService = _userService;
        this.getUserList = [];
        this.displayedColumns = ['addtaxid', 'taxname', 'taxvalue', 'status', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this._userService._userDetail);
    }
    ngOnInit() {
        this.getUserList = this._userService.getUserDetail();
    }
    // get userList() {
    //   return this._userService.getUserDetail();
    // }
    addUser() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
        });
        //  dialogConfig.width = '60px';
    }
    editUser(id) {
        this.isPopupOpened = true;
        const tax = this._userService.getUserDetail().find(c => c.UserId === id);
        const dialogRef = this.dialog.open(_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            data: tax;
        });
    }
    deleteUser(id) {
        this._userService.deleteUserDetail(id);
    }
    parentMethod($event) {
        this.exampleParent = $event;
    }
    captureScreen() {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(data).then(canvas => {
            // Few necessary setting options  
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF   
        });
    }
};
UserListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfTable', { static: false })
], UserListComponent.prototype, "userLists", void 0);
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list/user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.css */ "./src/app/user/user-list/user-list.component.css")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/user/user-location/user-location.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/user-location/user-location.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    position: absolute;\r\n    margin-left: 40%;\r\n    top:100px;\r\n    width: 75%;\r\n    height: 75%;\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWxvY2F0aW9uL3VzZXItbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbG9jYXRpb24vdXNlci1sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogNzUlO1xyXG59XHJcblxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/user/user-location/user-location.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/user-location/user-location.component.ts ***!
  \***************************************************************/
/*! exports provided: UserLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationComponent", function() { return UserLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");



let UserLocationComponent = class UserLocationComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.lat = 23.7272;
        this.lng = 90.4093;
    }
    ngOnInit() {
        this._userService.getLocation().subscribe(data => {
            console.log(data);
            // this.lat = data.latitude;
            // this.lng = data.longitude;
        });
    }
};
UserLocationComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UserLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-location/user-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-location.component.css */ "./src/app/user/user-location/user-location.component.css")).default]
    })
], UserLocationComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/* agm-map {\r\n    height: 400px;\r\n    width: 500px;\r\n  }\r\n  \r\n  h2{\r\n    color: #2c3e50;\r\n  }\r\n  \r\n  input{\r\n    padding: 10px 15px;\r\n    font-size: 1em;\r\n    border-top: none;\r\n    border-right: none;\r\n    border-left: none;\r\n    outline: none;\r\n    margin: 0px 15px;\r\n    border-bottom: gray solid 2px;\r\n  }\r\n  \r\n  \r\n  input:hover, input:focus{\r\n   border-bottom: #e67e22 solid 3px;\r\n  }\r\n  \r\n  \r\n  button{\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    background: #2980b9;\r\n    border: none;\r\n    color: white;\r\n    font-size: 1em;\r\n  }\r\n  \r\n  button:hover{\r\n    background: #e67e22;\r\n  } */\r\n\r\n\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 450px;\r\n  }\r\n\r\n\r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  .form {\r\n    display: flex;\r\n    padding-top: 6px;\r\n  }\r\n\r\n\r\n  .mat-form-field {\r\n    font-size: 16px;\r\n    flex-grow: 1;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUNLOzs7RUFHSDtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOzs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOzs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBhZ20tbWFwIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgye1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0e1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IGdyYXkgc29saWQgMnB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBpbnB1dDpob3ZlciwgaW5wdXQ6Zm9jdXN7XHJcbiAgIGJvcmRlci1ib3R0b206ICNlNjdlMjIgc29saWQgM3B4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBidXR0b257XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTY3ZTIyO1xyXG4gIH0gKi9cclxuXHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "./src/app/user/services/user.service.ts");





let UserComponent = class UserComponent {
    constructor(dialog, _userService, data) {
        this.dialog = dialog;
        this._userService = _userService;
        this.data = data;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            // Validators.email,
        ]);
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialog.closeAll();
    }
    confirmAdd() {
        this._userService.addUserDetail(this.data);
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], UserComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\source\repos\MyHrm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map