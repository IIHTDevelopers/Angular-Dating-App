import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "users", component: UserComponent },
  { path: "**", redirectTo: "index" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
