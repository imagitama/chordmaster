import React from 'react'
import { ChordsStyled, ChordChartStyled, BarFretStyled, FretNumberStyled, FretStyled, StringStyled, StringStatesStyled, StringStateStyled } from './chord.styles';
import { doNotPlayString, barFret } from '../../chords'

const stringArray = [6, 5, 4, 3, 2, 1]

const getIsChordHigh = frets => {
  const keys = Object.keys(frets)

  const lastKey = keys[keys.length - 1]

  return lastKey > 4
}

export const Chords = ({ fullName, shortName, alternativeShortName, strings = {}, frets }) => {
  const isChordHigh = getIsChordHigh(frets)
  const firstFretNumber = Object.keys(frets).shift()

  return (
    <ChordsStyled>
      <span title={fullName}>{shortName}</span> {alternativeShortName ? `(${alternativeShortName})` : ''}
      <StringStatesStyled>
        {stringArray.map((stringNumber, idx) => <StringState key={stringNumber} idx={idx} doNotPlayString={strings[stringNumber] === doNotPlayString} />)}
      </StringStatesStyled>
      <ChordChartStyled>
        {isChordHigh ? <FretNumberStyled>{`${firstFretNumber}fr`}</FretNumberStyled> : ''}
        {[1, 2, 3, 4].map(fretNumber => <Fret key={fretNumber} fingers={frets[isChordHigh ? fretNumber + 3 : fretNumber]} />)}
      </ChordChartStyled>
    </ChordsStyled>
  )
}

const StringState = ({ idx, doNotPlayString }) => (
  <StringStateStyled idx={idx}>
    {doNotPlayString ? 'x' : ''}
  </StringStateStyled>
)

const Fret = ({ fingers = {}, isChordHigh = false, fretNumber }) => (
  <FretStyled>
    {fingers === barFret ? <BarFretStyled /> : null}
    {stringArray.map((stringNumber, idx) => <String key={stringNumber} idx={idx} stringNumber={stringNumber} fingerNumber={fingers !== barFret && fingers[stringNumber]} />)}
  </FretStyled>
)

const String = ({ idx, stringNumber, fingerNumber }) => (
  <StringStyled idx={idx} stringNumber={stringNumber} fingerNumber={fingerNumber} />
)

export default Chords