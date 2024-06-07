"use server";

import { sql } from "@vercel/postgres";
import { genSalt,hash } from "bcryptjs";
export async function create(data) {
  try {
    const query = "insert into users (firstname, lastname, age, weight, email, password) values ($1, $2, $3, $4, $5, $6)";
    const car = await genSalt(10)
    const password = await hash(data.password,car)
    const values = [
      data.firstname,
      data.lastname,
      data.age,
      data.weight,
      data.email,
      password
    ];
    const result = await sql.query(query, values);
    return { command: result.command, rowCount: result.rowCount };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
