import PropTypes from 'prop-types';

import css from './List.module.css';
export const List = ({ showFiltered, removeContact }) => (
  <ul>
    {showFiltered.map(contact => (
      <li key={contact.id}>
        {contact.name} : {contact.number}
        <button
          type="button"
          className={css.buttonRemove}
          onClick={() => removeContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  showFiltered: PropTypes.array,
  removeContact: PropTypes.func,
};
