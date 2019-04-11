import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export const FooterStyled = styled.header`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.footerBackgroundColor};
  position: relative;
  ${mediaQuery.hidePrint}
`

export const FooterSegment = styled.div`
  padding: 1rem;
`

export default FooterStyled