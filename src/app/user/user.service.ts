import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

    BaseUrl:string = "http://localhost:6565/users";

    constructor(private http: HttpClient) { }
   
    getUsersData(){
      //Write code here
      return null;
    }
   
}
