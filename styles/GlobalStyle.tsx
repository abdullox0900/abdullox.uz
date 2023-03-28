import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #000;
    overflow: hidden;
  }

  ul {
    list-style: none;
  }

  a {
    display: inline-block;
  }
`
