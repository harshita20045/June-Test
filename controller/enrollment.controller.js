import Enrollment from "../model/enrollment.model.js";
import Student from "../model/student.model.js";
import Course from "../model/course.model.js";

export const enrollStudent = async (request, response) => {
  try {
    const { studentId, courseId } = request.body;
    const enrollment = await Enrollment.create({ studentId, courseId });
    if (!enrollment) {
      return response.status(400).json({ message: "Enrollment not created" });
    }
    response
      .status(201)
      .json({ message: "Enrollment created successfully", enrollment });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error", errormessage: error.message });
  }
};

export const getAllEnrollments = async (request, response) => {
  try {
    let ENR = await Enrollment.findAll({ include: [Course, Student] });
    response.status(200).json({ message: "All Enrollments Details :", ENR });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ message: "Internal server error", errormessage: error.message });
  }
};

export const getStudentEnrollments = async (request, response) => {
  try {
    const studentId = request.params.id;
    const enrollments = await Enrollment.findAll({
      where: { studentId },
      include: [Course],
    });
    response
      .status(200)
      .json({ message: "Student Enrollments :", enrollments });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error", errormessage: error.message });
  }
};

export const deleteEnrollment = async (request, response) => {
  try {
    const id = request.params.id;
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) {
      return response.status(404).json({ message: "Enrollment not found" });
    }
    await enrollment.destroy();
    response.status(200).json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};
