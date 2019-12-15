import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'shopping-list', component: ShoppingListComponent }
    ])
   ],
  exports: [],
  providers: [
    ShoppingListService
  ],
})
export class ShoppingListModule {}