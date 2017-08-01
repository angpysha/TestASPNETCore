"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_service_1 = require("./contact.service");
var DatComponent = (function (_super) {
    __extends(DatComponent, _super);
    function DatComponent(_service) {
        var _this = _super.call(this) || this;
        _this._service = _service;
        _this.contacts = [];
        _this.subscription = _service.RegenerateData$.subscribe(function (mission) {
            console.log("Good !! ", mission);
            _this.refresh();
        });
        return _this;
    }
    DatComponent.prototype.refresh = function () {
        var _this = this;
        this._service.LoadData().then(function (data) {
            _this.contacts = data;
        });
    };
    DatComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    DatComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DatComponent.prototype.onUpdate = function (elem) {
        console.log(elem);
        this._service.Update(elem).then(function (data) {
        });
    };
    DatComponent.prototype.onDelete = function (elem) {
        var _this = this;
        console.log(elem);
        this._service.Delete(elem).then(function (data) {
            _this.refresh();
        });
    };
    return DatComponent;
}(core_1.OnInit));
DatComponent = __decorate([
    core_1.Component({
        selector: 'myDat',
        templateUrl: './app/myDat.html'
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], DatComponent);
exports.DatComponent = DatComponent;
//# sourceMappingURL=app.ComponentDat.js.map