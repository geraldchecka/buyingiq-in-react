import React from 'react';

var Paragraph = React.createClass({
  render: function() {
    return (
      <div>
        <p> You are reading a paragraph component written in React JSX. It uses Webpack for building stuff </p>
      </div>
    );
  }
});

module.exports = Paragraph;