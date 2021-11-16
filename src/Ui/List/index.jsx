import { createElement } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import * as Entities from 'Entities';
import SList from './style';

function Compo({ type, item }) {
  if (!type)
    return createElement(
      () => {
        return <li>The component {type} has not been created yet.</li>;
      },
      { key: uuid() }
    );
  return createElement(Entities[type], { key: uuid(), ...item });
}

export default function List({ data, type }) {
  return (
    <SList>
      <ul>
        {data.map((item) => {
          return Compo({ type, item });
        })}
      </ul>
    </SList>
  );
}

Compo.propTypes = {
  item: PropTypes.objectOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};
