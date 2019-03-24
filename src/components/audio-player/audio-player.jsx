import React from 'react'
import AudioPlayerStyled from './audio-player.styles'

const audioStates = {
  WAITING: 'WAITING',
  LOADING: 'LOADING',
  READY: 'READY',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  ERROR: 'ERROR'
}

export class AudioPlayer extends React.Component {
  state = {
    audioState: audioStates.WAITING
  }

  audio = null

  load() {
    this.audio = new Audio(this.props.src)

    this.audio.addEventListener('canplay', () => {
      this.setState({
        audioState: audioStates.READY
      })

      this.audio.play()
    })

    this.audio.addEventListener('error', error => {
      console.error('Error playing audio', error) // eslint-disable-line

      this.setState({
        audioState: audioStates.ERROR
      })
    })

    this.audio.addEventListener('pause', () => {
      this.setState({
        audioState: audioStates.PAUSED
      })
    })

    this.audio.addEventListener('playing', () => {
      this.setState({
        audioState: audioStates.PLAYING
      })
    })
  }

  play = () => {
    if (this.state.audioState === audioStates.WAITING) {
      return this.load()
    }

    this.audio.play()
  }

  pause = () => {
    this.audio.pause()
  }

  getOutput = () => {
    switch (this.state.audioState) {
      case audioStates.WAITING:
        return <span onClick={this.play}><i className="fas fa-play"></i></span>
      case audioStates.LOADING:
      case audioStates.READY:
        return <i className="fas fa-stopwatch"></i>
      case audioStates.PAUSED:
        return <span onClick={this.play}><i className="fas fa-play"></i></span>
      case audioStates.PLAYING:
        return <span onClick={this.pause}><i className="fas fa-pause"></i></span>
      case audioStates.ERROR:
        return <span>Error</span>
      default:
        return `Unknown state: ${this.state.audioState}`
    }
  }

  render() {
    return (
      <AudioPlayerStyled isPlaying={this.state.audioState === audioStates.PLAYING}>
        {this.getOutput()}
      </AudioPlayerStyled>
    )
  }
}

export default AudioPlayer
