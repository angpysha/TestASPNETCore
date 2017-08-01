import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatComponent } from './app.ComponentDat';
import { ContactService } from './contact.service';
import {ContactForm} from './addcontactform';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [DatComponent, ContactForm],
    providers: [ContactService],
    bootstrap: [DatComponent]
})
export class AppModule {
    
}