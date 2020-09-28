import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Underline } from '../img/underline.svg'

export default function HeadlineUnderline({ children }) {
  return (
    <HeadlineContainer>
      {children}
      <UnderlineStyled />
    </HeadlineContainer>
  )
}

const HeadlineContainer = styled.section`
  margin: -15px 0;
  position: relative;
`

const UnderlineStyled = styled(Underline)`
  color: var(--highlight);
  width: 100%;
  z-index: var(--background);
  position: relative;
  top: -34px;
  opacity: 0.6;
`
