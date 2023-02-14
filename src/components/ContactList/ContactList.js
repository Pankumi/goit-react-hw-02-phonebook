export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => {
        console.log(contact.userName);
        return (
          <li>
            <p>{contact.userName}</p>
          </li>
        );
      })}
    </ul>
  );
};
