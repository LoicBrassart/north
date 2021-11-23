import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function CharacterCard({
  id,
  title,
  description,
  name,
  banner,
  idAuthor,
}) {
  return (
    <article>
      <img src={banner} alt="" />
      <h2>
        {name} <span>{title}</span>
      </h2>
      <Tabs>
        <TabList>
          <Tab>Recap</Tab>
          <Tab>Description</Tab>
          <Tab>Sheets</Tab>
          <Tab>About</Tab>
        </TabList>
        <TabPanel>Recap</TabPanel>
        <TabPanel>{description}</TabPanel>
        <TabPanel>
          <ul>
            <li>1st sheet</li>
            <li>2nd sheet</li>
          </ul>
        </TabPanel>
        <TabPanel>{idAuthor}</TabPanel>
      </Tabs>

      <Link to={`/character/${id}`}>Details</Link>
    </article>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  idAuthor: PropTypes.number.isRequired,
};
