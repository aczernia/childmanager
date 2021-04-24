import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable } from 'rxjs';

import { ClassInputModel } from "../models/class.input-model";
import { ClassOutputModel } from "../models/class.output-model";
import { BaseRestHttpService } from "./base-rest-http.service";

@Injectable({
  providedIn: 'root'
})
export class ClassService extends BaseRestHttpService<ClassInputModel, ClassOutputModel> {
  getEndpointUrl(): string {
    return this.classUrl;
  }
}
