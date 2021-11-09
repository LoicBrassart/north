import PropTypes from 'prop-types';
import SNewsResult from './style';

export default function NewsResult({ id, name, thumb }) {
  return (
    <SNewsResult to={`/news/${id}`} src={thumb}>
      <li>
        <div className="img" />
        <p>{name}</p>
      </li>
    </SNewsResult>
  );
}

NewsResult.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
