const Account = ({ account, id }) => {
  return (
    <>
      <li key={id}>
        {account.name} || {account.tel}
      </li>
    </>
  );
};

export default Account;
