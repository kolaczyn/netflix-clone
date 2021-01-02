import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
-ms-hyphenate-limit-chars, body {
  font-family: 'Helvetice Neue', Helvetica, Arial, Helvetica, sans-serif, sans-serif;
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smooothing: grayscale;
  background-color: black;
  color: #333;
  font-size: 16px;
}
`;