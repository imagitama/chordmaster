import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import MostRecentCommits from '../../components/most-recent-commits/most-recent-commits'
import A from '../../components/anchor/anchor'
import ContentArea from '../../components/content-area/content-area'
import settings from '../../settings'

export default () => (
  <Fragment>
    <Helmet>
      <title>
        Discover the recent changes in the form of commits to the web app
        straight from GitHub where the code is stored. | chord.guide
      </title>
      <meta
        name="description"
        content="Instead of manually maintaining a long list of changes to the web app, you can browse a list of commits which are small, incremental changes to the code of the app itself. This means you see the changes as soon as they happen."
      />
    </Helmet>
    <ContentArea>
      <h1>Most Recent Changes</h1>
      <MostRecentCommits />
      <p>
        <A href={settings.githubRepoCommitsUrl} context="Changes container">
          See all changes
        </A>
      </p>
      <br />
      <p>
        <A href="/" isInternal context="Changes container">
          Return to app
        </A>
      </p>
    </ContentArea>
  </Fragment>
)
