import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dropdown, { DropDownOption } from '../dropdown/dropdown'
import ToggleInput from '../toggle-input/toggle-input'
import { selectKey, toggleSortBySequence } from '../../ducks/keys/actions'
import keysDefinition from 'guitar-chord-definitions/dist/keys'

const KeyOption = ({ shortName, alternativeShortName }) => (
  <DropDownOption
    value={shortName}
    label={`${shortName}${
      alternativeShortName ? ` (${alternativeShortName})` : ''
    }`}
  />
)

export const KeySelector = ({
  selectedKeyShortName,
  selectKey,
  toggleSortBySequence,
  sortBySequence
}) => (
  <React.Fragment>
    <span>Key: </span>
    <Dropdown
      onChange={event => selectKey(event.target.value)}
      value={selectedKeyShortName}
    >
      <DropDownOption value="" label="(none)" />
      <optgroup label="Common keys">
        {keysDefinition
          .filter(({ isCommonKey }) => isCommonKey === true)
          .map(key => (
            <KeyOption key={key.shortName} {...key} />
          ))}
      </optgroup>
      <optgroup label="More keys">
        {keysDefinition
          .filter(({ isCommonKey }) => isCommonKey !== true)
          .map(key => (
            <KeyOption key={key.shortName} {...key} />
          ))}
      </optgroup>
    </Dropdown>
    {selectedKeyShortName && <br />}
    {selectedKeyShortName && (
      <ToggleInput
        onChange={() => toggleSortBySequence()}
        isEnabled={sortBySequence}
        label="Filter"
      />
    )}
  </React.Fragment>
)

const mapStateToProps = ({
  keys: { selectedKeyShortName, sortBySequence }
}) => ({
  selectedKeyShortName,
  sortBySequence
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectKey, toggleSortBySequence }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeySelector)
