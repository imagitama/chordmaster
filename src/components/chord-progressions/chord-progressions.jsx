import React from 'react'
import { getKeyFromShortName } from '../../utils'
import {
  ChordProgression as ChordProgressionStyled,
  ChordProgressions as ChordProgressionsStyled,
  ChordProgressionLabel,
  ChordProgressionContents,
  RomanNumerals,
  RomanNumeral,
  ChordShortNames,
  ChordShortName
} from './chord-progressions.styles'

const getChordShortNameForRomanNumeral = (chords, romanNumeral) => {
  return chords[romanNumeral]
}

const ChordProgressions = ({ keyShortName }) => {
  if (!keyShortName) {
    return null
  }

  const { chordProgressions, chords } = getKeyFromShortName(keyShortName)

  return (
    <ChordProgressionsStyled>
      {chordProgressions.map((chordProgression, chordProgressionIdx) => (
        <ChordProgressionStyled key={chordProgression.join(',')}>
          <ChordProgressionLabel>
            #{chordProgressionIdx + 1}
          </ChordProgressionLabel>
          <ChordProgressionContents>
            <RomanNumerals>
              {chordProgression.map(romanNumeral => (
                <RomanNumeral key={romanNumeral}>{romanNumeral}</RomanNumeral>
              ))}
            </RomanNumerals>
            <ChordShortNames>
              {chordProgression.map(romanNumeral => (
                <ChordShortName key={romanNumeral}>
                  {getChordShortNameForRomanNumeral(chords, romanNumeral)}
                </ChordShortName>
              ))}
            </ChordShortNames>
          </ChordProgressionContents>
        </ChordProgressionStyled>
      ))}
    </ChordProgressionsStyled>
  )
}

export default ChordProgressions
