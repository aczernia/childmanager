import { ClassOutputModel } from "./class.output-model";
import { SubjectOutputModel } from "./subject.output-model";
import { TeacherOutputModel } from "./teacher.output-model";

export class LessonPlanOutputModel {
    teacher: TeacherOutputModel;
    subject: SubjectOutputModel;
    class: ClassOutputModel;
    dayOfWeek: number;
    lessonStart: Date;
    lessonStop: Date;
}