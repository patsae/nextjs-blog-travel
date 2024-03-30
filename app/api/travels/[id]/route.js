import ConnectDatabase from "@/config/db";

const connection = await ConnectDatabase();

export async function GET(req, { params }) {
  const id = params.id;
  let sql = "SELECT * FROM attractions WHERE id = " + id;
  const [results] = await connection.query(sql);

  return Response.json(results);
}
