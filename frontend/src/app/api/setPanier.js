"use server";

import { sql } from "@vercel/postgres";

export async function addIt(data) {
    console.log(data)
  try {
    const query = `insert into
    panier
    (id_product , email , qte)
    values
    ( $1 , $2 , $3)
    ;`;
    const values = [
      data.id_produit ,
      data.email , 
      data.qte
    ];
    const result = await sql.query(query, values);
    return { rows: result.rowCount};
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
