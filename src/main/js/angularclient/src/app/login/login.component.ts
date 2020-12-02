import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  credentials = {username: '', password: ''};

  constructor(private studentService: StudentService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  login(){
    let url = 'http://localhost:8080/login';
    let result = this.http.post<Observable<boolean>>(url, {
      username: this.credentials.username,
      password: this.credentials.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', btoa(this.credentials.username + ':' + this.credentials.password));
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }


}
