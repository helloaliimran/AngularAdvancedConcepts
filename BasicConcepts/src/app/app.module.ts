import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyFirstServiceService } from './my-first-service.service';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyFirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
