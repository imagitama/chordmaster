import React from 'react'
import {
  DropdownWrapperStyled,
  DropdownStyled,
  DropdownOptionStyled,
  IconStyled
} from './dropdown.styles'

export const Dropdown = props => (
  <DropdownWrapperStyled>
    <DropdownStyled {...props} />
    <IconStyled>
      <i className="fas fa-chevron-down"></i>
    </IconStyled>
  </DropdownWrapperStyled>
)

export const DropDownOption = ({ label, ...props }) => (
  <DropdownOptionStyled {...props}>{label}</DropdownOptionStyled>
)

export default Dropdown
