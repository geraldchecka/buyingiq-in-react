import React from 'react';

/* Views */
import ResultsSection from './results';
import FiltersSection from './filters';
import SearchSection from './search';
import FacetSection from './facet';

import AppActions from '../../actions/AppActionCreators';
import AppStore from '../../stores/AppStore';

//SearchSection is [OPTIONAL]
function getStateFromStores() {
  return {
    mobiles: AppStore.getMobiles(),
    folders: AppStore.getFolders(),
    otherInfo: AppStore.getOtherInfo()
  }
}

const MobilesPage = React.createClass({
  getInitialState: function () {
    return getStateFromStores();
  },
  componentWillMount: function () {
    AppActions.intialLoad();
  },
  componentDidMount: function() {
    AppStore.addChangeListener(this._changeEvent);
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._changeEvent);
  },
  render: function () {
    return (
      <div className="main">
        <FiltersSection folders={this.state.folders} />
        <div className="composite-results">
          <div className="top-area">
            <FacetSection />
          </div>
          <ResultsSection otherInfo={this.state.otherInfo} mobiles={this.state.mobiles} />
        </div>
      </div>
    );
  },
  _changeEvent: function() {
    this.setState(getStateFromStores());
  }
})

module.exports = MobilesPage;