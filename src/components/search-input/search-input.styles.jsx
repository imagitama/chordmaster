import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export const SearchInputStyled = styled.input`
  position: absolute;
  top: -1000px;
`

export const SearchInputLabelStyled = styled.div`
  color: ${({ theme }) => theme.searchInputTextColor};
  font-size: 80%;
  white-space: nowrap;

  @media (max-width: ${mediaQuery.small}) {
    text-align: center;
  }
`

export default SearchInputStyled
