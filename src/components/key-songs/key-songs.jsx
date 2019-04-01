import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSong } from '../../ducks/songs/actions'
import songs from '../../songs'

const filterSongsByKeyShortName = keyShortName => songs.filter(({ key }) => key === keyShortName)

export const KeySongs = ({ selectedKeyShortName, selectSong }) => {
  if (!selectedKeyShortName) {
    return null
   } 

  const songsInKey = filterSongsByKeyShortName(selectedKeyShortName)
   
  return (
    <div>
      <strong>Popular songs:</strong>
      <ul>
        {!songsInKey.length && <li>None</li>}
        {songsInKey.map(({ title, artist }) => (
          <li onClick={() => selectSong({ title, artist })}>
            {artist} - {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ keys: { selectedKeyShortName } }) => ({
  selectedKeyShortName
})

const mapDispatchToProps = dispatch => bindActionCreators({ selectSong }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(KeySongs)
