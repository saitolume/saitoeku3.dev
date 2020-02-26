import React from 'react'
import styled from 'styled-components'
import WorkItem from './WorkItem'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 8vh ${({ theme }) => `calc(calc(100% - ${theme.layout.width}px) / 2)`};
  text-align: center;
`
const Title = styled.h2`
  border-bottom: 4px solid ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: bold;
  margin: 0 0 40px;
  padding-bottom: 16px;
`

const WorkList = styled.div`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 48px;
  grid-template-columns: repeat(auto-fill, 310px);
`

const Works: React.FC = () => (
  <Wrapper>
    <Title>Works</Title>
    <WorkList>
      <WorkItem
        name="Liverty Studio"
        imageUrl=""
        description="Live streaming software for Vertual Liver that only nees VRM"
      />
      <WorkItem
        name="Neko DJ"
        imageUrl=""
        description="DJ Neko Hacker's tracks on Web produced by Neko Hackathon"
      />
      <WorkItem
        name="Official Web site"
        imageUrl=""
        description="Official Web site for virtual creator Toto Hoshimiya"
      />
      <WorkItem
        name="clipstudio.js"
        imageUrl=""
        description="A JavaScript library for using .clip file on browsers and Node.js"
      />
      <WorkItem
        name="use-lazyload-ref"
        imageUrl=""
        description="Custom hook libraly to use lazyload easily"
      />
      <WorkItem
        name="Homepage"
        imageUrl=""
        description="My first homepage made of Gatsby (This site)"
      />
    </WorkList>
  </Wrapper>
)

export default Works
