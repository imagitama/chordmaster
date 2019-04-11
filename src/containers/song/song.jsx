import React from 'react'
import songsDefinition from '../../songs'
import ContentArea from '../../components/content-area/content-area'
import A from '../../components/anchor/anchor'
import SongVerses from '../../components/song-verses/song-verses'

const getSelectedSong = artistAndTitle => songsDefinition.find(({ artistAndTitle: artistAndTitleUnderTest }) => artistAndTitleUnderTest === artistAndTitle)

export default ({ artistAndTitle: selectedSongArtistAndTitle }) => {
  const selectedSong = getSelectedSong(selectedSongArtistAndTitle)

  if (!selectedSong) {
    return 'Song does not exist'
  }

  return (
    <ContentArea>
      <h1>{selectedSong.artistAndTitle}</h1>
      Key: {selectedSong.key}
      <hr />
      <SongVerses {...selectedSong} />
      <br />
      <A href="/" isInternal context="Song">Back to main app</A>
      <br /><br />
      <A href="/songs" isInternal context="Song">Back to all songs</A>
    </ContentArea>
  )
}
