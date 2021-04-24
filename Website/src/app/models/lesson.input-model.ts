export class LessonInputModel {
    topic: string;
    classId: number;
    teacherId: number;
    subjectId: number;
    beginDate: Date;
    endDate: Date;
    wasPresentsStudentsIds: number[];
}