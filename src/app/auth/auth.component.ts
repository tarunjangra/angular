import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive'

@Component({
  selector: 'rb-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginMode: boolean = false;
  isLoading: boolean = false;
  error: string = null;
  sub: Subscription;

  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  onSwitchToLogin() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let obs: Observable<AuthResponseData>;
    if (this.loginMode) {
      this.isLoading = true;
      obs = this.authService.login(form.value.email, form.value.password);
    } else {
      this.isLoading = true;
      obs = this.authService.signup(form.value.email, form.value.password);
    }
    obs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.error = null;
      this.router.navigate(['/recipes']);
    }, (errorMessage) => {
      this.isLoading = false;
      // this.error = errorMessage;
      this.showAlert(errorMessage);
    });
    form.reset();
  }


  private showAlert(message: string) {
    const alertCFactor = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostView = this.alertHost.viewContainerRef
    hostView.clear();
    const alertComponent = hostView.createComponent(alertCFactor);
    alertComponent.instance.message = message;
    this.sub = alertComponent.instance.close.subscribe(() => {
      this.sub.unsubscribe();
      hostView.clear();
    });
  }

}
