interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Danny",
  lastName: "Adjei",
  age: 25,
  location: "Accra",
};

const student2: Student = {
  firstName: "John",
  lastName: "Kyei",
  age: 22,
  location: "Kumasi",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

table.innerHTML = `
  <tr>
    <th>First Name</th>
    <th>Location</th>
  </tr>
  ${studentsList
    .map(
      (student: Student) => `
      <tr>
        <td>${student.firstName}</td>
        <td>${student.location}</td>
      </tr>
    `
    )
    .join("")}
`;

document.body.appendChild(table);
