import React from 'react'
import ToggleInputStyled from './toggle-input.styles'

export const ToggleInput = ({ isEnabled, label, onChange }) => (
  <label>
    <ToggleInputStyled
      type="checkbox"
      onChange={() => onChange()}
      checked={isEnabled}
    />
    {label}
  </label>
)

export default ToggleInput
