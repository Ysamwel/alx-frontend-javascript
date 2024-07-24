export default function iterateThroughObject(reportWithIterator) {
// Collect all employee names in an array
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join all names with ' | ' separator
  return employees.join(' | ');
}
