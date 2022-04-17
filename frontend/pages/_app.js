import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import '../styles/globals.scss'


const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};


export default MyApp;
