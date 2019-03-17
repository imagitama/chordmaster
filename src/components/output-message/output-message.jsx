import React from 'react'
import { OutputMessageStyled } from './output-message.styles'

export const OutputMessage = ({ message }) => (
  <OutputMessageStyled>
    {message}
  </OutputMessageStyled>
)

export default OutputMessage
