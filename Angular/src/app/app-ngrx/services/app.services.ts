import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

    private url = 'https://raw.githubusercontent.com/jmbl1685/ngrx-angular/master/src/db.json'

    constructor(private httpClient: HttpClient) { }

    GetProducts(): Observable<any> {
        return this.httpClient.get(this.url);
    }

    HelloWorld() : Observable<any>{
        return of({message: 'Hello World'});
    }

}