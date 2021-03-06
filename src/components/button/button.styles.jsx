import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  appearance: none;
  border: none;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttonTextColor};
`

export default ButtonStyled
