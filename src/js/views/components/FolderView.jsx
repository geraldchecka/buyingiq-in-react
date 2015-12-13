import React from 'react';

const FolderView = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.folders.map(function(folder) {
          debugger;
          return (
            <div className="folder">
              <div className="head">{folder.name}</div>
              <div className="facets">
                {folder.facets.map(function(facet) {
                  if (facet.count > 0) {
                    return (
                      <label className="facet" data-tag={"brands:"+facet.tag} key={facet.tag}>
                        <input type="checkbox" checked={facet.is_selected} />
                        {facet.label}
                        <span className="count">{" ("+facet.count+")"}</span>
                      </label>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  }
});

module.exports = FolderView;