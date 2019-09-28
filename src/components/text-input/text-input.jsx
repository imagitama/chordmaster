import React from 'react'
import TextInputStyled from './text-input.styles'

export const TextInput = props => (
  <TextInputStyled type="text" {...props} width={200} />
)

export default TextInput
