import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ParticleAuthModule, ParticleProvider } from "@biconomy/particle-auth";
import { ethers } from "ethers";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const particle = new ParticleAuthModule.ParticleNetwork({
    projectId: "",
    clientKey: "",
    appId: "",
    wallet: {
      displayWalletEntry: true,
      defaultWalletEntryPosition: ParticleAuthModule.WalletEntryPosition.BR,
    },
  });

  const connect = async () => {
    try {
      const userInfo = await particle.auth.login();
      console.log("Logged in user:", userInfo);
      const particleProvider = new ParticleProvider(particle.auth);
      console.log({ particleProvider });
      const web3Provider = new ethers.providers.Web3Provider(
        particleProvider,
        "any",
      );
    } catch (error) {
      console.error(error);
    }
  };
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

