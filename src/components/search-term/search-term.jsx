import React from 'react'
import { connect } from 'react-redux'
import SearchTermStyled from './search-term.styles'

export const SearchTerm = ({ searchTerm, searchTermVisible }) => searchTerm && searchTermVisible ? (
  <SearchTermStyled>
    {searchTerm}
  </SearchTermStyled>
) : null

const mapStateToProps = ({ chords: { searchTerm, searchTermVisible } }) => ({
  searchTerm,
  searchTermVisible
})

export default connect(mapStateToProps)(SearchTerm)
