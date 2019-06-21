import React from 'react';
import GimmickListItem from './GimmickListItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const GimmickSubForm = ({onGimmickSubmit, addGimmick, onChangeGimmick, onAddGimmick, onDeleteGimmick, gimmicks}) => (
  <div className="GimmickSubForm">

    <hr/>
    <form className="form" onSubmit={onGimmickSubmit} >
    <ul>
        { console.log('GimmickSubForm', gimmicks) }

    <GimmickListItem  />
    </ul>

    <input
        type="text"
        placeholder="Gimmick"
        autoFocus
        className="text-input"
        value={addGimmick}
        onChange={onChangeGimmick}
    />

    <br/><a href="#" onClick={onAddGimmick} >Add Prop</a>
    </form>
  </div>
);


//     <br/><a href="#" onClick={onAddGimmick} >Add Prop</a>

//         return <GimmickListItem key={gimmick.name} onDeleteGimmick={onDeleteGimmick} {...gimmick} />;

//     <form className="form" onSubmit={onGimmickSubmit}>

// <input
// type="text"
// placeholder="Gimmick"
// autoFocus
// className="text-input"
// value={addGimmick}
// onChange={onChangeGimmick}
// />




//
