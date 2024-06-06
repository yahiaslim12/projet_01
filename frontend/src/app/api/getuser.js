import { connection } from "./db";
export default async function handler(req, res) {
    try {
        const con = connection()
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
