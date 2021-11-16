import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Nav from './Nav';
import Logo from './Logo';
import SLayout from './style';

export default function Layout({ children }) {
  return (
    <SLayout>
      <main>{children}</main>
      <Logo />
      <Header />
      <Nav />
      <ToastContainer position="bottom-right" />
    </SLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
