import React from 'react'
import styled from 'styled-components'
import HobbyItem from './HobbyItem'

const Wrapper = styled.section`
  width: ${({ theme }) => `${theme.layout.width}px`};
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 8vh 0;
  text-align: center;
`
const Title = styled.h2`
  border-bottom: 4px solid ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: bold;
  margin: 0 0 32px;
  padding-bottom: 16px;
`

const MyName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin: 0;
`

const Biography = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin-bottom: 16px;
`

const Email = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: bold;
  margin-bottom: 32px;
`

const Small = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin-bottom: 32px;
`

const HobbyList = styled.div`
  display: flex;
  justify-content: space-between;
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
      <HobbyItem name="Programing" description="JavaScript, TypeScript, Node.js, Ruby, Rust" />
      <HobbyItem name="Baseball" description="Yokohama DeNA Baystars, Tampa Bay Rays" />
      <HobbyItem name="Music" description="EDM, Future Bass, J-POP, Band, HIPHOP" />
    </HobbyList>
  </Wrapper>
)

export default Profile
