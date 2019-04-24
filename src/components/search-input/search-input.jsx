import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSearchTerm, showSearchTerm, hideSearchTerm } from '../../ducks/chords/actions'
import SearchInputStyled, { SearchInputLabelStyled } from './search-input.styles'
import { isMobileDevice } from '../../utils'

const SearchInput = ({ searchTerm, changeSearchTerm, showSearchTerm, hideSearchTerm, isFeedbackFormVisible }) => {
  const [isFocused, setIsFocused] = useState(false)
  const textInput = useRef(null)
  const timeout = useRef(null)
  
  const focusOnTextInput = () => {
    setIsFocused(true)

    textInput.current.focus({
      preventScroll: true
    })
  }

  useEffect(() => {
    if (!isMobileDevice) {
      focusOnTextInput()
    }

    document.addEventListener('focusout', onDocumentBlur)

    return () => document.removeEventListener('focusout', onDocumentBlur)
  }, [])

  const handleTap = () => {
    focusOnTextInput()
  }

  const onDocumentBlur = event => {
    if (!isMobileDevice) {
      if (!event.relatedTarget || (event.relatedTarget && (event.relatedTarget.type !== 'text' || event.relatedTarget.name === 'search-input'))) {
        focusOnTextInput()
        return
      }
    }

    setIsFocused(false)
  }

  const handleKeyDown = event => {
    const textInputValue = event.target.value

    clearTimeout(timeout.current)

    changeSearchTerm(textInputValue)

    showSearchTerm()

    timeout.current = setTimeout(() => {
      hideSearchTerm()
    }, 1000)
  }

    return (
      <div onClick={handleTap}>
        <SearchInputLabelStyled>
        {isMobileDevice ? (
          isFocused ? (
            searchTerm ? (
              'Keep typing...'
            ) : (
              'Start typing...'
            )
          ) : (
            'Tap here to search'
          )
        ) : searchTerm ? (
          'Keep typing...'
        ) : (
          'Type anywhere to search'
        )}
        </SearchInputLabelStyled>
        <SearchInputStyled name="search-input" type="text" ref={textInput} defaultValue={searchTerm} onChange={handleKeyDown} />
      </div>
    )
  }

const mapStateToProps = ({ chords: { searchTerm }, app: { isFeedbackFormVisible } }) => ({
  searchTerm,
  isFeedbackFormVisible
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSearchTerm,
  hideSearchTerm,
  showSearchTerm
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
