import { createGlobalStyle } from 'styled-components';

// NOTE: 코드스쿼드 멤버 dony의 코드를 사용
// https://github.com/jindonyy/airbnb/blob/team-36/src/GlobalStyles.tsx

const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    :focus-visible{
      outline: none;
    }
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  html {
    font: 400 62.5%/1.4 'Noto Sans KR', sans-serif;
  }

  body {
    width: 100%;
    font: inherit;
    letter-spacing: -0.4px;
    font-size:1.6rem
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  input,
  select,
  button,
  textarea {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    outline: none;
    border-radius: 0;
    box-shadow: none;
    appearance: none;
    box-sizing: border-box;
  }

  input,
  select,
  textarea {
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    display: block;
    max-width: 100%;
    border: 0;
  }

  button {
    display: block;
    border: 0;
    outline: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }

  i,
  em,
  address {
    font-style: normal;
  }

  u {
    text-decoration: none;
  }

  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: none;
  }
`;

export default GlobalStyles;
