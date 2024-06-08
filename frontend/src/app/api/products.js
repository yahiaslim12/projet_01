'use server'
import { sql } from "@vercel/postgres";

export async function GET_DAILY(data) {
    try {
        
        const query = 'select * from product where id_product = $1 or id_product = $2 or id_product = $3'
        const res = await sql.query(query,data)
        console.log(data);
        console.log(res.rows);
        console.log(res.rowCount);
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