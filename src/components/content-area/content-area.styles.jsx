import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export default styled.section`
  max-width: 768px;
  margin: 0 auto;
  ${({ noPrint }) => noPrint ? mediaQuery.hidePrint : ''}
`