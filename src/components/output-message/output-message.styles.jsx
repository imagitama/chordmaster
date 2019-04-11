import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export const OutputMessageStyled = styled.div`
  color: grey;
  text-align: center;
  font-size: 0.7rem;
  padding: 1rem;
  ${mediaQuery.hidePrint}
`
