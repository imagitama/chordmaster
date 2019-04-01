import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { unselectSong } from '../../ducks/songs/actions'
import songs from '../../songs'

const getSong = artistAndTitle => songs.find(({ artist, title }) => `${artist} - ${title}` === artistAndTitle)

export const Song = ({ selectedSong, unselectSong }) => {
  if (!selectedSong) {
    return null
  }

  const { artist, title, verses } = getSong(selectedSong)

  return (
    <div>
      <strong>{artist} - {title}</strong>
      {verses.map(lyricAndChordShortNames => (
        <ul>
          {lyricAndChordShortNames.map(([chordShortNames, lyrics]) => (
            <li>
              {chordShortNames}<br />
              {lyrics}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
  
const mapStateToProps = ({ songs: { selectedSong } }) => ({
  selectedSong
})

const mapDispatchToProps = dispatch => bindActionCreators({ unselectSong }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Song)
