import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSearchTerm, showSearchTerm, hideSearchTerm } from '../../ducks/chords/actions'
import OutputMessage from '../output-message/output-message'
import SearchInputStyled from './search-input.styles'

const isMobileDevice = 'ontouchstart' in document.documentElement

class SearchInput extends React.Component {
  state = {
    isFocused: false
  }
  textInput = null
  
  focusOnTextInput() {
    this.setState({
      isFocused: true
    })

    this.textInput.focus({
      preventScroll: true
    })
  }

  componentDidMount() {
    if (!isMobileDevice) {
      this.focusOnTextInput()
    }

    document.addEventListener('focusout', this.onBlur)
  }

  componentWillUnmount() {
    document.removeEventListener('focusout', this.onBlur)
  }

  handleTap = () => {
    this.focusOnTextInput()
  }

  onBlur = () => {
    if (!isMobileDevice) {
      this.focusOnTextInput()
      return
    }

    this.setState({
      isFocused: false
    })
  }

  handleKeyDown = event => {
    const textInputValue = event.target.value
    const { changeSearchTerm, showSearchTerm, hideSearchTerm } = this.props

    clearTimeout(this.timeout)

    changeSearchTerm(textInputValue)

    showSearchTerm()

    this.timeout = setTimeout(() => {
      hideSearchTerm()
    }, 1000)
  }

  render() {
    const { searchTerm } = this.props
    const { isFocused } = this.state
    return (
      <div onClick={this.handleTap}>
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
      
        <SearchInputStyled type="text" ref={input => this.textInput = input} onBlur={this.onBlur} onChange={this.handleKeyDown} />
      </div>
    )
  }
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
