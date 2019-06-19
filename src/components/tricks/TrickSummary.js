import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectTricks from '../../selectors/tricks';
import selectTricksTotal from '../../selectors/tricks-total';

export const TricksSummary = ({ trickCount, tricksTotal }) => {
  const tricksWord = trickCount === 1 ? 'trick' : 'tricks';
  const formattedTricksTotal = numeral(tricksTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{trickCount}</span> {tricksWord} totalling <span>{formattedTricksTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Trick</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleTricks = selectTricks(state.tricks, state.filters);

  return {
    tricksCount: visibleTricks.length,
    tricksTotal: selectTricksTotal(visibleTricks)
  };
};

export default connect(mapStateToProps)(TricksSummary);
