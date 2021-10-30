import { createElement } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Entities from 'Entities';
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
Compo.propTypes = {
  item: PropTypes.objectOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default function List({ data, title, type }) {
  return (
    <SList>
      {title && <h3>{title}</h3>}
      <ul>
        {data.map((item) => {
          return Compo({ type, item });
        })}
      </ul>
    </SList>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};
List.defaultProps = {
  title: null,
};
