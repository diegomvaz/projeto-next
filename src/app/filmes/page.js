import { ChakraProvider, RadioGroup, Stack, Radio, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { getFilmesPopulares, getFilmesMaiorNota } from '../infra/filmes'
import Filmes from '../components/filmes'
// import { useState } from 'react';


export default async function Page() {
  const maiorNota = await getFilmesMaiorNota()
  const populares = await getFilmesPopulares()
  
  return (
    <ChakraProvider>
      <Filmes data={{maiorNota, populares}} />
    </ChakraProvider>
  )
}

