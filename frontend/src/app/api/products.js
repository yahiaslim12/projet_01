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
        return res.rows; 
    } catch (error) {
        console.log(error);
        throw error; 
    }
}
export async function GET_PRO(id){
    try {
        const query = 'select * from product,ingredient where product.id_product = $1'
        const res =await sql.query(query,[id])
        console.log(res);
        return res.rows
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function GET_PRO_BAG(email){
    try {
        const query = 'select * from product,panier where product.id_product = panier.id_product and email = $1 order by product.id_product asc'
        const res = await sql.query(query,[email])
        console.log(res.rows)
        return [res.rows,res.rowCount]
    } catch (error) {
        console.log(error)
    }
}
export async function Change_QTE(data){
    try {
        console.log(data);
        const query = 'update panier set qte = $1 where id_product = $2 and email = $3'
        const res = await sql.query(query , data)
        console.log('updated')
        console.log(res.command)
    } catch (error) {
        console.log(error);
    }
}
export async function DELETE_PRO_BAG(data){
    try{
        const query = 'delete from panier where id_product = $1 and email = $2'
        await sql.query(query , data)
    }catch(error){
        console.log(error);
        throw error
    }
}
export async function GET_ING(id, email) {
    try {
      // Sélectionne tous les ingrédients et leurs modifications s'il y en a
      const query = `
        SELECT 
          ingredient.id_product,
          ingredient.name_ingredient AS original_name,
          ingredient.qte AS original_qte,
          ingredient.modify AS modify,
          change.name_ingredient AS changed_name,
          change.qte AS changed_qte
        FROM 
          ingredient
        LEFT JOIN 
          change 
        ON 
          ingredient.id_product = change.id_product
          AND ingredient.name_ingredient = change.name_ingredient
          AND change.email = $2
        WHERE 
          ingredient.id_product = $1
      `;
      const res = await sql.query(query, [id, email]);
  
      // Construire la liste finale des ingrédients avec les modifications si elles existent
      const ingredients = res.rows.map(row => ({
        id_product : row.id_product,
        name_ingredient: row.changed_name || row.original_name,
        qte: row.changed_qte !== null ? row.changed_qte : row.original_qte,
        modify : row.modify
      }));
  
      console.log(ingredients);
      return ingredients;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
export async function UPDATE_ING(data){
    var query;
    try {
        const check = "select * from change where email = $1 and id_product = $2 and name_ingredient = $3"

        const check_res = await sql.query(check,[data[0],data[1],data[2]])
        console.log(check_res.rows);
        if(check_res.rows.length > 0){
            query = "update change set qte = $4 where email = $1 and id_product = $2 and name_ingredient = $3"
        }else{
            query = 'insert into change (email,id_product,name_ingredient,qte) values ($1,$2,$3,$4)'
        }
        const res = await sql.query(query,data)
        console.log(res.command);
    } catch (error) {
        console.log(error);
        throw error;
    }
}