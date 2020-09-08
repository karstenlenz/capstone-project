import React from 'react'
import styled from 'styled-components/macro'

export default function TextLink({ children, href }) {
  return <LinkStyled href={href}>{children}</LinkStyled>
}

const LinkStyled = styled.a`
  text-decoration: underline;
  color: black;
`
