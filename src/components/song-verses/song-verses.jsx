import React from 'react'
import { connect } from 'react-redux'
import { VersesListStyled, VersesListItemStyled, LyricsWithChordsListStyled, LyricsWithChordsListItemStyled } from './song-verses.styles'
import { convertToEasierChord } from '../../utils'

const formatChords = chords => chords.replace(/ /g, '\u00A0')

const convertChordLineToEasierChords = chordLine => {
  const chunks = chordLine.split(/(\s+)/)

  const convertedChunks = chunks.map(chunk => /\S/.test(chunk) ? convertToEasierChord(chunk) : chunk)

  const convertedChunksWithCorrectWhitespace = convertedChunks.map((convertedChunk, index) => {
    const originalChunk = chunks[index]
    let newChunk = convertedChunk

    if (convertedChunk.length < originalChunk.length) {
      for (let i = newChunk.length; i < originalChunk.length; i++) {
        newChunk = newChunk + ' '
      }
    }

    return newChunk
  })

  return convertedChunksWithCorrectWhitespace.join('')
}

const SongVerses = ({ artistAndTitle, verses, easierChordsEnabled }) => (
  <VersesListStyled>
    {verses.map(({ verseTitle, lyricsWithChords, copyFrom }) => {
      if (copyFrom) {
        const copiedVerse = verses.find(({ verseTitle }) => verseTitle === copyFrom)

        if (!copiedVerse) {
          throw new Error(`Failed to copy from verse "${copyFrom}" in song ${artistAndTitle}`)
        }

        lyricsWithChords = copiedVerse.lyricsWithChords
      }

      return (
        <VersesListItemStyled key={verseTitle}>
          {verseTitle}
          <LyricsWithChordsListStyled style={{ fontFamily: 'monospace' }}>
            {lyricsWithChords.map(([chords, lyric]) => (
              <LyricsWithChordsListItemStyled key={lyric}>
                <strong>{formatChords(easierChordsEnabled ? convertChordLineToEasierChords(chords) : chords)}</strong><br />
                {lyric}
              </LyricsWithChordsListItemStyled>
            ))}
          </LyricsWithChordsListStyled>
        </VersesListItemStyled>
      )
    })}
  </VersesListStyled>
)

const mapStateToProps = ({ songs: { easierChordsEnabled } }) => ({ easierChordsEnabled })

export default connect(mapStateToProps)(SongVerses)
