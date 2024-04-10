import styled from 'styled-components';
import { darkCharcoal, darkRaspberry, eggshell, lightGray, nutmeg, roseWhite, wengeBrown, white } from './colors';
import { createGlobalStyle } from "styled-components";

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "1536px",
}

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
}

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${wengeBrown};
    font-family: 'Outfit', sans-serif;
    margin: 0;

    @media only screen and ${devices.md} {
      background-color: ${eggshell};
      padding: 6rem;
    }
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
    padding-left: 1rem;
  }

  ul li span,
  ol li span {
    color: ${wengeBrown};
  }
`

export const StyledWrapper = styled.section`
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

export const StyledUlListItem = styled.ul`
  li {
    color: ${nutmeg};
  }
`;

export const StyledOl = styled.ol`
  li {
    color: ${nutmeg};
    font-weight: 600;
  }

  li span:first-child {
    color: ${wengeBrown};
    font-weight: 600;
  }

  li span:nth-child(2) {
    font-weight: normal;
  }
`;

export const StyledUl = styled.ul`
  li {
    list-style-type: none;
    border-bottom: 0.05rem solid ${lightGray};
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  li span:nth-child(2) {
    color: ${nutmeg};
    font-weight: 600;
    padding-right: 4rem;

    @media only screen and ${devices.sm} {
      padding-right: 20rem;
    }
  }
`;