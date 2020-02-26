import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100vw;
  height: 92vh;
  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  border: 4px solid #fff;
  border-radius: 50%;
  margin: 20vh auto 40px auto;
`

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin: 0 0 32px;
`

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
`

const Hero: React.FC = () => (
  <Wrapper>
    <Thumbnail
      src="https://pbs.twimg.com/profile_images/1209880502628339713/o9n49BRR_400x400.jpg"
      alt="saitoeku3"
    />
    <Name>saitoeku3</Name>
    <Message>&ldquo;Create future that touches your heart.&ldquo;</Message>
  </Wrapper>
)

export default Hero
