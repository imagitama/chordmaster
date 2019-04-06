import React from 'react'
import { connect } from 'react-redux'
import { UkuChordStyled, UkuChordChartStyled, BarFretStyled, FretNumberStyled, FretStyled, StringStyled, UkuStringStatesStyled, UkuStringStateStyled, FingerNumberStyled } from '../uku-chord/ukuChord.styles'
import { doNotPlayString, barFret } from '../../chords'
import { isChordShortNameInKey, getKeyFromShortName, cleanNameForSounds } from '../../utils'
import AudioPlayer from '../audio-player/audio-player'
import soundFiles from './soundFiles'
import FavouriteChordButton from '../favourite-chord-button/favourite-chord-button'
import OutputMessage from '../output-message/output-message'
import settings from '../../settings'

const stringArray = [4, 3, 2, 1]

const getIsChordHigh = frets => Object.keys(frets)[0] > 3

const populateFretNumbers = frets => {
  const firstFretNumber = parseInt(Object.keys(frets).shift())
  return firstFretNumber > 3 ? [firstFretNumber, firstFretNumber+1, firstFretNumber+2, firstFretNumber+3] : [1, 2, 3, 4]
}

const getRomanNumeral = (chordShortName, selectedKeyShortName) => {
  if (!selectedKeyShortName) {
    return
  }

  const chordsInKey = getKeyFromShortName(selectedKeyShortName).chords

  const chord = Object.entries(chordsInKey).find(([romanNumeral, chordShortNameUnderTest]) => chordShortNameUnderTest === chordShortName)

  // This happens when you show every chord when filtering by key
  if (!chord) {
    return
  }

  return chord[0]
}

export const UkuChord = ({ selectedKeyShortName, fullName, shortName, alternativeShortName, strings = {}, frets = {} }) => {
  const shouldBeHighlighted = selectedKeyShortName ? isChordShortNameInKey(getKeyFromShortName(selectedKeyShortName), shortName) : true
  const isChordHigh = getIsChordHigh(frets)
  const firstFretNumber = Object.keys(frets).shift()
  const fretNumbers = populateFretNumbers(frets)
  const romanNumeral = getRomanNumeral(shortName, selectedKeyShortName)

  return (
    <UkuChordStyled isHighlighted={shouldBeHighlighted}>
      {romanNumeral && `${romanNumeral} - `}
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
      <UkuChordChartStyled>
        <UkuStringStatesStyled>
          {stringArray.map((stringNumber, idx) =>
            <StringState key={stringNumber} idx={idx} doNotPlayString={strings[stringNumber] === doNotPlayString} />)}
        </UkuStringStatesStyled>
        {isChordHigh ? <FretNumberStyled>{`${firstFretNumber}fr`}</FretNumberStyled> : ''}
        {fretNumbers.map(fretNumber => <Fret key={fretNumber} fingers={frets[fretNumber]} />)}
      </UkuChordChartStyled>
      </>
    )}
    </UkuChordStyled>
  )
}

const StringState = ({ idx, doNotPlayString }) => (
  <UkuStringStateStyled idx={idx}>
    {doNotPlayString ? 'x' : ''}
  </UkuStringStateStyled>
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

export default connect(mapStateToProps)(UkuChord)
