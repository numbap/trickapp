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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Trick</h1>
          </div>
        </div>
        <div className="content-container">
          <TrickForm
            trick={this.props.trick}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Trick</button>
          
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
