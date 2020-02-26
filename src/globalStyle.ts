import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.main};
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
  }
`
