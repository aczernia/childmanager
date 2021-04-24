import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseRouteReuseStrategy } from "@angular/router";
import { Observable, from, of } from "rxjs";
import { StudentInputModel } from "../models/student.input-model";
import { StudentOutputModel, StudentAbsencesOutputModel } from "../models/student.output-model";
import { BaseRestHttpService } from "./base-rest-http.service";

@Injectable({
  providedIn: 'root'
})


export class StudentService extends BaseRestHttpService<StudentInputModel, StudentOutputModel> {
  getEndpointUrl(): string {
    return this.studentUrl;
  }

  // getStudentsAssignedToClass(classId: number): Observable<StudentOutputModel[]>{
  //     return this.httpClient.get<StudentOutputModel[]>(`${this.classUrl}/${classId}/student`, this.httpOptions);
  // }

  getStudent(classId: number): Observable<StudentAbsencesOutputModel> {
    return of(
      {
        id: 0,
        name: 'Jan',
        lastName: 'Kowalski',
        birthDate: new Date(),
        pesel: '55121392123',
        absences: [
          {
            id: 0,
            date: new Date(),
            justified: false
          },
          {
            id: 1,
            date: new Date(),
            justified: true
          },
          {
            id: 2,
            date: new Date(),
            justified: false
          },
          {
            id: 3,
            date: new Date(),
            justified: false
          }
        ]
      }
    )
  }

  getPlainStudentsAssignedToClass(classId: number): Observable<StudentOutputModel[]> {
    return this.httpClient.get<StudentOutputModel[]>(`${this.classUrl}/${classId}/student`, this.httpOptions);
  }

  getStudentsAssignedToClass(classId: number): Observable<StudentAbsencesOutputModel[]> {
    return this.httpClient.get<StudentAbsencesOutputModel[]>(`${this.classUrl}/${classId}/student`, this.httpOptions);
  }
}
