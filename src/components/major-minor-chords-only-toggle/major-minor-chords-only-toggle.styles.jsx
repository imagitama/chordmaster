import styled from '@emotion/styled'

export const MajorMinorChordsOnlyToggleStyled = styled.span`
  text-decoration: ${({ isDisabled }) => isDisabled ? 'line-through' : ''}
`

export default MajorMinorChordsOnlyToggleStyled