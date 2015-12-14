import React from 'react';

import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActionCreators';

function getFacetsFromStores() {
  return {
    facets: AppStore.getFacets()
  }
}

const FacetSection = React.createClass({
  getInitialState: function () {
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
  },
  triggerClick: function(facet, event) {
    AppActions.setActionItems({ type: "tag", value: facet.tag});
    AppActions.filterRequest();
    AppActions.facetSelection({facet: facet});
  },
  render: function() {
    var facetsSel = this.state.facets,
        self = this;
    return (
      <div className="facet-section">
        {facetsSel.map(function(facet) {
          return (
            <div className="facet-item" key={facet.tag}>
              {facet.label}
            </div>
          );
        })}
      </div>
    )
  }
});

module.exports = FacetSection;