import { Sequelize } from "sequelize";

const dbConfig = process.env.DB_CONFIG
  

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
});

try {
  await sequelize.authenticate();
  console.log("connected to the database");
} catch (error) {
  console.error("error connecting: ", error);
}

export default sequelize