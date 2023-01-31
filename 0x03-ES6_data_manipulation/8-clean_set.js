export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }
  const subString = [];
  for (const elem of set.values()) {
    if (elem.startsWith(startString)) {
      const sub = elem.substring(startString.length);
      if (sub && sub !== elem) {
        subString.push(sub);
      }
    }
  }
  return subString.join('-');
}
