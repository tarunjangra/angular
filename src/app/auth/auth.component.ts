import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'rb-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginMode: boolean = false;
  isLoading: boolean = false;
  error: string = null;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchToLogin(){
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    let obs: Observable<AuthResponseData>;
    if(this.loginMode){
      this.isLoading = true;
      obs = this.authService.login(form.value.email, form.value.password);
    }else{
      this.isLoading = true;
      obs = this.authService.signup(form.value.email, form.value.password);
    }
    obs.subscribe((response) => {
      this.isLoading = false;
      console.log(response.email);
      console.log(response.idToken);
      this.error = null;
    },(errorMessage) => {
      this.isLoading = false;
      this.error = errorMessage;
    });
    form.reset();
  }

}
