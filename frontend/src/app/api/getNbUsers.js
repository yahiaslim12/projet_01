'use server'
import { sql } from "@vercel/postgres"

export default async function GET() {
    try {
        const query = 'SELECT COUNT(*) AS nb_users FROM users';
        const res = await sql.query(query);
        console.log("Query result:", res);
        return res.rows[0].nb_users;
    } catch (err) {
        console.error("Database query error:", err.message, err.stack);
        throw new Error("Failed to fetch the number of users from the database");
    }
}
