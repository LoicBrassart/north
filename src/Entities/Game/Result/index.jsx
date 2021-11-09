import PropTypes from 'prop-types';
import SGameResult from './style';

export default function GameResult({ id, name, thumb }) {
  return (
    <SGameResult to={`/game/${id}`} src={thumb}>
      <li>
        <div className="img" />
        <p>{name}</p>
      </li>
    </SGameResult>
  );
}

GameResult.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
