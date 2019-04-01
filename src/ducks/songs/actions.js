export const SELECT_SONG = 'SELECT_SONG'
export const selectSong = ({ artist, title }) => ({
  type: SELECT_SONG,
  payload: {
    artist,
    title
  }
})

export const UNSELECT_SONG = 'UNSELECT_SONG'
export const unselectSong = () => ({
  type: UNSELECT_SONG
})
