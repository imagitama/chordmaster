import styled from '@emotion/styled'

export const DropdownWrapperStyled = styled.div`
  position: relative;
  background: ${({ theme }) => theme.buttonBackgroundColor};
`

export const IconStyled = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.3rem;
  z-index: 1;
  color: ${({ theme }) => theme.buttonTextColor};
`

export const DropdownStyled = styled.select`
  appearance: none;
  border: none;
  padding: 0.25rem 1.5rem 0.25rem 0.5rem;
  background: none;
  color: ${({ theme }) => theme.buttonTextColor};
  position: relative;
  z-index: 10;
`

export const DropdownOptionStyled = styled.option`
  background: ${({ theme }) => theme.buttonBackgroundColor};
`

export default DropdownStyled
