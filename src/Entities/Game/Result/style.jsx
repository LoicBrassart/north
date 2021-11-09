import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SGameResult = styled(Link)`
  width: 100%;
  height: calc(100% / 3);

  li {
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 3em;
    background-color: white;

    &:hover {
      background-color: lightblue;
    }

    .img {
      width: 15%;
      height: auto;
      background: ${(props) => `url(${props.src}) no-repeat center`};
      background-size: contain;
    }

    p {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 5%;
    }
  }
`;

export default SGameResult;
