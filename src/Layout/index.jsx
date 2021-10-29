import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';
import SLayout from './style';

export default function Layout({ children }) {
  return (
    <SLayout>
      <Header />
      <Nav />
      {children}
    </SLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
