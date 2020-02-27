import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImg from 'gatsby-background-image'
import { FluidObject } from 'gatsby-image'
import { BackgroundImagesQuery } from '../__generated__/graphql'

type Props = {
  alt: string
  className?: string
  src: string
  width?: number
  height?: number
}

const BackgroundImage: React.FC<Props> = ({ children, src, ...props }) => {
  const backgroundImagesQuery = graphql`
    query BackgroundImages {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                src
                aspectRatio
                base64
                originalImg
                originalName
                presentationHeight
                presentationWidth
                sizes
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
      }
    }
  `

  const { allFile } = useStaticQuery<BackgroundImagesQuery>(backgroundImagesQuery)
  const image = allFile.edges.find(({ node }) => node.relativePath === src)

  if (!image?.node.childImageSharp?.fluid) return null

  return (
    <BackgroundImg fluid={image.node.childImageSharp?.fluid as FluidObject} {...props}>
      {children}
    </BackgroundImg>
  )
}

export default BackgroundImage
