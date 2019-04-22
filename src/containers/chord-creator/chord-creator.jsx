import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseBaseFret, toggleDoNotPlayString, toggleFingerOnString, increaseFingerOnString } from '../../ducks/chord-creator/actions'
import ContentArea from '../../components/content-area/content-area'
import { Chord } from '../../components/chord/chord-creator-chord'
import { ChordsWrapper as Chords } from '../../components/chords/chords'

const ChordCreator = ({ strings, frets, increaseBaseFret, toggleDoNotPlayString, toggleFingerOnString, increaseFingerOnString }) => {
  const onClickFretString = (fretNumber, stringNumber) => frets[fretNumber][stringNumber] ? increaseFingerOnString(fretNumber, stringNumber) : toggleFingerOnString(fretNumber, stringNumber)

  return (
    <ContentArea>
      <Chords>
        <Chord strings={strings} frets={frets} onClickTopString={toggleDoNotPlayString} onClickFretString={onClickFretString} onClickFretNumber={increaseBaseFret} />
      </Chords>
    </ContentArea>
  )
}

const mapStateToProps = ({ chordCreator: { strings, frets } }) => ({ strings, frets })

const mapDispatchToProps = dispatch => bindActionCreators({ increaseBaseFret, toggleDoNotPlayString, toggleFingerOnString, increaseFingerOnString }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChordCreator)