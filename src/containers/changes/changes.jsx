import React from 'react'
import MostRecentCommits from '../../components/most-recent-commits/most-recent-commits'
import A from '../../components/anchor/anchor'
import ContentArea from '../../components/content-area/content-area'

export default () => (
  <ContentArea>
    <h1>Most Recent Changes</h1>
    <MostRecentCommits />
    <br />
    <p>
      <A href="/" isInternal context="Changes container">Return to app</A>
    </p>
  </ContentArea>
)
