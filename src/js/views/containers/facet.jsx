import React from 'react';

import AppStore from '../../stores/AppStore';

function getFacetsFromStores() {
  return {
    facets: AppStore.getFacets()
  }
}

const FacetSection = React.createClass({
  /*getInitialState: function () {
    return getFacetsFromStores();
  },
  componentDidMount: function() {
    AppStore.addChangeListener(this._changeEvent);
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._changeEvent);
  },
  _changeEvent: function() {
    this.setState(getFacetsFromStores());
  },*/  
  render: function() {
    //console.log(this.state.facets);
    return (
      <div className="facet-section">
        Facet section goes here
      </div>
    )
  }
});

module.exports = FacetSection;