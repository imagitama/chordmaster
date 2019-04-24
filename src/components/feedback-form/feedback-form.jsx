import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hideFeedbackForm } from '../../ducks/app/actions'
import Button from '../button/button'
import TextInput from '../text-input/text-input'
import OutputBar from '../output-bar/output-bar'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const FeedbackForm = ({ isFeedbackFormVisible, hideFeedbackForm }) => {
  if (!isFeedbackFormVisible) {
    return null
  }

  const [feedbackTextInput, setFeedbackTextInput] = useState('')

  const submitFeedback = () => {
    if (!feedbackTextInput) {
      return
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'feedback', message: feedbackTextInput })
    })
      .then(() => {
        console.log('Successfully submitted feedback')
        hideFeedbackForm()
      })
      .catch(error => {
        console.error('Error submitting feedback', error)
        hideFeedbackForm()
      })

    hideFeedbackForm()
  }
   
  return (
    <OutputBar onCloseClick={hideFeedbackForm}>
      <p>
        Want a feature? Want a chord added? Please let me know. Please include your email!
      </p>
      <TextInput onChange={event => setFeedbackTextInput(event.target.value)} placeholder="Your message" onFocus={e => e.stopPropagation()} />
      &nbsp;
      <Button onClick={submitFeedback}>Submit</Button>
    </OutputBar>
  )
}

const mapStateToProps = ({ app: { isFeedbackFormVisible } }) => ({
  isFeedbackFormVisible
})

const mapDispatchToProps = dispatch => bindActionCreators({ hideFeedbackForm }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm)
