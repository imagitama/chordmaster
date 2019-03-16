import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dropdown, { DropDownOption } from '../dropdown/dropdown'
import { selectKey } from '../../ducks/keys/actions'
import keyDefinition from '../../keys'

export const KeySelector = ({ selectedKeyShortName, selectKey }) => (
  <React.Fragment>
    <span>Key: </span>
    <Dropdown onChange={event => selectKey(event.target.value)} value={selectedKeyShortName}>
      <DropDownOption value="" label="(none)" />
      {keyDefinition.map(({ shortName }) => <DropDownOption key={shortName} value={shortName} label={shortName} />)}
    </Dropdown>
  </React.Fragment>
)

const mapStateToProps = ({ keys: { selectedKeyShortName } }) => ({
  selectedKeyShortName
})

const mapDispatchToProps = dispatch => bindActionCreators({ selectKey }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(KeySelector)
