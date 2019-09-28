import React, { useState, useRef } from 'react'
import AudioPlayerStyled from './audio-player.styles'

const audioStates = {
  WAITING: 'WAITING',
  LOADING: 'LOADING',
  READY: 'READY',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  ERROR: 'ERROR'
}

const AudioPlayer = ({ src }) => {
  const [audioState, setAudioState] = useState(audioStates.WAITING)
  const audio = useRef(null)

  const load = () => {
    audio.current = new Audio(src)

    audio.current.addEventListener('canplay', () => {
      setAudioState(audioStates.READY)
      audio.current.play()
    })

    audio.current.addEventListener('error', error => {
      console.error('Error playing audio', error) // eslint-disable-line
      setAudioState(audioStates.ERROR)
    })

    audio.current.addEventListener('pause', () =>
      setAudioState(audioStates.PAUSED)
    )

    audio.current.addEventListener('playing', () =>
      setAudioState(audioStates.PLAYING)
    )
  }

  const play = () => {
    if (audioState === audioStates.WAITING) {
      return load()
    }

    audio.current.play()
  }

  const pause = () => {
    audio.current.pause()
  }

  const getOutput = () => {
    switch (audioState) {
      case audioStates.WAITING:
        return (
          <span onClick={play}>
            <i className="fas fa-play"></i>
          </span>
        )
      case audioStates.LOADING:
      case audioStates.READY:
        return <i className="fas fa-stopwatch"></i>
      case audioStates.PAUSED:
        return (
          <span onClick={play}>
            <i className="fas fa-play"></i>
          </span>
        )
      case audioStates.PLAYING:
        return (
          <span onClick={pause}>
            <i className="fas fa-pause"></i>
          </span>
        )
      case audioStates.ERROR:
        return <span>Error</span>
      default:
        return `Unknown state: ${audioState}`
    }
  }

  return (
    <AudioPlayerStyled isPlaying={audioState === audioStates.PLAYING}>
      {getOutput()}
    </AudioPlayerStyled>
  )
}

export default AudioPlayer
