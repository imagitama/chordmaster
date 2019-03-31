import React from 'react'
import ToggleInputStyled from './toggle-input.styles'

export const ToggleInput = ({ isEnabled, label, onChange }) => (
  <span>
    <ToggleInputStyled type="checkbox" onChange={() => onChange()} checked={isEnabled} />
    {label}
  </span>
)

export default ToggleInput
