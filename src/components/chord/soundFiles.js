import chordsDefinition from 'guitar-chord-definitions/dist/chords'
import { cleanNameForSounds } from '../../utils'

const buildSoundFiles = () => {
  return chordsDefinition.reduce((obj, { shortName, copyFrom }) => {
    const fileName = copyFrom
      ? cleanNameForSounds(copyFrom)
      : cleanNameForSounds(shortName)

    try {
      const fileContents = require(`../../sounds/${fileName}.mp3`)

      return {
        ...obj,
        [cleanNameForSounds(shortName)]: fileContents
      }
    } catch (err) {
      return obj
    }
  }, {})
}

const soundFiles = buildSoundFiles()

export default soundFiles
