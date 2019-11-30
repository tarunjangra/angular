# RecipeBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



* ng-content help to get the content between the tags.
* 

Decorators
----------

* Input
* Output
* ViewChild -- Local references to get value of any element.
  * @ViewChild('serverContentInput') serverContentInput: ElementRef;
* ContentChild('contantParagraph') paragraph: ElementRef;



EventEmitter
------------

* EventEmitter

Lifecycle of angular
--------------------

1. ngOnChange - executed multiple time.
2. ngOnInt - Called once the component is initialized.
3. ngDoCheck - Called during every change detection run.
4. ngAfterContentInit - Called after content (ng-content) has been projected into view.
5. ngAfterContentChecked - Called every time the projected content has been checked.
6. ngAfterViewInit called after the component's view (and child views) has been initialized.
7. ngAfterViewChecked called everytime the view (and child views) hasve been checked.
8. ngOnDestroy called once the component is about to be destroyed.



Attributes vs Structural Directives
-----------------------------------

* AD look like a normal HTML attribute where as SD have a leading *
* AD only affect/change the element they are added to where as SD affect whole area in the DOM (elements get added/removed)
* We can not have more than one structural element on the same element.
* In directive declaration, selector property in the Directive decorator should have the name of the selector element.

ElementRef
----------


* Use ElementRef if you want to use any specific element from html.
* it is not good practice though. Because it access element directly from DOM.

Renderer2
---------

```javascript
this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue')
```

* It is better approach to access the DOM. In service workers, you won't have access of the DOM.


@HostListener Decorator
-----------------------

HostListener allow you to listen events like mouseover etc. You can use that like following.

```javascript
@HostListener('mouseenter') mouneover(eventData: Event) {
// Here you will get all data reletated to the element on which it get executed.
}

@HostListener('mouseleave') mouseleve(eventData: Event) {
 // your code.
}
```


@HostBinding Decorator
----------------------

You can bind specific property too

```javascript
@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

@HostListener('mouseenter') mouseover(eventData: Event){
  this.backgroundColor = 'blue'
}

```

* Structural Directive having leading * use ng-template behind the scene.

How to build structural directive
---------------------------------

```javascript

@Directive({
  'selector' : '[unless]'
})

export class UnlessDirective {

  @Input() set unless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){} 
}  

```

```html
<div [ngSwitch]="value">
 <p *ngSwitchCase="5">Value is 5</p>
 <p *ngSwitchCase="15">Value is 15</p>
 <pm *ngSwitchDefault>Value is default Value</p>
</div>
```

Services & Dependencies Injections
----------------------------------

* Services are available from upper level to lower level. So you should define service provider on top component.
* you can inject services in components.
* you can also inejct services in services. You can to use @Injectable decorator in the service class. It need to define at the receiving end.
* You should use services when you need to communicate from one to other component.


RouterLinkActive & RouterLinkActiveOptions
------------------------------------------

* RouterLinkActive directive used to mark your active link with the corresponding classname.
* RouterLinkActiveOptions define the exact path. Usage like below
    ```html
    < a RouterLink="" RouterLinkActive="active" [RouterLinkActiveOptions]="{exact: true}">some linke</a>
    ```

How to redirect to particular router through programming
--------------------------------------------------------

```javascript
import {Router} from '@angular/router';

export class someComponent implements OnInit {
  constructor(provaite router: Router){}
  
  onClickSomeServer(){
    this.router.navigate(['/some-route']);
  }
}
```

or make it relative to current route


```javascript
import {Router, ActivatedRoute} from '@angular/router';

export class someComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  onClickSomeServer(){
    this.router.navigate(['some-route'], {relativeTo: this.route});
  }
}
```

How to get parameters from the URL in dynamic routes
----------------------------------------------------
Assume our route is like following

```javascript
  route = [
    {path: "user/:id/:name", component: "UserComponent"}
  ];
```

```javascript
import {ActivatedRoute} from '@angular/router';

export class someComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ){}
  
  onClickSomeServer(){
    return {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }
}
```


When you don't know when you will have data, how long it will take to be available at that time use observables to get that.

```javascript
import {ActivatedRoute, Params} from '@angular/router';

export class someComponent implements OnInit {
  user: {id: number, name: string};
  constructor(
    private route: ActivatedRoute
  ){}
  
  
  
  OnInit(){
  this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }
  
  // with observable. Where params is observable.
  this.route.params
      .subscribe((params: Params)=>{
        this.user.id = params['id'];
        this.user.name = params['name']
      });
  
}
```

Although angular always cleanup when you leave the component. Like it will always unsubscribe above observable when you leave the component. 

How you can clean up your debts here
====================================

```javascript
import {OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription'

export class someComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription: Subscription;
  constructor(
    private route: ActivatedRoute
  ){}
  
  
  
  ngOnInit(){
  this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }
  
  // with observable. Where params is observable.
  this.paramSubscription = this.route.params
      .subscribe((params: Params)=>{
        this.user.id = params['id'];
        this.user.name = params['name']
      });
  

  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }
}


```

* routerLink direcitve has queryParams bindable property this could manage rest of the query params.
* you can also add fragment (params after # in the URL) property of the routerLink directive.
* under route object we have queryParams and fragment as observable to be subscribed.
* If you are passing numeric value the url or query params. they have be casted to number. by default they are string of number like '1'. You can do that by simpley putting leading "+" to the variable.
* queryParamsHandling = 'preserve' allow you to keep your queryparams in the next child route. which will be used in the second parameter of route in your component.
* handling 404 in router implementation. You can have wild card route "**" to catch all routes and use "redirectTo" property of route and define where you want to be direcirected.
* always have "**" route at the end of the routing definition.
* you can use pathMatch: 'full' in route property of your route definition to make sure it always mataches correct route.


Gaurding your routes
--------------------

A functionality which executed before the route load or you just about to leave the route. You can use "CanActivate" or "CanActivateChild" gaurd interface provided by '@angular/router' to do this.

##### Implementation

```javascript
// auth-gaurd.service.ts
import {
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot
  } from '@angular/router';
import {Observable, Promise} from 'rxjs/Observable'
import {Injectable} from '@angular/core';

@Injectable()
export class AughGaurd implements CanActivate, CanActivateChild {

   // sometime it execute synchronously and some time asynchronously. 
   // which will excute everything on client and no need of server 
   // implementation
    CanActivate(
               route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot
                ): Observable<boolean> | Promise<boolean> | boolean {
       
       return this.authService.isAuthorized()
             .then((authenticated: boolean)=>{
               if(authenticated) {
                 return true;
               }else{
                 this.router.navigate(['/']);
               }
             });
      
      // That will help you to guard on all child routes.      
      CanActivateChild(
              route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
              ): Observable<boolean> | Promise<boolean> | boolean {
            return this.CanActivate(route, state);
      }
      
    }
    
    constructor (
      private authService: AuthService
      private router: Router
    ){}
    
}

//auth.service.ts

export class AuthService {
  loggedIn: boolean = false;
  
  isAuthorized(){
  
    // simulating server behaviour where it is taking 8 seconds
    // to verify if it is correcect logged in state.
    return new Promise((resolve, reject)=>{
      setTimeout((
        resolve(this.loggedIn)
      )=>{},800);
    });
  }
  
  login(){
    this.loggedIn = true;
  }
  
  logout(){
    this.loggedIn = false;
  }
}
```

How to implement alert when you go away from the specific route.

```javascript

  // create one more searvice name can-deactivate-gaurd.service.ts
  
  import {Observable} from 'rxjs/Observable';
  
  import {CanDeactivate, ActivateRouterSnapshot, RouterStateSnapshot} from '@angular/router';
  
  export interface CanComponentDeactivate {
    canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean;
  }
  
  export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactive> {
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean; {
        return component.canDeactivate()
    }
  }

```


* In angular app when you deploy you app to real server. It will always try to find the defined route on the server. And that case, you app can be failed with 404. Solution to this problem is, Just make sure all 404 pages on the server return back index.html page.






