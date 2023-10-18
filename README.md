# AngularAdvancedConcepts
This is about Angular Advanced Concepts.

## Basic Commands
Create new application > ng new appname
To run applicaion > ng serve 
To generate (g) Component(c) > ng g c MyFirstComponent
To generate (g) service (s) > ng g s MyFirstService

## Component Introduction.

Components has 3 parts

1. Template : HTML Part
2. Class : logic
3. Metadata : Decorators | Information. 



### Service Introduction:
Without Service we broke the DRY & Single Responsibility Principles. 
increase modularity
Service is a class with specific purpose.
Serive help us to not rewrite the same piece of code in multiple places.
Component delegate certain task to service by doing this, the same peice of code is available for other components.
Share data, external interaction like connect to database all write in Service. 
Implement application logic, like Calculate age from date of Birth. 


Define the service class :
    
Register with Injector : 
    @Ngmodule=> providers: [MyFirstServiceService],
Declare as dependency in Component :
    constructor(private _myService: MyFirstServiceService){}




