import { DataTypes } from "sequelize";
import sequelize from "../DB/dbConfig.js";

const Student = sequelize.define("student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [2, 50] },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
});

sequelize
  .sync()
  .then(console.log("Student Created."))
  .catch((err) => console.log("Student not created", err));

export default Student;
