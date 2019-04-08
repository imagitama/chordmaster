import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { navigatedAway } from '../../ducks/app/actions'

const A = ({ children, navigatedAway, context = '', ...props }) => <a {...props} onClick={() => navigatedAway(props.href, context)}>{children}</a>

const mapDispatchToProps = dispatch => bindActionCreators({
  navigatedAway
}, dispatch)

export default connect(null, mapDispatchToProps)(A)