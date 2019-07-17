import React from 'react';
import { connect } from 'react-redux';
import TrickListItem from './TrickListItem';
import selectTricks from '../../selectors/tricks';

export const TrickList = (props) => (
  <div className="col-lg-12">
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Trick</th>
          <th scope="col">Duration</th>
          <th scope="col">Props</th>
          <th scope="col">Success Criteria</th>
        </tr>
      </thead>
      <tbody>
        {
          props.tricks.length === 0 ? (
            <tr>
              <th scope="row"></th>
              <td colSpan="4">Please create a trick</td>
            </tr>
          ) : (
              props.tricks.map((trick) => {
                return <TrickListItem key={trick.id} {...trick} />;
              })
            )
        }
      </tbody>
    </table>








  </div>
);

const mapStateToProps = (state) => {
  return {
    tricks: selectTricks(state.tricks, state.filters)
  };
};

export default connect(mapStateToProps)(TrickList);




// <div className="list-header">
// <div>Expenses</div>
// <div>Expense</div>
// <div>Amount</div>
// </div>
// <div>
// {
//   props.tricks.length === 0 ? (
//     <div className="list-item list-item--message">
//       <span>No expenses</span>
//     </div>
//   ) : (
//       props.tricks.map((trick) => {
//         return <TrickListItem key={trick.id} {...trick} />;
//       })
//     )
// }
// </div>
