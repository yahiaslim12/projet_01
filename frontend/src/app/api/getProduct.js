"use server";

import { sql } from "@vercel/postgres";

export async function getProduct(data) {
  try {
    const query = `SELECT *
    FROM product
    WHERE id_product = $1 ;`;
    const values = [
      data
    ];
    const result = await sql.query(query, values);
    return { rows: result.rows};
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
