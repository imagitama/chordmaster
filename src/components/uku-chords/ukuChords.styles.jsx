import styled from '@emotion/styled'

export const UkuChordsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

export default UkuChordsStyled
