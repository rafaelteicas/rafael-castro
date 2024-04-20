export function getAge(yearOfBirth: number): number {
  const date = new Date()
  const age = date.getFullYear() - yearOfBirth
  if (date.getMonth() + 1 < 6 || date.getDate() < 14) {
    return age - 1
  }
  return age
}
