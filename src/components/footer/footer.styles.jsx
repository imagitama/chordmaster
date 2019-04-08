import styled from '@emotion/styled'

export const FooterStyled = styled.header`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.footerBackgroundColor}
`

export const FooterSegment = styled.div`
  padding: 1rem;
`

export default FooterStyled