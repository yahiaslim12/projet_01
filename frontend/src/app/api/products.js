'use server'
import { sql } from "@vercel/postgres";

export async function GET_DAILY(data) {
    try {
        const query = 'select * from product where id_product = $1 or id_product = $2 or id_product = $3'
        const res = await sql.query(query,data)
        return res.rows
    } catch (error) {
        console.log(error)
    }
}
export async function GET_END(){
    try {
        const query = 'select * from product limit 8'
        const res = await sql.query(query)
        return res.rows
    } catch (error) {
        console.log(error)
    }
}
export async function Search(data) {
    try {
        console.log(data);
        const query = `
            SELECT distinct(product.id_product), name, price, words,img
            FROM product
            LEFT JOIN ingredient ON product.id_product = ingredient.id_product
            WHERE name LIKE $1
            OR name_ingredient LIKE $1
        `;
        const values = [`%${data}%`];
        const res = await sql.query(query, values);
        console.log(res);
        return res.rows; // res.rows is already an array
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to handle it outside the function if necessary
    }
}
