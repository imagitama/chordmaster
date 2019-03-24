import styled from '@emotion/styled'

export const FavouriteChordButtonStyled = styled.span(({ isFavourited }) => ({
  opacity: isFavourited ? 1 : '0.2',
  marginLeft: '0.5rem'
}))

export default FavouriteChordButtonStyled
