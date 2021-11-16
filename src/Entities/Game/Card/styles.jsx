import styled from 'styled-components';

const SGameCard = styled.article`
  width: 10em;
  height: 10em;
  overflow: hidden;
  position: relative;

  .img {
    width: 100%;
    height: 100%;
    background: ${(props) => `url(${props.src}) no-repeat center`};
    background-size: contain;
    background-color: white;
  }

  p {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    background-color: #000a;
    transition: 0.2s linear all;

    &:hover {
      opacity: 1;
    }
  }
`;
export default SGameCard;
