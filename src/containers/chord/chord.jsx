import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import ContentArea from '../../components/content-area/content-area'
import A from '../../components/anchor/anchor'
import {
  getChordFromShortNameLowercase,
  getChordFromShortName,
  cleanNameForUrl,
  reverseCleanNameForUrl
} from '../../utils'
import { Chord } from '../../components/chord/chord'

export default ({ chordShortName: selectedChordShortNameFromUrl }) => {
  let selectedChord = getChordFromShortNameLowercase(
    reverseCleanNameForUrl(selectedChordShortNameFromUrl)
  )

  if (!selectedChord) {
    return 'Chord does not seem to exist (please submit a GitHub issue if it actually does so we can add it)'
  }

  const { fullName, shortName, alternativeShortName } = selectedChord

  let copiedChord

  if (selectedChord.copyFrom) {
    copiedChord = getChordFromShortName(selectedChord.copyFrom)
  }

  return (
    <Fragment>
      <Helmet>
        <title>
          {`Learn about the guitar chord ${fullName} (shortened to ${shortName})${
            alternativeShortName ? ` which is also ${alternativeShortName}` : ''
          } | chord.guide`}
        </title>
        <meta
          name="description"
          content={`Each guitar chord is different with a different name, finger placement and sound. The chord ${fullName} (or ${shortName}) is described here with its name and alternative names, finger placement and more.`}
        />
      </Helmet>
      <ContentArea>
        <h1>{fullName}</h1>
        <h2>{shortName}</h2>
        {alternativeShortName && (
          <p>
            Identical to{' '}
            <A
              href={`/chord/${cleanNameForUrl(alternativeShortName)}`}
              isInternal
            >
              {alternativeShortName}
            </A>
          </p>
        )}
        <div style={{ width: '50%' }}>
          <Chord
            {...(copiedChord ? copiedChord : selectedChord)}
            canFavourite={false}
          />
        </div>
        <br />
        <A href="/" isInternal context="Chord">
          Back to main app
        </A>
      </ContentArea>
    </Fragment>
  )
}
