import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
    constructor(private _http: Http) { }

    private RegenerateData = new Subject<number>();

    RegenerateData$ = this.RegenerateData.asObservable();

    AnnounceChanged(num: number) {
        this.RegenerateData.next(num);
    }

    LoadData(): Promise<IContact[]> {
        return this._http.get("/contacts/getdata")
            .toPromise()
            .then(responce => this.extractArray(responce))
            .catch(this.handleError);
    }

    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();
        return data || [];
    }

    protected handleError(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
            ? error.message
            : error._body
            ? error._body
            : error.status
            ? `${error.status} - ${error.statusText}`
            : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    Add(model) {
        let headers = new Headers({
            'Content-Type':
                'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        delete model["id"];
        let body = JSON.stringify(model);
        return this._http.post('/contacts/create', body, options).toPromise()
            .catch(this.handleError);
    }

    Update(model) {
        let headers = new Headers({
            'Content-Type':
                'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(model);
        return this._http.put('/contacts/edit', body, options).toPromise()
            .catch(this.handleError);
    }

    Delete(id: number) {
        return this._http.delete('/contacts/deleteconfirmed/?id=' + id).toPromise()
            .catch(this.handleError);
    }
}

export interface IContact {
    Id: number,
    Name: string,
    Surname: string,
    Email: string,
    PhoneNumber: string
}