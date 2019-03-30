import React from 'react'
import { connect } from 'react-redux'
import { ChordStyled, ChordChartStyled, BarFretStyled, FretNumberStyled, FretStyled, StringStyled, StringStatesStyled, StringStateStyled, FingerNumberStyled } from './chord.styles'
import { doNotPlayString, barFret } from '../../chords'
import { isChordShortNameInKey, getKeyFromShortName, cleanNameForSounds } from '../../utils'
import AudioPlayer from '../audio-player/audio-player'
import soundFiles from './soundFiles'
import FavouriteChordButton from '../favourite-chord-button/favourite-chord-button'
import OutputMessage from '../output-message/output-message'
import settings from '../../settings'

const stringArray = [6, 5, 4, 3, 2, 1]

const getIsChordHigh = frets => Object.keys(frets)[0] > 2

const populateFretNumbers = frets => {
  const firstFretNumber = parseInt(Object.keys(frets).shift())
  return firstFretNumber > 2 ? [firstFretNumber, firstFretNumber+1, firstFretNumber+2, firstFretNumber+3] : [1, 2, 3, 4]
}

export const Chord = ({ selectedKeyShortName, fullName, shortName, alternativeShortName, strings = {}, frets = {} }) => {
  const shouldBeHighlighted = selectedKeyShortName ? isChordShortNameInKey(getKeyFromShortName(selectedKeyShortName), shortName) : true
  const isChordHigh = getIsChordHigh(frets)
  const firstFretNumber = Object.keys(frets).shift()
  const fretNumbers = populateFretNumbers(frets)

  return (
    <ChordStyled isHighlighted={shouldBeHighlighted}>
      <span title={fullName}>{shortName}</span> {alternativeShortName ? `(${alternativeShortName})` : ''}
      {!Object.keys(frets).length ? (
        <OutputMessage>
          This chord is in a key but has not been defined.
          Please <a href={settings.githubRepoUrl}>send an issue or open a PR on GitHub</a>.
        </OutputMessage>
      ) : (
      <>
      {cleanNameForSounds(shortName) in soundFiles && <AudioPlayer src={soundFiles[cleanNameForSounds(shortName)]} />}
      <FavouriteChordButton chordShortName={shortName} />
      <ChordChartStyled>
        <StringStatesStyled>
          {stringArray.map((stringNumber, idx) =>
            <StringState key={stringNumber} idx={idx} doNotPlayString={strings[stringNumber] === doNotPlayString} />)}
        </StringStatesStyled>
        {isChordHigh ? <FretNumberStyled>{`${firstFretNumber}fr`}</FretNumberStyled> : ''}
        {fretNumbers.map(fretNumber => <Fret key={fretNumber} fingers={frets[fretNumber]} />)}
      </ChordChartStyled>
      </>
    )}
    </ChordStyled>
  )
}

const StringState = ({ idx, doNotPlayString }) => (
  <StringStateStyled idx={idx}>
    {doNotPlayString ? 'x' : ''}
  </StringStateStyled>
)

const Fret = ({ fingers = {} }) => (
  <FretStyled>
    {fingers === barFret ? <BarFretStyled /> : null}
    {stringArray.map((stringNumber, idx) => <String key={stringNumber} idx={idx} stringNumber={stringNumber} fingerNumber={fingers !== barFret && fingers[stringNumber]} />)}
  </FretStyled>
)

const String = ({ idx, stringNumber, fingerNumber }) => (
  <StringStyled idx={idx} stringNumber={stringNumber} fingerNumber={fingerNumber}>
    {fingerNumber && <FingerNumberStyled>{fingerNumber}</FingerNumberStyled>}
  </StringStyled>
)

const mapStateToProps = ({ keys: { selectedKeyShortName }, chords: { favouritedChords } }) => ({ selectedKeyShortName, favouritedChords })

export default connect(mapStateToProps)(Chord)