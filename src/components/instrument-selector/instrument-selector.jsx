import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dropdown, { DropDownOption } from '../dropdown/dropdown'
import { selectInstrument } from '../../ducks/instruments/actions'

export const InstrumentSelector = ({ selectedInstrumentShortName, selectInstrument }) => (
  <React.Fragment>
    <span>Instrument: </span>
    <Dropdown onChange={event => selectInstrument(event.target.value)} value={selectedInstrumentShortName}>
      <DropDownOption key='' value="(none)" label="(none)" />
      <DropDownOption key='gtr' value="gtr" label="Guitar" />
      <DropDownOption key='uku' value="uku" label="Ukulele" />
    </Dropdown>
  </React.Fragment>
)

const mapStateToProps = ({ selectedInstrumentShortName }) => selectedInstrumentShortName

const mapDispatchToProps = dispatch => bindActionCreators({ selectInstrument }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSelector)
