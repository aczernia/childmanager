import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TeacherInputModel } from "../models/teacher.input-model";
import { TeacherOutputModel } from "../models/teacher.output-model";
import { BaseRestHttpService } from "./base-rest-http.service";

@Injectable({
    providedIn: 'root'
  })

  
export class TeacherService extends BaseRestHttpService<TeacherInputModel, TeacherOutputModel> {
    getEndpointUrl(): string {
        return this.teacherUrl;
    }

}