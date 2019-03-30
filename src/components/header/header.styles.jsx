import styled from '@emotion/styled'

export const HeaderStyled = styled.header(({ theme }) => ({
  background: theme.headerBackgroundColor,
  color: theme.backgroundColor,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}))

export const HeaderSegment = styled.div({
  padding: '1rem'
})

export default HeaderStyled