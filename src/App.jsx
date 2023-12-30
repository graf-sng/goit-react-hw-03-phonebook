import AccountList from './components/AccountList/AccountList';
import Filter from './components/Filter/Filter';
import FilterList from './components/FilterList/FilterList';
import Form from './components/Form/Form';
import { nanoid } from 'nanoid';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
    filter: '',
  };

  createAccount = data => {
    const newAccount = {
      id: nanoid(),
      ...data,
    };

    const isDuplicat = this.state.contacts.find(e => e.tel === data.tel);

    if (isDuplicat) {
      alert(`The user has already been added by number: ${data.tel}`);
      return;
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, newAccount],
    }));
  };

  handlerFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(e => e.id !== id),
    }));
  };

  render() {
    const filtrContact = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <>
        <h3>Add a account </h3>
        <Form createAccount={this.createAccount} />
        <h3>Your contacts </h3>
        <AccountList account={this.state.contacts} />
        <h3>Find in your contacts </h3>
        <Filter handlerFilter={this.handlerFilter} />
        {this.state.filter !== '' && (
          <FilterList
            contacts={filtrContact}
            deleteContact={this.deleteContact}
          />
        )}
      </>
    );
  }
}

export default App;
