import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const CriteriaListItem = ({ onDeleteCriteria, name, createdAt }) => (
  <li className="list-group-item" onDoubleClick={onDeleteCriteria}>{name}</li>
);

export default CriteriaListItem;