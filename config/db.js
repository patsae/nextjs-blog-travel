import mysql from "mysql2/promise";

export default async function ConnectDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
    });
    console.log("Connect to Mysql database");
    return connection;
  } catch (err) {
    console.error("Error connecting to MySQL database:", err);
    throw err;
  }
}
