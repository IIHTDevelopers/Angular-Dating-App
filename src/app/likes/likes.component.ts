import { Component, OnInit } from '@angular/core';
import { DatingService } from '../_services';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  constructor(private _datingService:DatingService) { }

  ngOnInit() {
    this.getLikes();
  }
  likes:any[]=[];
  errorMsg:string='';
  getLikes(){
    //Write code here
    this._datingService.getLikesData()
    .subscribe(response=>this.likes=response,
      error=>this.errorMsg=error);
  }
}
