import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { navigatedAway, navigatedInternally } from '../../ducks/app/actions'

const A = ({ children, navigatedAway, navigatedInternally, context = '', isInternal = false, ...props }) =>
  isInternal ? 
    <Link to={props.href} onClick={() => navigatedInternally(props.href, context)} {...props}>{children}</Link> :
    <a {...props} onClick={() => navigatedAway(props.href, context)}>{children}</a>

const mapDispatchToProps = dispatch => bindActionCreators({
  navigatedAway,
  navigatedInternally
}, dispatch)

export default connect(null, mapDispatchToProps)(A)