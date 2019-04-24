import React from 'react'
import OutputBarStyled, { CloseButton } from './output-bar.styles'

export const OutputBar = ({ children, onCloseClick = () => null }) => (
  <OutputBarStyled>
    {children}
    <CloseButton onClick={onCloseClick}>
      Hide
    </CloseButton>
  </OutputBarStyled>
)

export default OutputBar
