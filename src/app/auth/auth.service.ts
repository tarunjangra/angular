import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import {  User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;// 	A Firebase Auth ID token for the newly created user.
  email: string;// 	The email for the newly created user.
  refreshToken: string;// 	A Firebase Auth refresh token for the newly created user.
  expiresIn: string;// 	The number of seconds in which the ID token expires.
  localId: string;// 	The uid of the newly created user.
  registered?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string) {
    const API = 'AIzaSyBMfwZ3r4sYy-fdB1dLDPM_glQN7Mgg5ig';
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API, {
      email, password, returnSecureToken: true
    }).pipe(
      catchError(this.handleError),
      tap((response: AuthResponseData) => {
        this.handleSignin(response.email,response.localId, response.idToken, +response.expiresIn);
      })
      );
  }

  login(email: string, password: string) {
    const API = 'AIzaSyBMfwZ3r4sYy-fdB1dLDPM_glQN7Mgg5ig';
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API, {
      email, password, returnSecureToken: true
    }).pipe(
      catchError(this.handleError),
      tap((response: AuthResponseData) => {
        this.handleSignin(response.email,response.localId, response.idToken, +response.expiresIn);
      })
      );
  }

  private handleSignin(email: string, localId: string, idToken: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000 );
    const user: User = new User(email, localId, idToken, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = "An unknown error occured.";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {

      case 'EMAIL_EXISTS':
          errorMessage = "This email exists already."
          break;
      case 'INVALID_PASSWORD':
        errorMessage = "You've used invalid login credentials!"
        break;
      case 'USER_DISABLED':
        errorMessage = 'Provided user is blocked. Contact administrator for further details.'
        break;
    }
    return throwError(errorMessage);
  }

  logout (){
    this.user.next(null);
    this.router.navigate(['/auth']);
  }
}
