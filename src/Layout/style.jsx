import styled from 'styled-components';

const SLayout = styled.div`
  min-height: 100vh;
  color: white;
  background: linear-gradient(#146cbd, #0b2687);

  /* ------------------------------------------------- Grid Layout */
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 7fr;
  grid-template-areas:
    'logo header'
    'nav main';

  & > a {
    grid-area: logo;
  }

  & > header {
    grid-area: header;
  }

  & > nav {
    grid-area: nav;
  }

  & > main {
    grid-area: main;
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

export default SLayout;
