export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() { // ES6 method property
      return Object.keys(employeesList).length;
    },
  };
}
