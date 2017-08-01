import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact';
import { ContactService, IContact } from './contact.service';

@Component({
    selector: 'addform',
    templateUrl: './app/addcontactform.component.html'
})

export class ContactForm {
    constructor(private _service: ContactService) {

    }
    model = new Contact(0, '', '', '', '');
    submitted = false;

    OnSubmit() {
        this.submitted = true;
        this._service.Add(this.model).then(data => {
            this._service.AnnounceChanged(1000);
        })
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

}