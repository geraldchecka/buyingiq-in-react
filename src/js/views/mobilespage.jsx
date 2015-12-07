import React from 'react';

import ResultsSection from './results';
import FiltersSection from './filters';
import SearchSection from './search';
import SortSection from './sort';
import FacetSection from './facet';


const MobilesPage = React.createClass({
  /*getInitialState: function () {

  },
  getDefaultProps: function () {

  },
  componentWillMount: function () {

  },*/
  render: function () {
    return (
      <div className="main">
        <FiltersSection />
        <div className="composite-results">
          <div className="top-area">
            <FacetSection />
            <SearchSection />
          </div>
          <SortSection />
          <ResultsSection />
        </div>
      </div>
    );
  }
})

module.exports = MobilesPage;