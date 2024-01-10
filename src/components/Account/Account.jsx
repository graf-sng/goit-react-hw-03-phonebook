const Account = ({ account }) => {
  return (
    <>
      <li>
        {account.name} || {account.tel}
      </li>
    </>
  );
};

export default Account;
