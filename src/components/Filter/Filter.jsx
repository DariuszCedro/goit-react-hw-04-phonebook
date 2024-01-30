import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ contactFilter }) => (
  <>
    <h3>Find contacts by name</h3>
    <input
      type="text"
      className={css.inputFilter}
      name="filter"
      onChange={contactFilter}
    />
  </>
);

Filter.proptyTypes = {
  contactFilter: PropTypes.func,
};
