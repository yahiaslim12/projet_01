"use server";

import { sql } from "@vercel/postgres";

export async function getin(data) {
  try {
    const query = `SELECT *
    FROM ingredient
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
