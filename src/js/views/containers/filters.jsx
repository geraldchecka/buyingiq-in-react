import React from 'react';

import FolderView from '../components/FolderView';

const FiltersSection = React.createClass({
  render: function() {
    return (
      <div id="search-result-filters" className="filter-tags filters-section">
        <div className="filter-head">Narrow By</div>
        <FolderView folders={this.props.folders} />
      </div>
    )
  }
});

module.exports = FiltersSection;