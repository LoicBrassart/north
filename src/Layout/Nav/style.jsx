import styled from 'styled-components';

const SNav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  li {
    height: 2em;
    font-size: 1em;
    text-transform: uppercase;

    a,
    a:visited {
      text-decoration: none;
      color: white;
    }

    img {
      height: 1.5em;
      width: 1.5em;
      margin-right: 1em;
    }
  }
`;
export default SNav;
