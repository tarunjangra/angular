import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-book';
  selectedFeature: string;

  onNavigate(selectedFeature: string){
    this.selectedFeature = selectedFeature;
  }
}
