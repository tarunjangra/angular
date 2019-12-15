import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './auth/auth-interception.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [],
  imports: [ ],
  exports: [],
  providers: [
    ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
})
export class CoreModule {}