import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatingService } from '../_services';
import { User } from './user';

@Component({
  selector: 'UserComponent',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  
  users:Array<User>;
  user = new User();
  constructor(private http:HttpClient, private datingService:DatingService) {       
  }
  
  ngOnInit() {
    this.getUsers();
  }
  errorMsg:string='';
  getUsers(){
   //Write code here
   this.datingService.getUsersData()
   .subscribe(x=>this.users=x,
         error=>this.errorMsg='Unable to fetch row as invalid url '+error);
  }
  getUserById(id:number){
    this.datingService.getUserDataById(id)
    .subscribe(x=>this.user=x,
          error=>this.errorMsg='Unable to fetch row as invalid url '+error);
  }
  msg:string='';
  addUser(){
    this.user.id=this.user.userid;
    this.datingService.addUserData(this.user)
    .subscribe(()=>this.msg='Row added successfully...',
          error=>this.errorMsg='Unable to add row:  '+error);
  }
  editUser(id:number){
    this.datingService.editUserData(id,this.user)
    .subscribe(()=>this.msg='Row edited successfully...',
          error=>this.errorMsg='Unable to edit row:  '+error);
  }
  clearAll(){
    this.user=new User();
  }
}
