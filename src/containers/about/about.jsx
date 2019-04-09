import React from 'react'
import { Link } from 'react-router-dom'
import settings from '../../settings'
import A from '../../components/anchor/anchor'

export default () => (
  <div>
    <h1>About Chordmaster</h1>
    <p>
      This web app was created by <A href={settings.personalSiteUrl}>Jared Williams</A> in 2019
      because there is no simple, fast list of all chords, keys and key progressions that you can 
      search and filter.
    </p>
    <p>
      He works on it each week but relies on community contribution as it is an <A href={settings.githubRepoUrl}>open source project</A>.
      If you can code, he appreciates your contribution. Otherwise you can send feedback using the app itself.
    </p>
    <p>
      Thanks for using Chordmaster!
    </p>
    <p>
      <Link to="/">Return to app</Link>
    </p>
  </div>
)