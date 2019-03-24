import styled from '@emotion/styled'

export const AudioPlayerStyled = styled.span(({ isPlaying }) => ({
  opacity: isPlaying ? 1 : '0.2',
  marginLeft: '0.2rem'
}))

export default AudioPlayerStyled
