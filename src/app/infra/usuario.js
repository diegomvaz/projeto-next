'use server'
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';


export async function criarUsuario(usuario) {
  if (usuario.nome != '' && usuario.senha != '') {
    const hashedPass = await bcrypt.hash(usuario.senha, 10);
    try {
      await sql`INSERT INTO usuarios (Name, Pass) VALUES (${usuario.nome}, ${hashedPass}) 
              ON CONFLICT (Name) DO UPDATE SET Pass = EXCLUDED.Pass;`;
      return 'Usuário criado com sucesso!'
    } catch (error) {
      return error
    }
  } else return 'Preencha os campos'
}

export async function verificarUsuario(usuario) {
  if (usuario.nome != '' && usuario.senha != '') {
    try {
      const busca = await sql`select * from usuarios where Name = ${usuario.nome}`;
      const resultado = await bcrypt.compare(usuario.senha, busca.rows[0].pass)
      return resultado
    } catch (error) {
      return false
    }
  } else return false
}


