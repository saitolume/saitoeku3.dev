import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 240px;
`

const Circle = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  margin-bottom: 32px;
`

const Name = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin: 0;
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: 32px;
`

type Props = {
  name: string
  description: string
}

const Hobby: React.FC<Props> = ({ name, description }) => (
  <Wrapper>
    <Circle />
    <Name>{name}</Name>
    <Description>{description}</Description>
  </Wrapper>
)

export default Hobby
