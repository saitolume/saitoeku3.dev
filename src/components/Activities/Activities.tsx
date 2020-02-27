import React from 'react'
import styled from 'styled-components'
import CareerItem from './CareerItem'
import Organization from './Organization'
import { media } from '../../utils/mediaQueries'

const Wrapper = styled.section`
  width: ${({ theme }) => `${theme.layout.width}px`};
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 8vh 0;
  text-align: center;
  ${media.greaterThan('mobile')`
    height: 100vh;
  `}
  ${media.lessThan('mobile')`
    width: 300px;
  `}
`
const Title = styled.h2`
  border-bottom: 4px solid ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: bold;
  margin: 0 0 32px;
  padding-bottom: 16px;
  ${media.lessThan('mobile')`
    font-size: 32px;
    margin: 0 0 24px;
  `}
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('mobile')`
    display: block;
  `}
`

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin-bottom: 40px;
  ${media.lessThan('mobile')`
    margin-bottom: 16px;
  `}
`

const Column = styled.div`
  width: 45%;
  ${media.lessThan('mobile')`
    width: 100%;
    margin-bottom: 40px;
  `}
`

const OrganizationList = styled.div`
  display: flex;
  justify-content: space-between;
`

const CareerList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Activities: React.FC = () => (
  <Wrapper>
    <Title>Activities</Title>
    <FlexBox>
      <Column>
        <SubTitle>Contributions</SubTitle>
        <OrganizationList>
          <Organization
            name="Crowi"
            role="author"
            imageUrl="crowi.png"
            link="https://site.crowi.wiki/"
          />
          <Organization
            name="Gatsby"
            role="maintainer"
            imageUrl="gatsby.png"
            link="https://www.gatsbyjs.org/"
          />
          <Organization
            name="KITDM"
            role="organizer"
            imageUrl="kitdm.png"
            link="https://kit-developers-meetup.github.io/"
          />
        </OrganizationList>
      </Column>
      <Column>
        <SubTitle>Career</SubTitle>
        <CareerList>
          <CareerItem
            name="CirKit Co., Ltd"
            description="Internship as Web developer, product maneger"
            begin="2017.06"
            end="now"
          />
          <CareerItem
            name="pixiv Inc."
            description="Internship as frontend developer"
            begin="2019.10"
            end="2019.10"
          />
          <CareerItem
            name="Livesense Inc."
            description="Internship as Web developer"
            begin="2019.09"
            end="2019.09"
          />
          <CareerItem
            name="Wantedly Inc."
            description="Internship as frontend developer"
            begin="2019.08"
            end="2019.08"
          />
        </CareerList>
      </Column>
    </FlexBox>
  </Wrapper>
)

export default Activities
