import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins";
    background-color: #020a13;
    overflow-x: hidden;
    min-height: 100vh;
    background-image: repeating-linear-gradient(to right, transparent 0 49px, rgba(113, 113, 113, 0.07) 49px 50px),
    repeating-linear-gradient(to bottom, transparent 0 49px, rgba(113, 113, 113, 0.07) 49px 50px);
    
    /* &::before {
      content: "";
      height: 100vh;
      width: 100vw;
      color: rgba(113, 113, 113, 0.07);
      position: fixed;
      z-index: -1;
      background: linear-gradient(currentcolor 1px, transparent 1px) 0% 0% / 94px 90px, linear-gradient(to right, currentcolor 1px, transparent 1px) transparent;
      transition: all 0.5s linear 0s;
    } */
    
    &:after {
      background-image: radial-gradient(at 40% 40%, rgb(30, 144, 255) 0px, transparent 80%), radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 30%), radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 30%), radial-gradient(at 95% 95%, rgb(255, 255, 0) 0px, transparent 30%), radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);
      position: fixed;
      content: "";
      z-index: -1;
      width: 100%;
      height: 100%;
      filter: blur(100px) saturate(100%);
      top: 0px;
      opacity: 0.1;
      transform: translateZ(0px);
    }
  }

  ul {
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  img {
    display: inline-block;
  }
`
