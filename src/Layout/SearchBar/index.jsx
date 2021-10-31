import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import {
  mockBlog,
  mockCharacters,
  mockGames,
  mockNews,
  mockParties,
  mockScenarii,
  mockUsers,
} from 'mockData';
import { useHistory } from 'react-router-dom';
import SSearchBar from './style';

function SubMenu({ title, items }) {
  return (
    <li className="SubMenu">
      <h2 className="centerer">{title}</h2>
      {items.length ? (
        <ul>
          {items.map((item) => {
            return <li key={uuid()}>{item.searchName}</li>;
          })}
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

  const updateNeedle = (evt) => {
    setNeedle(evt.target.value);

    // ------ MOCK
    if (evt.target.value === '42') {
      setResults({
        users: mockUsers,
        characters: mockCharacters,
        articles: mockNews,
        games: mockGames,
        scenarii: mockScenarii,
        others: [...mockParties, ...mockBlog],
      });
    } else {
      setResults({
        users: [],
        characters: [],
        articles: [],
        games: [],
        scenarii: [],
        others: [],
      });
    }
    // ------ /MOCK
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
