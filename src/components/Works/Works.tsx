import React from 'react'
import styled from 'styled-components'
import WorkItem from './WorkItem'
import { media } from '../../utils/mediaQueries'

const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 8vh ${({ theme }) => `calc(calc(100% - ${theme.layout.width}px) / 2)`};
  text-align: center;
  ${media.greaterThan('mobile')`
    height: 100vh;
  `}
  ${media.lessThan('mobile')`
    padding: 8vh calc(calc(100% - 300px) / 2);
  `}
`

const Title = styled.h2`
  border-bottom: 4px solid ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: bold;
  margin: 0 0 40px;
  padding-bottom: 16px;
  ${media.lessThan('mobile')`
    font-size: 32px;
    margin: 0 0 24px;
  `}
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
        imageUrl="liverty-studio.png"
        description="Live streaming software for Vertual Liver that only nees VRM"
      />
      <WorkItem
        name="Neko DJ"
        imageUrl="nekodj.png"
        description="DJ Neko Hacker tracks on your smartphone"
      />
      <WorkItem
        name="Official Site"
        imageUrl="official-site.png"
        description="Official Site for a creator (WIP)"
      />
      <WorkItem
        name="clipstudio.js"
        imageUrl="clipstudiojs.png"
        description="A JavaScript library for using .clip file on browsers and Node.js"
      />
      <WorkItem
        name="use-lazyload-ref"
        imageUrl="use-lazyload-ref.png"
        description="Custom hook libraly to use lazyload easily"
      />
      <WorkItem
        name="Homepage"
        imageUrl="homepage.png"
        description="My first homepage made of Gatsby (This site)"
      />
    </WorkList>
  </Wrapper>
)

export default Works
