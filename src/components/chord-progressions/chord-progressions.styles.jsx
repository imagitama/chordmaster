import styled from '@emotion/styled'

const common = `list-style: none;
padding: 0;
margin: 0;`

const ul = styled.ul`
  ${common}
`

const li = styled.li`
  ${common}
`

export const ChordProgressions = styled(ul)``

export const ChordProgression = styled(li)`
  margin: 1rem 0;
  display: flex;
`

export const ChordProgressionLabel = styled.div`
  padding: 0.5rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 150%;
`

export const ChordProgressionContents = styled.div`
  font-size: 125%;
`

const Cell = styled(li)`
  padding: 0.5rem;
`

export const RomanNumerals = styled(ul)`
  display: flex;
`

export const RomanNumeral = styled(Cell)``

export const ChordShortNames = styled(ul)`
  display: flex;
`

export const ChordShortName = styled(Cell)``
