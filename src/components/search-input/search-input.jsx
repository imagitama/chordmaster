import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSearchTerm, showSearchTerm, hideSearchTerm } from '../../ducks/chords/actions'
import OutputMessage from '../output-message/output-message'
import SearchInputStyled from './search-input.styles'

const isMobileDevice = 'ontouchstart' in document.documentElement

const SearchInput = ({ searchTerm, changeSearchTerm, showSearchTerm, hideSearchTerm }) => {
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

    document.addEventListener('focusout', onBlur)

    return () => document.removeEventListener('focusout', onBlur)
  }, [])

  const handleTap = () => {
    focusOnTextInput()
  }

  const onBlur = () => {
    if (!isMobileDevice) {
      focusOnTextInput()
      return
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
        {isMobileDevice ? (
          isFocused ? (
            searchTerm ? (
              <OutputMessage>
                Keep typing...
              </OutputMessage>
            ) : (
              <OutputMessage>
                Start typing...
              </OutputMessage>
            )
          ) : (
            <OutputMessage>
              Tap here to search
            </OutputMessage>
          )
        ) : (
          <OutputMessage>
            Type anywhere to search
          </OutputMessage>
        )}
      
        <SearchInputStyled type="text" ref={textInput} defaultValue={searchTerm} onBlur={onBlur} onChange={handleKeyDown} />
      </div>
    )
  }

const mapStateToProps = ({ chords: { searchTerm } }) => ({
  searchTerm
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSearchTerm,
  hideSearchTerm,
  showSearchTerm
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
