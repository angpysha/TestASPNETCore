"use strict";
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
var Contact_1 = require("./Contact");
var contact_service_1 = require("./contact.service");
var ContactForm = (function () {
    function ContactForm(_service) {
        this._service = _service;
        this.model = new Contact_1.Contact(0, '', '', '', '');
        this.submitted = false;
    }
    ContactForm.prototype.OnSubmit = function () {
        var _this = this;
        this.submitted = true;
        this._service.Add(this.model).then(function (data) {
            _this._service.AnnounceChanged(1000);
        });
    };
    Object.defineProperty(ContactForm.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    return ContactForm;
}());
ContactForm = __decorate([
    core_1.Component({
        selector: 'addform',
        templateUrl: './app/addcontactform.component.html'
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactForm);
exports.ContactForm = ContactForm;
//# sourceMappingURL=addcontactform.js.map