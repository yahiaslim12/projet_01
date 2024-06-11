"use server";

import { sql } from "@vercel/postgres";

export async function changeIt(data) {
  try {
    console.log(data)
    const query = `insert into
    change
    (email , id_product , name_ingredient , qte)
    values
    ( $1 , $2 , $3 , $4)
    ;`;
    const values = [
      data.email ,
      data.id_produit , 
      data.ingredient , 
      data.in_qte
    ];
    const result = await sql.query(query, values);
    return { rows: result.rowCount};
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}