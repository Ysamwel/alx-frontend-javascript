/**
 * write interface named Student that accepts the following elements
 * firstName(string), lastName(string), age(number), and location(string)
 * Create two students, and create an array
 * named studentsList containing the two variables
 * Using Vanilla Javascript, render a table and for each
 * elements in the array, append a new row to the table
 * Each row should contain the first name of
 * the student and the location
 */

// Defining
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string; 
}

//Creating objects
const student1: Student = {
    firstName: "Baraka",
    lastName: "Peace",
    age: 17,
    location: "Nairobi"
}

const student2: Student = {
    firstName: "Destiny",
    lastName: "Enabled",
    age: 25,
    location: "Mumias"
}

// array of students
const studentsList = [student1, student2];

//creating table
const table = document.getElementById('studentTable') as HTMLTableElement;
//the rows that are appended to each student
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})