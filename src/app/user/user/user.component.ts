import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _us:UserService) { }

users:Array<User> ;
  getUsers(){
    //Write code here
    
  }
  ngOnInit() {
    this.getUsers();
  }

}
