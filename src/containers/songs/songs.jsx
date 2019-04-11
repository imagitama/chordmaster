import React from 'react'
import songsDefinition from '../../songs'
import keysDefinition from '../../keys'
import ContentArea from '../../components/content-area/content-area'
import A from '../../components/anchor/anchor'
import { getLinkToSongWithArtistAndTitle } from '../../utils'

const SongList = ({ keys }) => (
  <ul>
    {keys.map(({ shortName }) => (
      <li key={shortName}>
        <strong>{shortName}</strong>
        <ul>
          {songsDefinition.filter(({ key }) => key === shortName).map(({ artistAndTitle }) => (
            <li key={artistAndTitle}>
              <A href={getLinkToSongWithArtistAndTitle(artistAndTitle)} isInternal context="Songs">{artistAndTitle}</A>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)

export default () => {
  return (
    <ContentArea>
      <h1>Popular Songs by Key</h1>
      <p>
        Please note this is a work in progress.
      </p>
      <hr />
      <h2>Popular Keys</h2>
      <SongList keys={keysDefinition.filter(({ isCommonKey }) => isCommonKey === true)} />
      <h2>Other Keys</h2>
      <SongList keys={keysDefinition.filter(({ isCommonKey }) => isCommonKey !== true)} />      
    </ContentArea>
  )
}
