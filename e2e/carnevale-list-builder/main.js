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

/***/ "./src/app/advice/advice.component.css":
/*!*********************************************!*\
  !*** ./src/app/advice/advice.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/advice/advice.component.html":
/*!**********************************************!*\
  !*** ./src/app/advice/advice.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  advice works!\n\n"

/***/ }),

/***/ "./src/app/advice/advice.component.ts":
/*!********************************************!*\
  !*** ./src/app/advice/advice.component.ts ***!
  \********************************************/
/*! exports provided: AdviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdviceComponent", function() { return AdviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdviceComponent = /** @class */ (function () {
    function AdviceComponent() {
    }
    AdviceComponent.prototype.ngOnInit = function () {
    };
    AdviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advice',
            template: __webpack_require__(/*! ./advice.component.html */ "./src/app/advice/advice.component.html"),
            styles: [__webpack_require__(/*! ./advice.component.css */ "./src/app/advice/advice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdviceComponent);
    return AdviceComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _builder_builder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builder/builder.component */ "./src/app/builder/builder.component.ts");
/* harmony import */ var _faction_select_faction_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faction-select/faction-select.component */ "./src/app/faction-select/faction-select.component.ts");
/* harmony import */ var _gangsummary_gangsummary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gangsummary/gangsummary.component */ "./src/app/gangsummary/gangsummary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/faction-select', pathMatch: 'full' },
    { path: 'faction-select', component: _faction_select_faction_select_component__WEBPACK_IMPORTED_MODULE_3__["FactionSelectComponent"] },
    { path: 'builder/:factionId', component: _builder_builder_component__WEBPACK_IMPORTED_MODULE_2__["BuilderComponent"] },
    { path: 'gangsummary/:gang', component: _gangsummary_gangsummary_component__WEBPACK_IMPORTED_MODULE_4__["GangsummaryComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Carnevale Gang Builder';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _advice_advice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advice/advice.component */ "./src/app/advice/advice.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _faction_select_faction_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faction-select/faction-select.component */ "./src/app/faction-select/faction-select.component.ts");
/* harmony import */ var _character_select_character_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./character-select/character-select.component */ "./src/app/character-select/character-select.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _builder_builder_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./builder/builder.component */ "./src/app/builder/builder.component.ts");
/* harmony import */ var _factioninfo_factioninfo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./factioninfo/factioninfo.component */ "./src/app/factioninfo/factioninfo.component.ts");
/* harmony import */ var ngx_modal_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-modal-dialog */ "./node_modules/ngx-modal-dialog/index.js");
/* harmony import */ var _charactersheet_charactersheet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./charactersheet/charactersheet.component */ "./src/app/charactersheet/charactersheet.component.ts");
/* harmony import */ var _equipmentsheet_equipmentsheet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./equipmentsheet/equipmentsheet.component */ "./src/app/equipmentsheet/equipmentsheet.component.ts");
/* harmony import */ var _gangprintout_gangprintout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gangprintout/gangprintout.component */ "./src/app/gangprintout/gangprintout.component.ts");
/* harmony import */ var _gangsheetcomponent_gangsheetcomponent_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gangsheetcomponent/gangsheetcomponent.component */ "./src/app/gangsheetcomponent/gangsheetcomponent.component.ts");
/* harmony import */ var _gangsummary_gangsummary_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gangsummary/gangsummary.component */ "./src/app/gangsummary/gangsummary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"],
                _advice_advice_component__WEBPACK_IMPORTED_MODULE_6__["AdviceComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"],
                _faction_select_faction_select_component__WEBPACK_IMPORTED_MODULE_10__["FactionSelectComponent"],
                _character_select_character_select_component__WEBPACK_IMPORTED_MODULE_11__["CharacterSelectComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _builder_builder_component__WEBPACK_IMPORTED_MODULE_14__["BuilderComponent"],
                _factioninfo_factioninfo_component__WEBPACK_IMPORTED_MODULE_15__["FactioninfoComponent"],
                _charactersheet_charactersheet_component__WEBPACK_IMPORTED_MODULE_17__["CharactersheetComponent"],
                _equipmentsheet_equipmentsheet_component__WEBPACK_IMPORTED_MODULE_18__["EquipmentsheetComponent"],
                _gangprintout_gangprintout_component__WEBPACK_IMPORTED_MODULE_19__["GangprintoutComponent"],
                _gangsheetcomponent_gangsheetcomponent_component__WEBPACK_IMPORTED_MODULE_20__["GangsheetcomponentComponent"],
                _gangsummary_gangsummary_component__WEBPACK_IMPORTED_MODULE_21__["GangsummaryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_modal_dialog__WEBPACK_IMPORTED_MODULE_16__["ModalDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_charactersheet_charactersheet_component__WEBPACK_IMPORTED_MODULE_17__["CharactersheetComponent"], _equipmentsheet_equipmentsheet_component__WEBPACK_IMPORTED_MODULE_18__["EquipmentsheetComponent"], _gangprintout_gangprintout_component__WEBPACK_IMPORTED_MODULE_19__["GangprintoutComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/builder/builder.component.css":
/*!***********************************************!*\
  !*** ./src/app/builder/builder.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Header Style*/\r\n.header {\r\n    \r\n    text-align: center;\r\n  }\r\n/*character list Select Style*/\r\n.carnevalecharacters {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    \r\n  }\r\n/*Advice Bar Style*/\r\n.advice {\r\n    padding: 1px;\r\n    text-align: center;\r\n    color: #9a191a;\r\n    background-color: azure;\r\n    font-size: large;   \r\n         \r\n  }\r\n/*Character Select Style*/\r\n.characterselect{\r\n    float: left;\r\n    width: 69%;\r\n    text-align: center;\r\n    \r\n  }\r\n/*Summary Style*/\r\n.summary{\r\n    float: right;\r\n    width: 30%;\r\n    height: 80%;\r\n    text-align: center;\r\n    border-style: ridge;\r\n    border-color: #9a191a;\r\n  }\r\n.summary .ducats {\r\n    color: #9a191a;\r\n    font-size: medium;\r\n  }\r\n.seperator{\r\n    height: 300;\r\n    width: 100%;\r\n    float:left;\r\n  }\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n    \r\n  }\r\n/* Character Button style */\r\n.carnevalecharacters .characterbutton{\r\n    float: left;\r\n    width: 300;\r\n    text-align: center;\r\n    border-style: groove;\r\n    border-color: #9a191a;\r\n    padding: 10px;\r\n    color: #9a191a;\r\n  }\r\n/*Character Name Layout*/\r\n.carnevalecharacters .characterbutton .charactername {\r\n    text-align: center;\r\n    font-family: buckingham;\r\n    font-size: larger\r\n  }\r\n/*Character Button Image Panel*/\r\n.carnevalecharacters .characterbutton .characterbuttonimage {\r\n    float: left;\r\n    width: 200;\r\n  }\r\n/* hover button style*/\r\n.carnevalecharacters .characterbutton:hover{\r\n    background-color: #9a191a;\r\n    color: black;\r\n  }\r\n/* On Click Style */\r\n.carnevalecharacters .characterbutton:active{\r\n    background-color: antiquewhite;\r\n  }\r\n/*Character Button Faction Badge*/\r\n.carnevalecharacters .characterbutton .factionimage {\r\n    float: right;\r\n    width: 100;\r\n  }\r\n/*Character Cost Layout*/\r\n.carnevalecharacters .characterbutton .ducatsbox {\r\n    float: right;\r\n    width: 100;    \r\n    font-size: large;\r\n    clear: right;\r\n  }\r\n/*Equipment Area Design*/\r\n.equipment{\r\n    list-style-type: none;\r\n    padding: 0;\r\n  }\r\n.equipment .equipmentframe{\r\n    float: left;\r\n    width: 300;\r\n    text-align: center;\r\n    border-style: groove;\r\n    border-color: #9a191a;\r\n    padding: 10px;\r\n    color: #9a191a;\r\n  }\r\n.equipment .equipmentframe:hover{\r\n    background-color: #9a191a;\r\n    color: black;\r\n  }\r\n.equipment .equipmentframe:hover{\r\n    background-color: #9a191a;\r\n    color: black;\r\n  }\r\n/* On Click Style */\r\n.equipment .equipmentframe:active{\r\n    background-color: antiquewhite;\r\n  }\r\n.equipment .equipmentframe .equipmentname{\r\n    text-align: center;\r\n    font-family: buckingham;\r\n    font-size: larger\r\n  }\r\n.equipment .equipmentframe .equipmentimage{\r\n    float: left;\r\n    width: 200;\r\n  }\r\n.equipment .equipmentframe .equipmentcost{\r\n    float: right;\r\n    width: 100;    \r\n    font-size: large;\r\n    clear: right;\r\n  }\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width:600px){\r\n    .factionselect, .summary, .characterselect, .characterselect, .characterselect,  .footer  {\r\n      width :100%;\r\n    }\r\n      }\r\n/*footer style*/\r\n.footer{\r\n    float: left;\r\n    border-style: ridge;\r\n    border-color: #9a191a;  \r\n    text-align: center;    \r\n    width:100%;\r\n   \r\n  }\r\n/*Create 7 columns, equal, float next to eachother*/\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n/*faction list Select Style*/\r\n.factions {\r\n  list-style-type: none;\r\n  padding: 0;    \r\n}\r\n.factions .factionbadge{\r\n  float: left;\r\n  width: 100;\r\n  text-align: center;    \r\n  color: #13100d;\r\n  font-style: oblique;\r\n  font-size: large;    \r\n  padding: 4%;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\ncontent: \"\";\r\ndisplay: table;\r\nclear: both;    \r\n}\r\nbutton {\r\n  background-color: #13100d;\r\n  color: #9a191a;\r\n  padding: 5px 10px;\r\n  border: #9a191a;\r\n  border-style: groove; \r\n  height: 200px;  \r\n  width: 200px;\r\n  font-size: larger;\r\n}\r\nbutton:hover {\r\n  background-color: #eae3d2;\r\n  border-style: ridge;\r\n}\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/builder/builder.component.html":
/*!************************************************!*\
  !*** ./src/app/builder/builder.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Grid layout set-->\n<div class=\"header\"><app-title></app-title></div>\n\n<ul class=\"factions\">\n    <li *ngFor=\"let faction of factions\" (click)=\"onFactionSelect(faction)\">\n      <span class=\"factionbadge\"><img src=\"{{faction.reverseicon}}\" height=\"100\" width=\"100\"></span>\n      </li>\n  </ul>\n\n  <h1>{{faction.faction}}</h1>\n\n\n<div class=\"summary\">\n    <app-summary [gang]=\"gang\"></app-summary>    \n</div>\n\n<div class=\"characterselect\">\n<ul class=\"carnevalecharacters\">\n    \n        <h2>Leaders</h2>    \n    \n    <li *ngFor=\"let character of leaderlist\" (click)=\"onSelect(character)\">\n           \n        <span class=\"characterbutton\">\n            <div class = \"charactername\">{{character.name}}</div>\n            <div class = \"characterbuttonimage\"><img src=\"{{character.imageUrl}}\" height=\"200\" width=\"200\"></div>\n            \n            <div class = \"ducatsbox\">Ducats: {{character.ducats}}</div>\n        </span>        \n        </li>         \n</ul>\n</div>\n\n\n\n\n\n<div class=\"characterselect\">\n<ul class=\"carnevalecharacters\">\n       \n        <h2>Heroes</h2>\n        \n        <li *ngFor=\"let character of herolist\" (click)=\"onSelect(character)\">\n            <span class=\"characterbutton\">\n                <div class = \"charactername\">{{character.name}}</div>\n                <div class = \"characterbuttonimage\"><img src=\"{{character.imageUrl}}\" height=\"200\" width=\"200\"></div>\n                \n                <div class = \"ducatsbox\">Ducats: {{character.ducats}}</div>\n            </span>             \n        </li>           \n</ul>  \n</div>\n\n\n<div class=\"characterselect\">\n<ul class=\"carnevalecharacters\">\n\n            <h2>Henchmen</h2>\n            \n            <li *ngFor=\"let character of henchmenlist\" (click)=\"onSelect(character)\">\n                <span class=\"characterbutton\">\n                    <div class = \"charactername\">{{character.name}}</div>\n                    <div class = \"characterbuttonimage\"><img src=\"{{character.imageUrl}}\" height=\"200\" width=\"200\"></div>\n                    \n                    <div class = \"ducatsbox\">Ducats: {{character.ducats}}</div>\n                </span>        \n            </li> \n</ul>\n</div>\n\n<div class=\"characterselect\">\n    <ul class = \"equipment\">\n        <h2>Equipment</h2>\n\n        <li *ngFor=\"let equipment of equipmentList\"(click)=\"onEquipmentClick(equipment)\" >\n            <span class=\"equipmentframe\">\n                <div class = \"equipmentname\">{{equipment.equipment}}</div>\n                <div class = \"equipmentimage\"><img src=\"{{equipment.icon}}\" height=\"200\" width=\"200\"></div>\n                <div class = \"equipmentcost\">Ducats: {{equipment.equipmentCost}}</div>\n            </span>\n        </li>\n    </ul>\n</div>\n\n\n<div class=\"footer\"><app-footer></app-footer></div>\n\n \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/builder/builder.component.ts":
/*!**********************************************!*\
  !*** ./src/app/builder/builder.component.ts ***!
  \**********************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _faction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faction.service */ "./src/app/faction.service.ts");
/* harmony import */ var _faction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../faction */ "./src/app/faction.ts");
/* harmony import */ var _gang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gang */ "./src/app/gang.ts");
/* harmony import */ var _carnevalecharacter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../carnevalecharacter.service */ "./src/app/carnevalecharacter.service.ts");
/* harmony import */ var _charactersheet_charactersheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../charactersheet/charactersheet.component */ "./src/app/charactersheet/charactersheet.component.ts");
/* harmony import */ var _completecharacter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../completecharacter */ "./src/app/completecharacter.ts");
/* harmony import */ var _completecharacter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../completecharacter.service */ "./src/app/completecharacter.service.ts");
/* harmony import */ var _keyword_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../keyword.service */ "./src/app/keyword.service.ts");
/* harmony import */ var _specialrule_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../specialrule.service */ "./src/app/specialrule.service.ts");
/* harmony import */ var _uniquerule_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../uniquerule.service */ "./src/app/uniquerule.service.ts");
/* harmony import */ var _weapon_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../weapon.service */ "./src/app/weapon.service.ts");
/* harmony import */ var _weaponinstance_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../weaponinstance.service */ "./src/app/weaponinstance.service.ts");
/* harmony import */ var _equipment_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../equipment.service */ "./src/app/equipment.service.ts");
/* harmony import */ var _equipmentsheet_equipmentsheet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../equipmentsheet/equipmentsheet.component */ "./src/app/equipmentsheet/equipmentsheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var BuilderComponent = /** @class */ (function () {
    function BuilderComponent(route, factionService, carnevaleCharacterService, chardialog, itemdialog, completecharacterservice, keywordservice, specialruleservice, uniqueruleservice, weaponservice, weaponinstanceservice, equipmentservice) {
        this.route = route;
        this.factionService = factionService;
        this.carnevaleCharacterService = carnevaleCharacterService;
        this.chardialog = chardialog;
        this.itemdialog = itemdialog;
        this.completecharacterservice = completecharacterservice;
        this.keywordservice = keywordservice;
        this.specialruleservice = specialruleservice;
        this.uniqueruleservice = uniqueruleservice;
        this.weaponservice = weaponservice;
        this.weaponinstanceservice = weaponinstanceservice;
        this.equipmentservice = equipmentservice;
        this.characters = [];
        this.leaderlist = [];
        this.herolist = [];
        this.henchmenlist = [];
        this.gang = new _gang__WEBPACK_IMPORTED_MODULE_5__["Gang"]();
        this.gang.characters = [];
        this.gang.actualDucats = 0;
        this.gangaccepted = false;
        this.faction = new _faction__WEBPACK_IMPORTED_MODULE_4__["Faction"]();
        this.gang.name = "New Gang";
    }
    BuilderComponent.prototype.onSelect = function (clickedcharacter) {
        this.selectedCharacter = clickedcharacter;
        this.openCharacterSheet(this.selectedCharacter);
    };
    BuilderComponent.prototype.onFactionSelect = function (faction) {
        this.faction = faction;
        this.initialcharacters = [];
        this.characters = [];
        this.leaderlist = [];
        this.herolist = [];
        this.henchmenlist = [];
        this.equipmentList = [];
        this.getCompleteCharacters();
        this.getEquipmentList();
    };
    BuilderComponent.prototype.onEquipmentClick = function (clickedEquipment) {
        this.selectedEquipment = clickedEquipment;
        this.openEquipmentSheet(this.selectedEquipment);
    };
    BuilderComponent.prototype.getCompleteCharacters = function () {
        var _this = this;
        this.carnevaleCharacterService.getCharacters(this.faction.factionId)
            .subscribe(function (initcharacters) {
            _this.initialcharacters = initcharacters;
            for (var _i = 0, _a = _this.initialcharacters; _i < _a.length; _i++) {
                var CarnevaleCharacter_1 = _a[_i];
                var newchar = (_this.completecharacterservice.completeCharacter(CarnevaleCharacter_1));
                _this.addToCharacters(newchar);
            }
            _this.spltListbyCharType();
        });
    };
    ;
    BuilderComponent.prototype.ngOnInit = function () {
        this.getFactions();
        this.getFaction();
    };
    BuilderComponent.prototype.addToCharacters = function (char) {
        var newchar = new _completecharacter__WEBPACK_IMPORTED_MODULE_8__["CompleteCharacter"](char.charId, char.name, char.charType, char.ducats, char.imageUrl, char.faction, char.actionpoints, char.attack, char.baseSize, char.commandpoints, char.dexterity, char.isUnique, char.lifepoints, char.mind, char.movement, char.protection, char.willpoints);
        this.characters.push(newchar);
    };
    BuilderComponent.prototype.openCharacterSheet = function (selectedCharacter) {
        var _this = this;
        var keywordslist = [];
        var specialruleslist = [];
        var uniquerules = [];
        var weaponsinstanceslist = [];
        var weaponslist = [];
        var weaponabilitieslist = [];
        this.keywordservice.getKeywords(selectedCharacter.charId)
            .subscribe(function (keywords) {
            keywordslist = keywords;
            selectedCharacter.keywords = keywordslist;
            _this.specialruleservice.getSpecialRules(selectedCharacter.charId)
                .subscribe(function (specrules) {
                specialruleslist = specrules;
                selectedCharacter.specialrules = specialruleslist;
                _this.uniqueruleservice.getUniqueRules(selectedCharacter.charId)
                    .subscribe(function (unirules) {
                    uniquerules = unirules;
                    selectedCharacter.uniqueRules = uniquerules;
                    _this.weaponinstanceservice.getWeapons(selectedCharacter.charId)
                        .subscribe(function (weaponsinst) {
                        weaponsinstanceslist = weaponsinst;
                        for (var _i = 0, weaponsinstanceslist_1 = weaponsinstanceslist; _i < weaponsinstanceslist_1.length; _i++) {
                            var WeaponInstance = weaponsinstanceslist_1[_i];
                            _this.weaponservice.getWeapons(WeaponInstance.weapon)
                                .subscribe(function (weapon) {
                                weaponslist.push(weapon);
                                var _loop_1 = function (Weapon) {
                                    _this.weaponservice.getweaponabilities(Weapon.weaponId)
                                        .subscribe(function (weaponabilities) {
                                        weaponabilitieslist = weaponabilities;
                                        Weapon.weaponAbilities = weaponabilitieslist;
                                    });
                                };
                                for (var _i = 0, weaponslist_1 = weaponslist; _i < weaponslist_1.length; _i++) {
                                    var Weapon = weaponslist_1[_i];
                                    _loop_1(Weapon);
                                }
                            });
                        }
                        var _loop_2 = function (Weapon) {
                            _this.weaponservice.getweaponabilities(Weapon.weaponId)
                                .subscribe(function (weaponabilities) {
                                Weapon.weaponAbilities = weaponabilities;
                            });
                        };
                        for (var _a = 0, weaponslist_2 = weaponslist; _a < weaponslist_2.length; _a++) {
                            var Weapon = weaponslist_2[_a];
                            _loop_2(Weapon);
                        }
                        selectedCharacter.weapons = weaponslist;
                    });
                });
            });
        });
        var dialogRef = this.chardialog.open(_charactersheet_charactersheet_component__WEBPACK_IMPORTED_MODULE_7__["CharactersheetComponent"], { hasBackdrop: true,
            data: { character: selectedCharacter },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed with ' + result);
            if (result == true) {
                _this.gang.addCharacter(selectedCharacter);
            }
            if (result == false) {
                var element = 0;
                for (var _i = 0, _a = _this.gang.characters; _i < _a.length; _i++) {
                    var CompleteCharacter_1 = _a[_i];
                    if (selectedCharacter.charId == CompleteCharacter_1.charId) {
                        _this.gang.removeCharacter(element, CompleteCharacter_1);
                        break;
                    }
                    else {
                        console.log("character not in gang");
                    }
                    element = element + 1;
                }
            }
        });
    };
    BuilderComponent.prototype.openEquipmentSheet = function (Item) {
        var _this = this;
        var itemdialogRef = this.itemdialog.open(_equipmentsheet_equipmentsheet_component__WEBPACK_IMPORTED_MODULE_16__["EquipmentsheetComponent"], { hasBackdrop: true,
            data: { equipment: Item },
        });
        itemdialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed with ' + result);
            if (result == true) {
                _this.gang.addEquipment(Item);
            }
            if (result == false) {
                var element = 0;
                for (var _i = 0, _a = _this.gang.equipment; _i < _a.length; _i++) {
                    var equipment = _a[_i];
                    if (_this.selectedEquipment.equipmentId == equipment.equipmentId) {
                        _this.gang.removeItem(element, equipment);
                        break;
                    }
                    else {
                        console.log("equipment not selected by gang");
                    }
                    element = element + 1;
                }
            }
        });
    };
    BuilderComponent.prototype.spltListbyCharType = function () {
        for (var _i = 0, _a = this.characters; _i < _a.length; _i++) {
            var CompleteCharacter_2 = _a[_i];
            if (CompleteCharacter_2.charType == 'Leader') {
                this.leaderlist.push(CompleteCharacter_2);
            }
            if (CompleteCharacter_2.charType == 'Hero') {
                this.herolist.push(CompleteCharacter_2);
            }
            if (CompleteCharacter_2.charType == 'Henchman') {
                this.henchmenlist.push(CompleteCharacter_2);
            }
        }
    };
    BuilderComponent.prototype.getFaction = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('factionId');
        this.factionService.getFaction(id)
            .subscribe(function (faction) {
            _this.faction = faction;
            _this.getCompleteCharacters();
            _this.gang.faction = _this.faction.faction;
            _this.getEquipmentList();
        });
    };
    BuilderComponent.prototype.getFactions = function () {
        var _this = this;
        this.factionService.getFactions()
            .subscribe(function (factions) {
            _this.factions = factions;
        });
    };
    BuilderComponent.prototype.getEquipmentList = function () {
        var _this = this;
        this.equipmentservice.getAllEquipment()
            .subscribe(function (equipment) {
            _this.equipmentList = equipment;
        });
    };
    BuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-builder',
            template: __webpack_require__(/*! ./builder.component.html */ "./src/app/builder/builder.component.html"),
            styles: [__webpack_require__(/*! ./builder.component.css */ "./src/app/builder/builder.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _faction_service__WEBPACK_IMPORTED_MODULE_3__["FactionService"],
            _carnevalecharacter_service__WEBPACK_IMPORTED_MODULE_6__["CarnevalecharacterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _completecharacter_service__WEBPACK_IMPORTED_MODULE_9__["CompletecharacterService"],
            _keyword_service__WEBPACK_IMPORTED_MODULE_10__["KeywordService"],
            _specialrule_service__WEBPACK_IMPORTED_MODULE_11__["SpecialruleService"],
            _uniquerule_service__WEBPACK_IMPORTED_MODULE_12__["UniqueruleService"],
            _weapon_service__WEBPACK_IMPORTED_MODULE_13__["WeaponService"],
            _weaponinstance_service__WEBPACK_IMPORTED_MODULE_14__["WeaponinstanceService"],
            _equipment_service__WEBPACK_IMPORTED_MODULE_15__["EquipmentService"]])
    ], BuilderComponent);
    return BuilderComponent;
}());



/***/ }),

/***/ "./src/app/carnevalecharacter.service.ts":
/*!***********************************************!*\
  !*** ./src/app/carnevalecharacter.service.ts ***!
  \***********************************************/
/*! exports provided: CarnevalecharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarnevalecharacterService", function() { return CarnevalecharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarnevalecharacterService = /** @class */ (function () {
    function CarnevalecharacterService(http) {
        this.http = http;
        this.charactersUrl = '';
    }
    CarnevalecharacterService.prototype.getCharacters = function (factionId) {
        if (factionId == 6) {
            this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.guildcharacterview';
        }
        if (factionId == 7) {
            this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.rashaarcharacterview';
        }
        if (factionId == 8) {
            this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.doctorscharacterview';
        }
        if (factionId == 9) {
            this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.patricianscharacterview';
        }
        if (factionId == 10) {
            this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.vaticancharacterview';
        }
        if (factionId == 11) {
            this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.strigoicharacterview';
        }
        if (factionId == 12) {
            this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.giftedcharacterview';
        }
        return this.http.get(this.charactersUrl);
    };
    CarnevalecharacterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarnevalecharacterService);
    return CarnevalecharacterService;
}());



/***/ }),

/***/ "./src/app/character-select/character-select.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/character-select/character-select.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/character-select/character-select.component.html":
/*!******************************************************************!*\
  !*** ./src/app/character-select/character-select.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  character-select works!\n</p>\n"

/***/ }),

/***/ "./src/app/character-select/character-select.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/character-select/character-select.component.ts ***!
  \****************************************************************/
/*! exports provided: CharacterSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSelectComponent", function() { return CharacterSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterSelectComponent = /** @class */ (function () {
    function CharacterSelectComponent() {
    }
    CharacterSelectComponent.prototype.ngOnInit = function () {
    };
    CharacterSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-select',
            template: __webpack_require__(/*! ./character-select.component.html */ "./src/app/character-select/character-select.component.html"),
            styles: [__webpack_require__(/*! ./character-select.component.css */ "./src/app/character-select/character-select.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CharacterSelectComponent);
    return CharacterSelectComponent;
}());



/***/ }),

/***/ "./src/app/charactersheet/charactersheet.component.css":
/*!*************************************************************!*\
  !*** ./src/app/charactersheet/charactersheet.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableheader {\r\n    color: white;\r\n    background-color: #9a191a;\r\n    border-bottom-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\n.mat-dialog-content{\r\n    color: #9a191a;    \r\n}\r\n\r\n.keywords{\r\n    list-style-type: none;\r\n    \r\n    padding: 0;\r\n}\r\n\r\n.keywords .text {\r\n    color: black;\r\n    font-size: small;\r\n}\r\n\r\n.specialrules{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.specialrules .text {\r\n    color: white;\r\n    font-size: small;\r\n    \r\n}\r\n\r\n.specialrules li {\r\n    display: inline-block;\r\n}\r\n\r\n.uniquerules{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.uniquerules .text {\r\n    color: #9a191a;\r\n    font-size: small;\r\n}\r\n\r\n.weaponnames{\r\n    list-style-type: none;\r\n    padding: 0;    \r\n}\r\n\r\n.weaponnames .text{\r\n    color: #9a191a;\r\n    font-size: small;    \r\n}\r\n\r\n.weaponranges{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponranges .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponevade{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponevade .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weapondamage{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weapondamage .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponpenetration{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponpenetration .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponabilities{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponabilities li{\r\n    display: inline-block;\r\n}\r\n\r\n.weaponabilities .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    float: left;\r\n}\r\n\r\n.container{\r\n    height: 200px;\r\n    width: 950px;\r\n}\r\n\r\n.wrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 300px 600px;\r\n        grid-template-columns: 300px 600px;    \r\n    float:left;\r\n       \r\n  }\r\n\r\n.column1 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 60% 20% 20%;\r\n        grid-template-rows: 60% 20% 20%;\r\n    float: left;\r\n}\r\n\r\n.baseandcostwrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 5vw 5vw;\r\n        grid-template-columns: 5vw 5vw;\r\n    float: left;\r\n}\r\n\r\n.basesection {\r\nbackground-color: dimgray;\r\n}\r\n\r\n.costsection {\r\nbackground-color: dimgray;\r\n}\r\n\r\n.keywordsection {\r\n    font-style: italic;\r\n}\r\n\r\n.column2 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 40% 60%;\r\n        grid-template-rows: 40% 60%;\r\n    float: left;\r\n}\r\n\r\n.statsattsweaponscontainer{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 40% 60%;\r\n        grid-template-columns: 40% 60%;\r\n    float: left;\r\n}\r\n\r\n.statsattribcontainer {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n    -ms-grid-rows: 50% 50%;\r\n        grid-template-rows: 50% 50%;\r\n    float: left;\r\n}\r\n\r\n.statstable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 40px 40px 40px 40px 40px;\r\n        grid-template-columns: 40px 40px 40px 40px 40px;\r\n    -ms-grid-rows: 50% 50%;\r\n        grid-template-rows: 50% 50%;\r\n    float: left;\r\n    grid-column-gap: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.attributestable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 30px 30px 30px 30px;\r\n        grid-template-columns: 30px 30px 30px 30px;\r\n    float: left;\r\n    grid-column-gap: 2px;\r\n    text-align: center;\r\n    color: white;\r\n    border-color: #9a191a;\r\n    border-style: double;\r\n}\r\n\r\n.actionatt {\r\n    background-color: goldenrod;\r\n}\r\n\r\n.lifeatt {\r\n    background-color: crimson;\r\n    }\r\n\r\n.willatt {\r\n    background-color: cyan;\r\n}\r\n\r\n.commandatt {\r\n    background-color: forestgreen;\r\n}\r\n\r\n.weaponstable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 148px 48px 48px 48px 48px 280px;\r\n        grid-template-columns: 148px 48px 48px 48px 48px 280px;\r\n    -ms-grid-rows: 20px 100px;\r\n        grid-template-rows: 20px 100px;\r\n    float: right;\r\n    grid-column-gap: 2px;\r\n    border: 2px solid #9a191a;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.weaponstable > div {\r\n    border: 2px solid #9a191a;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.rulescontainer {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 500px;\r\n        grid-template-columns: 500px;\r\n    -ms-grid-rows: 20% 80%;\r\n        grid-template-rows: 20% 80%;\r\n    float: left;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/charactersheet/charactersheet.component.html":
/*!**************************************************************!*\
  !*** ./src/app/charactersheet/charactersheet.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <h1 mat-dialog-title>{{data.character.name}}</h1>\n    <mat-dialog-content>\n      <div class = \"container\">\n      <div class = \"wrapper\">\n        <div><div class = \"column1\">\n          <div><img src = \"{{data.character.imageUrl}}\" height = \"300\" width = \"300\"></div>\n          <div>\n            <div class = \"baseandcostwrapper\">\n                <div><div class =\"basesection\">{{data.character.baseSize}}mm</div></div>\n                <div><div class =\"costsection\">{{data.character.ducats}}</div></div>\n            </div>            \n          </div>\n          <div><div class = \"keywordsection\">\n              <ul class =\"keywords\">\n                <li *ngFor=\"let keyword of data.character.keywords\">\n                    <span class  = text>{{keyword.keyword}}</span>\n                </li>\n              </ul>\n        </div></div>\n        </div></div>\n        <div><div class = \"column2\">\n            <div><div class = \"statsattsweaponscontainer\">\n                <div><div class = \"statsattribcontainer\">\n                    <div><div class =\"statstable\">\n                        <div><div class = \"tableheader\">  MOV </div></div> \n                        <div><div class = \"tableheader\">  DEX </div></div> \n                        <div><div class = \"tableheader\">  ATT </div></div> \n                        <div><div class = \"tableheader\">  PRO </div></div> \n                        <div><div class = \"tableheader\">  MIND </div></div> \n                        <div>{{data.character.movement}}</div> \n                        <div>{{data.character.dexterity}}</div> \n                        <div>{{data.character.attack}}</div> \n                        <div>{{data.character.protection}}</div> \n                        <div>{{data.character.mind}}</div>                         \n                    </div></div> \n                    <div><div class = \"attributestable\">\n                        <div>\n                          <div class = \"actionatt\">{{data.character.actionpoints}}</div>\n                        </div>\n                        <div><div class = \"lifeatt\">{{data.character.lifepoints}}</div></div>\n                        <div><div class = \"willatt\">{{data.character.willpoints}}</div></div>\n                        <div><div class = \"commandatt\">{{data.character.commandpoints}}</div></div>\n                    </div> </div>\n                </div></div> \n                \n            </div></div>\n            <div><div class = \"rulescontainer\">\n               <div><div class =\"tableheader\"> Special Rules: \n                   <ul class =\"specialrules\">\n                       <li *ngFor=\"let specialrule of data.character.specialrules\">\n                           <span class = text>{{specialrule.rule}}({{specialrule.amount}}), </span>\n                       </li>\n                   </ul>\n               </div></div>  \n               <div>Unique Rules:\n                   <ul class = \"uniquerules\">\n                       <li *ngFor=\"let uniquerule of data.character.uniqueRules\">\n                           <span class = text>{{uniquerule.uniqueRuleText}}</span>\n                       </li>\n                   </ul>\n               </div>  \n            </div></div>\n            <div><div class = \"weaponstable\">\n                <div><div class =\"tableheader\"> Weapon</div></div>\n                <div><div class =\"tableheader\"> RNG</div></div>\n                <div><div class =\"tableheader\"> EVD</div></div>\n                <div><div class =\"tableheader\"> DMG</div></div>\n                <div><div class =\"tableheader\"> PEN</div></div>\n                <div><div class =\"tableheader\"> Abilities</div></div>\n                <div>\n                    <ul class = \"weaponnames\">\n                        <li *ngFor=\"let weapon of data.character.weapons\">\n                            <span class = text>   {{weapon.weapon}}</span>\n                        </li>\n                    </ul>\n                </div>\n                <div>\n                    <ul class = \"weaponranges\">\n                        <li *ngFor=\"let weapon of data.character.weapons\">\n                            <span class = text>  {{weapon.weaponRange}}</span>\n                        </li>\n                    </ul>\n                </div>\n                <div>\n                    <ul class = \"weaponevade\">\n                        <li *ngFor=\"let weapon of data.character.weapons\">\n                            <span class = text>{{weapon.evasion}}</span>\n                        </li>\n                    </ul>\n                </div>\n                <div>\n                    <ul class = \"weapondamage\">\n                        <li *ngFor=\"let weapon of data.character.weapons\">\n                            <span class = text>{{weapon.damage}}</span>\n                        </li>\n                    </ul>\n                </div>\n                <div>\n                    <ul class = \"weaponpenetration\">\n                        <li *ngFor=\"let weapon of data.character.weapons\">\n                            <span class = text>{{weapon.penetration}}</span>\n                        </li>\n                    </ul>\n                </div>\n                <div>\n                    <ul class = \"weaponabilities\">\n                        <ul *ngFor=\"let weapon of data.character.weapons\">\n                            <li *ngFor=\"let weaponAbility of weapon.weaponAbilities\">\n                                <span class = text>{{weaponAbility.weaponAbility}},</span>\n                            </li>\n                        </ul>\n                    </ul>\n                </div>\n            </div></div> \n        </div></div>\n    </div>\n  </div>    \n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-button [mat-dialog-close]=\"true\">Add</button>\n      <button mat-button [mat-dialog-close]=\"false\">Delete</button>\n      <button mat-button [mat-dialog-close]=\"cancel\">Cancel</button>      \n    </mat-dialog-actions>\n \n"

/***/ }),

/***/ "./src/app/charactersheet/charactersheet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/charactersheet/charactersheet.component.ts ***!
  \************************************************************/
/*! exports provided: CharactersheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersheetComponent", function() { return CharactersheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CharactersheetComponent = /** @class */ (function () {
    function CharactersheetComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CharactersheetComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CharactersheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charactersheet',
            template: __webpack_require__(/*! ./charactersheet.component.html */ "./src/app/charactersheet/charactersheet.component.html"),
            styles: [__webpack_require__(/*! ./charactersheet.component.css */ "./src/app/charactersheet/charactersheet.component.css")],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CharactersheetComponent);
    return CharactersheetComponent;
}());



/***/ }),

/***/ "./src/app/completeCharacter.ts":
/*!**************************************!*\
  !*** ./src/app/completeCharacter.ts ***!
  \**************************************/
/*! exports provided: CompleteCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteCharacter", function() { return CompleteCharacter; });
var CompleteCharacter = /** @class */ (function () {
    function CompleteCharacter(charId, name, charType, ducats, imageUrl, faction, actionpoints, attack, baseSize, commandpoints, dexterity, isUnique, lifepoints, mind, movement, protection, willpoints) {
        this.charId = charId;
        this.name = name;
        this.charType = charType;
        this.ducats = ducats;
        this.imageUrl = imageUrl;
        this.faction = faction;
        this.actionpoints = actionpoints;
        this.attack = attack;
        this.baseSize = baseSize;
        this.commandpoints = commandpoints;
        this.dexterity = dexterity;
        this.isUnique = isUnique;
        this.lifepoints = lifepoints;
        this.mind = mind;
        this.movement = movement;
        this.protection = protection;
        this.willpoints = willpoints;
    }
    CompleteCharacter.prototype.stringofuniquerules = function () {
        var uniquerulesstring;
        uniquerulesstring = this.uniqueRules.join(", ");
        return uniquerulesstring;
    };
    CompleteCharacter.prototype.stringofspecialrules = function () {
        var specialrulesstring;
        specialrulesstring = this.specialrules.join(", ");
        return specialrulesstring;
    };
    CompleteCharacter.prototype.stringofkeywords = function () {
        var keywordstring;
        keywordstring = this.keywords.join(", ");
        return keywordstring;
    };
    return CompleteCharacter;
}());



/***/ }),

/***/ "./src/app/completecharacter.service.ts":
/*!**********************************************!*\
  !*** ./src/app/completecharacter.service.ts ***!
  \**********************************************/
/*! exports provided: CompletecharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletecharacterService", function() { return CompletecharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keyword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyword */ "./src/app/keyword.ts");
/* harmony import */ var _completeCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completeCharacter */ "./src/app/completeCharacter.ts");
/* harmony import */ var _carnevalecharacter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carnevalecharacter.service */ "./src/app/carnevalecharacter.service.ts");
/* harmony import */ var _keyword_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyword.service */ "./src/app/keyword.service.ts");
/* harmony import */ var _specialrule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specialrule.service */ "./src/app/specialrule.service.ts");
/* harmony import */ var _uniquerule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uniquerule.service */ "./src/app/uniquerule.service.ts");
/* harmony import */ var _weapon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weapon.service */ "./src/app/weapon.service.ts");
/* harmony import */ var _weaponability_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weaponability.service */ "./src/app/weaponability.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CompletecharacterService = /** @class */ (function () {
    function CompletecharacterService(carnevalecharacterservice, keywordservice, specialrulesservice, uniqueruleservice, weaponservice, weaponabilityservice) {
        this.carnevalecharacterservice = carnevalecharacterservice;
        this.keywordservice = keywordservice;
        this.specialrulesservice = specialrulesservice;
        this.uniqueruleservice = uniqueruleservice;
        this.weaponservice = weaponservice;
        this.weaponabilityservice = weaponabilityservice;
        this.keywords = [];
        this.specialrules = [];
        this.weapons = [];
        this.weaponabilities = [];
        this.uniquerules = [];
    }
    CompletecharacterService.prototype.completeCharacter = function (character) {
        var charId = character.charId;
        var name = character.name;
        var charType = character.charType;
        var ducats = character.ducats;
        var imageUrl = character.imageUrl;
        var faction = character.faction;
        var actionpoints = character.actionpoints;
        var attack = character.attack;
        var baseSize = character.baseSize;
        var commandpoints = character.commandpoints;
        var dexterity = character.dexterity;
        var isUnique = character.isUnique;
        var lifepoints = character.lifepoints;
        var mind = character.mind;
        var movement = character.movement;
        var protection = character.protection;
        var willpoints = character.willpoints;
        var charactercomplete = new _completeCharacter__WEBPACK_IMPORTED_MODULE_2__["CompleteCharacter"](charId, name, charType, ducats, imageUrl, faction, actionpoints, attack, baseSize, commandpoints, dexterity, isUnique, lifepoints, mind, movement, protection, willpoints);
        return charactercomplete;
    };
    CompletecharacterService.prototype.getWeaponAbilities = function (weapon) {
        this.weaponservice.getweaponabilities(weapon.weaponId)
            .subscribe(function (weaponabilities) { return weapon.weaponAbilities = weaponabilities; });
    };
    CompletecharacterService.prototype.getWeapons = function (id) {
        var _this = this;
        var newweapons = new Array;
        this.weaponservice.getWeapons(id)
            .subscribe(function (weapons) {
            newweapons = weapons;
            for (var _i = 0, _a = _this.weapons; _i < _a.length; _i++) {
                var Weapon_1 = _a[_i];
                _this.getWeaponAbilities(Weapon_1);
            }
            return newweapons;
        });
    };
    CompletecharacterService.prototype.getKeywords = function (id) {
        var _this = this;
        this.keywordservice.getKeywords(id)
            .subscribe(function (keywords) {
            for (var _i = 0, keywords_1 = keywords; _i < keywords_1.length; _i++) {
                var Keyword_1 = keywords_1[_i];
                _this.addtoKeywords(Keyword_1);
            }
            console.log("too late", _this.keywords);
        });
        return this.keywords;
    };
    CompletecharacterService.prototype.addtoKeywords = function (keyword) {
        var newKeyWord = new _keyword__WEBPACK_IMPORTED_MODULE_1__["Keyword"](keyword.charId, keyword.keyInstId, keyword.keyword, keyword.name);
        this.keywords.push(newKeyWord);
    };
    CompletecharacterService.prototype.getSpecialrules = function (id) {
        var newspecialrules = new Array;
        this.specialrulesservice.getSpecialRules(id)
            .subscribe(function (specialrules) {
            newspecialrules = specialrules;
            return newspecialrules;
        });
    };
    CompletecharacterService.prototype.getUniquerules = function (id) {
        var newuniquerules = new Array;
        this.uniqueruleservice.getUniqueRules(id)
            .subscribe(function (uniquerules) {
            newuniquerules = uniquerules;
            return newuniquerules;
        });
    };
    CompletecharacterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_carnevalecharacter_service__WEBPACK_IMPORTED_MODULE_3__["CarnevalecharacterService"],
            _keyword_service__WEBPACK_IMPORTED_MODULE_4__["KeywordService"],
            _specialrule_service__WEBPACK_IMPORTED_MODULE_5__["SpecialruleService"],
            _uniquerule_service__WEBPACK_IMPORTED_MODULE_6__["UniqueruleService"],
            _weapon_service__WEBPACK_IMPORTED_MODULE_7__["WeaponService"],
            _weaponability_service__WEBPACK_IMPORTED_MODULE_8__["WeaponabilityService"]])
    ], CompletecharacterService);
    return CompletecharacterService;
}());



/***/ }),

/***/ "./src/app/completecharacter.ts":
/*!**************************************!*\
  !*** ./src/app/completecharacter.ts ***!
  \**************************************/
/*! exports provided: CompleteCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteCharacter", function() { return CompleteCharacter; });
var CompleteCharacter = /** @class */ (function () {
    function CompleteCharacter(charId, name, charType, ducats, imageUrl, faction, actionpoints, attack, baseSize, commandpoints, dexterity, isUnique, lifepoints, mind, movement, protection, willpoints) {
        this.charId = charId;
        this.name = name;
        this.charType = charType;
        this.ducats = ducats;
        this.imageUrl = imageUrl;
        this.faction = faction;
        this.actionpoints = actionpoints;
        this.attack = attack;
        this.baseSize = baseSize;
        this.commandpoints = commandpoints;
        this.dexterity = dexterity;
        this.isUnique = isUnique;
        this.lifepoints = lifepoints;
        this.mind = mind;
        this.movement = movement;
        this.protection = protection;
        this.willpoints = willpoints;
    }
    CompleteCharacter.prototype.stringofuniquerules = function () {
        var uniquerulesstring;
        uniquerulesstring = this.uniqueRules.join(", ");
        return uniquerulesstring;
    };
    CompleteCharacter.prototype.stringofspecialrules = function () {
        var specialrulesstring;
        specialrulesstring = this.specialrules.join(", ");
        return specialrulesstring;
    };
    CompleteCharacter.prototype.stringofkeywords = function () {
        var keywordstring;
        keywordstring = this.keywords.join(", ");
        return keywordstring;
    };
    return CompleteCharacter;
}());



/***/ }),

/***/ "./src/app/equipment.service.ts":
/*!**************************************!*\
  !*** ./src/app/equipment.service.ts ***!
  \**************************************/
/*! exports provided: EquipmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentService", function() { return EquipmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentService = /** @class */ (function () {
    function EquipmentService(http) {
        this.http = http;
        this.equipmentUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.equipment';
    }
    EquipmentService.prototype.getAllEquipment = function () {
        return this.http.get(this.equipmentUrl);
    };
    EquipmentService.prototype.getSingleEquipment = function (id) {
        return this.http.get(this.equipmentUrl + "/" + id);
    };
    EquipmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EquipmentService);
    return EquipmentService;
}());



/***/ }),

/***/ "./src/app/equipmentsheet/equipmentsheet.component.css":
/*!*************************************************************!*\
  !*** ./src/app/equipmentsheet/equipmentsheet.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 200px;\r\n    width: 400px;\r\n}\r\n\r\n.wrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100px 300px;\r\n        grid-template-columns: 100px 300px;    \r\n    float:left;\r\n       \r\n  }\r\n\r\n.mat-dialog-content{\r\n    color: #9a191a;    \r\n}\r\n\r\n.column1 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 100%;\r\n        grid-template-rows: 100%;\r\n    float: left;\r\n}\r\n\r\n.column2 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 100%;\r\n        grid-template-rows: 100%;\r\n    float: left;\r\n}\r\n\r\n.equipmentrules{\r\n    color: #9a191a;\r\n    font-size: medium;\r\n}\r\n\r\n.equipmentcost{\r\n    color: #9a191a;\r\n    font-size: medium;\r\n}\r\n\r\nbutton {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    font-family: Arial;\r\n  }\r\n\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n\r\nbutton.print {\r\n    position: relative;\r\n    left: 194px;\r\n    top: -32px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  }\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/equipmentsheet/equipmentsheet.component.html":
/*!**************************************************************!*\
  !*** ./src/app/equipmentsheet/equipmentsheet.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.equipment.equipment}}</h1>\n<mat-dialog-content>\n  <div class = \"container\">\n    <div class = \"wrapper\">      \n        <div class = \"column1\">\n          <div><img src = \"{{data.equipment.icon}}\" height = \"100\" width = \"100\"></div>\n        </div>\n      \n      <div class = \"column2\">\n\n        <div class = \"equipmentrules\">\n          {{data.equipment.equipmentText}}\n        </div>\n\n        <div class  = \"equipmentcost\">\n          Cost: {{data.equipment.equipmentCost}} ducats\n        </div>\n\n      </div>\n\n      </div>            \n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"true\">Add</button>\n  <button mat-button [mat-dialog-close]=\"false\">Delete</button>\n  <button mat-button [mat-dialog-close]=\"cancel\">Cancel</button>      \n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/equipmentsheet/equipmentsheet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/equipmentsheet/equipmentsheet.component.ts ***!
  \************************************************************/
/*! exports provided: EquipmentsheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsheetComponent", function() { return EquipmentsheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EquipmentsheetComponent = /** @class */ (function () {
    function EquipmentsheetComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EquipmentsheetComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EquipmentsheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipmentsheet',
            template: __webpack_require__(/*! ./equipmentsheet.component.html */ "./src/app/equipmentsheet/equipmentsheet.component.html"),
            styles: [__webpack_require__(/*! ./equipmentsheet.component.css */ "./src/app/equipmentsheet/equipmentsheet.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EquipmentsheetComponent);
    return EquipmentsheetComponent;
}());



/***/ }),

/***/ "./src/app/faction-select/faction-select.component.css":
/*!*************************************************************!*\
  !*** ./src/app/faction-select/faction-select.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Create 7 columns, equal, float next to eachother*/\r\n.column {\r\n    float: left;\r\n    padding: 10px;\r\n  }\r\n/*faction list Select Style*/\r\n.factions {\r\n    list-style-type: none;\r\n    padding: 0;    \r\n  }\r\n.factions .factionbadge{\r\n    float: left;\r\n    width: 100;\r\n    text-align: center;    \r\n    color: #13100d;\r\n    font-style: oblique;\r\n    font-size: large;    \r\n    padding: 4%;\r\n  }\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;    \r\n}\r\n.wrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto auto auto auto;\r\n        grid-template-columns: auto auto auto auto;    \r\n    height: 100vh;\r\n    float:left;\r\n       \r\n  }\r\n.paper {\r\n    background-image: url(\"/list-builder/assets/images/Paper.png\");\r\n    color: #13100d;\r\n  }\r\nbutton {\r\n   background-color: #13100d;\r\n   color: #9a191a;\r\n   padding: 5px 10px;\r\n   border: #9a191a;\r\n   border-style: groove; \r\n   height: 200px;  \r\n   width: 200px;\r\n   font-size: larger;\r\n }\r\nbutton:hover {\r\n   background-color: #eae3d2;\r\n   border-style: ridge;\r\n }\r\n/* Responsive layout - makes the columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width:600px){\r\n  .factions .factionbadge, .factions .factionbadge, .factions .factionbadge, .wrapper .paper {\r\n    width :100%;      \r\n  }\r\n  .wrapper{\r\n    display:-ms-grid;\r\n    display:grid;\r\n    -ms-grid-columns: 1fr ;\r\n        grid-template-columns: 1fr ;\r\n    -ms-grid-rows: auto auto 1fr auto;\r\n        grid-template-rows: auto auto 1fr auto;\r\n  }\r\n  h1{\r\n    font-size: larger\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/faction-select/faction-select.component.html":
/*!**************************************************************!*\
  !*** ./src/app/faction-select/faction-select.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"factions\">\n  <li *ngFor=\"let faction of factions\" (click)=\"onSelect(faction)\">\n    <span class=\"factionbadge\"><img src=\"{{faction.reverseicon}}\" height=\"100\" width=\"100\"></span>\n    </li>\n</ul>\n\n\n <div *ngIf=\"selectedFaction\">\n  <div class=\"wrapper\">\n    <div><img src=\"{{selectedFaction.strip}}\"width=\"450\" height =\"500\"></div>\n    <div><img src=\"{{selectedFaction.factionImgUrl}}\" height=\"600\"></div>\n    <div><div class=\"paper\"><h1>{{selectedFaction.faction}}</h1>\n      <p>{{selectedFaction.factionLore}}</p>\n      <p>{{selectedFaction.factionGameplay}}</p>\n      <p>{{selectedFaction.factionCommand}}</p>\n      <a routerLink=\"/builder/{{selectedFaction.factionId}}\">\n        <button>Select {{selectedFaction.faction}}</button></a>\n      </div>\n  </div>\n    <div><img src=\"{{selectedFaction.strip}}\"width=\"450\" height =\"500\"></div>\n  </div>\n      </div>\n \n  "

/***/ }),

/***/ "./src/app/faction-select/faction-select.component.ts":
/*!************************************************************!*\
  !*** ./src/app/faction-select/faction-select.component.ts ***!
  \************************************************************/
/*! exports provided: FactionSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactionSelectComponent", function() { return FactionSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../faction.service */ "./src/app/faction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FactionSelectComponent = /** @class */ (function () {
    function FactionSelectComponent(factionService) {
        this.factionService = factionService;
    }
    FactionSelectComponent.prototype.onSelect = function (faction) {
        this.selectedFaction = faction;
    };
    FactionSelectComponent.prototype.getFactions = function () {
        var _this = this;
        this.factionService.getFactions()
            .subscribe(function (factions) { return _this.factions = factions; });
    };
    FactionSelectComponent.prototype.ngOnInit = function () {
        this.getFactions();
    };
    FactionSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faction-select',
            template: __webpack_require__(/*! ./faction-select.component.html */ "./src/app/faction-select/faction-select.component.html"),
            styles: [__webpack_require__(/*! ./faction-select.component.css */ "./src/app/faction-select/faction-select.component.css")]
        }),
        __metadata("design:paramtypes", [_faction_service__WEBPACK_IMPORTED_MODULE_1__["FactionService"]])
    ], FactionSelectComponent);
    return FactionSelectComponent;
}());



/***/ }),

/***/ "./src/app/faction.service.ts":
/*!************************************!*\
  !*** ./src/app/faction.service.ts ***!
  \************************************/
/*! exports provided: FactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactionService", function() { return FactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FactionService = /** @class */ (function () {
    function FactionService(http) {
        this.http = http;
        this.factionsUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions';
        this.factionUrl = '';
    }
    FactionService.prototype.getFactions = function () {
        return this.http.get(this.factionsUrl);
    };
    FactionService.prototype.getFaction = function (id) {
        if (id == 10) {
            this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/10';
        }
        if (id == 6) {
            this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/6';
        }
        if (id == 7) {
            this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/7';
        }
        if (id == 8) {
            this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/8';
        }
        if (id == 9) {
            this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/9';
        }
        if (id == 11) {
            this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/11';
        }
        if (id == 12) {
            this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/12';
        }
        return this.http.get(this.factionUrl);
    };
    FactionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FactionService);
    return FactionService;
}());



/***/ }),

/***/ "./src/app/faction.ts":
/*!****************************!*\
  !*** ./src/app/faction.ts ***!
  \****************************/
/*! exports provided: Faction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faction", function() { return Faction; });
var Faction = /** @class */ (function () {
    function Faction() {
    }
    return Faction;
}());



/***/ }),

/***/ "./src/app/factioninfo/factioninfo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/factioninfo/factioninfo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/factioninfo/factioninfo.component.html":
/*!********************************************************!*\
  !*** ./src/app/factioninfo/factioninfo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  factioninfo works!\n</p>\n"

/***/ }),

/***/ "./src/app/factioninfo/factioninfo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/factioninfo/factioninfo.component.ts ***!
  \******************************************************/
/*! exports provided: FactioninfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactioninfoComponent", function() { return FactioninfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../faction */ "./src/app/faction.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FactioninfoComponent = /** @class */ (function () {
    function FactioninfoComponent() {
    }
    FactioninfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _faction__WEBPACK_IMPORTED_MODULE_1__["Faction"])
    ], FactioninfoComponent.prototype, "faction", void 0);
    FactioninfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factioninfo',
            template: __webpack_require__(/*! ./factioninfo.component.html */ "./src/app/factioninfo/factioninfo.component.html"),
            styles: [__webpack_require__(/*! ./factioninfo.component.css */ "./src/app/factioninfo/factioninfo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FactioninfoComponent);
    return FactioninfoComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gang.ts":
/*!*************************!*\
  !*** ./src/app/gang.ts ***!
  \*************************/
/*! exports provided: Gang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gang", function() { return Gang; });
var Gang = /** @class */ (function () {
    function Gang() {
        this.errorreason = "Yes";
        this.isAcceptable = true;
        this.actualDucats = 0;
        this.equipment = [];
    }
    Gang.prototype.addCharacter = function (char) {
        this.characters.push(char);
        this.actualDucats = this.actualDucats + char.ducats;
        this.checkAcceptable();
    };
    Gang.prototype.getGangCost = function () {
        return this.actualDucats;
    };
    Gang.prototype.addEquipment = function (item) {
        this.equipment.push(item);
        this.actualDucats = this.actualDucats + item.equipmentCost;
        this.checkAcceptable();
    };
    Gang.prototype.removeItem = function (index, item) {
        this.equipment.splice(index, 1);
        this.actualDucats = this.actualDucats - item.equipmentCost;
        this.checkAcceptable();
    };
    Gang.prototype.removeCharacter = function (index, char) {
        this.characters.splice(index, 1);
        this.actualDucats = this.actualDucats - char.ducats;
        this.checkAcceptable();
    };
    Gang.prototype.checkAcceptable = function () {
        this.errorreason = "";
        this.isAcceptable = true;
        this.finderror();
        return this.isAcceptable;
    };
    Gang.prototype.getError = function () {
        return this.errorreason;
    };
    Gang.prototype.finderror = function () {
        this.isAcceptable = true;
        this.errorreason = "";
        var leaders = 0;
        var heroes = 0;
        var henchmen = 0;
        var giftedchar = 0;
        var otherfactionchars = 0;
        for (var _i = 0, _a = this.characters; _i < _a.length; _i++) {
            var character = _a[_i];
            if (character.charType == "Leader") {
                leaders = leaders + 1;
            }
            if (character.charType == "Hero") {
                heroes = heroes + 1;
            }
            if (character.charType == "Henchman") {
                henchmen = henchmen + 1;
            }
            if (character.faction == "The Gifted") {
                giftedchar = giftedchar + 1;
            }
            if (character.faction != this.faction && character.faction != "The Gifted") {
                otherfactionchars = otherfactionchars + 1;
            }
        }
        if (leaders > 1) {
            this.isAcceptable = false;
            var toomanyleaders = "Too many Leaders, only one Leader allowed: ";
            this.errorreason = this.errorreason.concat(toomanyleaders);
        }
        if (leaders == 0) {
            this.isAcceptable = false;
            var toofewleaders = "Too few Leaders, at least one leader needed: ";
            this.errorreason = this.errorreason.concat(toofewleaders);
        }
        if (heroes > henchmen) {
            this.isAcceptable = false;
            var toomanyheroes = "More Heroes than Henchman, please remove heroes or add Henchmen: ";
            this.errorreason = this.errorreason.concat(toomanyheroes);
        }
        if (otherfactionchars > 0) {
            this.isAcceptable = false;
            var otherfactionerror = "You have selected other factions characters. This is allowed with gifted characters but not others.";
            this.errorreason = this.errorreason.concat(otherfactionerror);
        }
        for (var _b = 0, _c = this.characters; _b < _c.length; _b++) {
            var character = _c[_b];
            var checkresult = false;
            if (character.isUnique == true) {
                checkresult = this.checkUniquechar(character);
                if (checkresult == true) {
                    this.isAcceptable = false;
                }
            }
            if (checkresult == true) {
                var overuseofuniquecharerror = "You may only use one " + character.name + ": ";
                this.errorreason = this.errorreason.concat(overuseofuniquecharerror);
            }
        }
        this.checkEquipment();
        if (this.errorreason == "") {
            this.errorreason = this.errorreason = "Yes";
        }
    };
    Gang.prototype.checkUniquechar = function (char) {
        var isduplicated = false;
        var amountofchar = 0;
        for (var _i = 0, _a = this.characters; _i < _a.length; _i++) {
            var character = _a[_i];
            if (character.charId == char.charId) {
                amountofchar = amountofchar + 1;
            }
        }
        if (amountofchar > 1) {
            isduplicated = true;
        }
        return isduplicated;
    };
    Gang.prototype.checkEquipment = function () {
        var isacceptable = true;
        for (var _i = 0, _a = this.equipment; _i < _a.length; _i++) {
            var item = _a[_i];
            var isduplicated = this.checkDuplicatedItem(item);
            if (isduplicated == true) {
                var duplicateitemerror = "You can only use one " + item.equipment;
                this.errorreason = this.errorreason.concat(duplicateitemerror);
            }
        }
        return isacceptable;
    };
    Gang.prototype.checkDuplicatedItem = function (checkItem) {
        var isduplicated = false;
        var numberofitem = 0;
        for (var _i = 0, _a = this.equipment; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.equipment == checkItem.equipment) {
                numberofitem = numberofitem + 1;
            }
        }
        if (numberofitem >= 2) {
            isduplicated = true;
        }
        return isduplicated;
    };
    return Gang;
}());



/***/ }),

/***/ "./src/app/gangprintout/gangprintout.component.css":
/*!*********************************************************!*\
  !*** ./src/app/gangprintout/gangprintout.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableheader {\r\n    color: white;\r\n    background-color: #9a191a;\r\n    border-bottom-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\n.mat-dialog-content{\r\n    color: #9a191a;    \r\n}\r\n\r\n.keywords{\r\n    list-style-type: none;\r\n    \r\n    padding: 0;\r\n}\r\n\r\n.keywords .text {\r\n    color: black;\r\n    font-size: small;\r\n}\r\n\r\n.specialrules{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.specialrules .text {\r\n    color: white;\r\n    font-size: small;\r\n    \r\n}\r\n\r\n.specialrules li {\r\n    display: inline-block;\r\n}\r\n\r\n.uniquerules{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.uniquerules .text {\r\n    color: #9a191a;\r\n    font-size: small;\r\n}\r\n\r\n.weaponnames{\r\n    list-style-type: none;\r\n    padding: 0;    \r\n}\r\n\r\n.weaponnames .text{\r\n    color: #9a191a;\r\n    font-size: small;    \r\n}\r\n\r\n.weaponranges{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponranges .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponevade{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponevade .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weapondamage{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weapondamage .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponpenetration{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponpenetration .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponabilities{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponabilities li{\r\n    display: inline-block;\r\n}\r\n\r\n.weaponabilities .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    float: left;\r\n}\r\n\r\n.container{\r\n    height: auto;\r\n    width: 1050px;\r\n}\r\n\r\n.wrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 200px 580px;\r\n        grid-template-columns: 200px 580px;    \r\n    float:left;\r\n    height: auto;\r\n       \r\n  }\r\n\r\n.column1 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 60% 20% 20%;\r\n        grid-template-rows: 60% 20% 20%;\r\n    float: left;\r\n}\r\n\r\n.baseandcostwrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 4vw 4vw;\r\n        grid-template-columns: 4vw 4vw;\r\n    float: left;\r\n}\r\n\r\n.basesection {\r\nbackground-color: dimgray;\r\n}\r\n\r\n.costsection {\r\nbackground-color: dimgray;\r\n}\r\n\r\n.keywordsection {\r\n    font-style: italic;\r\n}\r\n\r\n.column2 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 40% 60%;\r\n        grid-template-rows: 40% 60%;\r\n    float: left;\r\n}\r\n\r\n.statsattsweaponscontainer{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 40% 60%;\r\n        grid-template-columns: 40% 60%;\r\n    float: left;\r\n}\r\n\r\n.statsattribcontainer {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n    -ms-grid-rows: 50% 50%;\r\n        grid-template-rows: 50% 50%;\r\n    float: left;\r\n}\r\n\r\n.statstable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 40px 40px 40px 40px 40px;\r\n        grid-template-columns: 40px 40px 40px 40px 40px;\r\n    -ms-grid-rows: 50% 50%;\r\n        grid-template-rows: 50% 50%;\r\n    float: left;\r\n    grid-column-gap: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.attributestable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 30px 30px 30px 30px;\r\n        grid-template-columns: 30px 30px 30px 30px;\r\n    float: left;\r\n    grid-column-gap: 2px;\r\n    text-align: center;\r\n    color: white;\r\n    border-color: #9a191a;\r\n    border-style: double;\r\n}\r\n\r\n.actionatt {\r\n    background-color: goldenrod;\r\n}\r\n\r\n.lifeatt {\r\n    background-color: crimson;\r\n    }\r\n\r\n.willatt {\r\n    background-color: cyan;\r\n}\r\n\r\n.commandatt {\r\n    background-color: forestgreen;\r\n}\r\n\r\n.weaponstableheader{\r\n    color: white;\r\n    background-color: #9a191a;\r\n    \r\n}\r\n\r\n.weaponstable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 145px 45px 45px 45px 45px 250px;\r\n        grid-template-columns: 145px 45px 45px 45px 45px 250px;\r\n    -ms-grid-rows: 20px 100px;\r\n        grid-template-rows: 20px 100px;\r\n    float: right;\r\n    \r\n    border: 2px solid #9a191a;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.weaponstable > div {\r\n    border: 2px solid #9a191a;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.rulescontainer {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 500px;\r\n        grid-template-columns: 500px;\r\n    -ms-grid-rows: 20% 80%;\r\n        grid-template-rows: 20% 80%;\r\n    float: left;\r\n}\r\n\r\n.characterlist {\r\n    list-style: none;\r\n    padding: 2;    \r\n}\r\n\r\n.equiptmentlist{\r\n    list-style: none;\r\n    padding: 2;  \r\n}\r\n\r\n.equipmentwrapper{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100px 300px;\r\n        grid-template-columns: 100px 300px;    \r\n    float:left;\r\n}\r\n\r\n.equipmentcolumn1{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 150px;\r\n        grid-template-rows: 150px;\r\n    float: left;  \r\n}\r\n\r\n.spacer{\r\n    height: 25px;\r\n}\r\n\r\n.equipmentcolumn2{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 300px;\r\n        grid-template-rows: 300px;\r\n    float: left;\r\n}\r\n\r\n.equipmentrules{\r\n    color: #9a191a;\r\n    font-size: medium;\r\n    float: left;\r\n}\r\n\r\n.equipmentcost{\r\n    color: #9a191a;\r\n    font-size: medium;\r\n    float: right;\r\n    height: 20px;\r\n}\r\n\r\n.html2canvas-container {\r\n    width: 12000px; \r\n    height: 12000px !important;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/gangprintout/gangprintout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/gangprintout/gangprintout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h1 mat-dialog-title>Gang Summary</h1>\n<button class = \"printPDF\" title=\"Print Gang PDF\"\n      (click)=\"printPDF()\">Download PDF</button>\n      \n      <mat-dialog-content>\n   <div id = \"container\" #content>\n     <p>CHARACTERS:</p>\n      <ul class = characterlist>\n         <li *ngFor=\"let character of data.gang.characters\">\n            <p>{{character.name}}<p>\n            <div class = \"wrapper\">\n              <div>\n                  <div class = \"column1\">\n                     \n                     <div><img src = \"{{character.imageUrl}}\" height = \"100\" width = \"100\"></div>\n                     <div>\n                        <div class = \"baseandcostwrapper\">\n                           <div>\n                              <div class =\"basesection\">{{character.baseSize}}mm</div>\n                           </div>\n                           <div>\n                              <div class =\"costsection\">{{character.ducats}}</div>\n                           </div>\n                        </div>\n                     </div>\n                     <div>\n                        <div class = \"keywordsection\">\n                           <ul class =\"keywords\">\n                              <li *ngFor=\"let keyword of character.keywords\">\n                                 <span class  = text>{{keyword.keyword}}</span>\n                              </li>\n                           </ul>\n                        </div>\n                     </div>\n                  </div>\n                </div> \n               <div>\n                  <div class = \"column2\">\n                      \n                     <div>\n                        <div class = \"statsattsweaponscontainer\">\n                           <div>\n                              <div class = \"statsattribcontainer\">\n                                 <div>\n                                    <div class =\"statstable\">\n                                       <div>\n                                          <div class = \"tableheader\">  MOV </div>\n                                       </div>\n                                       <div>\n                                          <div class = \"tableheader\">  DEX </div>\n                                       </div>\n                                       <div>\n                                          <div class = \"tableheader\">  ATT </div>\n                                       </div>\n                                       <div>\n                                          <div class = \"tableheader\">  PRO </div>\n                                       </div>\n                                       <div>\n                                          <div class = \"tableheader\">  MIND </div>\n                                       </div>\n                                       <div>{{character.movement}}</div>\n                                       <div>{{character.dexterity}}</div>\n                                       <div>{{character.attack}}</div>\n                                       <div>{{character.protection}}</div>\n                                       <div>{{character.mind}}</div>\n                                    </div>\n                                 </div>\n                                 <div>\n                                    <div class = \"attributestable\">\n                                       <div>\n                                          <div class = \"actionatt\">{{character.actionpoints}}</div>\n                                       </div>\n                                       <div>\n                                          <div class = \"lifeatt\">{{character.lifepoints}}</div>\n                                       </div>\n                                       <div>\n                                          <div class = \"willatt\">{{character.willpoints}}</div>\n                                       </div>\n                                       <div>\n                                          <div class = \"commandatt\">{{character.commandpoints}}</div>\n                                       </div>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                     <div>\n                        <div class = \"rulescontainer\">\n                           <div>\n                              <div class =\"tableheader\">\n                                 Special Rules: \n                                 <ul class =\"specialrules\">\n                                    <li *ngFor=\"let specialrule of character.specialrules\">\n                                       <span class = text>{{specialrule.rule}}({{specialrule.amount}}), </span>\n                                    </li>\n                                 </ul>\n                              </div>\n                           </div>\n                           <div>\n                              Unique Rules:\n                              <ul class = \"uniquerules\">\n                                 <li *ngFor=\"let uniquerule of character.uniqueRules\">\n                                    <span class = text>{{uniquerule.uniqueRuleText}}</span>\n                                 </li>\n                              </ul>\n                           </div>\n                        </div>\n                     </div>\n                     <div>\n                        <div class = \"weaponstable\">\n                           <div>\n                              <div class =\"weaponstableheader\"> Weapon</div>\n                           </div>\n                           <div>\n                              <div class =\"weaponstableheader\"> RNG</div>\n                           </div>\n                           <div>\n                              <div class =\"weaponstableheader\"> EVD</div>\n                           </div>\n                           <div>\n                              <div class =\"weaponstableheader\"> DMG</div>\n                           </div>\n                           <div>\n                              <div class =\"weaponstableheader\"> PEN</div>\n                           </div>\n                           <div>\n                              <div class =\"weaponstableheader\"> Abilities</div>\n                           </div>\n                           <div>\n                              <ul class = \"weaponnames\">\n                                 <li *ngFor=\"let weapon of character.weapons\">\n                                    <span class = text>   {{weapon.weapon}}</span>\n                                 </li>\n                              </ul>\n                           </div>\n                           <div>\n                              <ul class = \"weaponranges\">\n                                 <li *ngFor=\"let weapon of character.weapons\">\n                                    <span class = text>  {{weapon.weaponRange}}</span>\n                                 </li>\n                              </ul>\n                           </div>\n                           <div>\n                              <ul class = \"weaponevade\">\n                                 <li *ngFor=\"let weapon of character.weapons\">\n                                    <span class = text>{{weapon.evasion}}</span>\n                                 </li>\n                              </ul>\n                           </div>\n                           <div>\n                              <ul class = \"weapondamage\">\n                                 <li *ngFor=\"let weapon of character.weapons\">\n                                    <span class = text>{{weapon.damage}}</span>\n                                 </li>\n                              </ul>\n                           </div>\n                           <div>\n                              <ul class = \"weaponpenetration\">\n                                 <li *ngFor=\"let weapon of character.weapons\">\n                                    <span class = text>{{weapon.penetration}}</span>\n                                 </li>\n                              </ul>\n                           </div>\n                           <div>\n                              <ul class = \"weaponabilities\">\n                                 <ul *ngFor=\"let weapon of character.weapons\">\n                                    <li *ngFor=\"let weaponAbility of weapon.weaponAbilities\">\n                                       <span class = text>{{weaponAbility.weaponAbility}},</span>\n                                    </li>\n                                 </ul>\n                              </ul>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n             \n         </li>\n      </ul>\n      <p>EQUIPMENT:</p>\n      <ul class = \"equiptmentlist\">\n        <li *ngFor=\"let equipment of data.gang.equipment\">\n          <p>{{equipment.equipment}}</p>\n          <div class = \"equipmentwrapper\">      \n              <div class = \"equipmentcolumn1\">\n                <div><img src = \"{{equipment.icon}}\" height = \"100\" width = \"100\"></div>\n                <div class  = \"equipmentcost\">\n                    Cost: {{equipment.equipmentCost}} ducats\n                  </div>\n              </div>\n            \n            <div class = \"equipmentcolumn2\">                \n      \n              <div class = \"equipmentrules\">\n                {{equipment.equipmentText}}\n              </div>\n      \n              \n      \n            </div>\n      \n            </div>\n               \n        </li>\n      </ul>\n   </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n   <button mat-button [mat-dialog-close]=\"true\">Add</button>\n   <button mat-button [mat-dialog-close]=\"false\">Delete</button>\n   <button mat-button [mat-dialog-close]=\"cancel\">Cancel</button>      \n</mat-dialog-actions>\n\n\n"

/***/ }),

/***/ "./src/app/gangprintout/gangprintout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gangprintout/gangprintout.component.ts ***!
  \********************************************************/
/*! exports provided: GangprintoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GangprintoutComponent", function() { return GangprintoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var GangprintoutComponent = /** @class */ (function () {
    function GangprintoutComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GangprintoutComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GangprintoutComponent.prototype.printPDF = function () {
        /*let doc = new jspdf('p', 'mm', 'a4');
      
        let specialElementHandlers = {
          '#content': function(element, renderer){
            return true;
          }
        };*/
        var content = document.getElementById("container");
        /*doc.fromHTML(content, 15, 15, {
          'width': 180,
          'elementHandlers': specialElementHandlers
        },
      
        function (dispose){
        doc.save("GangList.pdf");
        }
      ); */
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(content, {
            useCORS: true,
            pagesplit: true,
        }).then(function (canvas) {
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'mm', 'a4');
            var option = {
                useCORS: true,
                pagesplit: true,
            };
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('ganglist.pdf');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GangprintoutComponent.prototype, "content", void 0);
    GangprintoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./gangprintout.component.html */ "./src/app/gangprintout/gangprintout.component.html"),
            styles: [__webpack_require__(/*! ./gangprintout.component.css */ "./src/app/gangprintout/gangprintout.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], GangprintoutComponent);
    return GangprintoutComponent;
}());



/***/ }),

/***/ "./src/app/gangsheetcomponent/gangsheetcomponent.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/gangsheetcomponent/gangsheetcomponent.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gangsheetcomponent/gangsheetcomponent.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/gangsheetcomponent/gangsheetcomponent.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  gangsheetcomponent works!\n</p>\n"

/***/ }),

/***/ "./src/app/gangsheetcomponent/gangsheetcomponent.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/gangsheetcomponent/gangsheetcomponent.component.ts ***!
  \********************************************************************/
/*! exports provided: GangsheetcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GangsheetcomponentComponent", function() { return GangsheetcomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GangsheetcomponentComponent = /** @class */ (function () {
    function GangsheetcomponentComponent() {
    }
    GangsheetcomponentComponent.prototype.ngOnInit = function () {
    };
    GangsheetcomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gangsheetcomponent',
            template: __webpack_require__(/*! ./gangsheetcomponent.component.html */ "./src/app/gangsheetcomponent/gangsheetcomponent.component.html"),
            styles: [__webpack_require__(/*! ./gangsheetcomponent.component.css */ "./src/app/gangsheetcomponent/gangsheetcomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GangsheetcomponentComponent);
    return GangsheetcomponentComponent;
}());



/***/ }),

/***/ "./src/app/gangsummary/gangsummary.component.css":
/*!*******************************************************!*\
  !*** ./src/app/gangsummary/gangsummary.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableheader {\r\n    color: white;\r\n    background-color: #9a191a;\r\n    border-bottom-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\n.mat-dialog-content{\r\n    color: #9a191a;    \r\n}\r\n\r\n.keywords{\r\n    list-style-type: none;\r\n    \r\n    padding: 0;\r\n}\r\n\r\n.keywords .text {\r\n    color: black;\r\n    font-size: small;\r\n}\r\n\r\n.specialrules{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.specialrules .text {\r\n    color: white;\r\n    font-size: small;\r\n    \r\n}\r\n\r\n.specialrules li {\r\n    display: inline-block;\r\n}\r\n\r\n.uniquerules{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.uniquerules .text {\r\n    color: #9a191a;\r\n    font-size: small;\r\n}\r\n\r\n.weaponnames{\r\n    list-style-type: none;\r\n    padding: 0;    \r\n}\r\n\r\n.weaponnames .text{\r\n    color: #9a191a;\r\n    font-size: small;    \r\n}\r\n\r\n.weaponranges{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponranges .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponevade{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponevade .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weapondamage{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weapondamage .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponpenetration{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponpenetration .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.weaponabilities{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.weaponabilities li{\r\n    display: inline-block;\r\n}\r\n\r\n.weaponabilities .text{\r\n    color: #9a191a;\r\n    font-size: small;\r\n    float: left;\r\n}\r\n\r\n.container{\r\n    height: auto;\r\n    width: 950px;\r\n}\r\n\r\n.wrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 120px 600px;\r\n        grid-template-columns: 120px 600px;    \r\n    float:left;\r\n    height: 400px;\r\n       \r\n  }\r\n\r\n.column1 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 60% 20% 20%;\r\n        grid-template-rows: 60% 20% 20%;\r\n    float: left;\r\n}\r\n\r\n.baseandcostwrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 5vw 5vw;\r\n        grid-template-columns: 5vw 5vw;\r\n    float: left;\r\n}\r\n\r\n.basesection {\r\nbackground-color: dimgray;\r\n}\r\n\r\n.costsection {\r\nbackground-color: dimgray;\r\n}\r\n\r\n.keywordsection {\r\n    font-style: italic;\r\n}\r\n\r\n.column2 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto;\r\n        grid-template-columns: auto;\r\n    -ms-grid-rows: 40% 60%;\r\n        grid-template-rows: 40% 60%;\r\n    float: left;\r\n}\r\n\r\n.statsattsweaponscontainer{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 40% 60%;\r\n        grid-template-columns: 40% 60%;\r\n    float: left;\r\n}\r\n\r\n.statsattribcontainer {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n    -ms-grid-rows: 50% 50%;\r\n        grid-template-rows: 50% 50%;\r\n    float: left;\r\n}\r\n\r\n.statstable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 40px 40px 40px 40px 40px;\r\n        grid-template-columns: 40px 40px 40px 40px 40px;\r\n    -ms-grid-rows: 50% 50%;\r\n        grid-template-rows: 50% 50%;\r\n    float: left;\r\n    grid-column-gap: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.attributestable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 30px 30px 30px 30px;\r\n        grid-template-columns: 30px 30px 30px 30px;\r\n    float: left;\r\n    grid-column-gap: 2px;\r\n    text-align: center;\r\n    color: white;\r\n    border-color: #9a191a;\r\n    border-style: double;\r\n}\r\n\r\n.actionatt {\r\n    background-color: goldenrod;\r\n}\r\n\r\n.lifeatt {\r\n    background-color: crimson;\r\n    }\r\n\r\n.willatt {\r\n    background-color: cyan;\r\n}\r\n\r\n.commandatt {\r\n    background-color: forestgreen;\r\n}\r\n\r\n.weaponstable {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 148px 48px 48px 48px 48px 250px;\r\n        grid-template-columns: 148px 48px 48px 48px 48px 250px;\r\n    -ms-grid-rows: 20px 100px;\r\n        grid-template-rows: 20px 100px;\r\n    float: right;\r\n    grid-column-gap: 2px;\r\n    border: 2px solid #9a191a;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.weaponstable > div {\r\n    border: 2px solid #9a191a;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.rulescontainer {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 500px;\r\n        grid-template-columns: 500px;\r\n    -ms-grid-rows: 20% 80%;\r\n        grid-template-rows: 20% 80%;\r\n    float: left;\r\n}\r\n\r\n.characterlist {\r\n    list-style: none;\r\n    padding: 2;    \r\n}"

/***/ }),

/***/ "./src/app/gangsummary/gangsummary.component.html":
/*!********************************************************!*\
  !*** ./src/app/gangsummary/gangsummary.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class = \"print\" title=\"Print Gang\"\n    (click)=\"printPDF()\">Print Gang</button>\n  <div class = \"container\">\n      \n    <ul class = characterlist>\n    <li *ngFor=\"let character of gang.characters\">\n        <div class = \"wrapper\">\n          \n            <div><div class = \"column1\">\n                <h2>{{character.name}}</h2>\n              <div><img src = \"{{character.imageUrl}}\" height = \"150\" width = \"150\"></div>\n              <div>\n                <div class = \"baseandcostwrapper\">\n                    <div><div class =\"basesection\">{{character.baseSize}}mm</div></div>\n                    <div><div class =\"costsection\">{{character.ducats}}</div></div>\n                </div>            \n              </div>\n              <div><div class = \"keywordsection\">\n                  <ul class =\"keywords\">\n                    <li *ngFor=\"let keyword of character.keywords\">\n                        <span class  = text>{{keyword.keyword}}</span>\n                    </li>\n                  </ul>\n            </div></div>\n            </div></div>\n            <div><div class = \"column2\">\n                <div><div class = \"statsattsweaponscontainer\">\n                    <div><div class = \"statsattribcontainer\">\n                        <div><div class =\"statstable\">\n                            <div><div class = \"tableheader\">  MOV </div></div> \n                            <div><div class = \"tableheader\">  DEX </div></div> \n                            <div><div class = \"tableheader\">  ATT </div></div> \n                            <div><div class = \"tableheader\">  PRO </div></div> \n                            <div><div class = \"tableheader\">  MIND </div></div> \n                            <div>{{character.movement}}</div> \n                            <div>{{character.dexterity}}</div> \n                            <div>{{character.attack}}</div> \n                            <div>{{character.protection}}</div> \n                            <div>{{character.mind}}</div>                         \n                        </div></div> \n                        <div><div class = \"attributestable\">\n                            <div>\n                              <div class = \"actionatt\">{{character.actionpoints}}</div>\n                            </div>\n                            <div><div class = \"lifeatt\">{{character.lifepoints}}</div></div>\n                            <div><div class = \"willatt\">{{character.willpoints}}</div></div>\n                            <div><div class = \"commandatt\">{{character.commandpoints}}</div></div>\n                        </div> </div>\n                    </div></div> \n                    \n                </div></div>\n                <div><div class = \"rulescontainer\">\n                   <div><div class =\"tableheader\"> Special Rules: \n                       <ul class =\"specialrules\">\n                           <li *ngFor=\"let specialrule of character.specialrules\">\n                               <span class = text>{{specialrule.rule}}({{specialrule.amount}}), </span>\n                           </li>\n                       </ul>\n                   </div></div>  \n                   <div>Unique Rules:\n                       <ul class = \"uniquerules\">\n                           <li *ngFor=\"let uniquerule of character.uniqueRules\">\n                               <span class = text>{{uniquerule.uniqueRuleText}}</span>\n                           </li>\n                       </ul>\n                   </div>  \n                </div></div>\n                <div><div class = \"weaponstable\">\n                    <div><div class =\"tableheader\"> Weapon</div></div>\n                    <div><div class =\"tableheader\"> RNG</div></div>\n                    <div><div class =\"tableheader\"> EVD</div></div>\n                    <div><div class =\"tableheader\"> DMG</div></div>\n                    <div><div class =\"tableheader\"> PEN</div></div>\n                    <div><div class =\"tableheader\"> Abilities</div></div>\n                    <div>\n                        <ul class = \"weaponnames\">\n                            <li *ngFor=\"let weapon of character.weapons\">\n                                <span class = text>   {{weapon.weapon}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div>\n                        <ul class = \"weaponranges\">\n                            <li *ngFor=\"let weapon of character.weapons\">\n                                <span class = text>  {{weapon.weaponRange}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div>\n                        <ul class = \"weaponevade\">\n                            <li *ngFor=\"let weapon of character.weapons\">\n                                <span class = text>{{weapon.evasion}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div>\n                        <ul class = \"weapondamage\">\n                            <li *ngFor=\"let weapon of character.weapons\">\n                                <span class = text>{{weapon.damage}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div>\n                        <ul class = \"weaponpenetration\">\n                            <li *ngFor=\"let weapon of character.weapons\">\n                                <span class = text>{{weapon.penetration}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div>\n                        <ul class = \"weaponabilities\">\n                            <ul *ngFor=\"let weapon of character.weapons\">\n                                <li *ngFor=\"let weaponAbility of weapon.weaponAbilities\">\n                                    <span class = text>{{weaponAbility.weaponAbility}},</span>\n                                </li>\n                            </ul>\n                        </ul>\n                    </div>\n                </div></div> \n            </div></div>\n        </div>\n    </li>\n  </ul>\n  </div>"

/***/ }),

/***/ "./src/app/gangsummary/gangsummary.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gangsummary/gangsummary.component.ts ***!
  \******************************************************/
/*! exports provided: GangsummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GangsummaryComponent", function() { return GangsummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gang */ "./src/app/gang.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GangsummaryComponent = /** @class */ (function () {
    function GangsummaryComponent() {
    }
    GangsummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _gang__WEBPACK_IMPORTED_MODULE_1__["Gang"])
    ], GangsummaryComponent.prototype, "gang", void 0);
    GangsummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gangsummary',
            template: __webpack_require__(/*! ./gangsummary.component.html */ "./src/app/gangsummary/gangsummary.component.html"),
            styles: [__webpack_require__(/*! ./gangsummary.component.css */ "./src/app/gangsummary/gangsummary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GangsummaryComponent);
    return GangsummaryComponent;
}());



/***/ }),

/***/ "./src/app/keyword.service.ts":
/*!************************************!*\
  !*** ./src/app/keyword.service.ts ***!
  \************************************/
/*! exports provided: KeywordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordService", function() { return KeywordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeywordService = /** @class */ (function () {
    /*async getKeywords(id: number) {
      var keywords: Keyword[];
      keywords = await this.http.get<Keyword[]>('http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.keywordsview/findcharid/'+id).toPromise();
      return keywords;
    }*/
    function KeywordService(http) {
        this.http = http;
    }
    KeywordService.prototype.getKeywords = function (id) {
        return this.http.get('http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.keywordsview/findcharid/' + id);
    };
    KeywordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KeywordService);
    return KeywordService;
}());



/***/ }),

/***/ "./src/app/keyword.ts":
/*!****************************!*\
  !*** ./src/app/keyword.ts ***!
  \****************************/
/*! exports provided: Keyword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyword", function() { return Keyword; });
var Keyword = /** @class */ (function () {
    function Keyword(charId, keyInstId, keyword, name) {
        this.charId = charId;
        this.keyInstId = keyInstId;
        this.keyword = keyword;
        this.name = name;
    }
    return Keyword;
}());



/***/ }),

/***/ "./src/app/specialrule.service.ts":
/*!****************************************!*\
  !*** ./src/app/specialrule.service.ts ***!
  \****************************************/
/*! exports provided: SpecialruleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialruleService", function() { return SpecialruleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecialruleService = /** @class */ (function () {
    function SpecialruleService(http) {
        this.http = http;
        this.specialruleurl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.specialruleview/findcharid/';
    }
    SpecialruleService.prototype.getSpecialRules = function (id) {
        return this.http.get(this.specialruleurl + id);
    };
    SpecialruleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpecialruleService);
    return SpecialruleService;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    text-align: center;\r\n}\r\n\r\np{\r\n    color: #9a191a\r\n}\r\n\r\n.characterlist {\r\n    list-style-type: disc;\r\n    padding: 2;\r\n    text-align: left;\r\n}\r\n\r\n.characterlist .text{\r\n    color: #9a191a;\r\n    font-size: medium;\r\n}\r\n\r\n.equipmentlist {\r\n    list-style-type: disc;\r\n    padding: 2;\r\n    text-align: left;\r\n}\r\n\r\n.equipmentlist .text{\r\n    color: #9a191a;\r\n    font-size: medium;\r\n}"

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h2>Gang Details</h2>\n  <p>Gang Cost: {{gang.actualDucats}} ducats.</p>\n\n  <ul class = \"characterlist\">\n    <li *ngFor=\"let character of gang.characters\">\n      <span class = text>Character: {{character.name}}:  Cost: {{character.ducats}}: Faction: {{character.faction}}: Type:{{character.charType}} </span>\n    </li>\n  </ul>\n\n  <ul class = \"equipmentlist\">\n    <li *ngFor=\"let item of gang.equipment\">\n      <span class = text>Item: {{item.equipment}}: Cost: {{item.equipmentCost}}:</span>\n    </li>\n  </ul>\n\n  <p>Gang Legal: {{gang.errorreason}}</p>\n\n  <button class = \"print\" title=\"Print PDF\"\n    (click)=\"printgang()\">Print PDF</button>\n\n  \n\n"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _gang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gang */ "./src/app/gang.ts");
/* harmony import */ var _gangprintout_gangprintout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gangprintout/gangprintout.component */ "./src/app/gangprintout/gangprintout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(gangsheetdialog) {
        this.gangsheetdialog = gangsheetdialog;
        this.ganglegal = true;
        this.gangerrorreason = "";
    }
    SummaryComponent.prototype.printgang = function () {
        var gangsheetdialogRef = this.gangsheetdialog.open(_gangprintout_gangprintout_component__WEBPACK_IMPORTED_MODULE_3__["GangprintoutComponent"], { hasBackdrop: true,
            data: { gang: this.gang },
        });
        gangsheetdialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed with ' + result);
        });
    };
    SummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _gang__WEBPACK_IMPORTED_MODULE_2__["Gang"])
    ], SummaryComponent.prototype, "gang", void 0);
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/title/title.component.css":
/*!*******************************************!*\
  !*** ./src/app/title/title.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{    \r\n    color: #9a191a;\r\n    font-size: large;\r\n}\r\n\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width:600px){\r\n    p{\r\n        font-size: small;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<img src=\"assets/images/Carnevalehalflogo.png\">\n<p>Gang Builder</p>\n\n"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/uniquerule.service.ts":
/*!***************************************!*\
  !*** ./src/app/uniquerule.service.ts ***!
  \***************************************/
/*! exports provided: UniqueruleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueruleService", function() { return UniqueruleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UniqueruleService = /** @class */ (function () {
    function UniqueruleService(http) {
        this.http = http;
        this.uniqueruleurl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.uniqueruleview/findcharid/';
    }
    UniqueruleService.prototype.getUniqueRules = function (id) {
        return this.http.get(this.uniqueruleurl + id);
    };
    UniqueruleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UniqueruleService);
    return UniqueruleService;
}());



/***/ }),

/***/ "./src/app/weapon.service.ts":
/*!***********************************!*\
  !*** ./src/app/weapon.service.ts ***!
  \***********************************/
/*! exports provided: WeaponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponService", function() { return WeaponService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeaponService = /** @class */ (function () {
    function WeaponService(http) {
        this.http = http;
        this.weaponsurl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.weapons/';
        this.weaponabilitiesurl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.weaponabilitiesview/findweaponid/';
    }
    WeaponService.prototype.getWeapons = function (id) {
        return this.http.get(this.weaponsurl + id);
    };
    WeaponService.prototype.getweaponabilities = function (id) {
        return this.http.get(this.weaponabilitiesurl + id);
    };
    WeaponService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeaponService);
    return WeaponService;
}());



/***/ }),

/***/ "./src/app/weaponability.service.ts":
/*!******************************************!*\
  !*** ./src/app/weaponability.service.ts ***!
  \******************************************/
/*! exports provided: WeaponabilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponabilityService", function() { return WeaponabilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeaponabilityService = /** @class */ (function () {
    function WeaponabilityService() {
    }
    WeaponabilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WeaponabilityService);
    return WeaponabilityService;
}());



/***/ }),

/***/ "./src/app/weaponinstance.service.ts":
/*!*******************************************!*\
  !*** ./src/app/weaponinstance.service.ts ***!
  \*******************************************/
/*! exports provided: WeaponinstanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponinstanceService", function() { return WeaponinstanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeaponinstanceService = /** @class */ (function () {
    function WeaponinstanceService(http) {
        this.http = http;
        this.weaponsurl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.weaponinstancesview/findcharid/';
    }
    WeaponinstanceService.prototype.getWeapons = function (id) {
        return this.http.get(this.weaponsurl + id);
    };
    WeaponinstanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeaponinstanceService);
    return WeaponinstanceService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TTCombat Design 7\carnevale-list-builder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map