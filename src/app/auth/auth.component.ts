import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

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
    if(!this.loginMode){
      this.isLoading = true;
      this.authService.signup(form.value.email, form.value.password)
      .subscribe((response) => {
        this.isLoading = false;
        console.log(response.email);
        console.log(response.idToken);
      },(errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
      });
    }
    form.reset();
  }

}
