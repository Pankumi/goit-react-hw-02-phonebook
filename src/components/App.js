import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: [
      {id: 'ccdtG4LIHO8uGMN-Tt0GM', userName: 'aaaaaa'},
      {id: 'ccdtG4LIHO8uGMN-Tt0Go', userName: 'bbbbbb'},
    ],
    filter: '',
  }

  addContacts = contact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts}/>

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
}

// чотири компоненти:
// форма додавання контактів,
// список контактів,
// елемент списку контактів та
// фільтр пошуку.
