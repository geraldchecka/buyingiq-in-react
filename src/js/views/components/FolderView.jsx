import React from 'react';

import FacetView from './FacetView';

const FolderView = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.folders.map(function(folder) {
          return (
            <div className="folder" key={folder.name}>
              <div className="head">{folder.name}</div>
              <div className="facets">
                <FacetView facets={folder.facets} />
              </div>
            </div>
          );
        })}
      </div>
    )
  }
});

module.exports = FolderView;