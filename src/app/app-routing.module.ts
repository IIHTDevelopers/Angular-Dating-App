import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InterestComponent } from './interest/interest.component';
import { UserComponent } from './user/user.component';




const routes: Routes = [
  { path: "users",component: UserComponent },
  { path: "index",component:IndexComponent },
  { path: "interests",component:InterestComponent },
  { path: "**", redirectTo: "landing-page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
