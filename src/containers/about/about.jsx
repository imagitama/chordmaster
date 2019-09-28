import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import settings from '../../settings'
import A from '../../components/anchor/anchor'
import ContentArea from '../../components/content-area/content-area'

export default () => (
  <Fragment>
    <Helmet>
      <title>
        Learn more about the chord.guide app, who made it, when it was made and
        why. | chord.guide
      </title>
      <meta
        name="description"
        content="There are reasons why this app exists and here we explain them in more depth. Learn all about the chord.guide app, who made it, why they made it and when it was made, plus useful links to related websites and tools such as GitHub."
      />
    </Helmet>
    <ContentArea>
      <h1>About</h1>
      <p>
        This web app was created by{' '}
        <A href={settings.personalSiteUrl}>Jared Williams</A> in 2019 because
        there is no simple, fast list of all chords, keys and key progressions
        that you can search and filter.
      </p>
      <p>
        Although the creator actively maintains and improves it, he relies on
        community contribution as it is an{' '}
        <A href={settings.githubRepoUrl}>open source project</A>. If you can
        code, he appreciates your contribution. Otherwise you can send feedback
        using the feedback button at the top right of the page.
      </p>
      <p>Thanks for using this app!</p>
      <br />
      <p>
        <A href="/" isInternal context="About container">
          Return to app
        </A>
      </p>
    </ContentArea>
  </Fragment>
)
