import React from 'react'

export const ToggleInput = ({ isSelected, label, onChange }) => (
  <span>
    <input type="checkbox" onChange={onChange} checked={isSelected} />
    {label}
  </span>
)

export default ToggleInput
