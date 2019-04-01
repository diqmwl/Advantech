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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    width: 100%;\r\n}\r\n\r\napp-navbar {\r\n    width: 100%;\r\n    z-index: 99;\r\n    background: #ffffff;\r\n    position: fixed;\r\n}\r\n\r\n/*\r\nwhite-space:nowrap;\r\noverflow-x:scroll;\r\noverflow-y:scroll;\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBOzs7O0NBSUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmFwcC1uYXZiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi8qXHJcbndoaXRlLXNwYWNlOm5vd3JhcDtcclxub3ZlcmZsb3cteDpzY3JvbGw7XHJcbm92ZXJmbG93LXk6c2Nyb2xsO1xyXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div>\n  <ng-flash-message></ng-flash-message>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n<app-footerbar></app-footerbar>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KIWI';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footerbar_footerbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footerbar/footerbar.component */ "./src/app/components/footerbar/footerbar.component.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _components_policy_personal_info_policy_personal_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/policy-personal-info/policy-personal-info.component */ "./src/app/components/policy-personal-info/policy-personal-info.component.ts");
/* harmony import */ var _components_policy_service_policy_service_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/policy-service/policy-service.component */ "./src/app/components/policy-service/policy-service.component.ts");
/* harmony import */ var _components_policy_location_policy_location_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/policy-location/policy-location.component */ "./src/app/components/policy-location/policy-location.component.ts");
/* harmony import */ var _components_policy_rent_policy_rent_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/policy-rent/policy-rent.component */ "./src/app/components/policy-rent/policy-rent.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_footerbar_footerbar_component__WEBPACK_IMPORTED_MODULE_10__["FooterbarComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"],
                _components_policy_personal_info_policy_personal_info_component__WEBPACK_IMPORTED_MODULE_15__["PolicyPersonalInfoComponent"],
                _components_policy_service_policy_service_component__WEBPACK_IMPORTED_MODULE_16__["PolicyServiceComponent"],
                _components_policy_location_policy_location_component__WEBPACK_IMPORTED_MODULE_17__["PolicyLocationComponent"],
                _components_policy_rent_policy_rent_component__WEBPACK_IMPORTED_MODULE_18__["PolicyRentComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__["NgFlashMessagesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                    },
                    {
                        path: 'policy-personal-info',
                        component: _components_policy_personal_info_policy_personal_info_component__WEBPACK_IMPORTED_MODULE_15__["PolicyPersonalInfoComponent"]
                    },
                    {
                        path: 'policy-service',
                        component: _components_policy_service_policy_service_component__WEBPACK_IMPORTED_MODULE_16__["PolicyServiceComponent"]
                    },
                    {
                        path: 'policy-location',
                        component: _components_policy_location_policy_location_component__WEBPACK_IMPORTED_MODULE_17__["PolicyLocationComponent"]
                    },
                    {
                        path: 'policy-rent',
                        component: _components_policy_rent_policy_rent_component__WEBPACK_IMPORTED_MODULE_18__["PolicyRentComponent"]
                    }
                ])
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bimage {\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 320px;\r\n    background-image: url('Kiwi_Footer.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYix3Q0FBK0Q7SUFDL0QsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9LaXdpX0Zvb3Rlci5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bimage\">\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/footerbar/footerbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/footerbar/footerbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);\n@charset 'utf-8';\n* {\r\n    font-family: 'Nanum Pen Script', cursive;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\n#footerbar{\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n}\n#category {\r\n    font-size: 22px;\r\n    letter-spacing: 3px;\r\n    font-weight: bold;\r\n    color: #151515;\r\n    cursor: pointer;\r\n}\r\n\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXJiYXIvZm9vdGVyYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGtFQUFrRTtBQURsRSxnQkFBZ0I7QUFHaEI7SUFDSSx3Q0FBd0M7SUFDeEMseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyYmFyL2Zvb3RlcmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgJ3V0Zi04JztcclxuQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9uYW51bXBlbnNjcmlwdC5jc3MpO1xyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ05hbnVtIFBlbiBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiNmb290ZXJiYXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4jY2F0ZWdvcnkge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/components/footerbar/footerbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/footerbar/footerbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"footerbar\" style=\"background-color: #c7f4bc;\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"col\" style=\"height: 100%; padding-top:10px;\">\n      <div class=\"row\">\n        <div>\n            <ul class=\"navbar-nav\" >\n                <li><img src=\"https://www.li.me/hubfs/Assets/footer-facebook.svg\" alt=\"\" style=\"margin-right: 10px\">\n                <img src=\"https://www.li.me/hubfs/Assets/footer-twitter.svg\" alt=\"\" style=\"margin-right: 10px\">\n                <img src=\"https://www.li.me/hubfs/Assets/footer-instagram.svg\" alt=\"\" style=\"margin-right: 10px\">\n                <img src=\"https://www.li.me/hubfs/Assets/footer-angel.svg\" alt=\"\" style=\"margin-right: 10px\"></li>\n            </ul>\n        </div>\n  \n      </div>\n    </div>\n    <div class=\"col\" style=\"height: 100%\">\n      <ul class=\"navbar-nav\">\n          <a class=\"nav-link\" id=\"category\" (click)=\"policy_personal_info()\">개인정보 취급방침</a>\n      </ul>\n    </div>\n      <div class=\"col\" style=\"height: 100%\">\n      <ul class=\"navbar-nav\">\n          <a class=\"nav-link\" id=\"category\" (click)=\"policy_service()\">서비스 이용약관</a>\n      </ul>\n    </div>\n    <div class=\"col\">\n        <ul class=\"navbar-nav\">\n            <a class=\"nav-link\" id=\"category\" (click)=\"policy_location()\">위치기반서비스 이용약관</a>\n        </ul>\n      </div>\n      <div class=\"col\">\n          <ul class=\"navbar-nav\">\n              <a class=\"nav-link\" id=\"category\" (click)=\"policy_rent()\">대여 약관</a>\n          </ul>\n      </div> \n  </div>"

/***/ }),

/***/ "./src/app/components/footerbar/footerbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/footerbar/footerbar.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterbarComponent", function() { return FooterbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FooterbarComponent = /** @class */ (function () {
    function FooterbarComponent(router) {
        this.router = router;
    }
    FooterbarComponent.prototype.ngOnInit = function () {
        document.getElementById('L_home').style.display = "none";
        document.getElementById('L_service').style.display = "none";
        document.getElementById('L_add').style.display = "none";
        document.getElementById('L_safety').style.display = "none";
        document.getElementById('L_friend').style.display = "none";
    };
    FooterbarComponent.prototype.policy_personal_info = function () {
        this.router.navigate(['/policy-personal-info']);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById('L_home').style.display = "none";
        document.getElementById('L_service').style.display = "none";
        document.getElementById('L_add').style.display = "none";
        document.getElementById('L_safety').style.display = "none";
        document.getElementById('L_friend').style.display = "none";
    };
    FooterbarComponent.prototype.policy_service = function () {
        this.router.navigate(['/policy-service']);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById('L_home').style.display = "none";
        document.getElementById('L_service').style.display = "none";
        document.getElementById('L_add').style.display = "none";
        document.getElementById('L_safety').style.display = "none";
        document.getElementById('L_friend').style.display = "none";
    };
    FooterbarComponent.prototype.policy_location = function () {
        this.router.navigate(['/policy-location']);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById('L_home').style.display = "none";
        document.getElementById('L_service').style.display = "none";
        document.getElementById('L_add').style.display = "none";
        document.getElementById('L_safety').style.display = "none";
        document.getElementById('L_friend').style.display = "none";
    };
    FooterbarComponent.prototype.policy_rent = function () {
        this.router.navigate(['/policy-rent']);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById('L_home').style.display = "none";
        document.getElementById('L_service').style.display = "none";
        document.getElementById('L_add').style.display = "none";
        document.getElementById('L_safety').style.display = "none";
        document.getElementById('L_friend').style.display = "none";
    };
    FooterbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footerbar',
            template: __webpack_require__(/*! ./footerbar.component.html */ "./src/app/components/footerbar/footerbar.component.html"),
            styles: [__webpack_require__(/*! ./footerbar.component.css */ "./src/app/components/footerbar/footerbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FooterbarComponent);
    return FooterbarComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);\n@charset 'utf-8';\n* {\r\n    font-family: 'Nanum Pen Script', cursive;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\n#title {\r\n    font-size: 75px;\r\n    letter-spacing: -3px;\r\n    line-height: 82px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    /* box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.38); */\r\n}\n#sub {\r\n    font-size: 25px;\r\n    letter-spacing: 0px;\r\n    line-height: 84px;\r\n    color: #d4d4d4;\r\n    text-align: center;\r\n}\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n}\n#Kiwi_AddHOW{\r\n    color:white;\r\n    background: #c7f4bc;\r\n    width: 100%;\r\n    height: 700px;\r\n    display: table;\r\n}\n#Kiwi_AddHOW_Table{\r\n    width:1000px;\r\n}\n#Kiwi_ServiceIn{\r\n    width: 100%;\r\n    height: 700px;\r\n    display: table;\r\n}\n#Kiwi_Safety{\r\n    width: 100%;\r\n    height: auto;\r\n    display: table;\r\n    background: #f8f8ff;\r\n}\n#Kiwi_Safety_Table{\r\n    width:100%;\r\n}\n#Kiwi_Home {\r\n    text-align: center;\r\n    display: table;\r\n    width: 100%;\r\n    height: 700px;\r\n    background-image: url('Kiwi_Main.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\n#sbimage {\r\n    text-align: center;\r\n    display: table;\r\n    width: 100%;\r\n    height: 750px;\r\n    background-image: url('Kiwi_Footerbar.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: center;\r\n}\n#d_sub {\r\n    display: table-cell;\r\n    text-align: center;\r\n}\n#content {\r\n    display: table-cell;\r\n    top: 50%;\r\n    left: 50%;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    font-size: 5rem;\r\n    color: white;\r\n    z-index: 2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0VBQWtFO0FBRGxFLGdCQUFnQjtBQUVoQjtJQUNJLHdDQUF3QztJQUN4Qyx5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNDQUE2RDtJQUM3RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJDQUFrRTtJQUNsRSw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCAndXRmLTgnO1xyXG5AaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25hbnVtcGVuc2NyaXB0LmNzcyk7XHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBQZW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA3NXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XHJcbiAgICBsaW5lLWhlaWdodDogODJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM4KTsgKi9cclxufVxyXG5cclxuI3N1YiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XHJcbiAgICBjb2xvcjogI2Q0ZDRkNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4jS2l3aV9BZGRIT1d7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNjN2Y0YmM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuI0tpd2lfQWRkSE9XX1RhYmxle1xyXG4gICAgd2lkdGg6MTAwMHB4O1xyXG59XHJcblxyXG4jS2l3aV9TZXJ2aWNlSW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuI0tpd2lfU2FmZXR5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4ZmY7XHJcbn1cclxuXHJcbiNLaXdpX1NhZmV0eV9UYWJsZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbiNLaXdpX0hvbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0tpd2lfTWFpbi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuI3NiaW1hZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0tpd2lfRm9vdGVyYmFyLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNkX3N1YiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"Kiwi_Home\">\n  <div id=\"d_sub\">\n    <img src=\"../../../assets/images/Kiwi_image.png\" style=\"margin-top:150px\">\n    <h1 id=\"title\">언제 어디서나 즐기는</h1>\n    <h1 id=\"title\">스마트 모빌리티 <span style=\"color: #60da0f;\">KIWI</span></h1>\n\n    <h6 id=\"sub\">내 위치 주변에 있는 스마트 킥보드 \"<span style=\"color: #60da0f;\">KIWI</span>\"를 찾아 언제 어디서나 쉽게 즐기세요</h6>\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"row\" style=\"height:107px; width:800px;\">\n        <a href=\"https://play.google.com/store/apps/details?id=com.hansung.android.kiwi\" style=\"margin-left:50px\"><img\n            src=\"../../../assets/images/Google_Play.png\" width=\"60%\" height=\"60%\"></a>\n        <a><img src=\"../../../assets/images/App_Store.png\" width=\"60%\" height=\"60%\" (click)=\"alram()\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\" id=\"Kiwi_ServiceIn\">\n  <div class=\"d-flex justify-content-center\" style=\"margin-top: 100px; margin-bottom: 100px;\">\n    <div class=\"col\">\n      <img src=\"../../../assets/images/KIWI_APP.png\" width=\"250px\" height=\"auto\" style=\"margin-left:250px\">\n    </div>\n    <div class=\"col\" style=\"text-align:center; height: 100%; display: table; margin-right: 200px; \">\n      <div style=\"display: table-cell; vertical-align: middle\">\n        <h1 style=\"margin-top:70px; margin-bottom:50px; letter-spacing:6px; font-size:55px;\"><b>서비스소개</b></h1>\n\n        <h4 style=\"margin-bottom:40px; font-size:30px;\">내 주변의 <span style=\"color:#60da0f\">키위</span>를 찾아보세요.<br />\n          빠르고 편한 이동을 경험하실 수 있습니다.</h4>\n\n        <h3 style=\"font-size:35px;\"><b>지금 <span style=\"color:#60da0f\">1,000원</span>으로 출발하세요!</b></h3>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Add Method Code ! -->\n<div id=\"Kiwi_AddHOW\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col\">\n      <h1 style=\"font-weight: bold; margin-top:100px; margin-bottom:50px; letter-spacing:12px; font-size:55px;\">등록방법\n      </h1>\n    </div>\n  </div>\n  <div class=\"container\" id=\"Kiwi_AddHOW_Table\">\n    <div class=\"bgpad text-center\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Addition_1.png\" alt=\"\">\n          <h5 style=\"font-size:30px; margin:20px\">회원가입을 해주세요</h5>\n        </div>\n        <div class=\"col-6\">\n          <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Addition_2.png\" alt=\"\">\n          <h5 style=\"font-size:30px; margin:20px\">주변 보관소로 이동하세요</h5>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Addition_3.png\" alt=\"\">\n          <h5 style=\"font-size:30px; margin:20px\">카드를 준비해주세요</h5>\n        </div>\n        <div class=\"col-6\">\n          <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Addition_4.png\" alt=\"\">\n          <h5 style=\"font-size:30px; margin:20px\">앱을 이용하여 잠금을 해제 후 이용해주세요</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"Kiwi_Safety\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col\">\n      <h1 style=\"font-weight: bold; margin-top:100px; letter-spacing:12px; font-size:55px;\">안전수칙\n      </h1>\n    </div>\n    <div class=\"text-center\" style=\"height: 150px; letter-spacing: 5px; margin-bottom:2%; padding-bottom:0;\">\n      <div style=\"display:table-cell; vertical-align: middle; width: 1920px\">\n        <h2>안전한 <span style=\"color:#60da0f\">KIWI</span>를 위한 사용 방법</h2>\n        <p class=\"maxwidth700\" style=\"margin-bottom: 0; font-size:22px;\">보호 장비와 안전한 사용 방법을 익혀 <img\n            src=\"../../../assets/images/Kiwi_Logo.png\" style=\"width:30px; height:30px; margin-right: 5px\" alt=\"logo\">\n          <span style=\"color:#60da0f\">KIWI</span>를 이용하세요!</p>\n        <p class=\"maxwidth700\" style=\"font-size:22px\">사고를 예방할 수 있습니다.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- MAKE Safety TABLE ! -->\n  <div class=\"container\" id=\"Kiwi_Safety_Table\">\n    <div class=\"row\">\n      <div class=\"col-4\" style=\"text-align: center\">\n        <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Safety_01.png\" alt=\"\">\n        <h5 style=\"font-size:30px; margin:20px\">핼멧을 꼭 착용해주세요</h5>\n      </div>\n      <div class=\"col-4\" style=\"text-align: center\">\n        <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Safety_02.png\" alt=\"\">\n        <h5 style=\"font-size:30px; margin:20px\">지정된 장소에 보관해주세요</h5>\n      </div>\n      <div class=\"col-4\" style=\"text-align: center\">\n          <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Safety_03.png\" alt=\"\">\n          <h5 style=\"font-size:30px; margin:20px\">안전 점검을 실시해주세요</h5>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-4\" style=\"text-align: center\">\n          <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Safety_04.png\" alt=\"\">\n          <h5 style=\"font-size:30px; margin:20px\">양쪽 손잡이를 당기면 제동입니다</h5>\n        </div>\n        <div class=\"col-4\" style=\"text-align: center\">\n          <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Safety_05.png\" alt=\"\">\n          <h5 style=\"font-size:30px; margin:20px\">도로에 장애물을 주의하세요</h5>\n        </div>\n        <div class=\"col-4\" style=\"text-align: center\">\n            <img width=\"100%\" height=\"80%\" src=\"../../../assets/images/Kiwi_Safety_06.png\" alt=\"\">\n            <h5 style=\"font-size:30px; margin:20px\">교통 법규를 준수하세요</h5>\n          </div>\n      </div>\n\n  </div>\n</div>\n\n<!-- MAKE FriendShip Part ! -->\n<div id=\"Kiwi_FriendShip\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col\">\n      <h1 style=\"font-weight: bold; margin-top:100px; margin-bottom:50px; letter-spacing:10px; font-size:55px;\">제휴\n      </h1>\n\n      <div>\n        <img src=\"../../../assets/images/Kiwi_Alliance.PNG\" width=\"300px\" height=\"auto\">\n      </div>\n      <p style=\"margin-top:30px; letter-spacing:3px; font-size:27px;\">\n        교통 체증과 주차난을 해결할 <span style=\"color:#60da0f; font-size:30px;\">친환경적</span> 퍼스널 모빌리티 공유 서비스\n      </p>\n      <p style=\"letter-spacing:3px; font-size:27px;\">\n        <img src=\"../../../assets/images/Kiwi_Logo.png\" style=\"width:30px; height:30px;\" alt=\"logo\"> <span\n          style=\"font-weight:bold; color:#60da0f; font-size:30px;\"> KIWI</span>와 함께 친환경 도시를 만들어요\n      </p>\n\n      <p style=\"font-weight: bold; margin-bottom:100px; letter-spacing:3px; font-size:28px;\">\n        제휴 문의 KIWI @ KIWI.Kr\n      </p>\n    </div>\n  </div>\n</div>\n\n<!-- <div>\n  <div class=\"row\" style=\"text-align:center\" >\n    <div class=\"col\">\n      <iframe width=\"1000\" height=\"600\" src=\"https://www.youtube.com/embed/StWjnN6Ozb0\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\n        style=\"margin-top: 100px\"></iframe>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        document.getElementById('L_home').style.display = "inline-block";
        document.getElementById('L_service').style.display = "inline-block";
        document.getElementById('L_add').style.display = "inline-block";
        document.getElementById('L_safety').style.display = "inline-block";
        document.getElementById('L_friend').style.display = "inline-block";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);\n@charset 'utf-8';\n* {\r\n  font-family: 'Nanum Pen Script', cursive;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\n#KIWI_Home {\r\n  margin-left: 70px;\r\n  font-size: 45px;\r\n  line-height: 60px;\r\n  color: #60da0f;\r\n  letter-spacing: 3px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\n#KIWI_TOP {\r\n  text-align: right;\r\n  right: 0;\r\n  position: absolute;\r\n}\n#KIWI_List {\r\n  font-size: 25px;\r\n  line-height: 60px;\r\n  color: #000000;\r\n  letter-spacing: 4px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  margin-right: 50px;\r\n}\n#KIWI_List:hover, #KIWI_List:focus, #KIWI_List:active {\r\n  color: #60da0f;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGtFQUFrRTtBQURsRSxnQkFBZ0I7QUFFaEI7RUFDRSx3Q0FBd0M7RUFDeEMseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCAndXRmLTgnO1xyXG5AaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25hbnVtcGVuc2NyaXB0LmNzcyk7XHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnTmFudW0gUGVuIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiNLSVdJX0hvbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBjb2xvcjogIzYwZGEwZjtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jS0lXSV9UT1Age1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuI0tJV0lfTGlzdCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbiNLSVdJX0xpc3Q6aG92ZXIsICNLSVdJX0xpc3Q6Zm9jdXMsICNLSVdJX0xpc3Q6YWN0aXZlIHtcclxuICBjb2xvcjogIzYwZGEwZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"KIWI_nav\">\n  <nav class=\"navbar navbar-expand-sm \">\n    <!-- Brand/logo -->\n    <a class=\"navbar-brand\" id=\"KIWI_Home\" (click)=\"KIWI_LOGO()\">\n      <img src=\"../../../assets/images/Kiwi_Logo.png\" alt=\"logo\" style=\"width:50px;\"> KIWI\n    </a>\n\n    <!-- Links -->\n    <ul class=\"nav navbar-nav\" id=\"KIWI_TOP\">\n\n      <li class=\"nav-item\" id=\"L_home\">\n        <a class=\"smoothscroll\" id=\"KIWI_List\" (click)=\"KIWI_Home()\">홈</a>\n      </li>\n      <li class=\"nav-item\" id=\"L_service\">\n        <a class=\"smoothscroll\" id=\"KIWI_List\" (click)=\"KIWI_Service()\">서비스소개</a>\n      </li>\n      <li class=\"nav-item\" id=\"L_add\">\n        <a class=\"smoothscroll\" id=\"KIWI_List\" (click)=\"KIWI_AddMethod()\">등록방법</a>\n      </li>\n      <li class=\"nav-item\" id=\"L_safety\">\n        <a class=\"smoothscroll\" id=\"KIWI_List\" (click)=\"Kiwi_Safety()\">안전수칙</a>\n      </li>\n      <li class=\"nav-item\" id=\"L_friend\">\n        <a class=\"smoothscroll\" id=\"KIWI_List\" (click)=\"KIWI_Alliance()\">제휴</a>\n      </li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.KIWI_LOGO = function () {
        this.router.navigate(['']);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById('L_home').style.display = "inline-block";
        document.getElementById('L_service').style.display = "inline-block";
        document.getElementById('L_add').style.display = "inline-block";
        document.getElementById('L_safety').style.display = "inline-block";
        document.getElementById('L_friend').style.display = "inline-block";
    };
    NavbarComponent.prototype.KIWI_Home = function () {
        document.querySelector('#Kiwi_Home').scrollIntoView({ behavior: 'smooth' });
    };
    NavbarComponent.prototype.KIWI_Service = function () {
        document.querySelector('#Kiwi_ServiceIn').scrollIntoView({ behavior: 'smooth' });
    };
    NavbarComponent.prototype.KIWI_AddMethod = function () {
        document.querySelector('#Kiwi_AddHOW').scrollIntoView({ behavior: 'smooth' });
    };
    NavbarComponent.prototype.Kiwi_Safety = function () {
        document.querySelector('#Kiwi_Safety').scrollIntoView({ behavior: 'smooth' });
    };
    NavbarComponent.prototype.KIWI_Alliance = function () {
        document.querySelector('#Kiwi_FriendShip').scrollIntoView({ behavior: 'smooth' });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());

// KIWI_Home() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


/***/ }),

/***/ "./src/app/components/policy-location/policy-location.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/policy-location/policy-location.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);\n@charset 'utf-8';\n* {\r\n  font-family: 'Nanum Gothic', cursive;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2xpY3ktbG9jYXRpb24vcG9saWN5LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtEQUErRDtBQUQvRCxnQkFBZ0I7QUFFaEI7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2xpY3ktbG9jYXRpb24vcG9saWN5LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCAndXRmLTgnO1xyXG5AaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25hbnVtZ290aGljLmNzcyk7XHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgY3Vyc2l2ZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/policy-location/policy-location.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/policy-location/policy-location.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:110px;\">\n  <div id=\"policy-personal-table\">\n    <h2> 위치기반서비스 이용약관 </h2>\n    <br>\n    <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>은(는) 위치기반서비스 이용약관에 따라 다음과 같은 처리방침을 두고 있습니다.\n    <br><br>\n    <i>('KiwiBike')</i>은(는) (주) KiwiBike는 위치기반서비스 이용약관을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.\n    <br><br>\n    ○ 본 방침은부터 2019년 3월 27일부터 시행됩니다.\n    <br><br>\n\n    <b>제1장 총칙</b>\n    <br><br>\n    <b>제 1조 (목적)</b><br>\n    <div>\n      본 약관은 (주)(주) Kiwi(이하 “(주)Kiwi”)가 제공하는 서비스의 이용과 관련하여 “(주)Kiwi”와 “회원”과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로\n      합니다.<br />\n    </div>\n\n    <b>제 2조 (이용약관의 효력 및 변경)</b><br><br>\n    ① 본 약관은 서비스를 신청한 고객 또는 개인위치정보주체가 본 약관에 동의하고 회사가 정한 소정의 절차에 따라 서비스의 이용자로 등록함으로써 효력이 발생합니다.<br />\n    ② 회원이 온라인에서 본 약관의 \"동의하기\" 버튼을 클릭하였을 경우 본 약관의 내용을 모두 읽고 이를 충분히 이해하였으며, 그 적용에 동의한 것으로 봅니다.<br />\n    ③ 회사는 위치정보의 보호 및 이용 등에 관한 법률, 콘텐츠산업 진흥법, 전자상거래 등에서의 소비자보호에 관한 법률, 소비자기본법 약관의 규제에 관한 법률 등 관련법령을 위배하지 않는 범위에서 본 약관을\n    개정할 수 있습니다.<br />\n    ④ 회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를 명시하여 현행약관과 함께 그 적용일자 10일 전부터 적용일 이후 상당한 기간 동안 공지만을 하고, 개정 내용이 회원에게\n    불리한 경우에는 그 적용일자 30일 전부터 적용일 이후 상당한 기간 동안 각각 이를 서비스 홈페이지에 게시하거나 회원에게 전자적 형태(전자우편, SMS 등)로 약관 개정 사실을 발송하여 고지합니다.<br />\n    ⑤ 회사가 전항에 따라 회원에게 통지하면서 공지 또는 공지∙고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 이용약관에 승인한 것으로 봅니다. 회원이 개정약관에 동의하지 않을 경우 회원은\n    이용계약을 해지할 수 있습니다.<br />\n    <br><br>\n    <b>제3조 (관계법령의 적용)</b><br>\n\n    <br><br>\n    <b>제 4 조 (서비스의 내용)</b><br>\n\n    Kiwi (키위) : 전동 킥보드 대여 서비스 <br />\n\n    <br><br>\n    <b>제 5조 (서비스 이용요금)</b><br>\n\n    ① 회사가 제공하는 서비스는 기본적으로 무료입니다. 단, 별도의 유료 서비스의 경우 해당 서비스에 명시된 요금을 지불하여야 사용 가능합니다.<br />\n    ② 회사는 유료 서비스 이용요금을 회사와 계약한 전자지불업체에서 정한 방법에 의하거나 회사가 정한 청구서에 합산하여 청구할 수 있습니다.<br />\n    ③ 유료서비스 이용을 통하여 결제된 대금에 대한 취소 및 환불은 회사의 결제 이용약관 등 관계법에 따릅니다.<br />\n    ④ 회원의 개인정보도용 및 결제사기로 인한 환불요청 또는 결제자의 개인정보 요구는 법률이 정한 경우 외에는 거절될 수 있습니다.<br />\n    ⑤ 무선 서비스 이용 시 발생하는 데이터 통신료는 별도이며 가입한 각 이동통신사의 정책에 따릅니다.<br />\n    ⑥ MMS 등으로 게시물을 등록할 경우 발생하는 요금은 이동통신사의 정책에 따릅니다.<br />\n    <br><br>\n    <b>제 6 조 (서비스내용변경 통지 등)</b><br>\n\n\n    ① 회사가 서비스 내용을 변경하거나 종료하는 경우 회사는 회원의 등록된 전자우편 주소로 이메일을 통하여 서비스 내용의 변경 사항 또는 종료를 통지할 수 있습니다.<br />\n    ② ①항의 경우 불특정 다수인을 상대로 통지를 함에 있어서는 웹사이트 등 기타 회사의 공지사항을 통하여 회원들에게 통지할 수 있습니다.<br />\n    <br><br>\n    <b>제 7 조 (서비스이용의 제한 및 중지)</b><br>\n\n    ①회사는 아래 각 호의 1에 해당하는 사유가 발생한 경우에는 회원의 서비스 이용을 제한하거나 중지시킬 수 있습니다.<br />\n    1. 회원이 회사 서비스의 운영을 고의 또는 중과실로 방해하는 경우<br />\n    2. 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우<br />\n    3. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우<br />\n    4. 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때<br />\n    5. 기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우<br />\n    ②회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한기간 등을 회원에게 알려야 합니다.<br />\n\n    <br><br>\n    <b>제 8 조 (개인위치정보의 이용 또는 제공)</b><br>\n\n    ①회사는 개인위치정보를 이용하여 서비스를 제공하고자 하는 경우에는 미리 이용약관에 명시한 후 개인위치정보주체의 동의를 얻어야 합니다.<br />\n    ②회원 및 법정대리인의 권리와 그 행사방법은 제소 당시의 이용자의 주소에 의하며, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지\n    않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.<br />\n    ③회사는 타사업자 또는 이용 고객과의 요금정산 및 민원처리를 위해 위치정보 이용·제공․사실 확인자료를 자동 기록·보존하며, 해당 자료는 6개월간 보관합니다.<br />\n    ④회사는 고객의 개인위치정보를 이용한 경우 동조 제3항의 위치정보 이용‧제공사실 확인자료 외의 당해 개인위치정보를 고객이 동의한 목적범위 내에서만 이용하며 목적이 달성한 경우에는 해당 개인위치정보를 지체 없이\n    파기합니다.<br />\n    ⑤회사는 개인위치정보를 회원이 지정하는 제3자에게 제공하는 경우에는 개인위치정보를 수집한 당해 통신 단말장치로 매회 회원에게 제공받는 자, 제공일시 및 제공목적을 즉시 통보합니다. 단, 아래 각 호의 1에\n    해당하는 경우에는 회원이 미리 특정하여 지정한 통신 단말장치 또는 전자우편주소로 통보합니다.<br />\n    1. 개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 아니한 경우<br />\n    2. 회원이 온라인 게시 등의 방법으로 통보할 것을 미리 요청한 경우<br />\n\n    <br><br>\n    <b>제 9 조 (개인위치정보주체의 권리)</b><br>\n\n    ①회원은 회사에 대하여 언제든지 개인위치정보를 이용한 위치기반서비스 제공 및 개인위치정보의 제3자 제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다. 이 경우 회사는 수집한 개인위치정보 및 위치정보\n    이용, 제공사실 확인자료를 파기합니다.<br />\n    ②회원은 회사에 대하여 언제든지 개인위치정보의 수집, 이용 또는 제공의 일시적인 중지를 요구할 수 있으며, 회사는 이를 거절할 수 없고 이를 위한 기술적 수단을 갖추고 있습니다.<br />\n    ③회원은 회사에 대하여 아래 각 호의 자료에 대한 열람 또는 고지를 요구할 수 있고, 당해 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다. 이 경우 회사는 정당한 사유 없이 회원의 요구를 거절할\n    수 없습니다.<br />\n    1. 본인에 대한 위치정보 수집, 이용, 제공사실 확인자료<br />\n    2. 본인의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법률 규정에 의하여 제3자에게 제공된 이유 및 내용<br />\n    ④회원은 제1항 내지 제3항의 권리행사를 위해 회사의 소정의 절차를 통해 요구할 수 있습니다.<br />\n    <br />\n    <br><br>\n    <b>제 10 조 (법정대리인의 권리)</b><br>\n\n\n    ①회사는 14세 미만의 회원에 대해서는 개인위치정보를 이용한 위치기반서비스 제공 및 개인위치정보의 제3자 제공에 대한 동의를 당해 회원과 당해 회원의 법정대리인으로부터 동의를 받아야 합니다. 이 경우\n    법정대리인은 제9조에 의한 회원의 권리를 모두 가집니다.<br />\n    ②회사는 14세 미만의 아동의 개인위치정보 또는 위치정보 이용․제공사실 확인자료를 이용약관에 명시 또는 고지한 범위를 넘어 이용하거나 제3자에게 제공하고자 하는 경우에는 14세미만의 아동과 그 법정대리인의\n    동의를 받아야 합니다. 단, 아래의 경우는 제외합니다.<br />\n    1. 위치정보 및 위치기반서비스 제공에 따른 요금정산을 위하여 위치정보 이용, 제공사실 확인자료가 필요한 경우<br />\n    2. 통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우<br />\n    <br><br>\n    <b>제 11 조 (8세 이하의 아동 등의 보호의무자의 권리)</b><br>\n\n    ① 회사는 아래의 경우에 해당하는 자(이하 “8세 이하의 아동”등이라 한다)의 보호의무자가 8세 이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는 경우에는 본인의 동의가\n    있는 것으로 봅니다.<br />\n    1. 8세 이하의 아동<br />\n    2. 피성년후견인<br />\n    3. 「장애인복지법」 제2조제2항제2호에 따른 정신적 장애를 가진 사람으로서 「장애인고용촉진 및 직업재활법」 제2조제2호에 따른 중증장애인에 해당하는 사람(「장애인복지법」 제32조에 따라 장애인 등록을 한\n    사람만 해당한다)<br />\n    ② 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에 동의를 하고자 하는 보호의무자는 서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에 제출하여야\n    합니다.<br />\n    ③ 보호의무자는 8세 이하의 아동 등의 개인위치정보 이용 또는 제공에 동의하는 경우 개인위치정보주체 권리의 전부를 행사할 수 있습니다.<br />\n\n    <br><br>\n    <b>제 12 조 (위치정보관리책임자의 지정)</b><br>\n\n    ①회사는 위치정보를 적절히 관리․보호하고 개인위치정보주체의 불만을 원활히 처리할 수 있도록 실질적인 책임을 질 수 있는 지위에 있는 자를 위치정보관리책임자로 지정해 운영합니다.<br />\n    ②위치정보관리책임자는 위치기반서비스를 제공하는 부서의 부서장으로서 구체적인 사항은 본 약관의 부칙에 따릅니다.<br />\n\n    <br><br>\n    <b>제 13 조 (손해배상)</b><br>\n\n\n    ①회사가 위치정보의 보호 및 이용 등에 관한 법률 제15조 내지 제26조의 규정을 위반한 행위로 회원에게 손해가 발생한 경우 회원은 회사에 대하여 손해배상 청구를 할 수 있습니다. 이 경우 회사는 고의,\n    과실이 없음을 입증하지 못하는 경우 책임을 면할 수 없습니다.<br />\n    ②회원이 본 약관의 규정을 위반하여 회사에 손해가 발생한 경우 회사는 회원에 대하여 손해배상을 청구할 수 있습니다. 이 경우 회원은 고의, 과실이 없음을 입증하지 못하는 경우 책임을 면할 수\n    없습니다.<br />\n\n    <br><br>\n    <b>제 14 조 (면책)</b><br>\n\n\n\n    ①회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 회원에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.<br />\n    1. 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우<br />\n    2. 서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의 고의적인 서비스 방해가 있는 경우<br />\n    3. 회원의 귀책사유로 서비스 이용에 장애가 있는 경우<br />\n    4. 제1호 내지 제3호를 제외한 기타 회사의 고의∙과실이 없는 사유로 인한 경우<br />\n    ②회사는 서비스 및 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 회원의 손해에 대하여는 책임을 부담하지 아니합니다.<br />\n    <br />\n    <br><br>\n    <b>제 15 조 (규정의 준용)</b><br>\n\n    ①본 약관은 대한민국법령에 의하여 규정되고 이행됩니다.<br />\n    ②본 약관에 규정되지 않은 사항에 대해서는 관련법령 및 상관습에 의합니다.<br />\n    <br><br>\n    <b>제 16 조 (분쟁의 조정 및 기타)</b><br>\n\n    ①회사는 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 위치정보의 보호 및 이용 등에 관한 법률 제28조의 규정에 의한 방송통신위원회에 재정을 신청할 수\n    있습니다.<br />\n    ②회사 또는 고객은 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 개인정보보호법 제43조의 규정에 의한 개인정보분쟁조정위원회에 조정을 신청할 수\n    있습니다.<br />\n\n    <br><br>\n    <b>제 17 조 (회사의 연락처)</b><br>\n\n\n    1. 상 호 : (주)KIWI <br />\n    2. 주 소 : 서울특별시 성북구 삼선동 삼선교로16길 116 <br />\n    3. 대표전화 : 02-760-5800<br />\n\n    <br><br>\n    <b>부칙</b><br>\n\n\n\n    제1조 (시행일) <br>\n    이 약관은 2018년 10월 13일부터 시행한다.<br />\n    제2조 위치정보관리책임자는 2019년 03월 27일을 기준으로 다음과 같이 지정합니다.<br />\n    1. 소 속 : 경영<br />\n    2. 연락처 : 02-760-5800<br />\n  </div>"

/***/ }),

/***/ "./src/app/components/policy-location/policy-location.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/policy-location/policy-location.component.ts ***!
  \*************************************************************************/
/*! exports provided: PolicyLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyLocationComponent", function() { return PolicyLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PolicyLocationComponent = /** @class */ (function () {
    function PolicyLocationComponent() {
    }
    PolicyLocationComponent.prototype.ngOnInit = function () {
    };
    PolicyLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policy-location',
            template: __webpack_require__(/*! ./policy-location.component.html */ "./src/app/components/policy-location/policy-location.component.html"),
            styles: [__webpack_require__(/*! ./policy-location.component.css */ "./src/app/components/policy-location/policy-location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PolicyLocationComponent);
    return PolicyLocationComponent;
}());



/***/ }),

/***/ "./src/app/components/policy-personal-info/policy-personal-info.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/policy-personal-info/policy-personal-info.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);\n@charset 'utf-8';\n* {\r\n  font-family: 'Nanum Gothic', cursive;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2xpY3ktcGVyc29uYWwtaW5mby9wb2xpY3ktcGVyc29uYWwtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrREFBK0Q7QUFEL0QsZ0JBQWdCO0FBRWhCO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9saWN5LXBlcnNvbmFsLWluZm8vcG9saWN5LXBlcnNvbmFsLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0ICd1dGYtOCc7XHJcbkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3MvbmFudW1nb3RoaWMuY3NzKTtcclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBjdXJzaXZlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/policy-personal-info/policy-personal-info.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/policy-personal-info/policy-personal-info.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:110px;\">\n  <div id=\"policy-personal-table\">\n    <h2>개인정보 취급 정책</h2>\n    <br>\n    <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게\n    처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.\n    <br><br>\n    <i>('KiwiBike')</i>은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.\n    <br><br>\n    ○ 본 방침은부터 2019년 3월 27일부터 시행됩니다.\n    <br><br><br>\n\n    <b>1. 개인정보의 처리 목적 <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의\n      목적이외의\n      용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.</b>\n    <br><br>\n    가. 홈페이지 회원가입 및 관리\n    <br><br>\n    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인\n    동의\n    여부 확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br>\n\n    나. 민원사무 처리\n    <br><br>\n    민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br>\n\n    다. 재화 또는 서비스 제공\n    <br><br>\n    물품배송, 서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 연령인증, 요금결제·정산, 채권추심 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br>\n\n    라. 마케팅 및 광고에의 활용\n    <br><br>\n    신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 서비스의 유효성 확인, 접속빈도 파악 또는 회원의\n    서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br>\n\n    마. 개인영상정보\n    <br><br>\n    범죄의 예방 및 수사, 시설안전 및 화재예방, 교통단속, 교통정보의 수집·분석 및 제공 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br><br><br>\n\n\n\n    <b>2. 개인정보 파일 현황<br>\n      <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>가 개인정보 보호법 제32조에 따라 등록․공개하는 개인정보파일의 처리목적은 다음과 같습니다.</b>\n    <br><br>\n    1. 개인정보 파일명 : KiwiBikePrivacy<br>\n    - 개인정보 항목 : 이메일, 휴대전화번호, 비밀번호, 로그인ID, 성별, 생년월일, 이름, 주민등록번호, 신용카드정보, 은행계좌정보, 서비스 이용 기록, 결제기록<br>\n    - 수집방법 : 홈페이지<br>\n    - 보유근거 : 'KiwiBike'서비스운영<br>\n    - 보유기간 : 3년<br>\n    - 관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년, 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년, 대금결제 및 재화 등의 공급에 관한 기록 : 5년, 계약 또는 청약철회 등에\n    관한\n    기록 : 5년, 표시/광고에 관한 기록 : 6개월\n    <br><br><br><br>\n\n\n    ※ 기타('http://AWS_DNS:3000'이하 'KiwiBike')의 개인정보파일 등록사항 공개는 행정안전부 개인정보보호 종합지원 포털(www.privacy.go.kr) → 개인정보민원\n    →\n    개인정보열람등 요구 → 개인정보파일 목록검색 메뉴를 활용해주시기 바랍니다.\n    <br><br>\n    <b>3. 개인정보의 처리 및 보유 기간</b>\n    <br><br>\n    ① <i>('KiwiBike')</i>은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.\n    <br><br>\n    ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.\n    <br><br>\n    1.&#60;홈페이지 회원가입 및 관리&#62;<br>\n    &#60;홈페이지 회원가입 및 관리&#62;와 관련한 개인정보는 수집.이용에 관한 동의일로부터&#60;1년&#62;까지 위 이용목적을 위하여 보유.이용됩니다.<br>\n    -보유근거 : \"kiwiBike\"서비스운영<br>\n    -관련법령 : 1)신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년<br>\n    2) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br>\n    3) 대금결제 및 재화 등의 공급에 관한 기록 : 5년<br>\n    4) 계약 또는 청약철회 등에 관한 기록 : 5년<br>\n    5) 표시/광고에 관한 기록 : 6개월<br>\n    <br><br>\n    -예외사유 :\n    <br><br><br><br>\n\n\n    <b>4. 개인정보의 제3자 제공에 관한 사항</b>\n    <br><br>\n    ① <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만\n    개인정보를 제3자에게 제공합니다.\n    <br><br>\n    ② <i>('http://AWS_DNS:3000')</i>은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.\n    <br><br><br>\n\n    1. &#60;'KiwiBike'&#62;<br>\n    - 개인정보를 제공받는 자 : 'KiwiBike'<br>\n    - 제공받는 자의 개인정보 이용목적 : 이메일, 휴대전화번호, 비밀번호, 로그인ID, 주민등록번호, 신용카드정보, 은행계좌정보, 서비스 이용 기록, 결제기록<br>\n    - 제공받는 자의 보유.이용기간: 1년<br>\n    <br><br><br>\n\n\n    <b>5. 개인정보처리 위탁</b>\n    <br><br>\n    ① ('KiwiBike')은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.\n    <br><br>\n    1. &#60;&#62;<br>\n    - 위탁받는 자 (수탁자) : <br>\n    - 위탁하는 업무의 내용 : <br>\n    - 위탁기간 :<br>\n    <br>\n    <br>\n    <br>\n    ② <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>은(는) 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적\n    보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.\n    <br><br>\n    ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.<br>\n    <b>6. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.</b><br>\n    <br>\n    ① 정보주체는 KiwiBike에 대해 언제든지 개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.<br>\n    ② 제1항에 따른 권리 행사는KiwiBike에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 KiwiBike은(는) 이에 대해 지체\n    없이\n    조치하겠습니다.<br>\n    ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야\n    합니다.<br>\n    ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.<br>\n    ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.<br>\n    ⑥ KiwiBike은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.<br>\n    <br>\n    <br>\n    <br>\n    <b>7. 처리하는 개인정보의 항목 작성</b> <br>\n    <br>\n    ① <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>은(는) 다음의 개인정보 항목을 처리하고 있습니다.<br>\n    <br>\n    1&#60;홈페이지 회원가입 및 관리&#62;<br>\n    - 필수항목 : 이메일, 비밀번호, 로그인ID, 이름, 주민등록번호, 신용카드정보, 은행계좌정보<br>\n    - 선택항목 :<br>\n\n    <br><br>\n    <br>\n    <br>\n    <b>8. 개인정보의 파기<i>('KiwiBike')</i>은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과\n      같습니다.</b>\n    <br><br>\n    -파기절차<br>\n    이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는\n    법률에\n    의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.<br>\n    <br>\n    -파기기한<br>\n    이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는\n    개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.<br>\n    <br>\n    -파기방법<br>\n    전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.<br>\n    종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br>\n    <br>\n    <br>\n    <br>\n    <b>9. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항</b><br>\n    <br>\n    KiwiBike 은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키’를 사용하지 않습니다.<br>\n    <br>\n    <br>\n    <b>10. 개인정보 보호책임자 작성</b><br>\n    <br>\n    <br>\n    ① KiwiBike(‘http://AWS_DNS:3000’이하 ‘KiwiBike) 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및\n    피해구제\n    등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n    <br><br>\n    ▶ 개인정보 보호책임자 <br>\n    성명 :KIWI-TEAM <br>\n    담당자 :KIWI-TEAM<br>\n    연락처 :02-760-5800, <br>\n    ※ 개인정보 보호 담당부서로 연결됩니다.<br>\n    <br>\n    ▶ 개인정보 보호 담당부서<br>\n    부서명 :Hansung University<br>\n    담당자 :KIWI-TEAM<br>\n    연락처 :02-760-5800, <br>\n    ② 정보주체께서는 KiwiBike(‘http://AWS_DNS:3000’이하 ‘KiwiBike) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제\n    등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. KiwiBike(‘http://AWS_DNS:3000’이하 ‘KiwiBike) 은(는) 정보주체의 문의에 대해 지체\n    없이\n    답변 및 처리해드릴 것입니다.\n    <br><br><br><br>\n\n\n    <b>11. 개인정보 처리방침 변경</b><br>\n    <br>\n    ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.<br>\n    <br>\n    <br>\n    <br>\n    <b>12. 개인정보의 안전성 확보 조치 <i>('KiwiBike')</i>은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고\n      있습니다.</b><br>\n    <br>\n    1. 정기적인 자체 감사 실시<br>\n    개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.<br>\n    <br>\n    2. 개인정보 취급 직원의 최소화 및 교육<br>\n    개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.<br>\n    <br>\n    3. 내부관리계획의 수립 및 시행<br>\n    개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.<br>\n    <br>\n    4. 해킹 등에 대비한 기술적 대책<br>\n    <i>&#60;KiwiBike&#62;('KiwiBike')</i>은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터\n    접근이\n    통제된\n    구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.\n    <br><br>\n    5. 개인정보의 암호화<br>\n    이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고\n    있습니다.\n    <br><br>\n    6. 접속기록의 보관 및 위변조 방지<br>\n    개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.\n    <br><br>\n    7. 개인정보에 대한 접근 제한<br>\n    개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고\n    있습니다.\n    <br><br>\n    8. 문서보안을 위한 잠금장치 사용<br>\n    개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.\n    <br><br>\n    9. 비인가자에 대한 출입 통제<br>\n    개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.\n    <br><br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/policy-personal-info/policy-personal-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/policy-personal-info/policy-personal-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PolicyPersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPersonalInfoComponent", function() { return PolicyPersonalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PolicyPersonalInfoComponent = /** @class */ (function () {
    function PolicyPersonalInfoComponent() {
    }
    PolicyPersonalInfoComponent.prototype.ngOnInit = function () {
    };
    PolicyPersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policy-personal-info',
            template: __webpack_require__(/*! ./policy-personal-info.component.html */ "./src/app/components/policy-personal-info/policy-personal-info.component.html"),
            styles: [__webpack_require__(/*! ./policy-personal-info.component.css */ "./src/app/components/policy-personal-info/policy-personal-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PolicyPersonalInfoComponent);
    return PolicyPersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/policy-rent/policy-rent.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/policy-rent/policy-rent.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);\n@charset 'utf-8';\n* {\r\n  font-family: 'Nanum Gothic', cursive;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2xpY3ktcmVudC9wb2xpY3ktcmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrREFBK0Q7QUFEL0QsZ0JBQWdCO0FBRWhCO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9saWN5LXJlbnQvcG9saWN5LXJlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0ICd1dGYtOCc7XHJcbkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3MvbmFudW1nb3RoaWMuY3NzKTtcclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBjdXJzaXZlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/policy-rent/policy-rent.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/policy-rent/policy-rent.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:110px;\">\r\n    <div id=\"policy-rent\">\r\n        <h2>대여 약관</h2>\r\n    </div>\r\n\r\n    <br>\r\n    <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>은(는) 대여 약관에 따라 다음과 같은 처리방침을 두고 있습니다.\r\n    <br><br>\r\n    <i>('KiwiBike')</i>은(는) (주) KiwiBike는 대여 약관을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.\r\n    <br><br>\r\n    ○ 본 방침은부터 2019년 3월 27일부터 시행됩니다.\r\n    <br><br>\r\n\r\n    <b>제1장 총칙</b>\r\n    <br><br>\r\n    <b>제 1조 (목적)</b><br>\r\n    이 약관은 대여용 전동 킥보드 임대인과 임차인 사이의 대여용 전동 킥보드 임대차 계약(이하 “대여 계약”이라 합니다)상의 권리·의무에 관한 사항을 규정함을 목적으로 합니다.<br><br>\r\n    <b>제2조(정의)</b><br>\r\n    본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 본 약관에 명시되지 않은 용어는 관련 법령이 정하는 바에 따르며, 그 외에는 일반적인 상거래관행에 따릅니다.<br><br>\r\n    <div>\r\n        1) “임대인”이라 함은 (주)KiwiBike(이하 “한성대학교”)를 말합니다.<br><br>\r\n        2) “Kiwi(키위)”(이하 “서비스”)라 함은 “(주) KiwiBike”에서 제공하는 “서비스 이용 약관”에 명시된 온·오프라인 상의 서비스를 의미합니다.<br><br>\r\n        3) “전동 킥보드”라 함은 통상적으로 말하는 킥보드(스케이트 보드에 긴 손잡이가 달린 모양의 2개의 바퀴가 달린 레포츠 용구)를 기본 형태로 취하고 거기에 전동 장치를 달아서 전기의 힘으로 달릴 수\r\n        있게 한 이동 수단을 말합니다. 본 약관에서는 별도로 명시되지 않는 한, “(주) KiwiBike” 소유의, 대여용으로 제공되는 “전동 킥보드”를 “전동 킥보드”로 통칭합니다.<br><br>\r\n        4) “임차인”이라 함은 “서비스 이용약관”에 따라 정상적인 회원가입을 완료한 “회원”을 의미합니다.<br><br>\r\n        5) “홈페이지”라 함은 “ 한성대학교 KIWI TEAM ” 이 운영하는 'http://AWS_DNS:3000'이하 'KiwiBike' 의 홈페이지를 말합니다.<br><br>\r\n        6) “앱”이라 함은 “(주) KiwiBike”가 제공하는 Kiwi(키위) 모바일 어플리케이션을 의미합니다.<br><br>\r\n        7) “임대차 계약”이라 함은 “(주) KiwiBike”의 “홈페이지” 및 “앱” 내에서 진행되는 대여, 운행, 반납 등의 모든 “서비스”를 말합니다.<br><br>\r\n        8) 본 조에서 정의되지 않은 약관상의 용어의 의미는 “개별약관” 및 “개별정책” 또는 일반적인 거래 관행을 따릅니다.<br><br>\r\n    </div>\r\n    <b>제3조(전동 킥보드의 임대와 사용)</b><br><br>\r\n    1) “회원”은 회원 가입 또는 서비스 이용 시 동의한 “개별약관”, “개별정책” 및 다음 각 호의 규정들을 준수할 의무가 있습니다.<br><br>\r\n    2) “회원”은 “전동 킥보드”를 운행하기 위해 유효한 운전면허(원동기장치자전거 면허 등)을 취득해야 하는 것을 포함해서 관계법령에서 정하는 자격요건을 갖춰야 합니다.<br><br>\r\n    3) “회원”의 운전면허의 정지, 취소 또는 “회원”이 무면허상태로 “전동킥보드”를 이용함으로써 발생하는 모든 책임은 “회원”에게 있습니다.<br><br>\r\n    4) 가입된 “회원”의 회원정보를 제 3자가 사용하는 것은 금지되어 있습니다.<br><br>\r\n    5) 회원 외 지정되지 않은 제 3자가 서비스를 이용하는 것은 금지되어 있습니다. 이로 인해 발생되는 모든 책임은 “회원” 및 서비스를 이용한 제 3자에게 있습니다. 이로 인해 “(주) KiwiBike”에\r\n    서비스 요금 및 사고처리비용 등 비용이 발생한 경우 “회원”은 제 3자와 해당 채무에 대해 배상해야할 공동 책임이 있습니다.<br><br>\r\n    6) “회원”은 “전동 킥보드”의 조작에 능숙하고 “전동 킥보드”를 조작하기에 신체적으로 적합해야 합니다. “회원”은 “전동 킥보드”의 제조사에서 제공하는 매뉴얼을 <a\r\n        href=\"https://cdn.(키위).kr/static/(키위)/pdf/m365_manual.pdf\" style=\"text-decoration: underline\">여기</a>에서 확인할 수\r\n    있으며, 해당 정보는 주기적으로 업데이트됩니다. “회원”은 “전동 킥보드”를 운행하기함으로써 상해 또는 건강상태에 대한 위험성을 얻을 수 있습니다. “회원”은 본인이 비, 안개, 눈, 우박, 빙판, 폭풍우,\r\n    뇌우 등 날씨 및 가시거리, 주변 환경 및 교통 상황에 따라 본인의 “전동 킥보드” 운행 여부 결정에 책임이 있으며, “회원”은 그에 따라 “전동 킥보드” 동작 및 제동 거리를 조정해야 합니다.<br><br>\r\n    7) “전동 킥보드”는 “(주) KiwiBike”의 독자적인 소유물입니다. “전동 킥보드” 및 “전동 킥보드”에 부착된 “(주) KiwiBike”의 장비, 부속품 등 모든 장비는 “(주) KiwiBike”의\r\n    소유물입니다. “회원”은 “전동 킥보드”, “전동 킥보드”의 모든 부속품을 해체, 개조, 수리, 변조해서는 안되며 “전동 킥보드”, “전동 킥보드”의 모든 부속품에 낙서해서는 안됩니다. “회원”은 “전동\r\n    킥보드”에 부착된 스티커 등에 낙서를 하거나, 이를 벗겨내거나, 해체해서는 안됩니다. “회원”은 “(주) KiwiBike”의 서면 동의 없이 “전동 킥보드” 등 “(주) KiwiBike”의 장비를 광고나\r\n    상업적인 활동에 이용해서는 안됩니다.<br><br>\r\n    8) “회원”은 “전동 킥보드”가 항상 사용가능한 것이 아니라는 것을 알고, 이에 동의합니다. “전동 킥보드”는 본 약관에서 정한 최대 기간인 24시간 이내의 기간 동안만 임대될 수 있습니다. “전동\r\n    킥보드”의 수는 제한되어 있으며, “(주) KiwiBike”는 “회원”의 “전동 킥보드”의 이용 가능 여부를 보장하지 않습니다.<br><br>\r\n    9) “회원”은 “전동 킥보드”의 사용, 주행, 주차, 충전 등 모든 것에 대해서 헬멧 착용 관련 법을 포함해서 모든 관계 법령을 준수해야 합니다. “회원”은 “서비스”를 이용하는 동안 타인에 대한 예절과\r\n    존중을 가지고 행동해야 합니다.<br><br>\r\n    10) “(주) KiwiBike”는 서류가방, 백팩, 가방 등 “전동 킥보드” 주행 중 균형을 방해하거나 안전에 위험을 줄 수 있는 물건들을 소지/운반하지 않는 것을 권장합니다. “회원”은 만약 “회원”이\r\n    이런 물건을 소지/운반할 경우 제품이 몸에 잘 맞고 “전동 킥보드”를 안전하게 작동할 수 있는 능력이 저하되지 않는지 확인해야 합니다.<br><br>\r\n    11) “회원”은 백팩이나 가방 등 무거운 물건을 “전동 킥보드”의 핸들바(손잡이)에 두어서는 안됩니다.<br><br>\r\n    12) “회원”은 주행 중 휴대전화나 휴대용 음향기기 등 주행 중 “전동 킥보드”를 안전하게 작동하지 못하게 할 수 있는 장치를 사용해서는 안됩니다.<br><br>\r\n    13) “회원”은 알코올, 약물, 의약품 등 기타 “전동 킥보드”를 안전하게 운행할 수 있는 능력을 저하시킬 수 있는 것의 영향을 받는 동안에는 절대 “전동 킥보드”를 운행해서는 안됩니다.<br><br>\r\n    14) “회원”은 “전동 킥보드”에 다른 사람이나 아이를 태워서는 안됩니다.<br><br>\r\n    15) “회원”은 반드시 “(주) KiwiBike”로부터 제공되는 잠금 기능만을 사용해야 합니다. “회원”은 그 외의 잠금 장치를 추가하거나, “전동 킥보드”를 다른 것에 고정함으로써 잠가서는 안됩니다.\r\n    “회원”이 “전동 킥보드” 운행이 끝날 때 “앱”을 통해서 반납 및 잠금을 완료하지 않은 경우 운행이 계속되고 이용 요금이 계속 과금됩니다.<br><br>\r\n    16) “회원”은 “전동 킥보드”의 지지대를 통해서 “전동 킥보드”를 올바른 위치에 주차해야 합니다. “회원”은 “전동 킥보드”를 허가되지 않은 개인 사유지, 잠긴 구역, 공공장소가 아닌 곳에 주차해서는\r\n    안됩니다. “회원”은 “전동 킥보드”가 넘어질 위험이 있는 교통량이 많은 장소에 주차해서는 안됩니다. “전동 킥보드”는 잘 보이는 장소에 주차되어야 합니다.<br><br>\r\n    17) “전동 킥보드”는 제한된 용도로 사용되도록 설계되었습니다. “회원”은 본인이 “전동 킥보드”로 레이싱, 산악 주행, 스턴트 또는 트릭 주행 등을 위해 “전동 킥보드”를 사용해서는 안됩니다. “회원”은\r\n    비포장도로, 통상적으로 도심에 있을 수 있는 이상의 물이 있는 곳에서의 주행, 금지되었거나 불법 혹은 다른 사람들에게 방해가 되는 장소에서 주행해서는 안됩니다.<br><br>\r\n    18) “회원”은 “전동 킥보드”의 최대 하중을 초과해서는 안됩니다. (100kg 이하)<br><br>\r\n    19) “회원”은 본 약관에 지정된 경우를 제외하고 “서비스”에 무단으로 접근하거나 사용해서는 안됩니다.<br><br>\r\n    20) “회원”은 모든 사고, 충돌, 파손, 상해 및 “전동 킥보드” 도난을 최대한 빠르게 신고해야만 합니다. 만약 충돌 사고가 상해, 기물 파손 혹은 도난된 “전동 킥보드”와 관련이 있을 경우, “회원”은\r\n    사고 이후 24시간 이내에 지역 경찰서에 신고해야만 합니다. “회원”은 도난 혹은 손실된 “전동 킥보드”에 관련된 모든 종류의 민형사상의 책임을 지는 것에 동의합니다. 이 경우, “회원”이 별도로 가입한\r\n    보험이 정책상 “전동 킥보드”의 손상이나 관련된 사고를 보상하지 않을 수 있습니다. “(주) KiwiBike”는 “회원”이 가입한 보험의 보상 범위에 대한 책임이 없으며, 보험의 보상 범위를 확인하기 위해서는\r\n    본인의 보험사로 문의하시기 바랍니다.<br><br>\r\n    21) “회원”은 “전동 킥보드”를 임차했을 때와 같은 상태로 반납하는 것에 동의합니다. “회원”은 정상적인 수준의 마모와 감가상각에 대해서는 배상 책임을 지지 않습니다.<br><br>\r\n    22) “전동 킥보드”는 주기적으로 충전이 필요합니다. “회원”은 “전동 킥보드”의 모든 제한 사항과 요구사항들을 고려하여 “전동 킥보드”를 안전하고 신중하게 사용하고 작동하는 것에 동의합니다. “회원”은\r\n    아래 각 호를 완전히 이해하고 동의합니다.<br><br>\r\n    <div>\r\n        a) “전동 킥보드”의 배터리 잔량은 “전동 킥보드”를 사용함(주행 시간 및 거리 모두)에 따라 점차 줄어들며, 배터리 잔량이 감소함에 따라 “전동 킥보드”의 속도 및 기타 작동 성능이 저하될 수\r\n        있습니다.<br><br>\r\n        b) “회원”이 “전동 킥보드”를 임차할 때 “전동 킥보드”의 배터리 잔량 수준은 보장되지 않으며, 임차할 때마다 달라질 수 있습니다.<br><br>\r\n        c) “전동 킥보드” 사용 중 배터리 소모 속도는 보장되지 않으며, “전동 킥보드”, 도로 상태 날씨 및 기타 여러 요인들에 의해 달라질 수 있습니다.<br><br>\r\n        d) “회원”은 “전동 킥보드” 운행 전 “전동 킥보드”의 배터리 잔량을 확인하고 운행에 적절한지 확인할 책임이 있습니다.<br><br>\r\n        e) “전동 킥보드”의 배터리 잔량이 모두 소모되기 전 어느 정도 거리 혹은 시간을 주행할 수 있는지는 보장되지 않습니다.<br><br>\r\n        f) “회원”이 “전동 킥보드”를 사용하는 도중, “회원”의 원하는 목적지에 도달하기 전 언제라도 “전동 킥보드”의 배터리 잔량이 모두 소모될 수 있으며, 이로 인해 작동이 중지될 수\r\n        있습니다.<br><br>\r\n    </div>\r\n    23) “회원”이 “전동 킥보드”를 임차해서 이용하는 중 “전동 킥보드”의 배터리 잔량이 부족한 경우, “회원”은 본 약관의 모든 조항에 따라 주행을 종료해야 합니다. 혹은, “회원”의 재량으로 “회원”은\r\n    “전동 킥보드”의 제조업체가 승인한 적절하고 합법적으로 사용할 수 있는 충전장치로 “전동 킥보드”를 충전할 수 있습니다. “회원”은 “전동 킥보드”를 충전하는 것과 관련된 모든 관계법령과 규칙을 준수하는 것에\r\n    동의합니다. “회원”은 “전동 킥보드” 충전과 관련된 모든 민형사상의 책임을 지며 그 결과에 대해 “(주) KiwiBike”가 “회원”에게 배상하지 않는다는 것에 동의합니다. “회원”은 본인이 “전동\r\n    킥보드”를 충전함으로써 모든 위험에 대한 책임이 본인에게 있음에 동의하며, “전동 킥보드” 충전과 관련하여 사람, 재산, 및 임차한 “전동 킥보드” 등에 끼친 직간접적인 모든 종류의 상해 및 파손 및 그에\r\n    따른 민형사상의 책임이 본인에게 있다는 것에 동의합니다.<br><br>\r\n\r\n    <b>제4조(전동 킥보드 정보 수집장치)</b><br><br>\r\n    “(주) KiwiBike”는 효율적인 서비스 운영을 위하여 “전동 킥보드”에 위치정보 수집장치를 포함하는 운행정보 수집장치를 설치할 수 있습니다. 그 목적은 다음과 같습니다.<br><br>\r\n    <div>\r\n        1) 운행정보 수집장치<br><br>\r\n        <div>\r\n            a) “운행정보 수집장치”라 함은 “전동 킥보드”의 무인 대여 및 반납 기능, 위치, 주행거리, 이용 시간, 도난 및 파손 예방 등 “전동 킥보드”의 운행 정보를 “(주) KiwiBike”의\r\n            서버로 전송할 수 있는 통신 단말기를 말합니다.<br><br>\r\n            b) “운행정보 수집장치”를 통해 수집된 데이터는 사업자 자산관리 및 보호, “전동 킥보드” 반납여부 확인, 주행거리에 따른 과금 등의 목적을 위해 활용될 수 있습니다.<br><br>\r\n            c) “(주) KiwiBike”는 “회원”의 “전동 킥보드” 미반환 등 계약 위반시의 “전동 킥보드” 회수, “전동 킥보드” 임대차 계약의 이행 또는 분쟁 해결 등을 위한 경우, 수사기관 등의\r\n            적법한 조사요구 또는 명령 등에 대한 협조 및 이행을 위한 경우, 그 외에 “회원”이 별도로 위치 제공 정보 수집, 이용, 제공에 동의한 경우 위 목적 범위 내에서 전동킥보드의 위치정보를 수집,\r\n            이용, 제공할 수 있습니다.<br><br>\r\n            d) “위치 정보의 보호 및 이용 등에 관한 법률 제 15조”에 따라 급박한 위험으로부터 긴급구조 요청이 있는 경우에는 “회원”의 동의 없이도 “회원” 개인의 위치 정보가 긴급구조기관에게 제공될\r\n            수 있습니다.<br><br>\r\n            e) “(주) KiwiBike”의 “전동 킥보드”가 분실 또는 도난 당한 것으로 간주되는 경우, “운행정보 수집장치”로부터 전송된 데이터는 “전동 킥보드”가 특정 기간에 “회원”에 의해\r\n            사용되었다는 증거로 활용될 수 있습니다.<br><br>\r\n        </div>\r\n    </div>\r\n    <b>제5조(결제 및 요금)</b><br><br>\r\n    <div>\r\n        1) “회원”은 “(주) KiwiBike”의 “홈페이지” 및 “앱” 내에 설명된 가격을 기반으로 하는 주행 요금 기준으로 “전동 킥보드”를 사용할 수 있습니다. “회원”이 “(주) KiwiBike”에\r\n        지불하는 요금 및 기타 비용에는 세금 및 지방세가 부과될 수 있습니다. “(주) KiwiBike”는 해당 금액을 “회원”이 등록한 결제 카드 혹은 “(주) KiwiBike”가 인정하는 수단으로\r\n        부과합니다.<br><br>\r\n        2) 쿠폰은 일회성으로 제공되며 다른 혜택과 중복적용할 수 없고, 양도될 수 없습니다.<br><br>\r\n        3) “전동 킥보드”의 최대 임대 시간은 24시간입니다. “회원”은 “회원”이 “전동 킥보드”를 임차한 후 24시간 이내에 “전동 킥보드” 임대를 종료해야만 합니다. “회원”은 그 후 다시 “전동\r\n        킥보드”를 임차할 수 있습니다. “회원”은 “전동 킥보드”의 잠금과 관련된 시간 경과를 인지하는 것에 전적으로 책임이 있습니다. 일일 최대 요금은 10만원이며, 역일을 기준으로 합니다. “전동 킥보드”\r\n        반납 이후, “회원”에게 사용 시간에 따른 임차료와 일일 최대 요금 중 낮은 요금이 부과됩니다. 48시간 이내에 “전동 킥보드”를 반납하지 않은 경우 (주행 종료 및 잠금이 모두 완료되어야 함) 분실\r\n        혹은 도난으로 간주되며, “회원”은 최대 40만 원의 요금이 부과되며 경찰에 신고될 수 있습니다. 또한, “(주) KiwiBike”는 “전동 킥보드”가 분실 혹은 도난되지 않은 경우에도 24시간을\r\n        초과한 임대에 대해서 임차료 및 일일 최대 요금과 별개로, 3만 원의 요금을 부과할 수 있습니다.<br><br>\r\n        4) “서비스”를 사용하기 위해 “회원”은 “(주) KiwiBike”에 유효한 신용카드 혹은 체크카드 등 결제카드 번호와 만료일 등을 제공해야 합니다. “회원”은 본인이 “(주) KiwiBike”에\r\n        제공한 결제 카드를 사용할 권한이 있음을 보증합니다. “회원”은 “(주) KiwiBike”에게 본인에 의해 발생한 모든 요금을 해당 카드를 통해 결제할 수 있도록 권한을 부여합니다. “(주)\r\n        KiwiBike”에 의해 징수되는 모든 요금에는 세금이 부과될 수 있습니다. “회원”이 본인의 결제카드에 대해 이의를 제기할 경우, “회원”은 이의를 제기할 건이 있는 달의 마지막 날로부터 10 영업일\r\n        이내로 “(주) KiwiBike”에 이의제기 금액 및 이의제기를 위해 필요한 운행 자료 (날짜, 주행 시작, 종료 시각 등)을 제출해야 합니다. “회원”은 카드와 관련된 모든 변동 사항을 즉시 “(주)\r\n        KiwiBike”에 알리는 데 동의합니다.<br><br>\r\n        5) “회원”은 “전동 킥보드”를 적절한 장소에 주차하는게 불가능한 경우 (예를 들면, 사유지, 잠긴 구역 혹은 다른 접근 불가능한 곳에서 운행을 종료한 경우) “회원”은 “(주) KiwiBike”에\r\n        “전동 킥보드” 픽업을 요청할 수 있습니다. 이 경우, “(주) KiwiBike”는 “회원”에게 최대 10만 원의 픽업 요금을 청구할 수 있습니다. 만약 “회원”이 운행한 “전동 킥보드”가 경고 없이\r\n        부적절한 곳에 주차될 경우 “전동 킥보드”를 복구할 때까지의 모든 주행 요금과 “전동 킥보드” 픽업 요금의 최고액(10만 원)을 부담해야 합니다. 상기 금액은 변동될 수 있습니다.<br><br>\r\n    </div>\r\n    <b>제6조(기타 전동 킥보드 사용 조건)</b><br><br>\r\n\r\n    <div>\r\n        1) “회원”은 “전동 킥보드” 운행 전 아래 각 호를 포함하여 “전동 킥보드”의 기본적인 안전 검사를 수행해야 합니다. “회원”은 문제점을 발견한 경우에는 “(주) KiwiBike”의 고객센터에 이를\r\n        즉각 신고해야하며, “전동 킥보드”를 운행해서는 안됩니다.<br><br>\r\n        <div>\r\n            a) 타이어 및 휠의 정상 여부<br><br>\r\n            b) 모든 브레이크 및 램프의 정상 작동 여부<br><br>\r\n            c) “전동 킥보드” 프레임의 정상 여부<br><br>\r\n            d) 배터리 잔량의 충분 여부<br><br>\r\n            e) 파손 흔적, 지나친 마모 흔적 및 기타 명백한 기계적 문제 혹은 유지보수 상의 문제점 유무<br><br>\r\n        </div>\r\n        2) “전동 킥보드”가 아래 각 호의 상황인 경우 “전동 킥보드”는 분실 혹은 도난된 것으로 간주될 수 있습니다. “(주) KiwiBike” 및 “회원”은 다른 타당한 사실이나 상황이 제시되지 않는\r\n        한, 분실 혹은 도난된 “전동 킥보드”의 마지막 “임차인”에게 책임이 있다는 데 동의합니다. “(주) KiwiBike”가 “전동 킥보드”가 분실 혹은 도난되었다고 간주할 경우, “(주)\r\n        KiwiBike”는 “전동 킥보드”의 마지막 “임차인”과 관련하여 “전동 킥보드” 반환,기타 적절한 보상 및 경찰에 신고를 위해 모든 조치를 취할 권한이 있습니다. “임차인”은 “(주)\r\n        KiwiBike”의 컴퓨터에 의해 생성되는 데이터가 “전동 킥보드”가 특정 기간에 “임차인”에 의해 사용되었다는 증거로 활용돌 수 있다는 것에 동의합니다. “회원”은 “전동 킥보드”가 사라졌거나 도난된\r\n        경우 즉시 “(주) KiwiBike”에 신고하는 것에 동의합니다.<br><br>\r\n        <div>\r\n            a) “전동 킥보드”가 24시간 이내에 반납되지 않은 경우<br><br>\r\n            b) “전동 킥보드”의 “운행정보 수집장치” 전체 혹은 일부가 해제되었거나 정상 작동하지 않는 경우<br><br>\r\n            c) “전동 킥보드”가 운행 이후 10분 이상 사유지, 잠긴 구역, 혹은 공공장소가 아닌, 부적절한 장소에 있을 경우<br><br>\r\n            d) “전동 킥보드”가 반납된 이후 10미터 이상 이동했고, 다른 “회원”, “(주) KiwiBike”, 혹은 “(주) KiwiBike”의 인증된 협력 업체에 의한 것이 아닌 것으로 추정되는\r\n            경우<br><br>\r\n            e) 기타 타당하거나 선의에 의한 것이 아닌, 분실 혹은 도난된 것으로 의심되는 사실이나 정황이 있는 경우<br><br>\r\n        </div>\r\n        3) “(주) KiwiBike”는 모든 “회원”이 성능이 우수한 것으로 인증된 (Snell, DOT 등) 헬멧을 제조자가 권장하는 사용법에 따라 착용하는 것을 권장합니다. “(주) KiwiBike” 등\r\n        “회원” 본인을 제외한 누구도 헬멧의 품질과 안전에 대해 보증하지 않으며, “회원”은 “서비스” 이용 중 당한 상해에 대해 헬멧 사용 여부와 관계없이 누구도 책임을 지지 않는다는 것에 대해 동의합니다.\r\n        “회원”은 헬멧이나 다른 안전 장비를 착용하지 않는 것의 위험성에 대해 알고 있으며, 본 약관에서 구체적으로 다루지 않은 추가적인 안전 조치 및 주의를 해야할 수 있습니다.<br><br>\r\n        4) “(주) KiwiBike”는 “전동 킥보드”를 운행하기 위한 장소를 제공하거나 유지하지 않습니다. 도로, 보도, 차도 등은 날씨, 교통량 등 기타 위험으로 인해 위험할 수 있습니다.<br><br>\r\n        5) “회원”은 “(주) KiwiBike”가 공공 사업자가 아님에 동의하며, “서비스”는 “회원” 스스로가 “전동 킥보드”를 작동시킬 수 있고, 관계법령상 그럴 자격이 있으며, 본 약관의 모든 조항에\r\n        동의하는 사람들에게만 제공됩니다.<br><br>\r\n    </div>\r\n    <b>제7조(“책임”)</b><br><br>\r\n\r\n    <div>\r\n        1) “(주) KiwiBike”는 “(주) KiwiBike”의 고의 또는 중과실이 없는 한, “회원”의 서비스 이용 중에 발생하는 모든 사고, 상해, 범칙금 등에 대해서 책임지지\r\n        않습니다.<br><br>\r\n    </div>\r\n    <b>제8조(준거법 및 관할법원)</b><br><br>\r\n\r\n    <div>\r\n        1) “(주) KiwiBike”와 “회원”간 제기된 소송은 대한민국법을 준거법으로 합니다.<br><br>\r\n        2) “(주) KiwiBike”와 “회원”간 분쟁이 발생한 경우 “(주) KiwiBike”의 본점소재지를 관할하는 법원을 관할법원으로 합니다. 단, “(주) KiwiBike”와 “회원”이 관할법원에\r\n        대해 약정할 경우에는 그에 따릅니다.<br><br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/policy-rent/policy-rent.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/policy-rent/policy-rent.component.ts ***!
  \*****************************************************************/
/*! exports provided: PolicyRentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyRentComponent", function() { return PolicyRentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PolicyRentComponent = /** @class */ (function () {
    function PolicyRentComponent() {
    }
    PolicyRentComponent.prototype.ngOnInit = function () {
    };
    PolicyRentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policy-rent',
            template: __webpack_require__(/*! ./policy-rent.component.html */ "./src/app/components/policy-rent/policy-rent.component.html"),
            styles: [__webpack_require__(/*! ./policy-rent.component.css */ "./src/app/components/policy-rent/policy-rent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PolicyRentComponent);
    return PolicyRentComponent;
}());



/***/ }),

/***/ "./src/app/components/policy-service/policy-service.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/policy-service/policy-service.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);\n@charset 'utf-8';\n* {\r\n  font-family: 'Nanum Gothic', cursive;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2xpY3ktc2VydmljZS9wb2xpY3ktc2VydmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrREFBK0Q7QUFEL0QsZ0JBQWdCO0FBRWhCO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9saWN5LXNlcnZpY2UvcG9saWN5LXNlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0ICd1dGYtOCc7XHJcbkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3MvbmFudW1nb3RoaWMuY3NzKTtcclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBjdXJzaXZlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/policy-service/policy-service.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/policy-service/policy-service.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:110px;\">\r\n    <h2>서비스 이용약관</h2>\r\n    <br>\r\n    <i>('http://AWS_DNS:3000'이하 'KiwiBike')</i>은(는) 서비스 이용 약관에 따라 다음과 같은 처리방침을 두고 있습니다.\r\n    <br><br>\r\n    <i>('KiwiBike')</i>은(는) (주) KiwiBike는 서비스 이용 약관을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.\r\n    <br><br>\r\n    ○ 본 방침은부터 2019년 3월 27일부터 시행됩니다.\r\n    <br><br>\r\n\r\n\r\n    <b>제1장 총칙</b>\r\n    <br><br>\r\n    <b>제 1조 (목적)</b><br>\r\n    <div>\r\n        본 약관은 (주)(주) Kiwi(이하 “(주)Kiwi”)가 제공하는 서비스의 이용과 관련하여 “(주)Kiwi”와 “회원”과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로\r\n        합니다.<br />\r\n    </div>\r\n\r\n    <br><br>\r\n    <b>제2조 (용어의 정의)</b><br>\r\n\r\n    본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br />\r\n    1) “키위(KIWI)”(이하 “서비스”)라 함은 “(주)Kiwi”에서 제공하는 제 9조에 명시된 온·오프라인 상의 서비스를 의미합니다. (수정)<br />\r\n    2) “회원”이라 함은 본 약관에 따라 “(주)Kiwi”와 이용계약을 체결하고 “(주)Kiwi”가 제공하는 “서비스”를 이용할 수 있는 권한을 부여 받은 고객을 말합니다.<br />\r\n    3) “전동킥보드”라 함은 통상적으로 말하는 킥보드(스케이트 보드에 긴 손잡이가 달린 모양의 2개의 바퀴가 달린 레포츠 용구)를 기본 형태로 취하고 거기에 전동 장치를 달아서 전기의 힘으로 달릴 수 있게 한\r\n    이동 수단을 말합니다.<br />\r\n    4) 본 조에서 정의되지 않은 약관상의 용어의 의미는 일반적인 거래 관행을 따릅니다.<br />\r\n\r\n    <br><br>\r\n    <b>제3조 (약관의 효력 및 변경)</b><br>\r\n\r\n\r\n    1) “(주)Kiwi”는 본 약관의 내용을 “회원”이 쉽게 확인할 수 있도록 모바일 어플리케이션(이하 “앱”) 및 “(주)Kiwi”가 운영하는 https://KIWI.kr의 홈페이지(이하 “홈페이지”)에\r\n    게시합니다.<br />\r\n    2) “(주)Kiwi”가 약관을 개정할 경우 개정내용과 그 사유를 명시하여 개정된 약관을 적용하고자 하는 날(이하 “효력 발생일”) 30일 이전에 “홈페이지” 내 게시, “앱” 내 게시의 방법들 중 1가지\r\n    이상의 방법으로 “회원”에게 공지합니다.<br />\r\n    3) “(주)Kiwi”가 제 2항에 따라 개정약관을 공지하면서 “회원”에게 적용기간 내에 의사표시를 하지 않으면 약관의 변경에 동의한 것으로 본다는 뜻을 명확하게 공지하였음에도 “회원”이 명시적으로 거부의\r\n    의사표시를 하지 않은 경우 “회원”이 개정약관에 동의한 것으로 봅니다.<br />\r\n    4) “회원”이 개정 약관의 적용에 동의하지 않는 경우 “(주)Kiwi”는 개정약관의 내용을 적용할 수 없으며, 이 경우 “회원”은 회원탈퇴를 할 수 있습니다. 단, 이의가 있음에도 불구하고 제 2항의 정해진\r\n    바에 따른 “(주)Kiwi”의 공지일자부터 적용일자 이내에 회원탈퇴를 하지 않은 “회원”은 개정약관에 동의한 것으로 간주합니다.<br />\r\n    5) 본 약관에 동의하는 것은 “(주)Kiwi”가 운영하는 “홈페이지” 및 “앱”을 방문하여 정기적으로 약관의 변경사항을 확인하는 것에 동의함을 의미합니다. “(주)Kiwi”는 “(주)Kiwi”의 고의 혹은\r\n    중과실이 없는 한, 변경된 약관에 대한 정보를 알지 못해서 발생하는 “회원”의 손해에 대하여 책임을 부담하지 않습니다.<br />\r\n\r\n    <br><br>\r\n    <b>제4조 (약관의 해석)</b><br>\r\n\r\n    1) “(주)Kiwi”는 개별 서비스에 대해서는 별도의 약관 (이하 “개별약관”) 및 정책(이하 “개별정책”)을 둘 수 있으며, 해당 내용이 본 약관과 충돌하는 경우에는 “개별약관” 및 “개별정책”이 우선하여\r\n    적용됩니다. 단, “대여 약관”의 경우 본 약관이 우선하여 적용됩니다.<br />\r\n    2) 본 약관에 명시되지 않은 사항에 대해서는 “약관의 규제에 관한 법률”, “전자문서 및 전자거래기본법”, “전자서명법”, “정보통신망 이용촉진 및 정보보호 등에 관한 법률”, “전자상거래 등에서의\r\n    소비자보호에 관한 법률” 등 관계법령 또는 상관례에 따릅니다.<br />\r\n\r\n    <br><br>\r\n    <b>제5조 (회원가입 및 이용계약의 성립)</b><br>\r\n\r\n    1) “(주)Kiwi”가 제공하는 “서비스”의 “회원”이 되고자 하는 자(“가입신청자”)는 본 약관 및 “개별약관”에 대해 동의한 다음 회원가입을 신청하고 “(주)Kiwi”가 이러한 신청에 대하여 승낙함으로써\r\n    이용계약이 성립됩니다.<br />\r\n    2) “(주)Kiwi”는 “가입신청자”의 회원가입 신청에 대하여 “서비스” 이용을 승낙함을 원칙으로 합니다. 다만, “(주)Kiwi”는 다음 각 호에 해당하는 경우, 회원가입 신청에 대해 승낙하지 않거나,\r\n    사후에 이용계약을 해지 할 수 있습니다.<br />\r\n    a) “가입신청자”가 본 약관에 의하여 이전에 “회원” 자격을 상실한 적이 있는 경우. 단, “(주)Kiwi”의 회원 재가입 승낙을 얻은 경우는 예외로 함.<br />\r\n    b) “가입신청자”의 본인 명의가 아닌 휴대전화번호 및 본인 명의가 아닌 결제수단을 포함해서, “가입신청자” 본인 외에 타인의 명의를 이용한 경우.<br />\r\n    c) “(주)Kiwi”가 제시하는 내용을 기재하지 않았거나, 허위의 정보를 기재한 경우.<br />\r\n    d) “가입신청자”가 가입신청일 기준으로 만 16세 미만의 미성년자인 경우<br />\r\n    e) “가입신청자”의 귀책사유로 인하여 승인이 불가능하거나, 기타 규정한 제반 사항을 위반하며 신청하는 경우.<br />\r\n    3) 회원가입의 성립시기는 “(주)Kiwi”가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.<br />\r\n    4) “(주)Kiwi”는 “회원”에 대해 “개별정책”에 따라 이용 요금을 포함해서 모든 서비스의 이용에 차등을 둘 수 있습니다.<br />\r\n    5) “(주)Kiwi”는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.<br />\r\n    6) 제 1항에 따른 신청에 있어 “(주)Kiwi”는 “가입신청자”의 동의를 얻어 개인정보나 신용정보를 수집, 이용 또는 신용조회(주)Kiwi 등에 제공하거나 제공받을 수 있습니다.<br />\r\n\r\n\r\n    <br><br>\r\n    <b>제6조 (회원의 서비스 이용 제한)</b><br>\r\n\r\n    1) “(주)Kiwi”은 다음 각 호에 해당하는 경우 “회원”에 대하여 서비스 제공을 제한하거나 중지할 수 있습니다.<br />\r\n    a) “(주)Kiwi”와 “회원”간에 서비스 제공과 관련된 약정이 종료되는 경우<br />\r\n    b) “회원”이 본 약관의 의무를 위반하거나 “서비스”의 정상적인 운영을 방해한 경우<br />\r\n    c) “회원”이 본인 명의가 아닌 휴대전화번호를 포함해서, 타인의 명의를 도용하여 회원가입을 한 경우.<br />\r\n    d) 유료로 결제를 함에 있어서 타인의 명의의 결제수단을 도용하는 등 불법적인 결제를 한 경우<br />\r\n    e) “회원”이 마지막 “서비스” 이용일로부터 3년간 “서비스” 이용이력이 없는 경우<br />\r\n    f) “회원”이 본 약관에서 정한 의무사항을 위반한 경우<br />\r\n    g) “회원”이 다른 “회원”의 “서비스”이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우 또는 관계 법령에 위반되거나 공서양속에 반하는 행위를 하는 등 기타 “회원”자격을 유지시키는 것이\r\n    부적절하다고 판단되는 경우.<br />\r\n    2) 회원이 사망한 경우 회원 사망일에 회원자격이 상실됩니다.<br />\r\n    3) 본 조 제1항에 따라 서비스 이용이 제한되는 경우 “회원”이 획득한 혜택과 권리 등이 모두 소멸되며, “(주)Kiwi”는 이에 대해 별도로 보상할 책임이 없습니다.<br />\r\n    4) “(주)Kiwi”는 본 조 제1항에 따라 “서비스” 이용이 제한 또는 중지된 “회원”에 대해서 1년 동안 “회원”자격을 정지시킬 수 있습니다.<br />\r\n    5) “회원”은 본 조에 따라 “서비스” 이용이 제한 또는 중지된 경우 “(주)Kiwi”가 정한 절차에 따라 이의신청을 진행할 수 있으며, “(주)Kiwi”는 “회원”의 이의신청이 정당하다고 판단되는 경우\r\n    즉시 “회원”의 “서비스” 이용을 재개합니다. “(주)Kiwi”는 고의 또는 중과실이 입증되지 않는 한, “회원”이 이 기간동안 “서비스” 이용 제한 또는 중지에 따라 입은 손해에 대해 배상할 책임을 지지\r\n    않습니다.<br />\r\n    6) 본 약관은 “회원”의 “서비스” 이용 종료 방식과 관계없이, 각 조항과 그 조건에 따라 “회원”의 “서비스”이용 종료 이후에도 그 효력이 유지됩니다.<br />\r\n\r\n\r\n    <br><br>\r\n    <b>제7조 (회원의 탈퇴 및 자격상실)</b><br>\r\n\r\n    1) “회원”은 언제든지 서면, E-mail, 기타 “(주)Kiwi”가 정한 방법으로 회원탈퇴를 요청할 수 있으며, “(주)Kiwi”는 관계 법령 등이 정하는 바에 따라 조속히 회원탈퇴를\r\n    처리합니다.<br />\r\n    2) “회원”이 회원탈퇴를 한 경우 “(주)Kiwi”가 보유하고 있는 “회원”의 모든 정보는 탈퇴 처리 즉시 소멸됩니다. 단, 다음 각 호의 어느 하나에 해당하는 경우, 탈퇴 처리가 거절될 수\r\n    있습니다.<br />\r\n    a) “회원”이 “(주)Kiwi”에 대해 금전적인 채무가 존재하는 경우<br />\r\n    b) “개인정보 취급방침” 및 관계 법령에 따라 “(주)Kiwi”가 회원정보를 보유하는 경우<br />\r\n    3) “회원”은 “회원”의 요청으로 인한 회원탈퇴 시 3개월간 재가입신청이 제한될 수 있습니다.<br />\r\n    4) 회원탈퇴 시 “회원”이 기보유한 쿠폰 등 모든 혜택 및 권리는 자동으로 소멸되며, 본 조 3항에 따른 재가입시에도 탈퇴 시 소멸된 혜택 및 권리 등은 복구되지 않습니다.<br />\r\n    <br />\r\n    <br><br>\r\n    <b>제8조 (회원에 대한 통지))</b><br>\r\n\r\n\r\n\r\n    1) “(주)Kiwi”는 “회원”에 대한 통지를 하는 경우, 본 약관에 별도의 규정이 없는 한 “회원”이 등록한 전화번호를 통해 SMS, 알림톡 등의 방법을 통해 할 수 있습니다.<br />\r\n    2) “(주)Kiwi”는 불특정다수 회원에 대한 통지를 하는 경우 14일 이상 “앱” 또는 “홈페이지”에 게시함으로써 제 1항의 통지에 갈음할 수 있습니다.<br />\r\n    <br />\r\n    <br><br>\r\n    <b>제9조 (서비스의 제공)</b><br>\r\n\r\n\r\n    1) “(주)Kiwi”가 제공하는 “서비스”의 내용은 다음과 같습니다.<br />\r\n    a) 무인 “전동 킥보드” 장기·단기 대여 서비스 및 이에 관련된 온라인 예약 및 결제 대행 서비스<br />\r\n    b) “(주)Kiwi”에서 제공하는 재화 또는 용역에 대한 정보 제공 서비스<br />\r\n    2) “(주)Kiwi”가 제공하는 “서비스”에는 다음 각 호에 해당하는 사항들이 포함됩니다.<br />\r\n    a) 키위(KIWI) 모바일 어플리케이션 및 관련 홈페이지<br />\r\n    b) “(주)Kiwi” 소유의 “전동 킥보드”<br />\r\n    c) “회원”이 재량적으로 “(주)Kiwi” 소유의 “전동 킥보드”를 충전하는 것<br />\r\n    d) 기타 “(주)Kiwi”에 의해 제공되거나 제작된 장비, 인력, 서비스, 응용 프로그램, 웹사이트 및 정보 등<br />\r\n\r\n    3) “(주)Kiwi”는 본 조의 서비스 이외에도 추가적인 서비스를 개발하여 “회원”에게 제공할 수 있습니다.<br />\r\n    <br><br>\r\n    <b>제10조 (서비스의 변경 및 중단)</b><br>\r\n\r\n\r\n    1) “(주)Kiwi”는 사업종목의 전환, 업체간의 통합, 사업 폐지 등 불가피한 영업상의 이유등으로 인해 제공하는 “서비스”의 내용을 변경할 수 있습니다. 이 경우에는 변경된 서비스의 내용 및 제공일자를\r\n    명시하여 현재의 서비스 내용을 게시한 곳에 그 제공일자 이전 30일 전부터 공지합니다. 단, 변동내용을 구체적으로 공지하기가 불가능한 경우에는 30일 전에 그 취지 및 공지가 불가능한 변동사유를 현재의\r\n    서비스를 게시한 곳에 공지합니다.<br />\r\n    2) (주) Kiwi는 다음 각 호에 해당하는 사유가 발생한 경우 제9조에 명시된 서비스의 일부 또는 전부를 중단할 수 있습니다.<br />\r\n    a) 천재지변, 전쟁, 폭동, 화재, 파업 등 쟁의행위, 정부기관의 통제 등 기타 “(주)Kiwi”의 합리적인 노력으로 제어할 수 없는 사유가 발생하거나 발생할 우려가 있는 경우<br />\r\n    b) 기간통신사업자로부터 전기통신서비스가 제공되지 않은 경우<br />\r\n    c) “(주)Kiwi”의 시스템을 포함한 정보통신설비의 보수점검, 교체 또는 고장, 통신의 두절 등의 사유가 발생한 경우<br />\r\n    d) 제 3자와의 제휴를 통해 제공되는 서비스의 경우에 당해 제휴사업자의 사정에 따라 변경되거나 중지되는 경우<br />\r\n    e) 기타 “(주)Kiwi”의 “서비스”의 원활한 운영을 현저하게 저해하는 사유가 발생한 경우<br />\r\n    3) “(주)Kiwi”는 제 1항 또는 제 2항의 사유로 서비스 내용이 변경 또는 중단되는 경우 이로 인해 “회원”이 입은 손해에 대하여 고의 또는 중과실이 없는 이상 책임을 부담하지 않습니다.<br />\r\n    <br><br>\r\n    <b>제11조 (서비스 요금)</b><br>\r\n    1) “회원”은 “(주)Kiwi”가 정한 “서비스 요금 정책”을 준수할 것을 약속하며, 본 약관 및 대여 약관에서 명시한 서비스 요금 및 손해배상 요금이나 추가 서비스 비용이 발생할 수 있음에\r\n    동의합니다.<br />\r\n    2) “회원”은 “회원”이 등록한 결제 카드 혹은 “(주)Kiwi”가 인정하는 방법으로 요금을 결제해야 합니다.<br />\r\n    3) “회원”은 별도로 명시되지 않은 경우, “(주)Kiwi”가 “회원”이 등록한 결제 카드를 통해 요금을 자동 결제하는 것에 동의합니다.<br />\r\n    4) 서비스 요금은 이용 시간에 따라 달라지며, 본 약관 및 대여 약관, 그리고 “앱”에 명시된 내용을 바탕으로 산출됩니다.<br />\r\n    5) “회원”은 “회원”이 서비스를 통하여 “전동 킥보드”를 이용함에 있어서 관계 법령을 준수해야 하며, “회원”이 “서비스” 이용 중 발생한 모든 범칙금 및 과태료에 대해서 전적으로 “회원”에게 책임이\r\n    있음에 동의합니다. “(주)Kiwi”는 “회원”이 “서비스” 이용 중 관계 법령을 위반하여 발생한 어떠한 비용에 대해서도 책임을 지지 않습니다.<br />\r\n\r\n    <br><br>\r\n    <b>제12조 (쿠폰)</b><br>\r\n\r\n    1) 쿠폰의 세부구분, 할인금액(할인율), 사용기한 및 제한에 대한 사항은 쿠폰 또는 서비스화면에 표시됩니다. 쿠폰의 종류 및 내용과 발급여부에 관하여는 “(주)Kiwi”의 “개별정책”에 따라 달라질 수\r\n    있습니다. 이 경우 (주)Kiwi는 사전유예기간을 두고 변경 내용을 공지합니다.<br />\r\n    2) 쿠폰은 현금으로 환급될 수 없으며, 쿠폰에 표시된 유효기간이 만료되면 자동으로 소멸 처리됩니다. 회원의 탈퇴 등으로 이용계약이 종료되는 경우 미사용된 할인쿠폰은 소멸됩니다.<br />\r\n    3) 발급된 쿠폰 1매에 대한 이용 가능횟수는 1회로 한정되며, 발급된 쿠폰의 할인 혜택을 모두 사용하지 않은 경우 잔여혜택에 대한 환급은 이루어지지 않습니다. 단, 발급된 쿠폰이 차감권(재사용 가능함이\r\n    명시된 쿠폰)인 경우에는 예외로 합니다.<br />\r\n    4) 쿠폰은 “(주)Kiwi”에서 별도로 명시한 경우를 제외하고는 타인에게 양도할 수 없으며, 부정한 목적이나 용도로 사용할 수 없습니다.<br />\r\n    5) “회원”은 “(주)Kiwi”의 “홈페이지” 및 “앱”을 통해 쿠폰에 명시된 내용 및 개별 주의사항(이용조건) 등을 확인하여야 할 책임이 있으며, 명시된 이용조건에 따라서만 쿠폰을 이용하실 수\r\n    있습니다.<br />\r\n    <br><br>\r\n    <b>제13조 (저작권의 귀속 및 이용제한)</b><br>\r\n\r\n\r\n    1) “(주)Kiwi”가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 “(주)Kiwi”에 귀속됩니다.<br />\r\n    2) “회원”은 서비스를 이용함으로써 얻은 정보를 “(주)Kiwi”의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 영리목적으로 이용하거나 제 3자가 이용하도록 해서는\r\n    안됩니다.<br />\r\n    <br><br>\r\n    <b>제14조 (책임제한)</b><br>\r\n\r\n\r\n\r\n    1) “(주)Kiwi”는 1년 365일 24시간 서비스를 제공하기 위해 최대한의 노력을 하지만, 천재지변을 포함하여 기타 예상치 못한 상황이나 사건으로 인해 “회원”에게 “서비스” 항상 제공하지는 못할 수\r\n    있습니다.<br />\r\n    2) “(주)Kiwi”는 “회원”에게 “서비스”의 사용 가능 여부나 “서비스” 내에서 “전동 킥보드”의 사용 가능 여부를 보장하지 않습니다.<br />\r\n    3) “회원”은 “(주)Kiwi”가 본 조 1항의 상황이나 사건으로 인해 언제든 “전동 킥보드”의 반납을 요구할 수 있다는 것에 동의합니다.<br />\r\n    4) “(주)Kiwi”는 본 조 제1항, 제2항, 제3항에 해당하는 경우, “(주)Kiwi”의 고의나 중과실이 없는한, “서비스”를 이용하지 못함으로 인한 “회원”의 손해를 배상할 책임을 지지\r\n    않습니다.<br />\r\n    5) “(주)Kiwi”는 “회원”의 귀책사유로 “서비스” 이용 중 장애가 발생한 경우 책임을 지지 않습니다.<br />\r\n    6) “(주)Kiwi”는 “회원”이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성에 대하여 “(주)Kiwi”의 고의 또는 중과실이 없는 한 책임을 지지 않습니다.<br />\r\n    7) “(주)Kiwi”는 “회원”간 또는 “회원”과 제 3자 상호간에 “서비스”를 매개로 하여 거래 등을 한 경우에는 책임을 지지 않습니다.<br />\r\n    8) “(주)Kiwi”의 “앱” 및 “홈페이지”와 링크 등으로 연결된 사이트를 운영하는 (주)Kiwi(이하 “피연결(주)Kiwi”)는 “(주)Kiwi”와 별개의 사업자로서 독자적으로 운영됩니다.\r\n    “(주)Kiwi”는 “회원”과 “피연결(주)Kiwi” 간에 이루어진 일체의 거래에 대해서 어떠한 책임도 지지 않습니다.<br />\r\n    9) “회원”이 “서비스”를 이용함에 있어 행한 불법행위나 본 약관상 위반행위로 인하여 “(주)Kiwi”가 해당 “회원” 이외의 제 3자로부터 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우,\r\n    해당 “회원”은 자신의 책임과 비용으로 “(주)Kiwi”를 면책시켜야 하며, 그로 인하여 “(주)Kiwi”에 발생한 모든 손해를 배상하여야 합니다.<br />\r\n    <br><br>\r\n    <b>제15조(준거법 및 관할법원)</b><br>\r\n\r\n\r\n    1) “(주)Kiwi”와 “회원”간 제기된 소송은 대한민국법을 준거법으로 합니다.<br />\r\n    2) “(주)Kiwi”와 “회원”간 분쟁이 발생한 경우 “(주)Kiwi”의 본점소재지를 관할하는 법원을 관할법원으로 합니다. 단, “(주)Kiwi”와 “회원”이 관할법원에 대해 약정할 경우에는 그에\r\n    따릅니다.<br />\r\n\r\n    <br><br>\r\n    <b>부칙</b><br>\r\n    1) 본 약관은 2019년 3월 27일부터 적용됩니다.<br />\r\n    <br />\r\n</div>"

/***/ }),

/***/ "./src/app/components/policy-service/policy-service.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/policy-service/policy-service.component.ts ***!
  \***********************************************************************/
/*! exports provided: PolicyServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyServiceComponent", function() { return PolicyServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PolicyServiceComponent = /** @class */ (function () {
    function PolicyServiceComponent() {
    }
    PolicyServiceComponent.prototype.ngOnInit = function () {
    };
    PolicyServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policy-service',
            template: __webpack_require__(/*! ./policy-service.component.html */ "./src/app/components/policy-service/policy-service.component.html"),
            styles: [__webpack_require__(/*! ./policy-service.component.css */ "./src/app/components/policy-service/policy-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PolicyServiceComponent);
    return PolicyServiceComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\r\n    font-size: 35px;\r\n    line-height: 90px;\r\n    color: #60da0f;\r\n    letter-spacing: 0.5px;\r\n    font-family: \"Helvetica Neue\";\r\n    font-weight: bold;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    margin-right: 50px;\r\n     }\r\n    \r\n    #category {\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    line-height: 80px;\r\n    color: black;\r\n    text-align: center;\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n    cursor: pointer;\r\n  \r\n    }\r\n\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7S0FDakI7O0lBRUQ7SUFDQSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYiLCJmaWxlIjoic3JjL2FwcC90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgY29sb3I6ICM2MGRhMGY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICAjY2F0ZWdvcnkge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxuICAgIH1cclxuXHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-white bg-white justify-content-around\" style=\"display:flex\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n</button>\n  <ul class=\"navbar-nav w-100 justify-content-around\">\n      <li class=\"nav-item active\">  <a class=\"nav-link\" id=\"category\" >홈</a>\n      </li>\n      <li class=\"nav-item active\">  <a class=\"nav-link\" id=\"category\" >서비스소개</a>\n      </li>\n\n    <li class=\"nav-item active\">  <a class=\"nav-link\" id=\"category\">이용방법</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" class=\"align-middle\" id=\"home\">\n        <img src=\"../../../assets/images/Kiwi_Logo.png\"\n          width=\"80\" height=\"80\">\n        KIWI\n      </a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" id=\"category\">안전수칙</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" id=\"category\">제휴</a>\n    </li>\n    <li class=\"nav-item active\">  <a class=\"nav-link\" id=\"category\">인재채용</a>\n    </li>\n    <!-- <li class=\"nav-item active\">\n            <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/qna']\" >Help</a>\n        </li> -->\n  </ul>\n\n</nav>\n\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\jvn33\KIWI\KIWI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map