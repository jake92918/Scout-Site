import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

const MetaDataHead = () => {
  
  return (
    <Head>
      <link
          rel="shortcut icon"
          href="/Images/Favicon.png"
        />
    </Head>
  );
};

export default MetaDataHead;