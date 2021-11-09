import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { List } from 'Ui';
import SSearchBar from './style';

function SubMenu({ title, items }) {
  let type;
  switch (title) {
    case 'Utilisateurs':
      type = 'UserResult';
      break;
    case 'Personnages':
      type = 'UserResult';
      break;
    case 'Articles':
      type = 'NewsResult';
      break;
    case 'Jeux':
      type = 'GameResult';
      break;
    case 'Scenarii':
      type = 'UserResult';
      break;
    case 'Others':
      type = 'UserResult';
      break;
    default:
      type = 'Kweh ?';
  }
  return (
    <li className="SubMenu">
      <h2 className="centerer">{title}</h2>
      {items.length ? (
        <ul>
          <List data={items} type={type} />
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
