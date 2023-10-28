import { Component } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {

  getFormData(formData:any){
    console.log(formData);
  }
}
