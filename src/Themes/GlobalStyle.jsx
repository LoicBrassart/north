import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.color};
    transition: all 0.30s linear;

    min-height: 100vh;
    color: white;
    background: ${({ theme }) => theme.background};
    font-family: 'Avenir LT Std', sans-serif;
  }

  a,
  a:visited {
    text-decoration: none;
    color: white;
  }

  /* ------------------------------------------------- Helper classes */
  .centerer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flexer {
    display: flex;
  }
`;

export default GlobalStyles;
