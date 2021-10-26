import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
