import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { parse } from 'query-string'
import Chords from '../../components/chords/chords'
import { selectKey } from '../../ducks/keys/actions'
import { doesKeyShortNameExist } from '../../utils'
import LearnAboutKeyMessage from '../../components/learn-about-key-message/learn-about-key-message'

const HomeContainer = ({ search, selectKey, selectedKeyShortName }) => {
  const { key: providedKeyShortName } = parse(search)

  useEffect(() => {
    if (providedKeyShortName && doesKeyShortNameExist(providedKeyShortName)) {
      selectKey(providedKeyShortName)
    }
  }, [search])

  return (
    <Fragment>
      <Chords />
      <LearnAboutKeyMessage />
    </Fragment>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectKey }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer)
