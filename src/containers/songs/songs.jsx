import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import songsDefinition from '../../songs'
import keysDefinition from 'guitar-chord-definitions/dist/keys'
import ContentArea from '../../components/content-area/content-area'
import A from '../../components/anchor/anchor'
import { getLinkToSongWithArtistAndTitle } from '../../utils'

const SongList = ({ keys }) => (
  <ul>
    {keys.map(({ shortName }) => (
      <li key={shortName}>
        <strong>{shortName}</strong>
        <ul>
          {songsDefinition
            .filter(({ key }) => key === shortName)
            .map(({ artistAndTitle }) => (
              <li key={artistAndTitle}>
                <A
                  href={getLinkToSongWithArtistAndTitle(artistAndTitle)}
                  isInternal
                  context="Songs"
                >
                  {artistAndTitle}
                </A>
              </li>
            ))}
        </ul>
      </li>
    ))}
  </ul>
)

export default () => (
  <Fragment>
    <Helmet>
      <title>
        Browse popular songs by key and learn each song's guitar chords. |
        chord.guide
      </title>
      <meta
        name="description"
        content="We have compiled a list of popular songs sorted by key so you can learn a good variety of songs and the chords in their key. Browse each key and select a song then look at their lyrics and the corresponding guitar chords to play with them."
      />
    </Helmet>
    <ContentArea>
      <h1>Popular Songs by Key</h1>
      <p>Please note this is a work in progress.</p>
      <hr />
      <h2>Popular Keys</h2>
      <SongList
        keys={keysDefinition.filter(({ isCommonKey }) => isCommonKey === true)}
      />
      <h2>Other Keys</h2>
      <SongList
        keys={keysDefinition.filter(({ isCommonKey }) => isCommonKey !== true)}
      />
    </ContentArea>
  </Fragment>
)
