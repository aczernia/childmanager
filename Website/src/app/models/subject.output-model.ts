import { TeacherOutputModel } from "./teacher.output-model";

export class SubjectOutputModel {
    id: number;
    name: string;
    teacher?: TeacherOutputModel;
}