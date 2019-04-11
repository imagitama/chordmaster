import React from 'react'
import { VersesListStyled, VersesListItemStyled, LyricsWithChordsListStyled, LyricsWithChordsListItemStyled } from './song-verses.styles'

const formatChords = chords => chords.replace(/ /g, '\u00A0')

export default ({ artistAndTitle, verses }) => (
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
                <strong>{formatChords(chords)}</strong><br />
                {lyric}
              </LyricsWithChordsListItemStyled>
            ))}
          </LyricsWithChordsListStyled>
        </VersesListItemStyled>
      )
    })}
  </VersesListStyled>
)