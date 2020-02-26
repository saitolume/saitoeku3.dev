import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 310px;
`

const Img = styled.div<{ src: string }>`
  width: 100%;
  height: 190px;
  background-color: #fff;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
`

const Name = styled.div`
  margin: auto;
`

const Description = styled.p`
  width: 100%;
  line-height: 32px;
`

type Props = {
  name: string
  imageUrl: string
  description: string
}

const WorkItem: React.FC<Props> = ({ name, imageUrl, description }) => (
  <Wrapper>
    <Img src={imageUrl}>
      <Name>{name}</Name>
    </Img>
    <Description>{description}</Description>
  </Wrapper>
)

export default WorkItem
