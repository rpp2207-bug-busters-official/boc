import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout.js';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>



    </>
  )
}
