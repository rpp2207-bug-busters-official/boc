import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ChargerMap from './ChargerMap/ChargerMap.js';
import ActivityList from './ActivityList/ActivityList.js';
import ActivityForm from './ActivityForm/ActivityForm.js';
import Login from './Login/Login.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ChargerMap/>
        <ActivityList/>
        <ActivityForm/>
        <Login/>
      </main>
    </>
  )
}
