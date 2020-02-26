import React from 'react'
import styled from 'styled-components'
// import Organization from './Organization'

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

const Activities: React.FC = () => (
  <Wrapper>
    <Title>Activities</Title>
    {/* <Organization name="Crowi" role="author" imageUrl="" link="https://github.com/crowi/crowi" /> */}
  </Wrapper>
)

export default Activities
