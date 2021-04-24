import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LessonPlanInputModel } from "../models/lesson-plan.input-model";
import { LessonPlanOutputModel } from "../models/lesson-plan.output-model";
import { BaseHttpService } from "./base-http.service";

@Injectable({
    providedIn: 'root'
  })

  
export class LessonPlanService extends BaseHttpService {
    constructor(private httpClient: HttpClient) {
        super();
    }

    addLesson(lessonPlanInputModel: LessonPlanInputModel): Observable<any>{
        return this.httpClient.post(this.lessonPlanUrl, lessonPlanInputModel, this.httpOptions);
    }

    getForClassId(classId: number): Observable<LessonPlanOutputModel[]> {
        return this.httpClient.get<LessonPlanOutputModel[]>(`${this.lessonPlanUrl}/${classId}`, this.httpOptions);
    }

    getForTeacherId(teacherId: number): Observable<LessonPlanOutputModel>{
        return this.httpClient.get<LessonPlanOutputModel>(`${this.lessonPlanUrl}/teacher/${teacherId}`, this.httpOptions);
    }
}