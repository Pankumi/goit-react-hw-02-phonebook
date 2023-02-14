// npm i nanoid
import { nanoid } from 'nanoid'
import React from "react";

// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
const INITIAL_STATE = {
    userName: "",
  };
  
  export class ContactForm extends React.Component {
    state = { ...INITIAL_STATE };
  
    // Для всіх інпутів створюємо один обробник
    // Розрізняти інпути будемо за атрибутом name
    handleChange = evt => {
      const { name, value } = evt.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = evt => {
      evt.preventDefault();
      const user = {id: nanoid(), userName: this.state.userName};
    //   console.log(user);
      this.props.addContacts(user);
    //   this.props.onSubmit({ ...this.state });
      this.reset();
    };
  
    reset = () => {
      this.setState({ ...INITIAL_STATE });
    };
  
    render() {
      const { userName, } = this.state;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter name"
              name="userName"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={userName}
              onChange={this.handleChange}
            />
          </label>
  
          <button type="submit">Add contact</button>
        </form>
      );
    }
  } 