"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    background: #fff;
    color: #111;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
