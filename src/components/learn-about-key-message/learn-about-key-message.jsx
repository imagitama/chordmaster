import React from 'react'
import { connect } from 'react-redux'
import A from './learn-about-key-message.styles'

const LearnAboutKeyMessage = ({ selectedKeyShortName }) => {
  if (!selectedKeyShortName) {
    return null
  }

  return (
    <A href={`/key/${selectedKeyShortName}`} isInternal context="Home">
      Click here to learn more about the key {selectedKeyShortName}
    </A>
  )
}

export default connect(({ keys }) => ({
  selectedKeyShortName: keys.selectedKeyShortName
}))(LearnAboutKeyMessage)
