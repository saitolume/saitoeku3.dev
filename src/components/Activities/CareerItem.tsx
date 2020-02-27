import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils/mediaQueries'

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  ${media.lessThan('mobile')`
    padding-bottom: 24px;
  `}
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('mobile')`
    display: block;
  `}
`

const Meta = styled.div`
  width: 40%;
  ${media.lessThan('mobile')`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `}
`

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin-bottom: 4px;
  ${media.lessThan('mobile')`
    font-size: 22px;
  `}
`

const Date = styled.div`
  ${media.lessThan('mobile')`
    margin: auto 0;
  `}
`

const Description = styled.div`
  width: 55%;
  line-height: 30px;
  ${media.lessThan('mobile')`
    width: 100%;
    line-height: 20px;
  `}
`

type Props = {
  name: string
  description: string
  begin: string
  end: string
}

const CareerItem: React.FC<Props> = ({ name, description, begin, end }) => (
  <Wrapper>
    <FlexBox>
      <Meta>
        <Name>{name}</Name>
        <Date>
          {begin} - {end}
        </Date>
      </Meta>
      <Description>{description}</Description>
    </FlexBox>
  </Wrapper>
)

export default CareerItem
