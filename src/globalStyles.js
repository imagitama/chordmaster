import { css } from '@emotion/core'

export default theme => css`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    color: ${theme.textColor};
    background-color: ${theme.backgroundColor};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
  }

  a {
    font-family: inherit;
    color: inherit;
  }

  p {
    padding: 0;
    margin: 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`