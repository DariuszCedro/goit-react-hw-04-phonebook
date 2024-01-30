import PropTypes from 'prop-types';
import css from './Form.module.css';

export const Form = ({ addContact }) => (
  <>
    <h1>Phonebook</h1>
    <form>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        className={css.inputAdd}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        className={css.inputAdd}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button
        type="submit"
        name="addContact"
        className={css.buttonAdd}
        onClick={addContact}
      >
        Add contact
      </button>
    </form>
  </>
);

Form.propTypes = {
  addContact: PropTypes.func,
};
