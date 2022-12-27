import { Injectable } from '@angular/core';
//import { Headers, Http, RequestOptions, Response } from "@angular/http";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from '../user/user';
//import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class DatingService {

    public static BaseUrl = "http://localhost:3000/";

    constructor(private http: HttpClient) { }
   
    getUsersData():any{
      //Write code here
      return this.http.get(DatingService.BaseUrl+'users',httpOptions)
        .pipe(catchError((response: Response) => response.json()));
    }
    addUserData(user:User){
      var url = DatingService.BaseUrl+'users/';
      return this.http.post(url,user,{
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
    }).pipe(catchError((response: Response) =>  response.json()));;
    }
    editUserData(id:number,user:User){
      var url = DatingService.BaseUrl+'users/'+id;
      return this.http.put(url,user,{
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
    }).pipe(catchError((response: Response) =>  response.json()));;
    }
    getUserDataById(id:number){
      var url = DatingService.BaseUrl+'users/'+id;
      return this.http.get<any>(url,httpOptions)
      .pipe(catchError((response: Response) =>  response.json()));
    }
  
    getInterestsData():any{
      //Write code here
      return this.http.get(DatingService.BaseUrl+'interests',httpOptions)
        .pipe(catchError((response: Response) => response.json()));
    }
    getLikesData():any{
      //Write code here
      return this.http.get(DatingService.BaseUrl+'likes',httpOptions)
        .pipe(catchError((response: Response) => response.json()));
    }
    getDisLikesData():any{
      //Write code here
      return this.http.get(DatingService.BaseUrl+'dislikes',httpOptions)
        .pipe(catchError((response: Response) => response.json()));
    }
    getMatchesData():any{
      //Write code here
      return this.http.get(DatingService.BaseUrl+'matches',httpOptions)
        .pipe(catchError((response: Response) => response.json()));
    }
}