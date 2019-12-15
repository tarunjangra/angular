import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './auth/auth-interception.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-route.module';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      AuthComponent
  ],
  imports: [
      BrowserModule,
      AppRouteModule,
      RecipesModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [
    ShoppingListService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
