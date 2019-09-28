import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  ChordStyled,
  ChordChartStyled,
  BarFretStyled,
  FretNumberStyled,
  FretStyled,
  StringStyled,
  StringStatesStyled,
  StringStateStyled,
  FingerNumberStyled
} from "./chord.styles";
import { doNotPlayString, barFret } from "guitar-chord-definitions/dist/chords";
import {
  isChordShortNameInKey,
  getKeyFromShortName,
  cleanNameForSounds,
  cleanNameForUrl
} from "../../utils";
import AudioPlayer from "../audio-player/audio-player";
import soundFiles from "./soundFiles";
import FavouriteChordButton from "../favourite-chord-button/favourite-chord-button";
import OutputMessage from "../output-message/output-message";
import settings from "../../settings";
import A from "../anchor/anchor";

const stringArray = [6, 5, 4, 3, 2, 1];

const getIsChordHigh = frets => {
  const firstFretNumber = parseInt(Object.keys(frets).shift());
  const lastFretNumber = parseInt(Object.keys(frets).pop());

  return firstFretNumber > 2 || (firstFretNumber === 2 && lastFretNumber === 5);
};

const populateFretNumbers = frets => {
  const firstFretNumber = parseInt(Object.keys(frets)[0]);
  return getIsChordHigh(frets)
    ? [
        firstFretNumber,
        firstFretNumber + 1,
        firstFretNumber + 2,
        firstFretNumber + 3
      ]
    : [1, 2, 3, 4];
};

const getRomanNumeral = (chordShortName, selectedKeyShortName) => {
  if (!selectedKeyShortName) {
    return;
  }

  let key = getKeyFromShortName(selectedKeyShortName);

  if (key.copyFrom) {
    key = getKeyFromShortName(key.copyFrom);
  }

  const chordsInKey = key.chords;

  const chord = Object.entries(chordsInKey).find(
    ([romanNumeral, chordShortNameUnderTest]) =>
      chordShortNameUnderTest === chordShortName
  );

  // This happens when you show every chord when filtering by key
  if (!chord) {
    return;
  }

  return chord[0];
};

const getIfChordShouldBeHighlighted = (
  chordShortName,
  selectedKeyShortName
) => {
  if (!selectedKeyShortName) {
    return true;
  }

  let key = getKeyFromShortName(selectedKeyShortName);

  if (key.copyFrom) {
    key = getKeyFromShortName(key.copyFrom);
  }

  return isChordShortNameInKey(key, chordShortName);
};

export const Chord = ({
  selectedKeyShortName,
  fullName = "",
  shortName = "",
  alternativeShortName = "",
  strings = {},
  frets = {},
  canFavourite = true,
  displayNotDefinedMessage = true
}) => {
  const shouldBeHighlighted = getIfChordShouldBeHighlighted(
    shortName,
    selectedKeyShortName
  );
  const isChordHigh = getIsChordHigh(frets);
  const firstFretNumber = Object.keys(frets).shift();
  const fretNumbers = populateFretNumbers(frets);
  const romanNumeral = getRomanNumeral(shortName, selectedKeyShortName);

  return (
    <ChordStyled isHighlighted={shouldBeHighlighted}>
      {romanNumeral && `${romanNumeral} - `}
      <A
        href={`/chord/${cleanNameForUrl(shortName)}`}
        isInternal
        title={fullName}
      >
        {shortName}
      </A>{" "}
      {alternativeShortName ? (
        <Fragment>
          (
          <A
            href={`/chord/${cleanNameForUrl(alternativeShortName)}`}
            isInternal
            title={alternativeShortName}
          >
            {alternativeShortName}
          </A>
          )
        </Fragment>
      ) : (
        ""
      )}
      {!Object.keys(frets).length && displayNotDefinedMessage ? (
        <OutputMessage>
          This chord is in a key but has not been defined. Please{" "}
          <A
            href={settings.githubRepoUrl}
            context="Chord in key but not defined"
          >
            send an issue or open a PR on GitHub
          </A>
          .
        </OutputMessage>
      ) : (
        <>
          {shortName && cleanNameForSounds(shortName) in soundFiles && (
            <AudioPlayer src={soundFiles[cleanNameForSounds(shortName)]} />
          )}
          {canFavourite && <FavouriteChordButton chordShortName={shortName} />}
          <ChordChartStyled>
            <StringStatesStyled>
              {stringArray.map((stringNumber, idx) => (
                <StringState
                  key={stringNumber}
                  idx={idx}
                  doNotPlayString={strings[stringNumber] === doNotPlayString}
                />
              ))}
            </StringStatesStyled>
            {isChordHigh ? (
              <FretNumberStyled>{`${firstFretNumber}fr`}</FretNumberStyled>
            ) : (
              ""
            )}
            {fretNumbers.map(fretNumber => (
              <Fret key={fretNumber} fingers={frets[fretNumber]} />
            ))}
          </ChordChartStyled>
        </>
      )}
    </ChordStyled>
  );
};

const StringState = ({ idx, doNotPlayString }) => (
  <StringStateStyled idx={idx}>{doNotPlayString ? "x" : ""}</StringStateStyled>
);

const Fret = ({ fingers = {} }) => (
  <FretStyled>
    {fingers === barFret ? <BarFretStyled /> : null}
    {stringArray.map((stringNumber, idx) => (
      <String
        key={stringNumber}
        idx={idx}
        stringNumber={stringNumber}
        fingerNumber={fingers !== barFret && fingers[stringNumber]}
      />
    ))}
  </FretStyled>
);

const String = ({ idx, stringNumber, fingerNumber }) => (
  <StringStyled
    idx={idx}
    stringNumber={stringNumber}
    fingerNumber={fingerNumber}
  >
    {fingerNumber && <FingerNumberStyled>{fingerNumber}</FingerNumberStyled>}
  </StringStyled>
);

const mapStateToProps = ({
  keys: { selectedKeyShortName },
  chords: { favouritedChords }
}) => ({ selectedKeyShortName, favouritedChords });

export default connect(mapStateToProps)(Chord);
