import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../_services';
import { User } from './user';

@Component({
  selector: 'UserComponent',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  
  users:Array<User>;
  constructor(private http:HttpClient, private userService:UserService) {       
  }
  //url:string='http://localhost:6565/appointments';
  
  ngOnInit() {
    this.getUsers();
  }
  errorMsg:string='';
  getUsers(){
   //Write code here
  }
}
