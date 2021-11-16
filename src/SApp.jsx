import styled from 'styled-components';

const SApp = styled.div`
  min-height: 100vh;
  color: white;
  background: linear-gradient(#146cbd, #0b2687);
  font-family: 'Avenir LT Std', sans-serif;

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

export default SApp;
