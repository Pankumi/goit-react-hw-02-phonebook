export const ContactItem = ({userName, userNumber}) => {
  //   console.log(contacts);
  return (
    <li>
      <p>
        {userName}: {userNumber}
      </p>
    </li>
  );
};
