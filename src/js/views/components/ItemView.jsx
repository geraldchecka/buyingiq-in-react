/* Libraries */
import React from 'react';
import { render } from 'react-dom';

var ListItem = React.createClass({
  render: function() {
    return <li key={this.props.data.id}> {this.props.data.name} </li>;
  }
});

var ProductDescription = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(function(item) {
          return <ListItem data={item} />
        })}
      </ul>
    );
  }
})

var ResultDetails = React.createClass({
  render: function() {
    return (
      <div className="result-details">
        <a href="http://google.com" title="Samsung">Samsung X2</a>
        <div className="price-block">11,770</div>
        <div className="scores-block">33 Deals</div>
        <ProductDescription />
      </div>
    );
  }
});

var ResultImage = React.createClass({
  render: function() {
    return (
      <div className="result-image">
        <a href={}>
          <img src={} >
        </a>
      </div>
    );
  }
});

var ItemView = React.createClass({
  /*componentWillMount: function() {},
  componentDidMount: function() {},*/
  render: function() {
    return (
      <i className="points">
        <span>{this.props.points}</span>
      </i>
      <ResultImage />
      <ResultDetails />
    );
  }
})

module.exports = {};