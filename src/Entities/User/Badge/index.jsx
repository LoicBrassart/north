import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function UserBadge({ id, pseudo, avatar }) {
  return (
    <li>
      <Link to={`/user/${id}`}>
        <img src={avatar} alt={pseudo} />
      </Link>
    </li>
  );
}

UserBadge.propTypes = {
  id: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
