import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout.js';
import react, {useState, useEffect} from 'react';
import Cookies from './Login/setCookie.js';


export default function App({ Component, pageProps }) {
  let [cookie, setCookie] = useState('');

  useEffect(() => {
    updateCookie();
    console.log('herllo');
    console.log('Cookie has changed:', cookie)
  }, [cookie]);

  const updateCookie = () => {
    setCookie(Cookies.getCookie());
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} cookie={cookie} setCookie={setCookie} updateCookie={updateCookie.bind(this)}/>
      </Layout>



    </>
  )
}
