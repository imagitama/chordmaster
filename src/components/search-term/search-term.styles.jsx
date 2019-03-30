import styled from '@emotion/styled'

export const SearchTermStyled = styled.div(({ searchTermVisible }) => ({
  transform: 'translate(-25%, -25%)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  fontSize: '200%',
  opacity: searchTermVisible ? 1 : '0.1'
}))

export default SearchTermStyled
