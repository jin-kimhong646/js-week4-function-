

let students = [
  { id: 1, name: "Trang", grade: "A" },
  { id: 2, name: "Hai", grade: "B" },
  { id: 3, name: "Linh", grade: "C" },
];

function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
  let indexToUpdate = -1;
  indexToUpdate = studentsArray.findIndex(student => student.id === idToUpdate);

  if (indexToUpdate !== -1) {
    let newStudentsArray = [...studentsArray];

    newStudentsArray[indexToUpdate] = {
      ...newStudentsArray[indexToUpdate],
      grade : newGrade,
    };
    return newStudentsArray;
  } else {
    console.log("student was not found");
    return studentsArray;
  }
}

console.log("Original students array:");
console.log(students);

let updatedStudents = updateStudentGrade(students, 2, "A");

console.log("\nUpdated students array:");
console.log(updatedStudents);
