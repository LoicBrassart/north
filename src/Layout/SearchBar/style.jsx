import styled from 'styled-components';

const width = '50em';

const SSearchBar = styled.div`
  flex-flow: column nowrap;
  position: relative;
  width: ${width};

  input {
    position: absolute;
    left: 0;
    width: 50%;
    height: 2em;
    border: 0;
    transition: 0.2s ease-in-out width;
    border-radius: 5px;

    &.non-empty {
      border-radius: 5px 5px 0 0;
    }

    &:focus,
    &.non-empty {
      width: 100%;
    }
  }

  .results {
    background-color: white;
    color: black;
    border-radius: 0 0 5px 5px;
    overflow: hidden;

    width: 100%;
    position: absolute;
    top: calc(50% + 0.8em);
    flex-flow: row wrap;

    &.hidden {
      display: none;
    }

    .SubMenu {
      width: calc(${width} / 3);
      margin-top: 0.3em;

      h2 {
        color: darkblue;
        font-weight: bold;
        text-transform: uppercase;
      }

      > ul,
      > p {
        height: 9em;
      }
    }
  }
`;

const SItem = styled.li`
  a {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 3em;
    background-color: white;

    &:hover {
      background-color: lightblue;
    }

    .img {
      width: 15%;
      height: 100%;
      background: ${(props) => `url(${props.src}) no-repeat center`};
      background-size: contain;
    }

    p {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 5%;
      color: darkblue;
    }
  }
`;

export { SSearchBar, SItem };
