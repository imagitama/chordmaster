import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dropdown, { DropDownOption } from '../dropdown/dropdown'
import { selectChordProgression } from '../../ducks/keys/actions'
import { getKeyFromShortName } from '../../utils'

export const ChordProgressionSelector = ({ selectedKeyShortName, selectedChordProgressionIdx, selectChordProgression }) => {
  if (!selectedKeyShortName) {
    return null
  }

  const chordProgressions = getKeyFromShortName(selectedKeyShortName).chordProgressions

  if (!chordProgressions) {
    return null
  }

  return (
    <React.Fragment>
      <span>Chord progression: </span>
      <Dropdown onChange={event => selectChordProgression(event.target.value)} value={selectedChordProgressionIdx === null ? '' : selectedChordProgressionIdx}>
        <DropDownOption value="" label="(none)" />
        {chordProgressions.map((chordProgression, idx) => <DropDownOption key={idx} value={idx} label={chordProgression.join(' ')} />)}
      </Dropdown>
    </React.Fragment>
  )
}

const mapStateToProps = ({ keys: { selectedKeyShortName, selectedChordProgressionIdx } }) => ({
  selectedKeyShortName,
  selectedChordProgressionIdx
})

const mapDispatchToProps = dispatch => bindActionCreators({ selectChordProgression }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChordProgressionSelector)
