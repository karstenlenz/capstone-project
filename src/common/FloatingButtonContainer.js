import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'

export default function FloatingButtonContainer({ children, to }) {
  return (
    <>
      <ButtonContainer to={to}>{children}</ButtonContainer>
      <BottomSpacer></BottomSpacer>
    </>
  )
}

const ButtonContainer = styled(Link)`
  position: fixed;
  left: 15px;
  right: 15px;
  bottom: 0;
`
const BottomSpacer = styled.div`
  margin-bottom: 80px;
`