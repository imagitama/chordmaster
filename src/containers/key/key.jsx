import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import ContentArea from '../../components/content-area/content-area'
import A from '../../components/anchor/anchor'
import {
  getKeyFromShortNameLowercase,
  // cleanNameForUrl,
  reverseCleanNameForUrl
} from '../../utils'
// import { Chord } from '../../components/chord/chord'
import { Chords } from '../../components/chords/chords'
import ChordProgressions from '../../components/chord-progressions/chord-progressions'

export default ({ keyShortName: selectedKeyShortNameFromUrl }) => {
  if (!selectedKeyShortNameFromUrl) {
    return 'No key provided'
  }

  let selectedKey = getKeyFromShortNameLowercase(
    reverseCleanNameForUrl(selectedKeyShortNameFromUrl)
  )

  if (!selectedKey) {
    return `Key ${selectedKeyShortNameFromUrl} does not seem to exist (please submit a GitHub issue if it actually does so we can add it)`
  }

  const { fullName, shortName } = selectedKey

  return (
    <Fragment>
      <Helmet>
        <title>
          {`Learn about the guitar key ${fullName} (shortened to ${shortName}) | chord.guide`}
        </title>
        <meta
          name="description"
          content={`Learn about the different chords in the ${fullName} (or ${shortName}). The key ${shortName} is described here with its name, chords in the key, chord progressions and more.`}
        />
      </Helmet>
      <ContentArea>
        <h1>
          {fullName} ({shortName})
        </h1>
        <h2>Chords</h2>
        <p>
          The different chords (in this case guitar chords) that comprise a key
          (this one being the key of {shortName}). Note that chords always start
          with A and end in G. Each chord also has a roman numeral which is used
          to build chord progressions, shown in the next section.
        </p>
        <Chords
          selectedKeyShortName={shortName}
          sortBySequence
          canFavourite={false}
        />
        <h2>Chord Progressions</h2>
        <p>
          Simply put, chord progressions are the different orders in which you
          can play chords in this key (key of {shortName}) which sound good.
          Many popular songs use these simple chord progressions in their songs.
        </p>
        <ChordProgressions keyShortName={shortName} />
        <A href="/" isInternal context="Key">
          Back to main app
        </A>
      </ContentArea>
    </Fragment>
  )
}
