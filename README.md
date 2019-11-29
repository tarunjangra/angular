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
