import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { InterestComponent } from './interest/interest.component';
import { LikesComponent } from './likes/likes.component';
import { DislikesComponent } from './dislikes/dislikes.component';
import { MatchesComponent } from './matches/matches.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IndexComponent,
    InterestComponent,
    LikesComponent,
    DislikesComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
HttpClientModule
  ],
  exports: [UserComponent  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
