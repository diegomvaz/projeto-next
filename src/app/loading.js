
import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Center, Spinner } from "@chakra-ui/react";


export default function Home() {
    return (
        <ChakraProvider>
            <Center height={'100vh'}><Spinner thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl' />
            </Center>
        </ChakraProvider>
    )
}

