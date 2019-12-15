import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouteModule } from './app-route.module';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import {RecipesModule} from './recipes/recipes.module';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      DropdownDirective,
      AuthComponent,
      LoadingSpinnerComponent,
      AlertComponent,
      PlaceholderDirective
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRouteModule,
      ReactiveFormsModule,
      HttpClientModule,
      RecipesModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
