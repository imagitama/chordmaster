import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToggleInput from '../toggle-input/toggle-input'
import { toggleMinorMajorChordsOnly } from '../../ducks/chords/actions'
import MajorMinorChordsOnlyToggleStyled from './major-minor-chords-only-toggle.styles'

export const MajorMinorChordsOnlyToggle = ({ toggleMinorMajorChordsOnly, majorMinorChordsOnly, selectedKeyShortName }) => (
  <MajorMinorChordsOnlyToggleStyled isKeySelected={selectedKeyShortName !== ''}>
    <ToggleInput onChange={toggleMinorMajorChordsOnly} label="Common chords only" isEnabled={majorMinorChordsOnly} />
  </MajorMinorChordsOnlyToggleStyled>
)

const mapStateToProps = ({ chords: { majorMinorChordsOnly }, keys: { selectedKeyShortName } }) => ({
  majorMinorChordsOnly,
  selectedKeyShortName
})

const mapDispatchToProps = dispatch => bindActionCreators({ toggleMinorMajorChordsOnly }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MajorMinorChordsOnlyToggle
  )
