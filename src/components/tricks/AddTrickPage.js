import React from 'react';
import { connect } from 'react-redux';
import TrickForm from './TrickForm';
import { startAddTrick } from '../../actions/tricks';

export class AddTrickPage extends React.Component {
  onSubmit = (trick) => {
    this.props.startAddTrick(trick)
    this.props.history.push('/');

  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Trick</h1>
          </div>
        </div>
        <div className="content-container">
          <TrickForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddTrick: (trick) => dispatch(startAddTrick(trick))
});

export default connect(undefined, mapDispatchToProps)(AddTrickPage);
