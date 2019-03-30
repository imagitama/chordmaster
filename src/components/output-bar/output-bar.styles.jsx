import styled from '@emotion/styled'

export const OutputBarStyled = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.outputBarBackgroundColor};
  color: ${({ theme }) => theme.outputBarTextColor};
`

export default OutputBarStyled