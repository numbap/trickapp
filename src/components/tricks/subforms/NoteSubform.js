import React from 'react';
import CriteriaListItem from './NoteListItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const NoteSubForm = ({ addNote, onChangeNote, onAddNote, onDeleteNote, notes}) => (
  <div className="col-lg-4 NotesSubForm">
    <h3>Performance Notes</h3>
    <form className="form" onSubmit={onAddNote} >
    <ul className="list-group">
        { 
          notes.map((n) => (
          <CriteriaListItem key={n.name} onDeleteNote={onDeleteNote} {...n} />
        )) }
    </ul>

    <input
        type="text"
        placeholder="Note"
        autoFocus
        className="form-control"
        value={addNote}
        onChange={onChangeNote}
        id="notesForm"
    />

    <button className="btn btn-ooutline-primary mb-2">Save Note</button>
    </form>
  </div>
);

