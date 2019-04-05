import styled from '@emotion/styled'

const stringWidth = '1px'

export const UkuChordStyled = styled.div`
  text-align: center;
  opacity: ${({ isHighlighted }) => isHighlighted ? 1 : 0.1};
  margin: 0.5rem 0;
`

export const UkuChordChartStyled = styled.div`
  width: 40%;
  border-top: 2px solid ${({ theme }) => theme.textColor};
  position: relative;
  margin: 1rem auto 0;
`

export const FretStyled = styled.div`
  width: 100%;
  height: 2rem;
  border-bottom: ${stringWidth} solid ${({ theme }) => theme.textColor};
  position: relative;
`

export const StringStyled = styled.div`
  width: ${stringWidth};
  height: 100%;
  background: ${({ theme }) => theme.textColor};
  position: absolute;
  top: 0;
  left: ${({ idx }) => ((idx) / 3) * 100}%;
  margin-left: ${({ idx }) => idx === 0 ? 0 : '-1px'};
`

export const FingerNumberStyled = styled.div`
  border-radius: 100%;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.backgroundColor};
  position: absolute;
  left: -0.45rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  font-size: 50%;
  line-height: 0.1;
  text-align: center;
  padding-top: 0.5rem;
`

export const UkuStringStatesStyled = styled.div`
  width: 100%;
  position: absolute;
  height: 1rem;
  top: -1rem;
  left: 0;
`

export const UkuStringStateStyled = styled.div`
  position: absolute;
  top: 0;
  left: ${({ idx }) => ((idx) / 3) * 100}%;
  width: ${100 / 4}%;
  margin: -0.5rem 0 0 -0.8rem;
`

export const BarFretStyled = styled.div`
  width: calc(100% + 1rem);
  height: 0.5rem;
  background: ${({ theme }) => theme.textColor};
  border-radius: 0.5rem;
  position: absolute;
  top: 0.7rem;
  left: -0.5rem;
`

export const FretNumberStyled = styled.div`
  position: absolute;
  top: 0.4rem;
  right: -1.5rem;
  font-size: 100%;
`

export default UkuChordStyled
