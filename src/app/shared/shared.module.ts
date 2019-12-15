import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DropdownDirective } from '../shared/dropdown.directive';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AlertComponent } from '../shared/alert/alert.component';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [ 
    CommonModule
  ],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    CommonModule
  ],
  providers: [],
  entryComponents: [AlertComponent]
})
export class SharedModule {}