import React from 'react';
import { connect } from 'react-redux';
import TrickForm from './TrickForm';
import { startEditTrick, startRemoveTrick } from '../../actions/tricks';

export class EditTrickPage extends React.Component {
  onSubmit = (trick) => {
    this.props.startEditTrick(this.props.trick.id, trick);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveTrick({ id: this.props.trick.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <h1>Edit Trick</h1>
            </div>
          </div>

          <TrickForm
            trick={this.props.trick}
            onSubmit={this.onSubmit}
          />
          <hr/>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <button className="btn btn-danger mb-2" onClick={this.onRemove}>Remove Trick</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  trick: state.tricks.find((trick) => trick.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditTrick: (id, trick) => dispatch(startEditTrick(id, trick)),
  startRemoveTrick: (data) => dispatch(startRemoveTrick(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrickPage);
