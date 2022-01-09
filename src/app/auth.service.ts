import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Credential } from './credential'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'api/credentials';
  
  isLoggedIn: boolean;

  // subjectia käytetään välittämään isLoggedIn -tietoa komponenttien välillä.
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { 
    this.isLoggedIn = false;
  }

  getCredentials(): Observable<Credential[]> {
    return this.http.get<Credential[]>(this.apiUrl)  
    /*
      .pipe(
        catchError(this.handleError('getCredentials', []))
      );   
      */
  }
  sendLogstate() {
    this.subject.next(this.isLoggedIn);
  }

  getLogstate() {
    return this.subject.asObservable();
  }
}


