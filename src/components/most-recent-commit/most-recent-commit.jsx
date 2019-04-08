import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { getCommits, gotCommits } from '../../ducks/commits/actions'
import { performFetch } from '../../utils'

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
      <a href={mostRecentCommitBlob.html_url}>{mostRecentCommitBlob.commit.message}</a> - {moment(mostRecentCommitBlob.commit.committer.date).fromNow()}
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