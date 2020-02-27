import { createGlobalStyle } from 'styled-components'
import { media } from './utils/mediaQueries'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.main};
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
    ${media.lessThan('mobile')`
      font-size: 16px;
    `}
  }
`
