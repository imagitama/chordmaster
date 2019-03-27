import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToggleInput from '../toggle-input/toggle-input'
import { toggleFavouritesOnly, clearFavourites } from '../../ducks/chords/actions'

export const FavouritesOnlyToggle = ({ toggleFavouritesOnly, favouritesOnly, clearFavourites }) => (
  <React.Fragment>
    <ToggleInput onChange={toggleFavouritesOnly} label="Favs only" isEnabled={favouritesOnly} />
    &nbsp;
    <i onClick={clearFavourites} className="fas fa-trash-alt"></i>
  </React.Fragment>
)

const mapStateToProps = ({ chords: { favouritesOnly } }) => ({
  favouritesOnly
})

const mapDispatchToProps = dispatch => bindActionCreators({ toggleFavouritesOnly, clearFavourites }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesOnlyToggle)
