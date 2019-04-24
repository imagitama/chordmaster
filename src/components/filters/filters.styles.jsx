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
  padding: 1rem;

  @media (max-width: ${mediaQuery.small}) {
    padding: 0.25rem 1rem;
  }

  :empty { 
    padding: 0;
  }
`

export default FiltersStyled
