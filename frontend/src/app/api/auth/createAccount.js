import { query } from "../db";

export default async function createAccount(req,res){
    try {
        const sql = "insert into users (firstname,lastname,age,weight,email,password) values (?,?,?,?,?,?)"
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.age,
            req.body.weight,
            req.body.email,
            req.body.password
        ]
        const response = await query(sql,values)
        console.log(response);
        res.status(200).json({message : " user is added succussfuly"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
}