import { DataTypes } from "sequelize";
import sequelize from "../DB/dbConfig.js";

const Instructor = sequelize.define("instructor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    isAlpha: true,
    validate: {
      len: [2, 50],
    },
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(console.log("Instructor Created."))
  .catch((err) => console.log("Instructor not created", err));

export default Instructor;
