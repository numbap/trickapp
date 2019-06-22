import React from 'react';
import TrickList from './TrickList';
import TrickListFilters from './TrickListFilters';
import TrickSummary from './TrickSummary';

const TrickDashboardPage = () => (
  <div className="container">

   <div className="row">
     <div className="col-lg-12 col-md-12">
      <TrickSummary />
      <TrickListFilters />
      <TrickList />
      <div className="col-lg-12">
      </div>
     </div>
   </div>




  </div>
);

export default TrickDashboardPage;







// <div class="container">
// <div class="row">
//   <div class="col-lg-8 col-md-12">
//     <div class="col-lg-12">
//         <h3>Main Form</h3>
//         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
//         <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
//         <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
//       </div>
//       <div class="col-lg-12">
//         <h3>Notes Form</h3>
//         <p>Lorem ipsum dolor..</p>
//         <p>Lorem ipsum dolor..</p>
//         <p>Lorem ipsum dolor..</p>
//       </div>
//   </div>
//   <div class="col-lg-4 col-md-12">
//     <div class="col-md-6">
//         <h3>Props</h3>
//         <p>Lorem ipsum dolor..</p>
//         <p>Lorem ipsum dolor..</p>
//         <p>Lorem ipsum dolor..</p>
//       </div>
//       <div class="col-md-6">
//         <h3>Success Criteria</h3>
//         <p>Lorem ipsum dolor..</p>
//         <p>Lorem ipsum dolor..</p>
//         <p>Lorem ipsum dolor..</p>
//       </div>
//   </div>
// </div>
// </div>