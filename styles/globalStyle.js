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
  h6 {
    font-weight: bold;
    font-size: 100%;
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
    text-decoration: none;
    color: ${()=>theme().colors.primary}; 
  }
`

export default GlobalStyle