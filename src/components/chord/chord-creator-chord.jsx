import React from 'react'
import { EmptyFingerNumber, ChordStyled, ChordChartStyled, BarFretStyled, FretNumberStyled, FretStyled, StringStyled, StringStatesStyled, StringStateStyled, FingerNumberStyled } from './chord.styles'
import { doNotPlayString, barFret } from 'guitar-chord-definitions/dist/chords'
import { cleanNameForSounds } from '../../utils'
import AudioPlayer from '../audio-player/audio-player'
import soundFiles from './soundFiles'

const stringArray = [6, 5, 4, 3, 2, 1]

const populateFretNumbers = frets => {
  const firstFretNumber = parseInt(Object.keys(frets)[0])
  return [firstFretNumber, firstFretNumber+1, firstFretNumber+2, firstFretNumber+3]
}

export const Chord = ({ fullName = '', shortName = '', alternativeShortName = '', strings = {}, frets = {}, onClickTopString, onClickFretString, onClickFretNumber }) => {
  const firstFretNumber = Object.keys(frets).shift()
  const fretNumbers = populateFretNumbers(frets)

  return (
    <ChordStyled isHighlighted={true}>
      <span title={fullName}>{shortName}</span> {alternativeShortName ? `(${alternativeShortName})` : ''}
      {shortName && cleanNameForSounds(shortName) in soundFiles && <AudioPlayer src={soundFiles[cleanNameForSounds(shortName)]} />}
      <ChordChartStyled>
        <StringStatesStyled>
          {stringArray.map((stringNumber, idx) =>
            <StringState key={stringNumber} idx={idx} doNotPlayString={strings[stringNumber] === doNotPlayString} onClick={() => onClickTopString(stringNumber)} />)}
        </StringStatesStyled>
        {<FretNumberStyled onClick={onClickFretNumber}>{`${firstFretNumber}fr`}</FretNumberStyled>}
        {fretNumbers.map(fretNumber => <Fret key={fretNumber} fingers={frets[fretNumber]} onClick={stringNumber => onClickFretString(fretNumber, stringNumber)} />)}
      </ChordChartStyled>
    </ChordStyled>
  )
}

const StringState = ({ idx, doNotPlayString, onClick }) => (
  <StringStateStyled idx={idx} onClick={onClick}>
    {doNotPlayString ? 'x' : 'o'}
  </StringStateStyled>
)

const Fret = ({ fingers = {}, onClick }) => (
  <FretStyled>
    {fingers === barFret ? <BarFretStyled /> : null}
    {stringArray.map((stringNumber, idx) => <String key={stringNumber} idx={idx} stringNumber={stringNumber} fingerNumber={fingers !== barFret && fingers[stringNumber]} onClick={onClick} />)}
  </FretStyled>
)

const String = ({ idx, stringNumber, fingerNumber, onClick }) => (
  <StringStyled idx={idx} stringNumber={stringNumber} fingerNumber={fingerNumber} onClick={() => onClick(stringNumber)}>
    {fingerNumber ? <FingerNumberStyled>{fingerNumber}</FingerNumberStyled> : <EmptyFingerNumber />}
  </StringStyled>
)

export default Chord