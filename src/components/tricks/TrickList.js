import React from 'react';
import { connect } from 'react-redux';
import TrickListItem from './TrickListItem';
import selectTricks from '../../selectors/tricks';

export const TrickList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.tricks.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
            props.tricks.map((trick) => {
              return <TrickListItem key={trick.id} {...trick} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    tricks: selectTricks(state.tricks, state.filters)
  };
};

export default connect(mapStateToProps)(TrickList);
