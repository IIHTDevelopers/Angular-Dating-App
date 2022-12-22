import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Interest } from '../interest/interest';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  url:string='http://localhost:3000/interests';
  
  constructor(private _http:HttpClient) { }
  getAllInterestsFromAPI(){
    //Write code here
   
  }
  }
