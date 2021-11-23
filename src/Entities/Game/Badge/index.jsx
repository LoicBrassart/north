import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function GameBadge({ id, name, thumbUrl }) {
  return (
    <li>
      <Link to={`/game/${id}`}>
        <img src={thumbUrl} alt={name} />
      </Link>
    </li>
  );
}

GameBadge.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired,
};
