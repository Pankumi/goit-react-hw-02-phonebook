export const ContactItem = ({id, userName, userNumber, deleteContact}) => {
    // console.log( deleteContact );
  return (
    <li>
      <p>
        {userName}: {userNumber}
      </p>
      <button type="button" id={id} onClick={deleteContact}>Delete</button>
    </li>
  );
};
