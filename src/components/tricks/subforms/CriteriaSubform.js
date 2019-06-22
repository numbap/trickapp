import React from 'react';
import CriteriaListItem from './CriteriaListItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const CriteriaSubForm = ({ addCriteria, onChangeCriteria, onAddCriteria, onDeleteCriteria, criteria}) => (
  <div className="col-lg-4 CriteriaSubForm">

    <h3>Success Criteria</h3>
    <form className="form" onSubmit={onAddCriteria} >
    <ul className="list-group" >
        { criteria.map((c) => (
          <CriteriaListItem key={c.name} onDeleteCriteria={onDeleteCriteria} {...c} />
        )) }
    </ul>

    <input
        type="text"
        placeholder="Criteria"
        autoFocus
        className="form-control"
        value={addCriteria}
        onChange={onChangeCriteria}
        id="criteriaForm"
    />

    <button className="btn btn-ooutline-primary mb-2">Save Criteria</button>
    </form>
  </div>
);

