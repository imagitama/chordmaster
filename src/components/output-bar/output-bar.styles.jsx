import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export const OutputBarStyled = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.outputBarBackgroundColor};
  color: ${({ theme }) => theme.outputBarTextColor};
  ${mediaQuery.hidePrint}
`

export default OutputBarStyled