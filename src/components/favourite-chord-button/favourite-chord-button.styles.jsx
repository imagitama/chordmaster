import styled from '@emotion/styled'

export const FavouriteChordButtonStyled = styled.span`
  opacity: ${({ isFavourited }) => isFavourited ? 1 : '0.2'};
  margin-left: 0.5rem;
`

export default FavouriteChordButtonStyled
