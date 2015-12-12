import React from 'react';

/* Views */
import ResultsSection from './results';
import FiltersSection from './filters';
import SearchSection from './search';
import SortSection from './sort';
import FacetSection from './facet';

import AppActions from '../../actions/AppActionCreators';
import AppStore from '../../stores/AppStore';


function getStateFromStores() {
  return {
    mobiles: AppStore.getMobiles()
    //side sections data
    //top sections data
    //any other section data
  }
}

const MobilesPage = React.createClass({
  getInitialState: function () {
    return getStateFromStores();
  },
  /*getDefaultProps: function () {

  },*/
  componentWillMount: function () {
    AppActions.intialLoad();
  },
  componentDidMount: function() {
    //Handle Response callback
    AppStore.addChangeListener(this._changeEvent);
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._changeEvent);
  },
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
          <ResultsSection mobiles={this.state.mobiles} />
        </div>
      </div>
    );
  },
  _changeEvent: function() {
    this.setState(getStateFromStores());
  }
})

module.exports = MobilesPage;