import chordsDefinition from '../../chords'
import { isFullNameMajorMinor, cleanNameForSounds } from '../../utils'

const buildSoundFiles = () => {
  return chordsDefinition.reduce((obj, { fullName, shortName, copyFrom }) => {
    if (!isFullNameMajorMinor(fullName)) {
      return obj
    }

    const fileName = copyFrom ? cleanNameForSounds(copyFrom) : cleanNameForSounds(shortName)

    return {
      ...obj,
      [cleanNameForSounds(shortName)]: require(`../../sounds/${fileName}.mp3`)
    }
  }, {})
}

const soundFiles = buildSoundFiles()

export default soundFiles