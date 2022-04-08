import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: initial;
}
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  
`

export default GlobalStyle
