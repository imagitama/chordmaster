import React from 'react'

export const ToggleInput = ({ isEnabled, label, onChange }) => (
  <span>
    <input type="checkbox" onChange={() => onChange()} checked={isEnabled} />
    {label}
  </span>
)

export default ToggleInput
