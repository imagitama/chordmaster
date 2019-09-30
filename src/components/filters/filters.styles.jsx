import styled from '@emotion/styled'
import mediaQuery from '../../mediaQueries'

export const FiltersStyled = styled.div`
  display: flex;
  flex-direction: row;
  ${mediaQuery.hidePrint}

  @media (max-width: ${mediaQuery.small}) {
    flex-direction: column;
  }
`

export const Filter = styled.div`
  padding: 0 1rem;

  @media (max-width: ${mediaQuery.small}) {
    padding: 0.5rem 0;
  }

  :empty {
    padding: 0;
  }
`

export default FiltersStyled
