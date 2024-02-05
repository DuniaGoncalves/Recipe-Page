import styled from 'styled-components';
import { darkCharcoal, darkRaspberry, eggshell, nutmeg, roseWhite, wengeBrown, white } from './colors';
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${eggshell};
    color: ${wengeBrown};
    font-family: 'Outfit', sans-serif;
    padding: 6rem;
  }

  h1,
  h2 {
    font-family: 'Young Serif', serif;
  }

  h2 {
    color: ${nutmeg};
  }

  ul,
  ol {
    padding-left: 1rem;
  }

  ul li,
  ol li {
    margin-bottom: 1rem;
  }

  ul li span {
    color: ${wengeBrown};
  }
`

export const StyledContainer = styled.section`
  background-color: ${white};
  border-radius: 1.5rem;
  padding: 2.5rem;
`;

export const StyledHeader = styled.header`
  img {
    border-radius: 1.5rem;
    height: 50%;
    width: 100%;
  }

  h1 {
    color: ${darkCharcoal};
    font-size: 2rem;
  }

  p { 
    margin-bottom: 2rem;
  }
`;

export const StyledPrepTime = styled.section`
  background-color: ${roseWhite};
  border-radius: 1.5rem;
  padding: 1.5rem;

  h3 {
    color: ${darkRaspberry};
    margin-top: 0;
  }

  ul li {
    color: ${darkRaspberry};
  }

  ul li span:first-child {
    color: ${wengeBrown};
    font-weight: 600;
  }
`;

export const StyledUl = styled.ul`
  li {
    color: ${nutmeg};
  }
`;

// max-width: 375px;

// @media (max-width: 1440px) {
//   background: tomato;

//   /* nested rules work as expected */
//   &:hover {
//     background: yellow;
//   }
// }