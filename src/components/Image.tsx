import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'
import { ImagesQuery } from '../__generated__/graphql'

const Wrapper = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`

type Props = {
  alt: string
  fadeIn?: boolean
  className?: string
  src: string
  width?: number
  height?: number
}

const Image: React.FC<Props> = ({ alt, fadeIn = true, src, ...props }) => {
  const imagesQuery = graphql`
    query Images {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  `

  const { allFile } = useStaticQuery<ImagesQuery>(imagesQuery)
  const image = allFile.edges.find(({ node }) => node.relativePath === src)

  if (!image?.node.childImageSharp?.fluid) return null

  return (
    <Wrapper {...props}>
      <Img
        fluid={image.node.childImageSharp?.fluid as FluidObject}
        placeholderStyle={!fadeIn ? { visibility: 'hidden' } : undefined}
        alt={alt}
      />
    </Wrapper>
  )
}

export default Image
