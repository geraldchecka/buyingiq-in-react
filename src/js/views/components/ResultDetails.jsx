/* Libraries */
import React from 'react';

import ProductDescription from './FeatureList';

function decimalAdjust(type, value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

var ResultDetails = React.createClass({
  render: function() {
    var item = this.props.item,
        pricing,
        deals;
    if (parseInt(item.min_price) > 0) {
      pricing = <div> BEST PRICE <span className="result-price">Rs. {item.min_price_str}</span> </div>;
      deals = <div>{item.deal_count+" DEALS"}</div>;
    } else {
      pricing = <span className="result-price">Out of Stock </span>;
    }
    return (
      <div className="result-details">
        <a className="result-name" href={item.url} target="_blank" title={item.name+" Price, Reviews and Specs"}>{item.name}</a>
        <div className="result-price-block">
          {pricing}
          {deals}
        </div>
        <div className="result-score">
          <div className="rating-4 home-review-rating hidden-xs">
            {decimalAdjust("round", item.avg_rating,-1)}
          </div>
          <div className="result-votes hidden-xs">{item.rating_count+" Votes"}</div>
        </div>
        <div className="clear-fix"></div>
        <div className="result-key-features">
          <ProductDescription features={(item.key_features).slice(0,6)} />
        </div>
      </div>
    );
  }
});

module.exports = ResultDetails;