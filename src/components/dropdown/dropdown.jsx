import React from 'react'

export const Dropdown = props => <select {...props} />

export const DropDownOption = ({ label, ...props }) => <option {...props}>{label}</option>

export default Dropdown
