import React from 'react';
import { connect } from 'react-redux';
import PropForm from '../props/PropsForm';
import { startAddProp } from '../../actions/props';

export class AddPropPage extends React.Component {
  onSubmit = (prop) => {
    this.props.startAddProp(prop)
    this.props.history.push('/');

  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Prop</h1>
          </div>
        </div>
        <div className="content-container">
          <PropForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddProp: (prop) => dispatch(startAddProp(prop))
});

export default connect(undefined, mapDispatchToProps)(AddPropPage);
