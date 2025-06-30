import { Sequelize } from "sequelize";

const sequelize = new Sequelize("coursera1", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database created ");
  })
  .catch((err) => {
    console.error("Database not created ", err);
  });

export default sequelize;
