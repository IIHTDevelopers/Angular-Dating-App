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
    this.router.navigateByUrl("index");
  }
  users() {
    this.router.navigateByUrl("users");
  }
  likes() {
    this.router.navigateByUrl("likes");
  }
  dislikes() {
    this.router.navigateByUrl("dislikes");
  }
}
