import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-route.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import {shoppingListReducer} from './shopping-list/store/shopping-list.reducer';

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
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
