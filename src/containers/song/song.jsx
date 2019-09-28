import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import songsDefinition from '../../songs'
import ContentArea from '../../components/content-area/content-area'
import A from '../../components/anchor/anchor'
import SongVerses from '../../components/song-verses/song-verses'
import ChordsForSong from '../../components/chords-for-song/chords-for-song'
import EasierChordsToggle from '../../components/easier-chords-toggle/easier-chords-toggle'

const getSelectedSong = artistAndTitle =>
  songsDefinition.find(
    ({ artistAndTitle: artistAndTitleUnderTest }) =>
      artistAndTitleUnderTest === artistAndTitle
  )

const getChordShortNamesForSong = verses => {
  let chordShortNames = []

  verses.forEach(({ lyricsWithChords, copyFrom }) => {
    if (copyFrom) {
      lyricsWithChords = verses.find(
        ({ verseTitle }) => verseTitle === copyFrom
      ).lyricsWithChords
    }

    lyricsWithChords.forEach(([chords]) => {
      if (!chords) {
        return
      }
      chordShortNames = chordShortNames.concat(
        chords
          .replace(/\s+/g, ' ')
          .trim()
          .split(' ')
      )
    })
  })

  return chordShortNames.filter(
    (chordShortName, index) => chordShortNames.indexOf(chordShortName) === index
  )
}

export default ({ artistAndTitle: selectedSongArtistAndTitle }) => {
  const selectedSong = getSelectedSong(selectedSongArtistAndTitle)

  if (!selectedSong) {
    return 'Song does not exist'
  }

  const { title, artist, key, verses } = selectedSong

  return (
    <Fragment>
      <Helmet>
        <title>
          View the key and guitar songs of the song {title} by {artist} |
          chord.guide
        </title>
        <meta
          name="description"
          content={`This page helps you learn the guitar chords and the key of the song ${title} by ${artist}. It has each lyric and the associated guitar chord plus options to convert each chord into a simple version, and more.`}
        />
      </Helmet>
      <ContentArea>
        <h1>{title}</h1>
        <h2>{artist}</h2>
        <hr />
        <h3>Key</h3>
        <A href={`/?key=${key}`} isInternal>
          {key}
        </A>
        <hr />
        <h3>Chords</h3>
        <EasierChordsToggle />
        <ChordsForSong chordShortNames={getChordShortNamesForSong(verses)} />
        <hr />
        <h3>Verses</h3>
        <SongVerses {...selectedSong} />
        <br />
        <A href="/" isInternal context="Song">
          Back to main app
        </A>
        <br />
        <br />
        <A href="/songs" isInternal context="Song">
          Back to all songs
        </A>
      </ContentArea>
    </Fragment>
  )
}
