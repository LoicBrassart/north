import styled from 'styled-components';

const SLayout = styled.div`
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
`;

export default SLayout;
