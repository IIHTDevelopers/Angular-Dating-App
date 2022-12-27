import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angularSPA';
  constructor(private router: Router) { }
  landingpage() {
    this.router.navigateByUrl("landing-page");
  }
  placeAppointment() {
    this.router.navigateByUrl("place-fitness-trainer-appointment");
  }
  viewAppointment() {
    this.router.navigateByUrl("view-appointment");
  }
  contactUspage() {
    this.router.navigateByUrl("contact-us");
  }
  getIndex(){
    this.router.navigateByUrl("index");
  }
  getUsers(){
    this.router.navigateByUrl("users");
  }
  getInterests(){
    this.router.navigateByUrl("interests");
  }
  getLikes(){
    this.router.navigateByUrl("likes");
  }
  getDislikes(){
    this.router.navigateByUrl("dislikes");
  }
  getMatches(){
    this.router.navigateByUrl("matches");
  }
}
