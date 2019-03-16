import styled from '@emotion/styled'

const stringColour = '#000'
const stringWidth = '0.1rem'
const chordChartWidth = '10rem'

export const ChordStyled = styled.div(({ isHighlighted }) => ({
  width: chordChartWidth,
  textAlign: 'center',
  margin: '2rem',
  opacity: isHighlighted ? 1 : 0.1
}))

export const ChordChartStyled = styled.div({
  width: chordChartWidth,
  borderTop: `0.2rem solid ${stringColour}`,
  position: 'relative'
})

export const FretStyled = styled.div({
  width: '100%',
  height: '2rem',
  borderBottom: `${stringWidth} solid ${stringColour}`,
  position: 'relative'
})

export const StringStyled = styled.div(({ idx, fingerNumber }) => ({
  width: stringWidth,
  height: '100%',
  background: stringColour,
  position: 'absolute',
  top: 0,
  left: `${((idx) / 5) * 100}%`,
  marginLeft: '-0.1rem',
  ':before': fingerNumber ? {
    content: `"${fingerNumber}"`,
    borderRadius: '100%',
    background: stringColour,
    border: `0.5rem solid ${stringColour}`,
    color: 'white',
    position: 'absolute',
    left: '-0.45rem',
    top: '0.5rem',
    width: 0,
    height: 0,
    fontSize: '50%',
    lineHeight: '0.1',
    textAlign: 'center'
  } : null
}))

export const StringStatesStyled = styled.div({
  width: '100%',
  position: 'relative',
  height: '1rem'
})

export const StringStateStyled = styled.div(({ idx, doNotPlayString }) => ({
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
  top: 0,
  right: '-2rem'
})

export default ChordStyled