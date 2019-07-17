import React from 'react';
import moment from 'moment';
import {EditorState} from 'draft-js';
import { GimmickSubForm } from './subforms/GimmickSubform';
import { CriteriaSubForm } from './subforms/CriteriaSubform';
import { NoteSubForm } from './subforms/NoteSubform';

export default class TrickForm extends React.Component {
  constructor(props) {
    super(props);

    let gimmicksExist = false;
    let notesExist = false;
    let criteriaExist = false;
    if(props.trick)
    {
      gimmicksExist = props.trick.gimmicks ? true : false
      notesExist = props.trick.notes ? true : false
      criteriaExist = props.trick.criteria ? true : false
    }

    this.state = {
      createdAt: props.trick ? moment(props.trick.createdAt) : moment(),
      name: props.trick ? props.trick.name : '',
      script: props.trick ? props.trick.script : '',
      duration: props.trick ? (props.trick.duration / 100).toString() : '',
      gimmicks: gimmicksExist ? props.trick.gimmicks : [],
      criteria: criteriaExist ? props.trick.criteria : [],
      notes: notesExist ? props.trick.notes : [],
      calendarFocused: false,
      addGimmick: '',
      addCriteria: '',
      addNote: '',
      addCriteria: '',
      richScript: EditorState.createEmpty(),
      error: ''
    };

    this.fixFirebase();
  }

  fixFirebase = () => {
    let tmpGimmicks = [];
    this.state.gimmicks.forEach((childGimmick) => {
      tmpGimmicks.push(childGimmick);
    });
    this.setState(() => ({ gimmicks: tmpGimmicks }));

    let tmpCriteria = [];
    this.state.criteria.forEach((childCriteria) => {
      tmpCriteria.push(childCriteria);
    });
    this.setState(() => ({ criteria: tmpCriteria }));

    let tmpNotes = [];
    this.state.notes.forEach((childNote) => {
      tmpNotes.push(childNote);
    });
    this.setState(() => ({ notes: tmpNotes }));

  };

  onDraftChange = (richScript) => this.setState({richScript});

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
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

    if (!this.state.name) {
      this.setState(() => ({ error: 'Please provide a name.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        duration: parseFloat(this.state.duration, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        notes: this.state.notes,
        script: this.state.script,
        name: this.state.name,
        gimmicks: this.state.gimmicks,
        criteria: this.state.criteria
      });
    }
  };

  ///////////////////////////////////////////////

  onDeleteNote = (e) => {
    e.preventDefault();
    const note = e.target.innerText;
    const temp = this.state.notes.filter(n => n.name !== note);
    this.setState(() => ({ notes: temp }));
  };

  onChangeNote = (e) => {
    e.preventDefault();
    const addNote = e.target.value;
    this.setState(() => ({ addNote: addNote }));
  };

  onAddNote = (e) => {
    e.preventDefault();
    
    if(this.state.notes.filter(n => n.name === this.state.addNote).length === 0)
    {
      const note = {'name': this.state.addNote, 'createdAt': 0};
      this.state.notes.push(note);
      this.setState(() => ({ addNote: '' }));
      document.getElementById("notesForm").value = null;
    }
  };

  ///////////////////////////////////////////////
  
  onDeleteCriteria = (e) => {
    e.preventDefault();
    const name = e.target.innerText;
    const temp = this.state.criteria.filter(c => c.name !== name);
    this.setState(() => ({ criteria: temp }));
  };

  onChangeCriteria = (e) => {
    e.preventDefault();
    const addCriteria = e.target.value;
    this.setState(() => ({ addCriteria: addCriteria }));
  };

  onAddCriteria = (e) => {
    e.preventDefault();

    if(this.state.criteria.filter(c => c.name === this.state.addCriteria).length === 0)
    {
      const criteria = {'name': this.state.addCriteria, 'createdAt': 0};
      this.state.criteria.push(criteria);
      this.setState(() => ({ addCriteria: '' }));
      document.getElementById("criteriaForm").value = null;
    }
  };
  
  ///////////////////////////////////////////////

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
    if(this.state.gimmicks.filter(c => c.name === this.state.addGimmick).length === 0)
    {
      const gimmick = {'name': this.state.addGimmick, 'createdAt': 0};
      this.state.gimmicks.push(gimmick);
      this.setState(() => ({ addGimmick: '' }));
      document.getElementById("gimmickForm").value = null;
    }
  };

  ///////////////////////////////////////////////

  render() {

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 align-top">
            <div className="col-lg-12">
              <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}

                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onNameChange}
                /><br/>

                <input
                  type="text"
                  placeholder="Duration"
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onDurationChange}
                /><br/>

                <textarea
                  placeholder="Write your script here."
                  className="form-control"
                  value={this.state.script}
                  onChange={this.onScriptChange}
                >
                </textarea><br/>

                <div>
                  <button className="btn btn-primary mb-2">Save Trick</button>
                </div>

              </form>
              <hr />
            </div>
        </div>

        <div className="col-lg-12 col-md-12 align-top">

          <NoteSubForm 
          addNote={this.addNote} 
          onChangeNote={this.onChangeNote} 
          onAddNote={this.onAddNote}  
          onDeleteNote={this.onDeleteNote} 
          notes={ this.state.notes } />

          <GimmickSubForm 
          addGimmick={this.addGimmick} 
          onChangeGimmick={this.onChangeGimmick} 
          onAddGimmick={this.onAddGimmick}  
          onDeleteGimmick={this.onDeleteGimmick} 
          gimmicks={ this.state.gimmicks } />
          
          <CriteriaSubForm 
          addCriteria={this.addCriteria} 
          onChangeCriteria={this.onChangeCriteria} 
          onAddCriteria={this.onAddCriteria}  
          onDeleteCriteria={this.onDeleteCriteria} 
          criteria={ this.state.criteria } />
        </div>
      </div>

    )
  }
}
