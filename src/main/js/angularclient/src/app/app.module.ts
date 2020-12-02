import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentFormComponent} from './student-form/student-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {StudentService} from "./service/student.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {LoginComponent} from './login/login.component';
import {AuthorizedComponent} from './authorized/authorized.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    LoginComponent,
    AuthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
