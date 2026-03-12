import mysql from "mysql2/promise";
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "homework9_3_2026",
  password: "123456",
  port: 3306,
});
