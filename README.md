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

