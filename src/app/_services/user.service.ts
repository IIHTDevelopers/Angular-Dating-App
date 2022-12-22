import { Injectable } from '@angular/core';
//import { Headers, Http, RequestOptions, Response } from "@angular/http";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:3000/";

    constructor(private http: HttpClient) { }
   
    getUsersData(){
      //Write code here
      
    }
}