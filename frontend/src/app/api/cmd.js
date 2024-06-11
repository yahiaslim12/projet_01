'use server'
import { sql } from "@vercel/postgres";

export async function insert(data){
    const [email,tab,text,price] = data
    console.log(email);
    console.log(tab);
    console.log(text);
    console.log(price);
    try {
        var query;
        const query1 = 'select Max(id_commande) as max_id from commande'
        const res1 = await sql.query(query1)
        console.log(res1.rows);
        if(res1.rows[0].max_id == null){
            query = 'insert into commande (id_commande,email,id_product,qte_pro,text,price_cmd) values (1,$1,$2,$3,$4,$5)'
        }else{
            const max = res1.rows[0].max_id
            query = `insert into commande (id_commande,email,id_product,qte_pro,text,price_cmd) values (${max + 1},$1,$2,$3,$4,$5)`
        }
        for (let index = 0; index < tab.length; index++) {
            await sql.query(query,[email,tab[index].id,tab[index].qte,text,price])
        }
        await sql.query('delete from panier where email = $1',[email])
    } catch (err) {
        console.log(err);
        throw err
    }
}