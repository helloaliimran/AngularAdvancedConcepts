import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from '../my-first-service.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent  implements OnInit {

  public employess:any;
  constructor(private _myService: MyFirstServiceService){

  }

  
  ngOnInit(): void {
    this.employess= this._myService.getEmployees();
  }


}
