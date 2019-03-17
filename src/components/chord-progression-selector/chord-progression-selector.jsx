import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dropdown, { DropDownOption } from '../dropdown/dropdown'
import { selectChordProgression } from '../../ducks/keys/actions'
import { getKeyFromShortName } from '../../utils'

const getChordDefinitionsForKeyShortName = keyShortName => {
  const key = getKeyFromShortName(keyShortName)
  return key.chordProgressions
}

export const ChordProgressionSelector = ({ selectedKeyShortName, selectedChordProgressionIdx, selectChordProgression }) => 
  selectedKeyShortName && 
  (
    <React.Fragment>
      <span>Chord progression: </span>
      <Dropdown onChange={event => selectChordProgression(event.target.value)} value={selectedChordProgressionIdx === null ? '' : selectedChordProgressionIdx}>
        <DropDownOption value="" label="(none)" />
        {getChordDefinitionsForKeyShortName(selectedKeyShortName).map((chordProgression, idx) => <DropDownOption key={idx} value={idx} label={chordProgression.join(' ')} />)}
      </Dropdown>
    </React.Fragment>
  )

const mapStateToProps = ({ keys: { selectedKeyShortName, selectedChordProgressionIdx } }) => ({
  selectedKeyShortName,
  selectedChordProgressionIdx
})

const mapDispatchToProps = dispatch => bindActionCreators({ selectChordProgression }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChordProgressionSelector)
