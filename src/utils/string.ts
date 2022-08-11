export function toUpperCaseFirstLetter(val: string) {
  return val[0].toUpperCase() + val.substr(1, val.length - 1);
}
