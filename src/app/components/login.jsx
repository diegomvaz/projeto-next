"use client"
import * as React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import {
  Center,
  Input,
  FormControl,
  FormLabel,
  Card,
  Button,
  HStack,
  Alert,
  AlertIcon,
  Box,
  Heading
} from '@chakra-ui/react'
import { criarUsuario } from '../infra/usuario';
import { signIn } from "next-auth/react"


function Login() {
  const router = useRouter()

  const [usuario, setUsuario] = useState({ nome: '', senha: '' })
  const [status, setStatus] = useState('')
  useEffect(() => setStatus(''), [usuario])

  const tipoAlerta = {
    'Usuário criado com sucesso!' : 'success',
    'Senha incorreta!': 'error',
  }

  const login = (async ()=>{
      const res = await signIn('credentials', { 
        redirect: false,
        nome: usuario.nome, 
        senha: usuario.senha
      })
      res.ok
      ? router.push('/filmes')
      : setStatus('Senha incorreta!')
  })

  return (
    
    <Center h={'100vh'}>
      <Card>
        <Heading size='lg' paddingTop={10} textAlign={'center'}>Catálogo de Filmes</Heading>
        <FormControl padding={10} width={'350px'}>
          <FormLabel>Usuário</FormLabel>
          <Input id='nome' type='text' onChange={e => setUsuario({ ...usuario, nome: e.target.value })} />
          <FormLabel paddingTop={10}>Senha</FormLabel>
          <Input id='pass' type='password' onChange={e => setUsuario({ ...usuario, senha: e.target.value })} />
          <Box marginTop={5}>
          {status != '' && <Alert status={tipoAlerta[status]}><AlertIcon />{status}</Alert>}
          </Box>
          <HStack>
            <Button colorScheme='green' marginTop={5} onClick={async () => setStatus( await criarUsuario(usuario))}>Criar Usuário</Button>
            <Button colorScheme='blue' marginTop={5} onClick={() => login()}>Login</Button>
          </HStack>
        </FormControl>
      </Card>
    </Center>
  )
}

export default Login