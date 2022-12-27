import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DislikesComponent } from './dislikes/dislikes.component';
import { IndexComponent } from './index/index.component';
import { InterestComponent } from './interest/interest.component';
import { LikesComponent } from './likes/likes.component';
import { MatchesComponent } from './matches/matches.component';
import { UserComponent } from './user/user.component';




const routes: Routes = [
  { path: "users",component: UserComponent },
  { path: "index",component:IndexComponent },
  { path: "interests",component:InterestComponent },
  { path: "likes",component:LikesComponent },
  { path: "dislikes",component:DislikesComponent },
  { path: "matches",component:MatchesComponent },
  { path: "**", redirectTo: "landing-page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
