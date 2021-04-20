import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseRouteReuseStrategy } from "@angular/router";
import { Observable } from "rxjs";
import { StudentInputModel } from "../models/student.input-model";
import { StudentOutputModel } from "../models/student.output-model";
import { BaseRestHttpService } from "./base-rest-http.service";

@Injectable({
    providedIn: 'root'
  })

  
export class StudentService extends BaseRestHttpService<StudentInputModel, StudentOutputModel> {
    getEndpointUrl(): string {
        return this.studentUrl;
    }

    getStudentsAssignedToClass(classId: number): Observable<StudentOutputModel[]>{
        return this.httpClient.get<StudentOutputModel[]>(`${this.classUrl}/${classId}/student`, this.httpOptions);
    }
}