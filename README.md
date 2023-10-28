# AngularAdvancedConcepts
This is about Angular Advanced Concepts.

###    Single Page Applications (SPAs)
Single Page Applications (SPAs) are web applications that use only one HTML page . As the
user interacts with the page, new content is dynamically updated on that master page. Navigation
between pages happens without refreshing the whole page . Angular uses AJAX and to dynamically
update HTML elements. Angular Routing can be used to make SPAs. The result is an application
that feels more like a desktop app rather than a webpage.

## Basic Commands
- Create new application > ``` ng new appname ```
- To run applicaion > ``` ng serve  ```
- To generate (g) Component(c) > ``` ng g c MyFirstComponent ```
- To generate (g) service (s) > ``` ng g s MyFirstService ```

## Component Introduction.

Components has 3 parts

1. Template : HTML Part
2. Class : logic
3. Metadata : Decorators | Information. 

#### Question 1: What’s the basic syntax of a Decorator in Angular?
Answer: @() with optional parameters.

#### Question 2: What is [(ngModel)] used for?
Answer: Two-way data binding.

#### Question 3: What are the basic parts of an Angular application?
Answer: Modules, Component, Data Binding, Template, Directives, Dependency Injection, Services,
Routing.

#### Question 4: What function is called when an object is created in TypeScript? What is it’s basic
syntax in TypeScript code?
Answer: The constructor function is called. It’s syntax is: Constructor(){}


#### Question 5: In Angular, how can you interact between Parent and Child components?
Answer: When passing data from Parent to Child component, you can use the @Input decorator in
the Child component. When passing data from Child to Parent component, you can use the @Output
decorator in the Child component.

#### Question 6. Write an example usage of ngFor for displaying all items from an array ‘Items’ in a list with <li>.
Answer:
<li *ngFor=”let item of Items”>
{{item}}
</li>

#### Question 7. What is the sequence of Angular Lifecycle Hooks?
Answer: OnChange() – OnInit() – DoCheck() – AfterContentInit() – AfterContentChecked() –
AfterViewInit() – AfterViewChecked() – OnDestroy().

#### Question 8: If you provide a service in two components’ “providers” section of @Component
decorator, how many instances of service shall get created?
Answer: 2

#### Question 9: What is the main difference between constructor and ngOnInit?
Answer: The constructor is a feature of the class itself, not Angular. The main difference is that
Angular will launch ngOnInit after it has finished configuring the component. Meaning, it is a signal
through which the @Input() and other banding properties and decorated properties are available in
ngOnInit, but are not defined within the constructor by design.

#### Question 10: What is Transpiling in Angular?
Answer: Transpiling means converting the source code of one programming language into another.
In Angular, that usually means converting TypeScript into JavaScript . You can write the code for
your Angular application in TypeScript (or another language such as Dart) that is then transpiled to
JavaScript for the application. This happens internally and automatically.



### Service Introduction:
- Without Service we broke the DRY & Single Responsibility Principles. 
- increase modularity
- Service is a class with specific purpose.
- Serive help us to not rewrite the same piece of code in multiple places.
- Component delegate certain task to service by doing this, the same peice of code is available for other components.
- Share data, external interaction like connect to database all write in Service. 
- Implement application logic, like Calculate age from date of Birth. 

3 steps to make service.
1. Define the service class :
    ``` ng g s  ```
2. Register with Injector : 
   ``` @Ngmodule=> providers: [MyFirstServiceService], ```
3. Declare as dependency in Component :
   ``` constructor(private _myService: MyFirstServiceService){} ```




