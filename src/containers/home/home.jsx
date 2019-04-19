import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { parse } from 'query-string'
import Filters from '../../components/filters/filters'
import SearchInput from '../../components/search-input/search-input'
import SearchTerm from '../../components/search-term/search-term'
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
      <Filters />
      <SearchInput />
      <SearchTerm />
      <Chords />
      <SongsForKey />
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectKey }, dispatch)

export default connect(null, mapDispatchToProps)(HomeContainer)