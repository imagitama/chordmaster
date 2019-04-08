import React from 'react'
import HeaderStyled, { HeaderSegment, LogoSegment, LogoLabel, LogoBackground, MostRecentCommitsSegment,  PrimaryHeaderStyled, SecondaryHeaderStyled } from './header.styles'
import KeySelector from '../key-selector/key-selector'
import ChordProgressionSelector from '../chord-progression-selector/chord-progression-selector'
import MajorMinorChordsOnlyToggle from '../major-minor-chords-only-toggle/major-minor-chords-only-toggle'
import FavouritesOnlyToggle from '../favourites-only-toggle/favourites-only-toggle'
import ResetButton from '../reset-button/reset-button'
import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle'
import ShowFeedbackFormButton from '../show-feedback-form-button/show-feedback-form-button'
import MostRecentCommit from '../most-recent-commit/most-recent-commit'

export const Header = () => (
  <HeaderStyled>
    <PrimaryHeaderStyled>
      <LogoSegment>
        <LogoLabel>
          ChordMaster
        </LogoLabel>
        <LogoBackground />
      </LogoSegment>
      <MostRecentCommitsSegment>
        <MostRecentCommit />
      </MostRecentCommitsSegment>
      <HeaderSegment>
        <DarkModeToggle />
      </HeaderSegment>
      <HeaderSegment>
        <ShowFeedbackFormButton />
      </HeaderSegment>
    </PrimaryHeaderStyled>

    <SecondaryHeaderStyled>
      <HeaderSegment>
        <MajorMinorChordsOnlyToggle />
      </HeaderSegment>
      <HeaderSegment>
        <KeySelector />
      </HeaderSegment>
      <HeaderSegment>
        <ChordProgressionSelector />
      </HeaderSegment>
      <HeaderSegment>
        <FavouritesOnlyToggle />
      </HeaderSegment>
      <HeaderSegment>
        <ResetButton />
      </HeaderSegment>
    </SecondaryHeaderStyled>

  </HeaderStyled>
)

export default Header
