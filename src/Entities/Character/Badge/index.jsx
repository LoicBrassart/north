import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CharacterBadge({ id, name, avatar }) {
  return (
    <li>
      <Link to={`/character/${id}`}>
        <img src={avatar} alt={name} />
      </Link>
    </li>
  );
}

CharacterBadge.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
