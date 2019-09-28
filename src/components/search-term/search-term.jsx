import React from 'react'
import { connect } from 'react-redux'
import SearchTermStyled, { SearchTermTextStyled } from './search-term.styles'

export const SearchTerm = ({ searchTerm, searchTermVisible }) =>
  searchTerm ? (
    <SearchTermStyled searchTermVisible={searchTermVisible}>
      <SearchTermTextStyled>{searchTerm}</SearchTermTextStyled>
    </SearchTermStyled>
  ) : null

const mapStateToProps = ({ chords: { searchTerm, searchTermVisible } }) => ({
  searchTerm,
  searchTermVisible
})

export default connect(mapStateToProps)(SearchTerm)
