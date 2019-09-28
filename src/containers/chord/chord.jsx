import React from "react";
import ContentArea from "../../components/content-area/content-area";
import A from "../../components/anchor/anchor";
import {
  getChordFromShortNameLowercase,
  getChordFromShortName,
  cleanNameForUrl,
  reverseCleanNameForUrl
} from "../../utils";
import { Chord } from "../../components/chord/chord";

export default ({ chordShortName: selectedChordShortNameFromUrl }) => {
  let selectedChord = getChordFromShortNameLowercase(
    reverseCleanNameForUrl(selectedChordShortNameFromUrl)
  );

  if (!selectedChord) {
    return "Chord does not seem to exist (please submit a GitHub issue if it actually does so we can add it)";
  }

  const { fullName, shortName, alternativeShortName } = selectedChord;

  let copiedChord;

  if (selectedChord.copyFrom) {
    copiedChord = getChordFromShortName(selectedChord.copyFrom);
  }

  return (
    <ContentArea>
      <h1>{fullName}</h1>
      <h2>{shortName}</h2>
      {alternativeShortName && (
        <p>
          Identical to{" "}
          <A
            href={`/chord/${cleanNameForUrl(alternativeShortName)}`}
            isInternal
          >
            {alternativeShortName}
          </A>
        </p>
      )}
      <div style={{ width: "50%" }}>
        <Chord {...(copiedChord ? copiedChord : selectedChord)} />
      </div>
      <br />
      <A href="/" isInternal context="Chord">
        Back to main app
      </A>
    </ContentArea>
  );
};
