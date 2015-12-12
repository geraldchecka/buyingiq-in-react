import React from 'react';

var ListItem = React.createClass({
  render: function() {
    return <li> {this.props.name} </li>
  }
});

var ProductDescription = React.createClass({
  render: function() {
    var name;
    return (
      <ul>
        {this.props.features.map(function(item) {
          name = item[item.length -1];
          return <ListItem key={name} name={name} />
        })}
      </ul>
    );
  }
});

module.exports = ProductDescription;