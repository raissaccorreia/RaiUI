import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button as ChakraButton} from '@chakra-ui/react'
import { Button as MaterialButton} from '@material-ui/core'
import BasicButton from '../components/atoms/buttons/BasicButton';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raissa UI Kit</title>
        <meta name="description" content="My React components and CSS repo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>
          Experimental Components vs. Material vs. Chakra
        </h4>
        <ChakraButton>Default</ChakraButton>
        <MaterialButton>Default</MaterialButton>
        <BasicButton/>
      </main>
    </div>
  )
}

export default Home
