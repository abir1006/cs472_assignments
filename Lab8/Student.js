function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];

  // Method to add a new grade
  this.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
  };

  // Method to calculate the average grade
  this.computeAverage = function() {
    if (this.grades.length === 0) {
      return null;
    }
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  };
}

// Creating some students obj
const student1 = new Student("Alice", "Smith");
const student2 = new Student("Abdoon", "Nur");

