import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { InterestComponent } from './interest/interest.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IndexComponent,
    InterestComponent
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
