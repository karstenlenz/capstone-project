import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  isButtonDisabled: PropTypes.bool,
}

export default function Button({
  className,
  children,
  onClick,
  type,
  btnType = 'primary',
  isButtonDisabled = false,
  width = '100',
}) {
  return (
    <BtnStyled
      className={className}
      disabled={isButtonDisabled}
      btnType={btnType}
      type={type}
      onClick={onClick}
      width={width}
    >
      {children}
    </BtnStyled>
  )
}

const BtnStyled = styled.button`
  color: ${(props) =>
    props.btnType === 'white' ? 'var(--dark-grey)' : 'white'};
  width: ${(props) => props.width + '%'};
  max-width: 600px;
  background: ${(props) => {
    if (props.btnType === 'primary') {
      return 'var(--primary)'
    } else if (props.btnType === 'secondary') {
      return 'var(--secondary)'
    } else {
      return '#fff'
    }
  }};
  box-shadow: ${(props) =>
    props.btnType === 'secondary'
      ? 'var(--secondary-shadow)'
      : 'var(--primary-shadow)'};
  display: ${(props) => (props.width === '100' ? 'block' : 'inline')};
  margin: 20px auto;
  font-size: 1.21em;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 39px;

  &:disabled {
    background: ${(props) => {
      if (props.btnType === 'primary') {
        return 'var(--primary-disabled)'
      } else if (props.btnType === 'secondary-disabled') {
        return 'var(--secondary)'
      } else {
        return '#fff'
      }
    }};
    color: rgba(255, 255, 255, 0.5);
    ${(props) =>
      props.btnType === 'white' &&
      'background:var(--light-grey);color:var(--medium-grey);opacity:0.4;'}
  }
`
