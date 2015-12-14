import React from 'react';
import SortSection from './sort';
import ResultDetails from '../components/ResultDetails';
import ImageView from '../components/ImageView';

import AppActions from '../../actions/AppActionCreators';
import AppStore from '../../stores/AppStore';

var ResultsSection = React.createClass({
  loadMore: function(event) {
    AppActions.setActionItems({type: "page"});
    AppActions.filterRequest();
  },
  render: function() {
    var loadMoreButton;
    if (this.props.otherInfo.next) {
      loadMoreButton = <a href="javascript:void(0)" className="next-page" onClick={this.loadMore}>Load More Products</a>;
    } else {
      loadMoreButton = null;
    }
    return (
      <div className="results-section">
        <div className="results-head">
          <SortSection />
          <div className="meta">Total results: {this.props.otherInfo.total}</div>
        </div>
        {this.props.mobiles.map(function(item, index) {
          return (
            <div className="product" key={item.id}>
              <i className="points biqpoints points-vhigh filter-biq">
                <span>{item.biq_score}</span>
              </i>
              <ImageView item={item} />
              <ResultDetails item={item} />
            </div>
          )
        })}
        {loadMoreButton}
      </div>
    )
  }
});

module.exports = ResultsSection;