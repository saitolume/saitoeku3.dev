import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../BackgroundImage'
import { media } from '../../utils/mediaQueries'

const Wrapper = styled.div`
  width: 240px;
  ${media.lessThan('mobile')`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `}
`

const CircleImage = styled(BackgroundImage)`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  margin-bottom: 32px;
  ${media.lessThan('mobile')`
    width: 90px;
    height: 90px;
  `}
`

const Name = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin: 0;
  ${media.lessThan('mobile')`
    font-size: 20px;
    margin: 0 0 8px;
  `}
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: 32px;
  ${media.lessThan('mobile')`
    width: 180px;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  `}
`

type Props = {
  name: string
  description: string
  imageUrl?: string
}

const Hobby: React.FC<Props> = ({ name, description, imageUrl = '' }) => (
  <Wrapper>
    <CircleImage src={imageUrl} alt={name} />
    <div>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </div>
  </Wrapper>
)

export default Hobby
