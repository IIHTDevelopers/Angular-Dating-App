import { Component, OnInit } from '@angular/core';
import { Interest } from './interest';
import { InterestService } from '../_services/interest.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: []
})
export class InterestComponent implements OnInit {
  interests=Array<Interest>();
  
  constructor(private _interestService:InterestService) { }
  errorMsg:string='';
  getInterestsFromService(){
    //Write code here
    
  }
  ngOnInit(): void {
    this.getInterestsFromService();
  }
  
}
