import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const usuario = searchParams.get('usuario');
  const senha = searchParams.get('senha');

  try {
    if (!usuario || !senha) throw new Error('Usuário e senha obrigatórios');
    await sql`INSERT INTO usuarios (Name, Pass) VALUES (${usuario}, ${senha}) ON CONFLICT DO NOTHING;`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const usuarios = await sql`SELECT Name FROM usuarios;`;
  return NextResponse.json({ usuarios }, { status: 200 });
}