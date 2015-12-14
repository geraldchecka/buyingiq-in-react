/* Libraries */
import React from 'react';

var ImageView = React.createClass({
  render: function() {
    var item = this.props.item;
    return (
     <div className="result-img">
        <a href={item.url}>
          <img src={item.images[0]["180x180"]} alt={item.name} />
        </a>
      </div>
    );
  }
});

module.exports = ImageView;