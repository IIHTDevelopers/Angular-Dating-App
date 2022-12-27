import { Component, OnInit } from '@angular/core';
import { DatingService } from '../_services';

@Component({
  selector: 'app-dislikes',
  templateUrl: './dislikes.component.html',
  styleUrls: ['./dislikes.component.css']
})
export class DislikesComponent implements OnInit {
  constructor(private _datingService:DatingService) { }

  ngOnInit() {
    this.getDisLikes();
  }
  dislikes:any[]=[];
  errorMsg:string='';
  getDisLikes(){
    //Write code here
    this._datingService.getDisLikesData()
    .subscribe(response=>this.dislikes=response,
      error=>this.errorMsg=error);
  }
}
