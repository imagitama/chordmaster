import React from 'react'
import UkuChordsStyled from './ukuChords.styles'
import UkuChord from '../uku-chord/ukuChord'

export const UkuChords = ({ ukuChords }) => (
  <UkuChordsStyled>
    {ukuChords.map(ukuChord => <UkuChord key={ukuChord.shortName} {...ukuChord} />)}
  </UkuChordsStyled>
)

export default UkuChords
