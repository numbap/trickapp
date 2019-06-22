import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { GimmickSubForm } from './subforms/GimmickSubform';

const ExpenseListItem = ({  id, name, duration, createdAt, criteria, gimmicks }) => (

    <tr>

      <th ><Link className="list-item" to={`/edit/${id}`} >EDIT</Link></th>
      <td>{name}</td>
      <td>{numeral(duration / 100).format('0,0.00')}</td>
      <td>{gimmicks.length}</td>
      <td>{criteria.length}</td>
    </tr>

);

export default ExpenseListItem;
