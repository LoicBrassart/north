import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  .logo {
    height: 4.5em;
  }

  .currentUser {
    height: 100px;
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;

    .avatar {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .notifications {
      width: 15%;
      background-color: red;
      padding: 0.3em;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 0;

      &.empty {
        display: none;
      }
    }
  }
`;
export default SHeader;
