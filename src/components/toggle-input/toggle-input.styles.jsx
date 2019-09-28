import styled from '@emotion/styled'

export const ToggleInputStyled = styled.input`
  appearance: none;
  background: ${({ theme }) => theme.buttonBackgroundColor};
  width: 1rem;
  height: 1rem;
  position: relative;
  vertical-align: middle;
  margin: 0 0.5rem 0 0;
  color: ${({ theme }) => theme.buttonTextColor};

  :checked {
    ::before {
      content: '\f00d';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }
`

export default ToggleInputStyled
