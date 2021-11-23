import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NewsBadge({ id, title, banner }) {
  return (
    <li>
      <Link to={`/news/${id}`}>
        <img src={banner} alt={title} />
      </Link>
    </li>
  );
}

NewsBadge.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};
