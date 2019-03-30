import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export const HeaderStyled = styled.header`
  background-color ${({ theme }) => theme.headerBackgroundColor};
  color: ${({ theme }) => theme.headerTextColor};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${mediaQuery.large}) {
    flex-direction: row;
  }
`

export const HeaderSegment = styled.div`
  padding: 0.25rem;

  @media (min-width: ${mediaQuery.large}) {
    padding: 1rem;
  }
`

export default HeaderStyled