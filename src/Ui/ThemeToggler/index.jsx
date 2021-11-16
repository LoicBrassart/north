import PropTypes from 'prop-types';
import SThemeToggler from './style';

const ThemeToggler = ({ toggler }) => {
  return (
    <SThemeToggler type="button" onClick={toggler}>
      Switch Theme ☀️ 🌙
    </SThemeToggler>
  );
};

export default ThemeToggler;

ThemeToggler.propTypes = {
  toggler: PropTypes.func.isRequired,
};
