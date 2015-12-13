import React from 'react';

import FacetItem from './FacetItem';

const FacetView = React.createClass({
  render: function() {
    return (
      <div>
      {this.props.facets.map(function(facet) {
        if (facet.count > 0) {
          return <FacetItem facet={facet} key={facet.tag} />
        }
      })}
      </div>
    );
  }
});

module.exports = FacetView;