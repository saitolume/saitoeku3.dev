import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../BackgroundImage'

const Wrapper = styled.div`
  width: 240px;
`

const CircleImage = styled(BackgroundImage)`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  margin-bottom: 32px;
  overflow: hidden;
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
  imageUrl?: string
}

const Hobby: React.FC<Props> = ({ name, description, imageUrl = '' }) => (
  <Wrapper>
    <CircleImage src={imageUrl} alt={name} />
    <Name>{name}</Name>
    <Description>{description}</Description>
  </Wrapper>
)

export default Hobby
