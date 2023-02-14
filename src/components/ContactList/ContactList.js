import { ContactItem } from './ContactIten/Contact';

export const ContactList = ({ contacts }) => {
//   console.log(contacts);
  return (
    <ul>
      {contacts.map(({id, userName, userNumber}) => {
        // console.log(contact);
        return (
          <ContactItem key={id} userName={userName} userNumber={userNumber} />
        );
      })}
    </ul>
  );
};
