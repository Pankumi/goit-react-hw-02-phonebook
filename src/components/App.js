import React, { Component } from 'react';

const ContactForm = () => {
  return (
    <form onSubmit={this.props.handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter />
        <ContactList /> */}
      </div>
    );
  }
}

// чотири компоненти:
// форма додавання контактів,
// список контактів,
// елемент списку контактів та
// фільтр пошуку.
