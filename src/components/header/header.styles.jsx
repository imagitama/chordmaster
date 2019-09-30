import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'
import A from '../anchor/anchor'

export const HeaderStyled = styled.header`
  display: flex;
  overflow-x: auto;
  ${mediaQuery.hidePrint}

  @media (max-width: ${mediaQuery.small}) {
    flex-direction: column;
  }
`

export const Logo = styled(A)`
  text-decoration: none;
  font-weight: bold;
`

export const ReturnToMainAppLink = styled(A)``

export default HeaderStyled
