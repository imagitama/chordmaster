import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseBaseFret, toggleDoNotPlayString, toggleFingerOnString, increaseFingerOnString } from '../../ducks/chord-creator/actions'
import ContentArea from '../../components/content-area/content-area'
import { Chord } from '../../components/chord/chord-creator-chord'
import { ChordsWrapper as Chords } from '../../components/chords/chords'
import { barFret } from '../../chords'

const getJsonForChordCreator = (strings, frets) => `{
  strings: {
    ${Object.entries(strings).map(([stringNumber, value]) => `${stringNumber}: ${value === null ? `''` : 'doNotPlayString'}`).join(',\n    ')}
  },
  frets: {
    ${Object.entries(frets).map(([fretNumber, fingers]) => `${fretNumber}: ${fingers === barFret ? 'barFret' : `{
      ${Object.entries(fingers)
        .filter(([stringNumber, fingerNumber]) => fingerNumber !== null)
        .map(([stringNumber, fingerNumber]) => `${stringNumber}: ${fingerNumber}`).join('\n      ')}
    }`}`
    ).join(',\n    ')}
  }
}`

const ChordCreator = ({ strings, frets, increaseBaseFret, toggleDoNotPlayString, toggleFingerOnString, increaseFingerOnString }) => {
  const onClickFretString = (fretNumber, stringNumber) => frets[fretNumber][stringNumber] ? increaseFingerOnString(fretNumber, stringNumber) : toggleFingerOnString(fretNumber, stringNumber)

  return (
    <ContentArea>
      <h1>Chord Creator</h1>
      <h2>Purpose</h2>
      <p>
        It allows you to define a new chord by clicking on a chord chart.
      </p>
      <h2>Instructions</h2>
      <p>
        Click on o/x to disable or enable a string.
      </p>
      <p>
        Click the fret number (1fr, 5fr, etc.) to increase the first fret number. Limited to 10 frets then goes back to 1.
      </p>
      <p>
        Click a string in a fret to add a finger to it or increase the finger number. It will reset to no finger after finger 6.
      </p>
      <p>
        Add finger 1 to each string in a fret to make it a bar fret.
      </p>
      <h2>Chart</h2>
      <Chords>
        <Chord strings={strings} frets={frets} onClickTopString={toggleDoNotPlayString} onClickFretString={onClickFretString} onClickFretNumber={increaseBaseFret} />
      </Chords>
      <h2>Export</h2>
      <p>
        Copy this JavaScript into src/chords.js to add it to our code definitions.
      </p>
      <textarea disabled value={getJsonForChordCreator(strings, frets)} style={{ height: '10rem', width: '100%' }}> 
      </textarea>
    </ContentArea>
  )
}

const mapStateToProps = ({ chordCreator: { strings, frets } }) => ({ strings, frets })

const mapDispatchToProps = dispatch => bindActionCreators({ increaseBaseFret, toggleDoNotPlayString, toggleFingerOnString, increaseFingerOnString }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChordCreator)