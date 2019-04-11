import React from 'react'

const formatChords = chords => chords.replace(/ /g, '\u00A0')

export default ({ artistAndTitle, verses }) => (
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
)