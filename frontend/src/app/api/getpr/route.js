import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {

  const pets = await sql`SELECT * FROM product;`;
  return NextResponse.json({ pets }.pets.rows, { status: 200 });
}