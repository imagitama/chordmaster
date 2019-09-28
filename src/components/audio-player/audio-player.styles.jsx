import styled from '@emotion/styled'

export const AudioPlayerStyled = styled.span`
  opacity: ${({ isPlaying }) => (isPlaying ? 1 : '0.2')};
  margin-left: 0.2rem;
`

export default AudioPlayerStyled
