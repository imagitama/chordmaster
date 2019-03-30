import styled from '@emotion/styled'

export const MajorMinorChordsOnlyToggleStyled = styled.span`
  text-decoration: ${({ isKeySelected }) => isKeySelected ? 'line-through' : ''}
`

export default MajorMinorChordsOnlyToggleStyled