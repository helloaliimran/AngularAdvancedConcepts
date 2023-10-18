import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {

  constructor() { }

  getEmployees(){
    return [
      {id:1, name: 'ali', age:31},
      {id:2, name: 'usman', age:33},
      {id:3, name: 'umer', age:38},
    ]
  }
}
