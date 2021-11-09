import PropTypes from 'prop-types';
import SUserResult from './style';

export default function UserResult({ id, name, thumb }) {
  return (
    <SUserResult to={`/user/${id}`} src={thumb}>
      <li>
        <div className="img" />
        <p>{name}</p>
      </li>
    </SUserResult>
  );
}

UserResult.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
