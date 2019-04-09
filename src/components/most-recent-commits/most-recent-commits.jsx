import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { getCommits, gotCommits } from '../../ducks/commits/actions'
import { performFetch } from '../../utils'
import A from '../anchor/anchor'

const MostRecentCommits = ({ commits, getCommits, gotCommits }) => {
  useEffect(() => {
    getCommits()

    performFetch(`https://api.github.com/repos/imagitama/chordmaster/commits?since=${moment().subtract(7,'d').toISOString()}`)
      .then(commits => {
        gotCommits(commits)
      })
      .catch(err => {
        throw err
      })
  }, [])

  if (!commits.length) {
    return 'Loading...'
  }

  return (
    <ul>
      {commits.map(({ html_url: url, commit: { message, committer } }) => (
        <li key={message}>
          <A href={url} context="Most recent commits">{message}</A> - {moment(committer.date).fromNow()}
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ commits: { commits } }) => ({
  commits
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getCommits,
  gotCommits
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MostRecentCommits)