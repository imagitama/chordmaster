import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSearchTerm } from '../../ducks/chords/actions'
import { SearchStyled } from './search.styles'

class SearchWithKeyboard extends React.Component {
  state = {
    textInput: '',
    showOutput: false
  }
  timeout = null

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = event => {
    if (event.key === 'Shift') {
      return
    }

    if (event.key === 'Escape') {
      this.setState({
        textInput: ''
      })

      this.props.onChange(this.state.textInput)

      return
    }

    clearTimeout(this.timeout)

    if (event.key === 'Backspace') {
      this.setState({
        textInput: this.state.textInput.substr(0, this.state.textInput.length - 1),
        showOutput: true
      })
    } else {
      this.setState({
        textInput: this.state.textInput += event.key,
        showOutput: true
      })
    }

    this.props.onChange(this.state.textInput)

    this.timeout = setTimeout(() => {
      this.setState({
        textInput: '',
        showOutput: false
      })
    }, 1000)
  }

  render() {
    return this.state.showOutput ? this.props.children : null
  }
}

export const Search = ({ searchTerm, changeSearchTerm }) => (
  <SearchWithKeyboard onChange={changeSearchTerm}>
    <SearchStyled>
      {searchTerm}
    </SearchStyled>
  </SearchWithKeyboard>
)

const mapStateToProps = ({ chords: { searchTerm } }) => ({
  searchTerm
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSearchTerm
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)