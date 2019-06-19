import React from 'react';
import TrickList from './TrickList';
import TrickListFilters from './TrickListFilters';
import TrickSummary from './TrickSummary';

const TrickDashboardPage = () => (
  <div>
    <TrickSummary />
    <TrickListFilters />
    <TrickList />
  </div>
);

export default TrickDashboardPage;
