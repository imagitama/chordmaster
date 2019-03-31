import styled from '@emotion/styled'

export const SearchTermStyled = styled.div(({ searchTermVisible, theme }) => ({
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  fontSize: '200%',
  opacity: searchTermVisible ? 1 : '0.1',
  background: searchTermVisible ? 'rgba(0, 0, 0, 0.5)' : '',
  color: searchTermVisible ? theme.backgroundColor : '',
}))

export const SearchTermTextStyled = styled.div`
  padding: 0.5rem 1rem;
`

export default SearchTermStyled
