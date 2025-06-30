import Student from "./student.model.js";
import Instructor from "./instructor.model.js";
import Course from "./course.model.js";
import Enrollment from "./enrollment.model.js";

Instructor.hasMany(Course);
Course.belongsTo(Instructor);

Student.hasMany(Course);
Course.belongsTo(Student);

Student.hasMany(Enrollment);
Enrollment.belongsTo(Student);

Course.hasMany(Enrollment);
Enrollment.belongsTo(Course);

Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });


export { Student, Instructor, Course, Enrollment };
