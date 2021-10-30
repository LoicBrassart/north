import PropTypes from 'prop-types';
import SNewsCard from './styles';

export default function NewsCard({ _id, banner, title, intro }) {
  return (
    <SNewsCard to={`/news/${_id}`}>
      <figure>
        <img src={banner} alt={title} />
        <figcaption>
          <h2>{title}</h2>
          <p>{intro}</p>
        </figcaption>
      </figure>
    </SNewsCard>
  );
}

NewsCard.propTypes = {
  _id: PropTypes.number.isRequired,
  banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};
