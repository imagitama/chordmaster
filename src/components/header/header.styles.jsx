import styled from '@emotion/styled'
import { css } from '@emotion/core'
import mediaQuery from '../../mediaQueries'

export const HeaderStyled = styled.header()

export const headerChildStyle = ({ theme }) => css`
  color: ${theme.headerTextColor};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

export const HeaderSegment = styled.div`
  padding: 0.25rem;
  ${({ primary }) => primary ? 'margin-right: auto;' : null}

  @media (min-width: ${mediaQuery.large}) {
    padding: 1rem;
  }
`

export const PrimaryHeaderStyled = styled.div`
  ${headerChildStyle}
  background-color: ${({ theme }) => theme.headerBackgroundColor};
`

export const SecondaryHeaderStyled = styled.div`
  ${headerChildStyle}
  background-color: ${({ theme }) => theme.headerSecondaryBackgroundColor};
`

export default HeaderStyled