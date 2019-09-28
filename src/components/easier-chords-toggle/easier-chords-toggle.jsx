import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToggleInput from '../toggle-input/toggle-input'
import { toggleEasierChords } from '../../ducks/songs/actions'

export const EasierChordsToggle = ({
  easierChordsEnabled,
  toggleEasierChords
}) => (
  <React.Fragment>
    <ToggleInput
      onChange={toggleEasierChords}
      label="Easier chords"
      isEnabled={easierChordsEnabled}
    />
  </React.Fragment>
)

const mapStateToProps = ({ songs: { easierChordsEnabled } }) => ({
  easierChordsEnabled
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleEasierChords }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EasierChordsToggle)
