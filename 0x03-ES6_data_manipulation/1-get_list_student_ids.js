export default function getListStudentIds(arrayOfObjects) {
  return Array.isArray(arrayOfObjects)
    ? arrayOfObjects.map((obj) => obj.id)
    : [];
}
