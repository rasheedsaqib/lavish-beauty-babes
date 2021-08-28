import {Fragment} from "react";

import '../styles/globals.scss';
import Navbar from "../UI/Navbar/navbar";
import Footer from "../UI/Footer/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <Fragment>
          <Head>
              <meta name='viewport' content='width=device-width, initial-scale=1.0' />
              <title>Lavish Beauty Babes</title>
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
      </Fragment>
  )
}

export default MyApp
