import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SUserCard from './style';

export default function UserCard({ id, pseudo, avatar }) {
  return (
    <SUserCard>
      <Link to={`/users/${id}`}>
        <img
          className="banner"
          src="https://store-images.s-microsoft.com/image/apps.64563.13955590830349567.c7d101ab-ff40-442d-a8a5-fbe0d7f9a3d0.c820fbe4-8825-424b-b25e-5ea6ec5d9aab?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg"
          alt={pseudo}
        />
        <div className="content">{pseudo}</div>
        <img className="avatar" src={avatar} alt={pseudo} />
      </Link>
    </SUserCard>
  );
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
