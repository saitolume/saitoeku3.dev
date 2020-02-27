import React from 'react'
import styled from 'styled-components'
import HobbyItem from './HobbyItem'
import { media } from '../../utils/mediaQueries'

const Wrapper = styled.section`
  width: ${({ theme }) => `${theme.layout.width}px`};
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

const MyName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin: 0;
  ${media.lessThan('mobile')`
    margin: 0 0 -4px;
  `}
`

const Biography = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin-bottom: 16px;
  ${media.lessThan('mobile')`
    font-size: 16px;
    line-height: 24px;
  `}
`

const Email = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: bold;
  margin-bottom: 32px;
`

const Small = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin-bottom: 32px;
  ${media.lessThan('mobile')`
    font-size: 16px;
  `}
`

const HobbyList = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('mobile')`
    display: block;
  `}
`

const Profile: React.FC = () => (
  <Wrapper>
    <Title>Profile</Title>
    <MyName>Tadao Iseki</MyName>
    <Biography>
      A student majoring in media informatics at Kanazawa Institute of Technology in Japan
    </Biography>
    <Email>saitoeku3[at]gmail.com</Email>
    <Small>I&apos;m into …</Small>
    <HobbyList>
      <HobbyItem
        name="Programing"
        description="JavaScript, TypeScript, Node.js, Ruby, Rust"
        imageUrl="programing.jpg"
      />
      <HobbyItem
        name="Baseball"
        description="Yokohama DeNA Baystars, Tampa Bay Rays"
        imageUrl="baseball.jpg"
      />
      <HobbyItem
        name="Music"
        description="EDM, Future Bass, J-POP, Band, HIPHOP"
        imageUrl="music.jpg"
      />
    </HobbyList>
  </Wrapper>
)

export default Profile
