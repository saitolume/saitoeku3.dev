import React from 'react'
import styled from 'styled-components'
import Image from '../Image'
import { media } from '../../utils/mediaQueries'

const Wrapper = styled.a`
  width: 100px;
  color: ${({ theme }) => theme.colors.main};
  text-decoration: none;
  ${media.lessThan('mobile')`
    width: 80px;
  `}
`

const Img = styled(Image)`
  width: 100%;
  margin-bottom: 4px;
  ${media.lessThan('mobile')`
    width: 80px;
  `}
`

const Name = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin: 0 0 8px;
  ${media.lessThan('mobile')`
    font-size: 20px;
  `}
`

const Role = styled.div`
  width: 100%;
`

type Props = {
  name: string
  imageUrl: string
  link: string
  role: string
}

const Organization: React.FC<Props> = ({ name, imageUrl, link, role }) => (
  <Wrapper href={link} rel="noopener noreferrer" target="_blank">
    <Img src={imageUrl} alt={name} />
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Wrapper>
)

export default Organization
