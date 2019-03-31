import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '../button/button'
import { hideWelcomeMessage } from '../../ducks/app/actions'
import OutputBar from '../output-bar/output-bar'
import settings from '../../settings'

export const WelcomeMessage = ({ hideWelcomeMessage, isWelcomeMessageHidden }) => isWelcomeMessageHidden === false ? (
  <OutputBar>
    Welcome to the ChordMaster app. If you would like a feature or a chord please click Feedback above or visit the <a href={settings.githubRepoUrl}>GitHub repo</a>. Thank you.
    <br />
    <Button onClick={hideWelcomeMessage}>Hide</Button>
  </OutputBar>
) : null

const mapStateToProps = ({ app: { isWelcomeMessageHidden } }) => ({
  isWelcomeMessageHidden
})

const mapDispatchToProps = dispatch => bindActionCreators({ hideWelcomeMessage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMessage)
