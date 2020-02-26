import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from '../globalStyle'
import { theme } from '../theme'

const Wrapper = styled.div`
  width: 100vw;
`

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
)

export default Layout
