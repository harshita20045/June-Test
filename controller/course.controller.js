import Course from "../model/course.model.js";
import Enrollment from "../model/enrollment.model.js";
import Instructor from "../model/instructor.model.js";
import Student from "../model/student.model.js";

export const createCourse = async (request, response) => {
  try {
    const { title, description, instructorId, studentId } = request.body;
    const course = await Course.create({
      title,
      description,
      instructorId,
      studentId,
    });
    if (!course) {
      return response.status(400).json({ message: "Course not created" });
    }
    response
      .status(201)
      .json({ message: "Course created successfully", course });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};
export const getAllCourses = async (request, response) => {
  try {
    const courses = await Course.findAll({
      include: {
        model: Instructor,
        attributes: ["name", "bio"],
      },
    });

    response.status(200).json({ message: "All Courses Details :", courses });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error", errormessage: error.message });
  }
};

export const getCourseById = async (request, response) => {
  try {
    const id = request.params.id;

    const course = await Course.findByPk(id, { include: [Student] });
    if (!course) {
      return response.status(404).json({ message: "Course not found" });
    }
    response.status(200).json({ message: "Course Details :", course });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};

export const updateCourse = async (request, response) => {
  try {
    const id = request.params.id;
    const { title, description } = request.body;
    const course = await Course.findByPk(id);
    if (!course) {
      return response.status(404).json({ message: "Course not found" });
    }
    course.title = title;
    course.description = description;
    await course.save();
    response
      .status(200)
      .json({ message: "Course updated successfully", course });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};
export const deleteCourse = async (request, response) => {
  try {
    const id = request.params.id;
    const course = await Course.findByPk(id);
    if (!course) {
      return response.status(404).json({ message: "Course not found" });
    }
    await course.destroy();
    response.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};
