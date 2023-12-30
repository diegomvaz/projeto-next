import { ChakraProvider, RadioGroup, Stack, Radio, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { getFilmesPopulares, getFilmesMaiorNota } from '../infra/filmes'
import Galeria from '../components/galeria'
// import { useState } from 'react';


export default async function Filmes() {
  const maiorNota = await getFilmesMaiorNota()
  const populares = await getFilmesMaiorNota()
  
  return (
    <ChakraProvider>
      <Galeria data={{maiorNota, populares}} />
    </ChakraProvider>
  )
}

