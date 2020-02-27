import React from 'react'
import styled from 'styled-components'
import Image from '../Image'

const Wrapper = styled.a`
  width: 64px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const Icon = styled(Image)`
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 50%;
  padding: 6px;
  margin-bottom: 12px;
`

const Name = styled.div`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin: auto;
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
