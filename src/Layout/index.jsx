import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';
import Logo from './Logo';
import SLayout from './style';

export default function Layout({ children }) {
  return (
    <SLayout>
      {children}
      <Logo />
      <Header />
      <Nav />
    </SLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
