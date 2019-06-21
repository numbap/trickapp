import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { timingSafeEqual } from 'crypto';
import { GimmickSubForm } from './subforms/GimmickSubform';

export default class TrickForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.trick ? props.trick.description : '',
      note: props.trick ? props.trick.note : '',
      amount: props.trick ? (props.trick.amount / 100).toString() : '',
      createdAt: props.trick ? moment(props.trick.createdAt) : moment(),
      name: props.trick ? props.trick.name : '',
      gimmicks: props.trick ? props.trick.gimmicks : [],
      script: props.trick ? props.trick.script : '',
      duration: props.trick ? props.trick.duration : '',
      calendarFocused: false,
      addGimmick: '',
      addNote: '',
      addCriteria: '',
      error: ''
    };

    this.fixFirebase();
  }

  fixFirebase = () => {
    const tmpGimmicks = []; 
    const tmpFirebase = this.state.gimmicks;
    Object.keys(tmpFirebase).forEach((key, val) => {
      tmpGimmicks.push(tmpFirebase[key]);
      console.log(tmpFirebase[key]);
    });
    console.log('tmpGimmicks',tmpGimmicks);
    this.setState(() => ({ gimmicks: tmpGimmicks }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
    console.log(this.state.gimmicks)
  };
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onScriptChange = (e) => {
    const script = e.target.value;
    this.setState(() => ({ script }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDurationChange = (e) => {
    const duration = e.target.value;

    if (!duration || duration.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ duration }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        script: this.state.script,
        name: this.state.name,
        gimmicks: this.state.gimmicks,
        duration: this.state.duration
      });
    }
  };

  onDeleteGimmick = (e) => {
    e.preventDefault();
    const name = e.target.innerText;
    const temp = this.state.gimmicks.filter(g => g.name !== name);
    this.setState(() => ({ gimmicks: temp }));
  };

  onChangeGimmick = (e) => {
    e.preventDefault();
    const addGimmick = e.target.value;
    this.setState(() => ({ addGimmick: addGimmick }));
  };

  onAddGimmick = (e) => {
    e.preventDefault();
    const gimmick = {'name': this.state.addGimmick, 'createdAt': 0};
    this.state.gimmicks.push(gimmick);
    this.setState(() => ({ addGimmick: '' }));
  };


  onGimmickSubmit = (e) => {
    e.preventDefault();
    // const gimmick = {'name': this.state.addGimmick, 'createdAt': 0};
    // this.state.gimmicks.push(gimmick);
    // this.setState(() => ({ addGimmick: '' }));
  };

  render() {

    return (
      <div>
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Name"
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="text"
          placeholder="Duration"
          className="text-input"
          value={this.state.duration}
          onKeyPress={this.onDurationChange}
        />

        <input
        type="text"
        placeholder="Amount"
        className="text-input"
        value={this.state.amount}
        onChange={this.onAmountChange}
        />

        <textarea
          placeholder="Write your script here."
          className="textarea"
          value={this.state.script}
          onChange={this.onScriptChange}
        >
        </textarea>
        <textarea
          placeholder="Add a note for your expense (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Trick</button>

        </div>
      </form>
      { console.log('TrickForm', this.state.gimmicks)  }

      <GimmickSubForm 
      onGimmickSubmit={this.onGimmickSubmit} 
      addGimmick={this.addGimmick} 
      onChangeGimmick={this.onChangeGimmick} 
      onAddGimmick={this.onAddGimmick}  
      onDeleteGimmick={this.onDeleteGimmick} 
      gimmicks={this.state.gimmicks} />

      </div>

    )
  }
}



//       <GimmickSubForm onDeleteGimmick={this.onDeleteGimmick}  onChangeGimmick={this.onChangeGimmick} onDeleteGimmick={this.onDeleteGimmick} {...this.state.gimmicks}/>

// <GimmickSubForm  />
