import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import Login from './components/login'

export default function Home() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}

