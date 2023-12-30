import Account from '../Account/Account';

const AccountList = ({ account }) => {
  return (
    <ul>
      {account.map(el => (
        <Account account={el} id={el.id} />
      ))}
    </ul>
  );
};

export default AccountList;
