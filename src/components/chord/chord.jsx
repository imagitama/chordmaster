import React from 'react'
import { ChordsStyled, ChordChartStyled, FretStyled, StringStyled, StringStatesStyled, StringStateStyled } from './chord.styles';
import { doNotPlayString } from '../../chords'

const stringArray = [6, 5, 4, 3, 2, 1]

export const Chords = ({ fullName, shortName, strings, frets }) => (
  <ChordsStyled>
    <span title={fullName}>{shortName}</span>
    <StringStatesStyled>
      {stringArray.map((stringNumber, idx) => <StringState key={stringNumber} idx={idx} doNotPlayString={strings[stringNumber] === doNotPlayString} />)}
    </StringStatesStyled>
    <ChordChartStyled>
      {[1, 2, 3, 4].map(fretNumber => <Fret key={fretNumber} fingers={frets[fretNumber]} />)}
    </ChordChartStyled>
  </ChordsStyled>
)

const StringState = ({ idx, doNotPlayString }) => (
  <StringStateStyled idx={idx}>
    {doNotPlayString ? 'x' : ''}
  </StringStateStyled>
)

const Fret = ({ fingers = {} }) => (
  <FretStyled>
    {stringArray.map((stringNumber, idx) => <String key={stringNumber} idx={idx} stringNumber={stringNumber} fingerNumber={fingers[stringNumber]} />)}
  </FretStyled>
)

const String = ({ idx, stringNumber, fingerNumber }) => (
  <StringStyled idx={idx} stringNumber={stringNumber} fingerNumber={fingerNumber} />
)

export default Chords