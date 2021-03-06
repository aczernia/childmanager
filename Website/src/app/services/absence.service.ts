import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AbsenceOutputModel } from "../models/absence.output-model";
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

    justifyAbsence(absenceId: number): Observable<any> {
        return this.httpClient.put(`${this.absenceUrl}/justify/${absenceId}`, this.httpOptions);
    }

    getLessons(classId: number, teacherId: number): Observable<LessonOutputModel[]> {
        return this.httpClient.get<LessonOutputModel[]>(`${this.lessonUrl}classId=${classId}&&teacherId=${teacherId}`, this.httpOptions);
    }

    getAbsencesForStudent(studentId: number): Observable<AbsenceOutputModel[]> {
        return this.httpClient.get<AbsenceOutputModel[]>(`${this.absenceUrl}/student/${studentId}`, this.httpOptions);
    }
}