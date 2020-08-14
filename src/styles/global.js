import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100vh;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --primary: #60893b;
    --secondary: #3a4d95;
    --tertiary: #0767aa;
    --quaternary: #396e09;
    --quinary: #3a4d95;
    --senary: #331A38;
  
    --white: #fff;
    --background: #e2e4e7;
    --dark: #010101;
  }
  button {
    transition: all 0.2s;
      &:hover {
        transform: scale(.98);
      }
  }
`