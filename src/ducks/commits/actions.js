export const GET_COMMITS = 'GET_COMMITS'
export const getCommits = () => ({
  type: GET_COMMITS
})

export const GOT_COMMITS = 'GOT_COMMITS'
export const gotCommits = commits => ({
  type: GOT_COMMITS,
  payload: {
    commits
  }
})
