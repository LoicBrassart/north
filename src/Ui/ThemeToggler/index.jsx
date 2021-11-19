import PropTypes from 'prop-types';
import { themes } from 'Themes';

const ThemeToggler = ({ toggler }) => {
  return (
    <select
      type="button"
      onChange={(evt) => {
        toggler(evt.target.value);
      }}
    >
      <option value="">--Switch Theme ☀️ 🌙--</option>
      {themes.map((theme) => {
        return (
          <option key={theme.code} value={theme.code}>
            {theme.name}
          </option>
        );
      })}
    </select>
  );
};

export default ThemeToggler;

ThemeToggler.propTypes = {
  toggler: PropTypes.func.isRequired,
};
