import React from 'react';

import AppActions from '../../actions/AppActionCreators';

const SortSection = React.createClass({
  getSortItems: function() {
    return [
      {
        tag: "popularity-desc",
        name: "Popularity High - Low"
      },
      {
        tag: "biq-score-desc",
        name: "IQ Score High - Low"
      },
      {
        tag: "price-desc",
        name: "Price High - Low"
      },
      {
        tag: "price-asc",
        name: "Price Low - High"
      },
      {
        tag: "rating-desc",
        name: "Rating High - Low"
      }
    ];
  },
  handleClick: function(event) {
    AppActions.setActionItems({ type: "tag", value: event.target.value});
    AppActions.filterRequest();
  },
  render: function() {
    var sortList = this.getSortItems();
    return (
      <select className="sort-section" onChange={this.handleClick} >
        {sortList.map(function(item) {
          return (<option key={item.tag} value={item.tag}>{item.name}</option>);
        })}
      </select>
    )
  }
});

module.exports = SortSection;