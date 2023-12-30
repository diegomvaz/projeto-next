'use server'
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export default async function criarUsuario(usuario) {
  if (usuario.nome != '' && usuario.senha != '' ) {
    console.log('usuario'+usuario.nome+' senha'+usuario.senha)
    const hashedPass = await bcrypt.hash(usuario.senha, 10);
    try {
      await sql`INSERT INTO usuarios (Name, Pass) VALUES (${usuario.nome}, ${hashedPass}) ON CONFLICT DO NOTHING;`;
      return 'Usuário criado com sucesso!'
    } catch (error) {
      return error
    }
  } else return 'Preencha os campos'
}



