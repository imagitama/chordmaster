import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleFavouriteChord } from '../../ducks/chords/actions'
import FavouriteChordButtonStyled from './favourite-chord-button.styles'

export const FavouriteChordButton = ({ toggleFavouriteChord, chordShortName, favouriteChords }) => {
  const isFavourited = favouriteChords.includes(chordShortName)
  return (
    <FavouriteChordButtonStyled isFavourited={isFavourited} onClick={() => toggleFavouriteChord(chordShortName)}>
      <i className={['fa-star', isFavourited ? 'fas' : 'far'].join(' ')}></i>
    </FavouriteChordButtonStyled>
  )
}

const mapStateToProps = ({ chords: { favouriteChords } }) => ({ favouriteChords })

const mapDispatchToProps = dispatch => bindActionCreators({ toggleFavouriteChord }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteChordButton)
