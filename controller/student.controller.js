import Student from "../model/student.model.js";

export const createStudent = async (request, response) => {
  try {
    const { name, email } = request.body;
    const student = await Student.create({ name, email });
    if (!student) {
      return response.status(400).json({ message: "Student not created" });
    }
    response
      .status(201)
      .json({ message: "Student created successfully", student });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};

export const getAllStudents = async (request, response) => {
  try {
    const students = await Student.findAll();

    response.status(200).json({ message: "All Students Details :", students });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};

export const getStudentById = async (request, response) => {
  try {
    const id = request.params.id;
    const student = await Student.findByPk(id);
    if (!student) {
      return response.status(404).json({ message: "Student not found" });
    }
    response.status(200).json({ message: "Student Details :", student });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};

export const updateStudent = async (request, response) => {
  try {
    const id = request.params.id;
    const { name, email } = request.body;
    const student = await Student.findByPk(id);
    if (!student) {
      return response.status(404).json({ message: "Student not found" });
    }
    student.name = name;
    student.email = email;
    await student.save();
    response
      .status(200)
      .json({ message: "Student updated successfully", student });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};
export const deleteStudent = async (request, response) => {
  try {
    const id = request.params.id;
    const student = await Student.findByPk(id);
    if (!student) {
      return response.status(404).json({ message: "Student not found" });
    }
    await student.destroy();
    response.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};
