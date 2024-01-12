import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Based Account Abstraction</title>
        <meta name="description" content="Based Account Abstraction" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}

