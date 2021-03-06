import styled from '@emotion/styled'

export const SearchTermStyled = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  fontsize: 200%;
  opacity: ${({ searchTermVisible }) => (searchTermVisible ? 1 : '0.1')};
  background: ${({ searchTermVisible }) =>
    searchTermVisible ? 'rgba(0, 0, 0, 0.5)' : ''};
  color: ${({ searchTermVisible, theme }) =>
    searchTermVisible ? theme.searchTermTextColor : ''};
`

export const SearchTermTextStyled = styled.div`
  padding: 0.5rem 1rem;
`

export default SearchTermStyled
