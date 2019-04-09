import React from 'react'
import MostRecentCommits from '../../components/most-recent-commits/most-recent-commits'
import A from '../../components/anchor/anchor'

export default () => (
  <div>
    <h1>Most Recent Changes</h1>
    <MostRecentCommits />
    <br />
    <p>
      <A href="/" isInternal context="Changes container">Return to app</A>
    </p>
  </div>
)
