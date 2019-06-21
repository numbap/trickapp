import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class TrickForm extends React.Component {
  constructor(props) {
    super(props);
    // My strategy...  
    this.state.props = {
      description: props.trick ? props.trick.description : '',
      createdAt: props.trick ? moment(props.trick.createdAt) : moment(),
      name: props.trick ? props.trick.name : '',
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="text"
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <div>
          <button className="button">Save Prop</button>
        </div>
      </form>
    )
  }
}
