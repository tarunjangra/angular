import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-route.module';
import { SharedModule } from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ShoppingListModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
