namespace Subjects {
  export class Subject {
    private _teacher?: Teacher;

    get teacher(): Teacher | undefined {
      return this._teacher;
    }

    setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }
  }
}
