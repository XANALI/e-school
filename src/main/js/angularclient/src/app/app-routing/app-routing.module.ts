import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentListComponent} from "../student-list/student-list.component";
import {StudentFormComponent} from "../student-form/student-form.component";
import {LoginComponent} from "../login/login.component";
import {AuthorizedComponent} from "../authorized/authorized.component";

const routes: Routes = [
  {
    path: '',
    component: AuthorizedComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'students'},
      {path: 'students', component: StudentListComponent},
      {path: 'add-student', component: StudentFormComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
