import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { parse } from 'query-string'
import Chords from '../../components/chords/chords'
import SongsForKey from '../../components/songs-for-key/songs-for-key'
import { selectKey } from '../../ducks/keys/actions'
import { doesKeyShortNameExist } from '../../utils'

const HomeContainer = ({ search, selectKey }) => {
  const { key: providedKeyShortName } = parse(search)

  useEffect(() => {
    if (providedKeyShortName && doesKeyShortNameExist(providedKeyShortName)) {
      selectKey(providedKeyShortName)
    }
  }, [search])

  return (
    <>
      <Chords />
      <SongsForKey />
    </>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectKey }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer)
