import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToggleInput from '../toggle-input/toggle-input'
import { toggleFavouritesOnly } from '../../ducks/chords/actions'

export const FavouritesOnlyToggle = ({ toggleFavouritesOnly, favouritesOnly }) => (
  <ToggleInput onChange={toggleFavouritesOnly} label="Favs only" isEnabled={favouritesOnly} />
)

const mapStateToProps = ({ chords: { favouritesOnly } }) => ({
  favouritesOnly
})

const mapDispatchToProps = dispatch => bindActionCreators({ toggleFavouritesOnly }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesOnlyToggle)
