import React, { Component } from 'react';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    tel: '',
  };

  handlerChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.createAccount(this.state);
    this.setState({
      name: '',
      tel: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handlerSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlerChange}
            className={css.input}
            required
          />
          <br />

          <label>Phone</label>
          <br />
          <input
            type="tel"
            name="tel"
            value={this.state.tel}
            onChange={this.handlerChange}
            className={css.input}
            required
          />
          <br />

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
export default Form;
