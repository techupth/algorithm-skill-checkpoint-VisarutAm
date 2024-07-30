function findStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i].id
    if (student === id) {
      return students[i];
    }
  }
  return null;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
