import {Component, OnInit, OnDestroy} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';


@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  isLoggedIn: boolean = false;

  constructor(private dataStore: DataStorageService, private authService: AuthService){}

  public onSave(){
    this.dataStore.storeRecipes();
  }

  public onFetch(){
    this.dataStore.fetchRecipes().subscribe();
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe((user: User) => {
      this.isLoggedIn = !!user;
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSubscription.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}