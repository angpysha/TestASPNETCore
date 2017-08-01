import { Component, OnInit } from '@angular/core';
import { ContactService, IContact } from './contact.service';
import { ContactForm } from './addcontactform';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'myDat',
    templateUrl: './app/myDat.html'
})

export class DatComponent extends OnInit {
    subscription: Subscription;
    contacts: IContact[] =[];

    refresh() {
        this._service.LoadData().then(data => {
            this.contacts = data;
        });
    }
    constructor(private _service: ContactService) {
        super();
        this.subscription = _service.RegenerateData$.subscribe(
            mission => {
                console.log("Good !! ", mission);
                this.refresh();
            });
    }

    ngOnInit(): void {
        this.refresh();
        
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onUpdate(elem) {
        console.log(elem);
        this._service.Update(elem).then(data => {

        });
    }

    onDelete(elem: number) {
        console.log(elem);
        this._service.Delete(elem).then(data => {
            this.refresh();
        });

    }

}