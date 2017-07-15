
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JugadoresService {

    private jugadoresUrl = ' http://localhost:3002/api/modules/app';  // URL to web api

    constructor(private http: Http) { }

    getJugadores(): Observable<any[]> {
        return this.http.get(this.jugadoresUrl + '/persona')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    saveJugadores(body: object): Observable<any> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.jugadoresUrl + '/persona', body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}