import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SGameCard from './styles';

export default function GameCard({ id, name, thumbUrl }) {
  return (
    <SGameCard src={thumbUrl}>
      <Link to={`/games/${id}`}>
        <div className="img" />
        <p>{name}</p>
      </Link>
    </SGameCard>
  );
}

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  thumbUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
