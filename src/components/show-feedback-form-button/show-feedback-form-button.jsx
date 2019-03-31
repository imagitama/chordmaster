import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '../button/button'
import { showFeedbackForm } from '../../ducks/app/actions'

export const ShowFeedbackFormButton = ({ showFeedbackForm }) => (
  <Button onClick={() => showFeedbackForm()}>Feedback</Button>
)

const mapDispatchToProps = dispatch => bindActionCreators({ showFeedbackForm }, dispatch)

export default connect(null, mapDispatchToProps)(ShowFeedbackFormButton)
