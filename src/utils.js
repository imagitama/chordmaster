import keys from './keys'

export const isChordShortNameInKey = (key, chordShortName) => Object.values(key.chords).includes(chordShortName)

export const getKeyFromShortName = shortName => keys.find(({ shortName: shortNameUnderTest }) => shortNameUnderTest === shortName)