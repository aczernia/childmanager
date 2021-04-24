import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseRouteReuseStrategy } from "@angular/router";
import { Observable } from "rxjs";
import { StudentInputModel } from "../models/student.input-model";
import { StudentOutputModel } from "../models/student.output-model";
import { SubjectInputModel } from "../models/subject.input-model";
import { SubjectOutputModel } from "../models/subject.output-model";
import { BaseRestHttpService } from "./base-rest-http.service";

@Injectable({
    providedIn: 'root'
  })

  
export class SubjectService extends BaseRestHttpService<SubjectInputModel, SubjectOutputModel> {
    getEndpointUrl(): string {
        return this.subjectUrl;
    }
}