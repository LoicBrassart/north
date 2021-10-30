import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SNewsCard = styled(Link)`
  margin: 1em;

  figure {
    width: 20em;
    aspect-ratio: 16/9;
    overflow: hidden;
    position: relative;
    border-radius: 5px;

    img {
      position: absolute;
      width: 100%;
      height: auto;
    }

    figcaption {
      background: linear-gradient(to top right, #fca044, #fe757b);
      position: absolute;
      bottom: 0;
      height: 40%;
    }
  }
`;
export default SNewsCard;
