import React from 'react'
import songsDefinition from '../../songs'
import ContentArea from '../../components/content-area/content-area'
import A from '../../components/anchor/anchor'

const getSelectedSong = artistAndTitle => songsDefinition.find(({ artistAndTitle: artistAndTitleUnderTest }) => artistAndTitleUnderTest === artistAndTitle)

const formatChords = chords => chords.replace(/ /g, '\u00A0')

export default ({ artistAndTitle: selectedSongArtistAndTitle }) => {
  const selectedSong = getSelectedSong(selectedSongArtistAndTitle)

  if (!selectedSong) {
    return 'Song does not exist'
  }

  const { artistAndTitle, key, verses } = selectedSong

  return (
    <ContentArea>
      <h1>{artistAndTitle}</h1>
      Key: {key}
      <hr />
      <ul>
        {verses.map(({ verseTitle, lyricsWithChords, copyFrom }) => {
          if (copyFrom) {
            const copiedVerse = verses.find(({ verseTitle }) => verseTitle === copyFrom)

            if (!copiedVerse) {
              throw new Error(`Failed to copy from verse "${copyFrom}" in song ${artistAndTitle}`)
            }

            lyricsWithChords = copiedVerse.lyricsWithChords
          }

          return (
            <li key={verseTitle}>
              {verseTitle}
              <ul style={{ fontFamily: 'monospace' }}>
                {lyricsWithChords.map(([chords, lyric]) => (
                  <li key={lyric}>
                    <strong>{formatChords(chords)}</strong><br />
                    {lyric}
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
      <br />
      <A href="/" isInternal context="Song">Back to main app</A>
      <br /><br />
      <A href="/songs" isInternal context="Song">Back to all songs</A>
    </ContentArea>
  )
}
