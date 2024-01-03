import Credentials from "next-auth/providers/credentials"
import { verificarUsuario } from "../../infra/usuario";
import { z } from 'zod';

export const authOptions = {
    pages: {
        signIn: '/',
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                console.log('aqui')
                const parsedCredentials = z
                    .object({ nome: z.string() , senha: z.string() })
                    .safeParse(credentials);
                console.log(parsedCredentials)
                if (parsedCredentials.success) {
                    const verificar = await verificarUsuario({ nome: credentials.nome, senha: credentials.senha });
                    return verificar ? true : false;
                }else return false
            }
        }),
    ],
}