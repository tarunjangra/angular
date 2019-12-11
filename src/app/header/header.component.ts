import {Component} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStore: DataStorageService){}

  public onSave(){
    this.dataStore.storeRecipes();
  }

  public onFetch(){
    this.dataStore.fetchRecipes().subscribe();
  }
}