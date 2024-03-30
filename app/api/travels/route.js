import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
});

export async function GET(req) {
  const orderby = req.nextUrl.searchParams.get("orderby").trim();
  const sort = req.nextUrl.searchParams.get("sort").trim();
  const limit = req.nextUrl.searchParams.get("limit").trim();
  let sql = "SELECT * FROM attractions";

  if (orderby !== undefined && orderby !== null) {
    sql += " ORDER BY " + orderby;
  }

  if (sort !== undefined && sort !== null) {
    sql += " " + sort.toUpperCase();
  }

  sql += limit !== undefined && limit !== null ? " LIMIT " + limit : " LIMIT 5";
  const [results] = await connection.query(sql);

  return Response.json(results);
}
