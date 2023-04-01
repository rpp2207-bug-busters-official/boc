import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import localFont from 'next/font/local';

//Firebase configuration
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// importing from
import ChargerMap from './ChargerMap/ChargerMap.js';
import ActivityList from './ActivityList/ActivityList.js';
import ActivityForm from './ActivityForm/ActivityForm.js';
import Login from './Login/Login.js';
import Register from './Login/register.js';
import Script from 'next/script';
import Reviews from './Reviews/Reviews.js'
import Timer from '../../components/Timer.js';

const RegularFont = localFont({src:'../styles/Inter/Inter-VariableFont_slnt,wght.ttf'});

export default function Home() {
  return (
    <>
      <Head>
        <title>Charge and Tarry</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${RegularFont.className}`}>
        <ChargerMap/>
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col col-lg-2'>
              <Timer />
            </div>
            <div className='col-md-auto my-auto text-center'>
              <ActivityForm/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
