

import { db } from "@vercel/postgres";

export async function connection() {
  const con = await db.connect();
  try {
    if(con){
        console.log("connection to db succussfuly");
        return con
      }else {
        console.log("failed connection to db");
      }
  } finally {
    con.release();
  }
}
