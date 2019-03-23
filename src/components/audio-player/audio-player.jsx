import React from 'react'

const audioStates = {
  LOADING: 'LOADING',
  READY: 'READY',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  ERROR: 'ERROR'
}

export class AudioPlayer extends React.Component {
  state = {
    audioState: audioStates.STOPPED
  }

  audio = null

  componentDidMount() {
    this.audio = new Audio(this.props.src)

    this.audio.addEventListener('canplay', () => {
      this.setState({
        audioState: audioStates.READY
      })
    })

    this.audio.addEventListener('error', () => {
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
    this.audio.play()
  }

  pause = () => {
    this.audio.pause()
  }

  render() { 
    switch (this.state.audioState) {
      case audioStates.LOADING:
        return <span>...</span>
      case audioStates.READY:
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
}

export default AudioPlayer
