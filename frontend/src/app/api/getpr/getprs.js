"use server";

import { sql } from "@vercel/postgres";

export async function searching(data) {
  try {
    const query = `SELECT distinct product.*
    FROM product
    JOIN ingredient ON product.id_product = ingredient.id_product
    WHERE LOWER(product.name) LIKE $1 OR LOWER(ingredient.name_ingredient) LIKE $1 ;`;
    const values = [
      '%'+data+'%'
    ];
    const result = await sql.query(query, values);
    console.log(result.rows)
    return { rows: result.rows};
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
