export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the iterator object
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  return employeeNames.join(' | ');
}
