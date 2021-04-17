import { SubjectOutputModel } from "./subject.output-model";
import { TeacherOutputModel } from "./teacher.output-model";

export class LessonPlanOutputModel {
    teacher: TeacherOutputModel;
    subject: SubjectOutputModel;
    dayOfWeek: number;
    lessonStart: Date;
    lessonStop: Date;
}