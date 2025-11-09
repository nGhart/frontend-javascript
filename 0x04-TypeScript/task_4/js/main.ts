/// <reference path="../js/subjects/Teacher.ts" />
/// <reference path="../js/subjects/Subject.ts" />
/// <reference path="../js/subjects/Cpp.ts" />
/// <reference path="../js/subjects/Java.ts" />
/// <reference path="../js/subjects/React.ts" />

namespace Subjects {
  const cpp = new Cpp();
  const java = new Java();
  const react = new React();

  export const cTeacher: Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
  };

  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
