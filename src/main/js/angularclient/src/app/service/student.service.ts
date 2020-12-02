import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../student";

@Injectable()
export class StudentService {

  private studentsUrl: string;

  constructor(private http: HttpClient) {
    this.studentsUrl = 'http://localhost:8080/students';
  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  public save(student: Student) {
    return this.http.post<Student>(this.studentsUrl, student);
  }

  public delete(id: string) {
    let endPoints = "/" + id;
    return this.http.delete<String>(this.studentsUrl + endPoints);
  }
}
