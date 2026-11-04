import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: system-ui, -apple-system, sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
