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

  getAll(): Observable<ClassOutputModel[]> {
    return of([
      {
        id: 0,
        name: 'Klasa 1'
      },
      {
        id: 1,
        name: 'Klasa 2'
      },
      {
        id: 2,
        name: 'Klasa 3'
      },
      {
        id: 3,
        name: 'Klasa 4'
      }
    ]);
  }
}
