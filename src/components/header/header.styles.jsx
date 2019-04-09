import styled from '@emotion/styled'
import { css } from '@emotion/core'
import mediaQuery from '../../mediaQueries'
import A from '../anchor/anchor'

export const HeaderStyled = styled.header`
  overflow: hidden;
`

export const headerChildStyle = ({ theme }) => css`
  color: ${theme.headerTextColor};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

export const HeaderSegment = styled.div`
  padding: 0.25rem;

  @media (min-width: ${mediaQuery.large}) {
    padding: 1rem;
  }
`

export const NavigationSegment = styled(HeaderSegment)`
  margin-right: auto;
`

export const LogoSegment = styled.div`
  position: relative;
  color: ${({ theme }) => theme.logoTextColor};
  overflow: hidden;

  ::before {
    content: " ";
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.logoBackgroundColor};
    right: 10%;
    z-index: 1;
  }

  @media (max-width: ${mediaQuery.small}) {
    min-width: 9rem;
  }
`

export const LogoLink = styled(A)`
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
`

export const LogoLabel = styled.div`
  position: relative;
  z-index: 10;
  padding: 0 2rem 0 1rem;
  top: 50%;
  transform: translateY(-50%);
`

export const LogoBackground = styled.div`
  width: 20%;
  height: 150%;
  position: absolute;
  top: -50%;
  right: 10%;
  transform: rotate(10deg);
  background: ${({ theme }) => theme.logoBackgroundColor};
  z-index: 1;
`

export const PrimaryHeaderStyled = styled.div`
  ${headerChildStyle}
  background-color: ${({ theme }) => theme.headerBackgroundColor};
`

export const SecondaryHeaderStyled = styled.div`
  ${headerChildStyle}
  background-color: ${({ theme }) => theme.headerSecondaryBackgroundColor};
`

export const Navigation = styled.ul`
  margin: 0;
  padding: 0;
`

export const NavigationLink = styled.li`
  margin: 0;
  padding: 0;
  display: inline-block;
  padding-right: 1rem;

  @media (max-width: ${mediaQuery.small}) {
    font-size: 75%;
    padding-right: 0.5rem;
  }
`

export default HeaderStyled