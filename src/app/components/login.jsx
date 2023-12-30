"use client"
import * as React from 'react'
import { useState, useEffect } from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Card,
  Button,
  HStack,
  Flex,
} from '@chakra-ui/react'
import criarUsuario from '../infra/criarUsuario'


function Login() {
  const [usuario, setUsuario] = useState({ nome: '', senha: '' })
  const [status, setStatus] = useState('Preencha os campos')
  useEffect(() => setStatus(''), [usuario])

  return (
    <Flex display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <FormControl padding={10} width={'350px'} backgroundColor={'red'}> 
        <FormLabel>Usuário</FormLabel>
        <Input type='email' onChange={e => setUsuario({ ...usuario, nome: e.target.value })} />
        <FormLabel paddingTop={10}>Senha</FormLabel>
        <Input type='password' onChange={e => setUsuario({ ...usuario, senha: e.target.value })} />
        <FormHelperText paddingTop={5}>{status ? status : 'Preencha os campos'}</FormHelperText>
        <HStack>
          <Button colorScheme='green' marginTop={5} onClick={() => setStatus(criarUsuario(usuario))}>Criar Usuário</Button>
          <Button colorScheme='blue' marginTop={5}>Logar</Button>
        </HStack>
      </FormControl>
    </Flex>
  )
}

export default Login