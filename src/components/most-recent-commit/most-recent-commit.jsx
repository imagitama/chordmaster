import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { getCommits, gotCommits } from '../../ducks/commits/actions'
import { performFetch } from '../../utils'
import A from '../anchor/anchor'

const MostRecentCommit = ({ commits, getCommits, gotCommits }) => {
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
    return null
  }

  const mostRecentCommitBlob = commits.shift()

  return (
    <span>
      Recent changes:<br />
      <A href={mostRecentCommitBlob.html_url} context="Header most recent commit">{mostRecentCommitBlob.commit.message}</A> - {moment(mostRecentCommitBlob.commit.committer.date).fromNow()}
    </span>
  )
}

const mapStateToProps = ({ commits: { commits } }) => ({
  commits
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getCommits,
  gotCommits
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MostRecentCommit)