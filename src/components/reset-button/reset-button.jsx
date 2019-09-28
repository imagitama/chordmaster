import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '../button/button'
import { resetChords } from '../../ducks/chords/actions'
import { resetKeys } from '../../ducks/keys/actions'

export const ResetButton = ({ resetChords, resetKeys }) => (
  <Button onClick={() => resetChords() && resetKeys()}>Reset</Button>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators({ resetChords, resetKeys }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(ResetButton)
