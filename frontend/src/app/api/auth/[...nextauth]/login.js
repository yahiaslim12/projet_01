import { sql } from "@vercel/postgres";
import { compare } from "bcryptjs";

export async function GET_USER(data){
    try {
        const query = 'select * from users where email = $1'
        console.log([data.email]);
        const res = await sql.query(query,[data.email])
        const valid_password = await compare(data.password,res.rows[0].password)
        if(valid_password){
            return res.rows
        }else{
            throw 'Email or password incorrect'
        }
    } catch (error) {
        console.log(error);
    }
}