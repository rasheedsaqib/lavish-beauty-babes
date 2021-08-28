import {Fragment} from "react";

import '../styles/globals.scss';
import Head from "next/head";
import Navbar from "../UI/Navbar/navbar";
import Footer from "../UI/Footer/footer";

function MyApp({ Component, pageProps }) {
  return (
      <Fragment>
          <Head>
              <meta name='viewport' content='width=device-width, initial-scale=1.0' />
              <title>Lavish Beauty Babes</title>

              {/* Font Awesome CDN */}

              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />

              {/* Google fonts */}

              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={+true} />
              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />


              <link href="https://fonts.googleapis.com/css2?family=Coustard:wght@900&display=swap" rel="stylesheet" />

          </Head>

          <Navbar />
          <Component {...pageProps} />
          <Footer />
      </Fragment>
  )
}

export default MyApp
