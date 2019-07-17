import React from 'react';
import TrickList from './TrickList';
import TrickListFilters from './TrickListFilters';

const TrickDashboardPage = () => (
  <div className="container">
   <div className="row">
     <div className="col-lg-12 col-md-12">
      <TrickListFilters />
      <TrickList />
      <div className="col-lg-12">
      </div>
     </div>
   </div>
  </div>
);

export default TrickDashboardPage;
