import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({  id, name, duration, createdAt, criteria, gimmicks }) => (

    <tr>
      <th ><Link className="list-item" to={`/edit/${id}`} >EDIT</Link></th>
      <td>{name}</td>
      <td>{numeral(duration / 100).format('0,0.00')}</td>
      <td>{gimmicks ? gimmicks.length : 0}</td>
      <td>{criteria ? criteria.length : 0}</td>
    </tr>

);

export default ExpenseListItem;
