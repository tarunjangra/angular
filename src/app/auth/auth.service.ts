import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  idToken: string;// 	A Firebase Auth ID token for the newly created user.
  email: string;// 	The email for the newly created user.
  refreshToken: string;// 	A Firebase Auth refresh token for the newly created user.
  expiresIn: string;// 	The number of seconds in which the ID token expires.
  localId: string;// 	The uid of the newly created user.
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    const API = 'AIzaSyBMfwZ3r4sYy-fdB1dLDPM_glQN7Mgg5ig';
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API, {
      email, password, returnSecureToken: true
    });
  }
}
