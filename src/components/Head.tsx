import React from 'react'
import Helmet from 'react-helmet'

type Props = {
  title: string
  description: string
}

const Head: React.FC<Props> = ({ title, description }) => (
  <Helmet htmlAttributes={{ lang: 'en' }}>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="Description" content={description} />
    <title>{title}</title>
  </Helmet>
)

export default Head
