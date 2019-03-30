import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToggleInput from '../toggle-input/toggle-input'
import { toggleDarkMode } from '../../ducks/app/actions'

export const DarkModeToggle = ({ toggleDarkMode, isDarkModeEnabled }) => (
  <React.Fragment>
    <ToggleInput onChange={toggleDarkMode} label="Dark mode" isEnabled={isDarkModeEnabled} />
  </React.Fragment>
)

const mapStateToProps = ({ app: { isDarkModeEnabled } }) => ({
  isDarkModeEnabled
})

const mapDispatchToProps = dispatch => bindActionCreators({ toggleDarkMode }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeToggle)
