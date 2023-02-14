export const ContactList = ({ contacts }) => {
//   console.log(contacts);
  return (
    <ul>
      {contacts.map(({id, userName, userNumber}) => {
        // console.log(contact);
        return (
          <li key={id}>
            <p>{userName}: {userNumber}</p>
          </li>
        );
      })}
    </ul>
  );
};
