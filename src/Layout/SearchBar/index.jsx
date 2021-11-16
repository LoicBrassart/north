import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SSearchBar, SItem } from './style';

function SubMenu({ title, items }) {
  return (
    <li className="SubMenu">
      <h2 className="centerer">{title}</h2>
      {items.length ? (
        <ul>
          {items
            .filter((item, idx) => idx < 3)
            .map(({ id, type, name, thumb }) => (
              <SItem className="item" src={thumb} key={`${id}-${type}`}>
                <Link to={`/${type}/${id}`}>
                  <div className="img" />
                  <p>{name}</p>
                </Link>
              </SItem>
            ))}
        </ul>
      ) : (
        <p className="centerer">¯\_(ツ)_/¯</p>
      )}
    </li>
  );
}

export default function SearchBar() {
  const [needle, setNeedle] = useState('');
  const [results, setResults] = useState({
    users: [],
    characters: [],
    articles: [],
    games: [],
    scenarii: [],
    others: [],
  });
  const history = useHistory();

  useEffect(() => {
    const onLeave = history.listen(() => {
      setNeedle('');
    });
    return onLeave;
  }, []);

  useEffect(() => {
    if (needle) {
      axios
        .get(`http://localhost:5050/search?needle=${needle}`)
        .then(({ data }) => {
          setResults(data);
        });
    }
  }, [needle]);

  const updateNeedle = (evt) => {
    setNeedle(evt.target.value);
  };

  return (
    <SSearchBar className="centerer">
      <input
        type="search"
        placeholder="Tu cherches quelque chose de précis ?"
        value={needle}
        onChange={updateNeedle}
        className={needle && 'non-empty'}
      />
      <ul className={`results flexer ${!needle && 'hidden'}`}>
        <SubMenu title="Utilisateurs" items={results.users} />
        <SubMenu title="Personnages" items={results.characters} />
        <SubMenu title="Articles" items={results.articles} />
        <SubMenu title="Jeux" items={results.games} />
        <SubMenu title="Scenarii" items={results.scenarii} />
        <SubMenu title="Others" items={results.others} />
      </ul>
    </SSearchBar>
  );
}

SubMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
