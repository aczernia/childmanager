export class StudentOutputModel {
  id: number;
  name: string;
  lastName: string;
  birthDate: Date;
  pesel: string;
}

export class StudentAbsenceOutputModel {
  id: number;
  date: Date;
  justified: boolean;
}

export class StudentAbsencesOutputModel extends StudentOutputModel {
  absences: StudentAbsenceOutputModel[];
}
