import React from 'react'
import songsDefinition from '../../songs'
import ContentArea from '../../components/content-area/content-area'
import A from '../../components/anchor/anchor'
import SongVerses from '../../components/song-verses/song-verses'
import ChordsForSong from '../../components/chords-for-song/chords-for-song'

const getSelectedSong = artistAndTitle => songsDefinition.find(({ artistAndTitle: artistAndTitleUnderTest }) => artistAndTitleUnderTest === artistAndTitle)

const getChordShortNamesForSong = verses => {
  let chordShortNames = []

  verses.forEach(({ lyricsWithChords, copyFrom }) => {
    if (copyFrom) {
      lyricsWithChords = verses.find(({ verseTitle }) => verseTitle === copyFrom).lyricsWithChords
    }

    lyricsWithChords.forEach(([chords]) => {
      if (!chords) {
        return
      }
      chordShortNames = chordShortNames.concat(chords.replace(/\s+/g, ' ').trim().split(' '))
    })
  })

  return chordShortNames.filter((chordShortName, index) => chordShortNames.indexOf(chordShortName) === index)
}

export default ({ artistAndTitle: selectedSongArtistAndTitle }) => {
  const selectedSong = getSelectedSong(selectedSongArtistAndTitle)

  if (!selectedSong) {
    return 'Song does not exist'
  }

  const { title, artist, key, verses } = selectedSong

  return (
    <ContentArea>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <hr />
      <h3>Key</h3>
      <A href={`/?key=${key}`} isInternal>{key}</A>
      <hr />
      <h3>Chords</h3>
      <ChordsForSong chordShortNames={getChordShortNamesForSong(verses)} />
      <hr />
      <h3>Verses</h3>
      <SongVerses {...selectedSong} />
      <br />
      <A href="/" isInternal context="Song">Back to main app</A>
      <br /><br />
      <A href="/songs" isInternal context="Song">Back to all songs</A>
    </ContentArea>
  )
}
