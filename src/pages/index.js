import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

//Firebase configuration
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// importing from
import ChargerMap from './ChargerMap/ChargerMap.js';
import ActivityList from './ActivityList/ActivityList.js';
import ActivityForm from './ActivityForm/ActivityForm.js';
import Login from './Login/Login.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // console.log(process.env.FB_API_KEY)
  // const firebaseConfig = {
  //   apiKey: process.env.FB_API_KEY,
  //   authDomain: process.env.AUTH_DOMAIN,
  //   projectId: process.env.PROJECT_ID,
  //   storageBucket: process.env.STORAGE_BUCKET,
  //   messagingSenderId: process.env.MESSAGING_SENDER_ID,
  //   appId: process.env.APP_ID,
  //   measurementId: process.env.MEASUREMENT_ID
  // };
  // console.log(firebaseConfig);
  // const app = initializeApp(firebaseConfig);
  // console.log(app)
  // const auth = getAuth(app)

  return (
    <>
      <Head>
        <title>Charge and Tarry</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <ChargerMap/>
        <ActivityList/>
        <ActivityForm/>
        <Login/>
      </main>
    </>
  )
}
