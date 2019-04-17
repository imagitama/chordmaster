const fs = require('fs')
const path = require('path')
const output = console.log

output('Opening file...')

const sourceFileContents = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString()

output('Parsing...')

const lyricsAndChordsAndVerseTitles = sourceFileContents.split('\r\n').filter(line => line)

let verses = []

const isLineATitle = title => title.includes('[')

lyricsAndChordsAndVerseTitles.forEach((lyricOrChordsOrVerseTitle, index) => {
  const isVerseTitle = isLineATitle(lyricOrChordsOrVerseTitle)

  if (isVerseTitle) {
    const verseTitle = lyricOrChordsOrVerseTitle

    const lyricsWithChords = []

    const remainingLines = lyricsAndChordsAndVerseTitles.slice(index + 1)
    
    const nextVerseTitleIndex = remainingLines.findIndex(remainingLine => isLineATitle(remainingLine))

    const sliceEnd = nextVerseTitleIndex !== -1 ? nextVerseTitleIndex : remainingLines.length

    const remainingLinesInVerse = remainingLines.slice(0, sliceEnd)

    let currentLyricAndChordGroup = []

    remainingLinesInVerse.forEach((remainingLineInVerse, idx) => {
      const isOdd = idx % 2

      currentLyricAndChordGroup.push(remainingLineInVerse)

      if (isOdd) {
        lyricsWithChords.push(currentLyricAndChordGroup)
        currentLyricAndChordGroup = []
      }
    })

    verses.push({
      verseTitle: verseTitle.replace('[', '').replace(']', ''),
      lyricsWithChords
    })
    return
  }
})

output(`Found ${verses.length} verses, writing to file...`)

const songDefinition = {
  verses
}

fs.writeFileSync(path.resolve(__dirname, './output.js'), JSON.stringify(songDefinition, null, '  '))

output('Done')
