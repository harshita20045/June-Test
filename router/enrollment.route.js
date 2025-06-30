import express from "express";
import {
  enrollStudent,
  getAllEnrollments,
  getStudentEnrollments,
  deleteEnrollment,
} from "../controller/enrollment.controller.js";

const router = express.Router();

router.post("/enrollments", enrollStudent);
router.get("/enrollments", getAllEnrollments);
router.get("/students/:id/enrollments", getStudentEnrollments);
router.delete("/enrollments/:id", deleteEnrollment);

export default router;
