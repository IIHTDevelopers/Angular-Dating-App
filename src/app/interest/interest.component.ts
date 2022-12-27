import { Component, OnInit } from '@angular/core';
import { Interest } from './interest';

import { DatingService } from '../_services';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: []
})
export class InterestComponent implements OnInit {
  interests=Array<Interest>();
  
  constructor(private _datingService:DatingService) { }
  errorMsg:string='';
  getInterestsFromService(){
    //Write code here
    this._datingService.getInterestsData()
    .subscribe(response=>this.interests=response,
      error=>this.errorMsg=error);
  }
  ngOnInit(): void {
    this.getInterestsFromService();
  }
  
}
