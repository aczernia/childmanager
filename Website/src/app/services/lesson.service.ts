import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LessonOutputModel } from "../models/lesson.output-model";
import { BaseHttpService } from "./base-http.service";

@Injectable({
    providedIn: 'root'
})
export class LessonService extends BaseHttpService {
    constructor(private httpClient: HttpClient){
        super();
    }

    getLessonsForTeacherAndClass(teacherId: number, classId: number): Observable<LessonOutputModel[]> {
        return this.httpClient.get<LessonOutputModel[]>(`${this.lessonUrl}?teacherId=${teacherId}&&classId=${classId}`, this.httpOptions);
    }
}