import React from 'react'
import styled from 'styled-components'
import Image from '../Image'
import { media } from '../../utils/mediaQueries'

const Wrapper = styled.a`
  width: 64px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  ${media.lessThan('mobile')`
    width: 48px;
  `}
`

const Icon = styled(Image)`
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 50%;
  padding: 6px;
  margin-bottom: 12px;
  ${media.lessThan('mobile')`
    width: 48px;
    height: 48px;
  `}
`

const Name = styled.div`
  color: #fff;
  margin: auto;
  ${media.greaterThan('mobile')`
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
  `}
  ${media.lessThan('mobile')`
    font-size: 100%;
  `}
`

type Props = {
  className?: string
  imageUrl: string
  name: string
  link: string
}

const Social: React.FC<Props> = ({ className, imageUrl, name, link }) => (
  <Wrapper className={className} href={link} rel="noopener noreferrer" target="_blank">
    <Icon src={imageUrl} alt={name} />
    <Name>{name}</Name>
  </Wrapper>
)

export default Social
