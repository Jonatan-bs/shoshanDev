import React, { useState, useEffect } from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./../styles/theme";
import GlobalStyle from "./../styles/GlobalStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import {motion, AnimatePresence} from "framer-motion"
// import "../scss/style.scss";



function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      offset: 100,
      delay:100
    });
  }, []);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence initial={true} exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    )
  
}
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp