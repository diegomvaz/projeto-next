import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { getFilmesPopulares, getFilmesMaiorNota } from '../infra/filmes'
import Filmes from '../components/filmes'

export default async function Page() {

  const maiorNota = await getFilmesMaiorNota()
  const populares = await getFilmesPopulares()

  return (
    <ChakraProvider>
      <Filmes data={{ maiorNota, populares }} />
    </ChakraProvider>
  )
}

