/* Libraries */
import React from 'react';

import ProductDescription from './FeatureList';

function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

var ResultDetails = React.createClass({
  render: function() {
    var item = this.props.item;
    return (
      <div className="result-details">
        <a className="result-name" href={item.url} target="_blank" title={item.name+" Price, Reviews and Specs"}>{item.name}</a>
        <div className="result-score">
          <div className="rating-4 home-review-rating hidden-xs">
            {decimalAdjust("round", item.avg_rating,-1)}
          </div>
          <div className="result-votes hidden-xs">{item.rating_count} Votes</div>
        </div>
        <div className="result-price-block">
          <div>
            BEST PRICE <span className="result-price">{item.min_price_str}</span>
          </div>
          <div>{item.deal_count} DEALS</div>
        </div>
        <div className="result-key-features">
          <ProductDescription features={(item.key_features).slice(0,6)} />
        </div>
      </div>
    );
  }
});

module.exports = ResultDetails;