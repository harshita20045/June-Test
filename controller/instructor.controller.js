import Instructor from "../model/instructor.model.js";
import Course from "../model/course.model.js";

export const createInstructor = async (request, response) => {
  try {
    const { name, bio } = request.body;
    const instructor = await Instructor.create({ name, bio });
    response
      .status(201)
      .json({ message: "Instructor created successfully", instructor });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};

export const getAllInstructors = async (request, response) => {
  try {
    const instructors = await Instructor.findAll();
    response
      .status(200)
      .json({ message: "All Instructors Details :", instructors });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};

export const getInstructorByCourse = async (request, response) => {
  try {
    const id = request.params.id;
    const instructor = await Instructor.findByPk(id, {
      include: [
        {
          model: Course,
          attributes: ["title", "description"],
        },
      ],
    });
    if (!instructor) {
      return response.status(404).json({ message: "Instructor not found" });
    }
    response.status(200).json({ message: "Instructor Details :", instructor });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};

export const updateInstructor = async (request, response) => {
  try {
    const id = request.params.id;
    const { name, email } = request.body;
    const instructor = await Instructor.findByPk(id);
    if (!instructor) {
      return response.status(404).json({ message: "Instructor not found" });
    }
    instructor.name = name;
    instructor.email = email;
    await instructor.save();
    response
      .status(200)
      .json({ message: "Instructor updated successfully", instructor });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteInstructor = async (request, response) => {
  try {
    const id = request.params.id;
    const instructor = await Instructor.findByPk(id);
    if (!instructor) {
      return response.status(404).json({ message: "Instructor not found" });
    }
    await instructor.destroy();
    response.status(200).json({ message: "Instructor deleted successfully" });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};
