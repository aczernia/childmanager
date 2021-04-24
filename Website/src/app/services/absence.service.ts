import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LessonInputModel } from "../models/lesson.input-model";
import { LessonOutputModel } from "../models/lesson.output-model";
import { BaseHttpService } from "./base-http.service";

@Injectable({
    providedIn: 'root'
})

export class AbsenceService extends BaseHttpService {
    constructor(private httpClient: HttpClient){
        super()
    }

    addLesson(lessonInputModel: LessonInputModel): Observable<any> {
        return this.httpClient.post(this.lessonUrl, lessonInputModel, this.httpOptions);
    }

    getLessons(classId: number, teacherId: number): Observable<LessonOutputModel[]> {
        return this.httpClient.get<LessonOutputModel[]>(`${this.lessonUrl}classId=${classId}&&teacherId=${teacherId}`, this.httpOptions);
    }
}