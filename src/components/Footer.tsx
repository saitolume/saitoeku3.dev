import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
`

const CopyRight = styled.div`
  margin: auto;
`

const Footer = () => (
  <Wrapper>
    <CopyRight>&copy; 2020 Copyright Tadao Iseki All Rights Reserved.</CopyRight>
  </Wrapper>
)

export default Footer
