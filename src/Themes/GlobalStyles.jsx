import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.color};
    transition: all 0.1s linear;

    min-height: 100vh;
    background: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize};
  }

  a,
  a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
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
