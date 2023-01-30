export default function getStudentsByLocation(students, city) {
  return students.filter((sdt) => sdt.location === city);
}
