import React from 'react';

import AppActions from '../../actions/AppActionCreators';

const FacetItem = React.createClass({
  getInitialState: function() {
    return {
      isChecked: this.props.facet.is_selected
    }
  },
  triggerClick: function(facet, event) {
    this.setState({isChecked: event.target.checked});
    AppActions.setActionItems({ type: "tag", value: facet.tag});
    AppActions.filterRequest();
    AppActions.facetSelection({facet: facet});
  },
  render: function() {
    var facet = this.props.facet;
    var handleClick = this.triggerClick.bind(this, facet);
    return (
      <label className="facet" data-tag={"brands:"+facet.tag} key={facet.tag}>
        <input type="checkbox" checked={this.state.isChecked} onChange={handleClick} />
        {facet.label}
        <span className="count">{" ("+facet.count+")"}</span>
      </label>
    );
  }
});

module.exports = FacetItem;