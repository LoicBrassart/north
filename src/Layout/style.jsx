import styled from 'styled-components';

const SLayout = styled.div`
  min-height: 100vh;
  color: white;
  background: linear-gradient(#146cbd, #0b2687);

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 7fr;
  grid-template-areas:
    'header header'
    'nav main';

  & > header {
    grid-area: header;
  }

  & > nav {
    grid-area: nav;
  }

  & > main {
    grid-area: main;
  }
`;

export default SLayout;
