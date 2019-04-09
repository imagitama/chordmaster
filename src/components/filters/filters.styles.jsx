import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export const Filter = styled.div`
  padding: 0.25rem;

  @media (min-width: ${mediaQuery.large}) {
    padding: 1rem;
  }
`

export const FiltersStyled = styled.div`
  color: ${({ theme }) => theme.filtersTextColor};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${({ theme }) => theme.filtersBackgroundColor};
`

export default FiltersStyled
