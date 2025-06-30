import { DataTypes } from "sequelize";
import sequelize from "../DB/dbConfig.js";

const Enrollment = sequelize.define("enrollment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  enrolledAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

sequelize
  .sync()
  .then(console.log("Enrollment Created."))
  .catch((err) => console.log("Enrollment not created", err));

export default Enrollment;
