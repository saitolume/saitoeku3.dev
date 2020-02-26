import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  imageUrl: string
  link: string
  role: string
}

const Wrapper = styled.div`
  width: 100px;
`

const Img = styled.img`
  width: 100%;
`

const Role = styled.div`
  width: 100%;
`

const Organization: React.FC<Props> = ({ name, imageUrl, link, role }) => (
  <Wrapper>
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Img src={imageUrl} alt={name} />
    </a>
    <Role>{role}</Role>
  </Wrapper>
)

export default Organization
