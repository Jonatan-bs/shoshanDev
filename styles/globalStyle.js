import {createGlobalStyle} from 'styled-components';
import theme from "./theme"



const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'PT Sans', sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${()=>theme().colors.dark}; 
    font-size: 1.4rem;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    font-size: 1.4rem;
    text-decoration: none;
    color: ${()=>theme().colors.primary}; 
  }

  .gap > *:not(3n) {
    margin: 0 6px 0 0px;
  }
 
  
`

export default GlobalStyle