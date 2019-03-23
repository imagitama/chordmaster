import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToggleInput from '../toggle-input/toggle-input'
import { toggleMinorMajorChordsOnly } from '../../ducks/chords/actions'

export const MajorMinorChordsOnlyToggle = ({ toggleMinorMajorChordsOnly, majorMinorChordsOnly }) => (
  <ToggleInput onChange={toggleMinorMajorChordsOnly} label="Major and minor only" isEnabled={majorMinorChordsOnly} />
)

const mapStateToProps = ({ chords: { majorMinorChordsOnly } }) => ({
  majorMinorChordsOnly
})

const mapDispatchToProps = dispatch => bindActionCreators({ toggleMinorMajorChordsOnly }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MajorMinorChordsOnlyToggle
  )
