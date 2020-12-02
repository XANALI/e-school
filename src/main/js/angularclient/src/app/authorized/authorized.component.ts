import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {

  title = 'E-school';
  email: string;

  constructor(private studentService: StudentService, private http: HttpClient, private router: Router) {

  }

  logout(){
    sessionStorage.setItem('token', '');
  }

  ngOnInit(): void {
    let url = 'http://localhost:8080/student';

    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    let options = { headers: headers };
    this.http.post<Observable<Object>>(url, {}, options).
    subscribe(principal => {
        this.email = principal['email'];
      },
      error => {
        if(error.status == 401){
          this.router.navigateByUrl('/login');
        }
      }
    );
  }
}
