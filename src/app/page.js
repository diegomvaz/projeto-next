import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import Login from './components/login'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <ChakraProvider>
        <Login/>
      </ChakraProvider>
      </div>
    </main>
  )
}

