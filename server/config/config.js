require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

module.exports = {
  "development": {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "classify_dev",
    host: DB_HOST,
    dialect: "postgres",
    port: "5433",
  },
  "test": {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "classify_test",
    host: DB_HOST,
    dialect: "postgres",
    port: "5433",
  },
  "production": {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "classify_prod",
    host: DB_HOST,
    dialect: "postgres",
    port: "5433",
  },
  jwtConfig: {
    secret: JWT_SECRET,
    expiresIn: JWT_EXPIRES_IN,
  },
};

