import styled from '@emotion/styled'

const stringColour = '#000'
const stringWidth = '1px'

export const ChordStyled = styled.div(({ isHighlighted }) => ({
  textAlign: 'center',
  opacity: isHighlighted ? 1 : 0.1,
  margin: '0.5rem 0'
}))

export const ChordChartStyled = styled.div({
  width: '75%',
  borderTop: `2px solid ${stringColour}`,
  position: 'relative',
  margin: '1rem auto 0'
})

export const FretStyled = styled.div({
  width: '100%',
  height: '2rem',
  borderBottom: `${stringWidth} solid ${stringColour}`,
  position: 'relative'
})

export const StringStyled = styled.div(({ idx }) => ({
  width: stringWidth,
  height: '100%',
  background: stringColour,
  position: 'absolute',
  top: 0,
  left: `${((idx) / 5) * 100}%`,
  marginLeft: idx === 0 ? 0 : '-1px'
}))

export const FingerNumberStyled = styled.div({
  borderRadius: '100%',
  background: stringColour,
  color: 'white',
  position: 'absolute',
  left: '-0.45rem',
  top: '0.5rem',
  width: '1rem',
  height: '1rem',
  fontSize: '50%',
  lineHeight: '0.1',
  textAlign: 'center',
  paddingTop: '0.5rem'
})

export const StringStatesStyled = styled.div({
  width: '100%',
  position: 'absolute',
  height: '1rem',
  top: '-1rem',
  left: 0
})

export const StringStateStyled = styled.div(({ idx }) => ({
  position: 'absolute',
  top: 0,
  left: `${((idx) / 5) * 100}%`,
  width: `${100 / 6}%`,
  margin: '-0.5rem 0 0 -0.8rem'
}))

export const BarFretStyled = styled.div({
  width: 'calc(100% + 1rem)',
  height: '0.5rem',
  background: 'black',
  borderRadius: '0.5rem',
  position: 'absolute',
  top: '0.7rem',
  left: '-0.5rem',
})

export const FretNumberStyled = styled.div({
  position: 'absolute',
  top: '0.4rem',
  right: '-1.5rem',
  fontSize: '75%'
})

export default ChordStyled