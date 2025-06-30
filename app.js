import express from "express";
import "./model/association.js";
import bodyParser from "body-parser";
import studentRouter from "./router/student.route.js";
import instructorRouter from "./router/instructor.route.js";
import courseRouter from "./router/course.route.js";
import enrollmentRouter from "./router/enrollment.route.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", studentRouter);
app.use("/", instructorRouter);
app.use("/", courseRouter);
app.use("/", enrollmentRouter);

app.listen(3000, () => {
  console.log("Server created....");
});
