import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export const FooterStyled = styled.header`
  width: 100%;
  margin-top: 2rem;
  position: relative;
  ${mediaQuery.hidePrint}
`

export const Navigation = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;

  @media (max-width: ${mediaQuery.small}) {
    flex-direction: column;
  }
`

export const NavigationItem = styled.li`
  list-style: none;
  padding: 0.5rem 1rem;
`

export default FooterStyled
