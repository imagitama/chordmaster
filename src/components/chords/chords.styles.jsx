import styled from '@emotion/styled'

export const ChordsStyled = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  '@media (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(6, 1fr)'
  }
})

export default ChordsStyled