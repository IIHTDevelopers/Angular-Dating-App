import { Component, OnInit } from '@angular/core';
import { DatingService } from '../_services';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(private _datingService:DatingService) { }

  ngOnInit() {
    this.getLikes();
  }
  matches:any[]=[];
  errorMsg:string='';
  getLikes(){
    //Write code here
    this._datingService.getMatchesData()
    .subscribe(response=>this.matches=response,
      error=>this.errorMsg=error);
  }

}
