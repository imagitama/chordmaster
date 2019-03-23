import keys from './keys'

export const isChordShortNameInKey = (key, chordShortName) => Object.values(key.chords).includes(chordShortName)

export const getKeyFromShortName = shortName => keys.find(({ shortName: shortNameUnderTest }) => shortNameUnderTest === shortName)

export const isFullNameMajorMinor = fullName => fullName.includes('major') || fullName.includes('minor') || fullName.includes('sharp') || fullName.includes('flat')

export const cleanNameForSounds = name => name.replace('#', 'sharp').toLowerCase()