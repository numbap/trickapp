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

        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <h1>Add Trick</h1>
            </div>
          </div>
        </div>

          <TrickForm
            onSubmit={this.onSubmit}
          />
          <hr/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddTrick: (trick) => dispatch(startAddTrick(trick))
});

export default connect(undefined, mapDispatchToProps)(AddTrickPage);
