import { DataTypes } from "sequelize";
import sequelize from "../DB/dbConfig.js";

const Course = sequelize.define("course", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 100],
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(console.log("Course Created."))
  .catch((err) => console.log("course not created", err));

export default Course;
