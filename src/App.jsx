import Form from './components/Form/Form';
import AccountList from './components/AccountList/AccountList';
import Filter from './components/Filter/Filter';
import FilterList from './components/FilterList/FilterList';
import { nanoid } from 'nanoid';
import { Component } from 'react';

import data from './data.json';

class App extends Component {
  state = {
    contacts: null,
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');

    if (localData && JSON.parse(localData).lenght > 0) {
      this.setState({
        contacts: JSON.parse(localData),
      });
    } else {
      this.setState({
        contacts: data,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

      console.log('localData', localStorage.getItem('contacts'));
    }
  }

  createAccount = data => {
    const newAccount = {
      id: nanoid(),
      ...data,
    };
    console.log('this.state.contacts.lenght', this.state.contacts.lenght);
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
    const { contacts, filter } = this.state;

    const filtrContact = contacts?.filter(item =>
      item.name.toLowerCase().includes(filter)
    );

    return (
      <>
        <h3>Add a account </h3>
        <Form createAccount={this.createAccount} />

        <h3>Your contacts </h3>
        {contacts && <AccountList account={contacts} />}

        <h3>Find in your contacts </h3>
        <Filter handlerFilter={this.handlerFilter} />
        {contacts && filter !== '' && (
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
