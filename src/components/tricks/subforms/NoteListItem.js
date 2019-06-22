import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const NoteListItem = ({ onDeleteNote, name, createdAt }) => (
  <li className="list-group-item" onDoubleClick={onDeleteNote}>{name}</li>
);

export default NoteListItem;