import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const GimmickListItem = ({ onDeleteGimmick, name, createdAt }) => (
  <li className="list-group-item" onDoubleClick={onDeleteGimmick}>{name}</li>
);

export default GimmickListItem;



// const GimmickListItem = ({ onDeleteGimmick, name, createdAt }) => (
//   <li onDoubleClick={onDeleteGimmick}>{name}</li>
// );

// export default GimmickListItem;