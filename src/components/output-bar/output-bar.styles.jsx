import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'
import Button from '../button/button'

export const OutputBarStyled = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.outputBarBackgroundColor};
  border-radius: 1rem;
  color: ${({ theme }) => theme.outputBarTextColor};
  position: relative;
  ${mediaQuery.hidePrint}
`

export const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
`

export default OutputBarStyled
