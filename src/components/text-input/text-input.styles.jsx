import styled from '@emotion/styled'

export const TextInputStyled = styled.input`
  appearance: none;
  border: none;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttonTextColor};
  width: 50%;
`

export default TextInputStyled
