import React, { useState, useEffect } from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./../styles/theme";
import GlobalStyle from "./../styles/GlobalStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import {motion, AnimatePresence} from "framer-motion"
// import "../scss/style.scss";
import { getStrapiMedia, fetchAPI } from "../lib/api";
import App from 'next/app'
import Layout from './../components/Layout';



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
          <Layout {...pageProps}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    )
  
}
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    let appProps = await App.getInitialProps(appContext);
    let menus = await fetchAPI('/menus')
    appProps = {...appProps.pageProps, menus }
    
    return { pageProps: appProps }
  }
  
  export default MyApp