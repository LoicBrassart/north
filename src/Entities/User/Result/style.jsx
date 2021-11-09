import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SUserResult = styled(Link)`
  width: 100%;
  height: calc(100% / 3);

  li {
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;

    .img {
      width: 15%;
      height: auto;
      background: ${(props) => `url(${props.src}) no-repeat center`};
      background-size: contain;
    }

    p {
      width: 85%;
    }
  }
`;

export default SUserResult;
