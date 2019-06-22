import React from 'react';
import GimmickListItem from './GimmickListItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const GimmickSubForm = ({ addGimmick, onChangeGimmick, onAddGimmick, onDeleteGimmick, gimmicks}) => (
  <div className="col-lg-4 col-md-6 GimmickSubForm">
    <h3>Props</h3>
    <form className="form" onSubmit={onAddGimmick} >
    <ul className="list-group" >
        { gimmicks.map((g) => (
          <GimmickListItem key={g.name} onDeleteGimmick={onDeleteGimmick} {...g} />
        )) }
    </ul>


    <div className="form-group">
      <input
          type="text"
          placeholder="Prop"
          autoFocus
          className="form-control"
          value={addGimmick}
          onChange={onChangeGimmick}
          id="gimmickForm"
      />    
    </div>

    <button className="btn btn-ooutline-primary mb-2">Save Prop</button>
    </form>
  </div>
);

//    <br/><a href="#" onClick={onAddGimmick} >Add Prop</a>