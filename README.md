# Chord Guide

A React web app that lists all popular and not popular chords, keys and songs.

Available [HERE](http://imagitama.github.io/chordmaster).

## Usage

    npm i
    npm start

### Alternative

After you have installed Docker and Docker compose, you can run the app with a single command

    docker-compose up

## About

Technologies:

- create-react-app (not ejected)
- Redux
- Emotion (with theming)
- ReactRouter

All chords are defined in `src/chords.js` and all keys in `src/keys.js`.

## Browser testing

<img src="./browserstack-logo.png" />

Thanks to [BrowserStack](https://www.browserstack.com/) for providing me a way to test
in all browsers and devices when I don't own them!

## Deployment

Deployed via the awesome [Netlify](https://www.netlify.com/).
