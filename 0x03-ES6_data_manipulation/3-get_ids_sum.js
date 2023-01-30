export default function (students) {
  return students.reduce((sum, obj) => sum + obj.id, 0);
}
