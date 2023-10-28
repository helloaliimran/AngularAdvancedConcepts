# AngularAdvancedConcepts
This is about Angular Advanced Concepts.

###    Single Page Applications (SPAs)
Single Page Applications (SPAs) are web applications that use only one HTML page . As the
user interacts with the page, new content is dynamically updated on that master page. Navigation
between pages happens without refreshing the whole page . Angular uses AJAX and to dynamically
update HTML elements. Angular Routing can be used to make SPAs. The result is an application
that feels more like a desktop app rather than a webpage.

### Basic Commands
- Create new application > ``` ng new appname ```
- To run applicaion > ``` ng serve  ```
- To generate (g) Component(c) > ``` ng g c MyFirstComponent ```
- To generate (g) service (s) > ``` ng g s MyFirstService ```

### Component Introduction.

Components has 3 parts

1. Template : HTML Part
2. Class : logic
3. Metadata : Decorators | Information. 



#### Service Introduction:
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

#### Question 6. Write an example usage of ngFor for displaying all items from an array ‘Items’ in a list with ```<li>```.
Answer:  ```<li *ngFor='let item of Item'>  {{item}} </li> ```

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

#### Question 11: What is AOT Compilation?
Requirement: Expert Angular knowledge, Optimization
Answer: AOT refers to Ahead-of-time compilation. In Angular, it means that the code you write for
your application is compiled at build time before the application is run in a browser. It’s an
alternative to Just-in-time compilation, where code is compiled just before it is run in the browser.
AOT compilation can lead to better application performance.


#### Question 12: What are HTTP Interceptors?
Answer: Interceptor is just a fancy word for a function that receives requests/responses before they
are processed/sent to the server. You should use interceptors if you want to pre-process many
types of requests in one way. For example, you need to set the authorization header Bearer for all
requests:

#### Question 13: How many Change Detectors can there be in the whole application?
Answer: Each component has its own ChangeDetector. All Change Detectors are inherited from
AbstractChangeDetector.

#### Question 14: What change detection strategies do you know?
Answer: There are two strategies – Default and OnPush. If all components use the default strategy,
Zone checks the entire tree regardless of where the change occurred. To inform Angular that we
will comply with the performance improvement conditions, we need to use the onpush change
detection strategy. This will tell Angular that our component depends only on the input and any
object that is passed to it should be considered immutable. This is all built on the Principle of the
mile automaton, where the current state depends only on the input values.

#### Question 15: What is Change Detection, how does Change Detection Mechanism work?

Answer: Change Detection is the process of synchronizing a model with a view. In Angular, the flow
of information is unidirectional, even when using the ng Model to implement two-way binding, which
is syntactic sugar on top of a unidirectional flow.
Change Detection Mechanism-moves only forward and never looks back, starting from the root
(root) component to the last. This is the meaning of one-way data flow. The architecture of an
Angular application is very simple — the tree of components. Each component points to a child, but
the child does not point to a parent. One-way flow eliminates the need for a $digest loop.


#### Question 16: How do you update the view if your data model is updated outside the ‘Zone’?
Answer: Using the ApplicationRef.prototype.tick method, which will run change detection on the
entire component tree.
1. Using NgZone.prototype.run method, which will also run change detection on the entire tree.
The run method under the hood itself calls tick, and the parameter takes the function you
want to perform before tick.
2. Using the ChangeDetectorRef.prototype.detectChanges method, which will launch change
detection on the current component and its children.


#### Question 17: Why do we need lazy loading of modules and how is it implemented?
Answer: Lazy loading of modules is needed to break the code into pieces. When downloading the
app in the browser, it doesn’t load all of the application code. During the transition to the route with
lazy loading, the module has to load the code into a browser.

Question 29: What are Core and Shared modules for?
Answer: A Shared module serves as a generic module for all modules, components, directives,
pipes, etc., which are not required to be in a single copy for the application but need to be imported
into many different modules.
A Core module is a place to store services that you need to have in the form of singleton for the
entire application (for example, a user authorization service with data storage about it).


#### Question 18: What are some points to consider when optimizing an Angular 6 application for
performance?
Answer: There are many ways, some ideas include: AOT compilation, bundling and uglifying the
application, tree shaking, lazy loading, separating dependencies and devDependencies, Using
OnPush and TrackBy, removing unnecessary 3rd party libraries and import statements, avoid
computing values within the template

#### Question 19: What’s the difference between unit testing and end-to-end testing? What are some
testing tools you would use for an Angular application?
Requirement: End-to-end and unit testing
Answer: Unit testing is a technique to test that isolated segments of code are functioning properly.
End-to-end testing involves checking that entire sets of components to make sure they are working
together properly and that the application is working as you would expect. End-to-end tests often
simulate user interactions to test that an app is functioning as it should. Jasmine and Karma are all
great testing tools.

