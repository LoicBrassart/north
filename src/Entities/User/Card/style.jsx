import styled from 'styled-components';

const SUserCard = styled.article`
  background-color: white;
  width: 15em;
  height: 15em;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  .banner {
    width: 100%;
    height: 8em;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    height: 7em;
  }

  .avatar {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    position: absolute;
    top: 7em;
    left: 6em;
  }
`;

export default SUserCard;
