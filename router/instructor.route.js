import express from "express";
import {
  createInstructor,
  getAllInstructors,
  getInstructorByCourse,
  updateInstructor,
  deleteInstructor,
} from "../controller/instructor.controller.js";
const router = express.Router();

router.post("/instructors", createInstructor);
router.get("/instructors", getAllInstructors);
router.get("/instructors/:id", getInstructorByCourse);
router.put("/instructors/:id", updateInstructor);
router.delete("/instructors/:id", deleteInstructor);

export default router;
