import 'styled-components'

export const theme = {
  colors: {
    main: '#222',
    gray: '#f5f5f5'
  },
  fontSizes: {
    title: '40px',
    subTitle: '28px',
    paragraph: '20px'
  },
  layout: {
    width: 1100
  }
} as const

type AppTheme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends AppTheme {}
}
