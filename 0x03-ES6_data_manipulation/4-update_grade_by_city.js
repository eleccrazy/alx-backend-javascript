export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    const filteredStudents = students.filter(
      (student) => student.location === city,
    );
    return filteredStudents.map((std) => {
      const targetGrades = newGrades.filter(
        (grades) => grades.studentId === std.id,
      );
      std.grade = targetGrades[0] ? targetGrades[0].grade : 'NaN'; // eslint-disable-line no-param-reassign
      return std;
    });
  }
  return [];
}
