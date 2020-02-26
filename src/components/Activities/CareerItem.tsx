import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const Meta = styled.div`
  width: 40%;
`

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin-bottom: 4px;
`

const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
`

const Description = styled.div`
  width: 55%;
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
