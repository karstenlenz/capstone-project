import React from 'react'
import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Collapse.propType = {
  headline: PropTypes.string.isRequired,
  headlineOpen: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default function Collapse({ headline, headlineOpen, children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section>
      <CollapseHeader onClick={toggleIsOpen}>
        {isOpen ? headlineOpen : headline}
        <CollapseIcon src="/img/expand.svg" isOpen={isOpen} />
      </CollapseHeader>
      <CollapseContent isOpen={isOpen}>{children}</CollapseContent>
    </section>
  )

  function toggleIsOpen() {
    setIsOpen(!isOpen)
  }
}

const CollapseHeader = styled.div`
  position: relative;
  height: 40px;
  padding: 8px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  border-radius: 12px;
  background: var(--secondary);
`

const CollapseIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 14px;
  transform: ${(props) => (props.isOpen ? 'rotate(0deg);' : 'rotate(180deg)')};
  transition: transform 0.3s ease-in-out;
`
const CollapseContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  border-top: 10px solid var(--secondary);
  padding: 15px;
  margin-top: -10px;
  box-shadow: var(--primary-shadow);
`
