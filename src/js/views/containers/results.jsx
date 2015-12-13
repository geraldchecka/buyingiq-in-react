import React from 'react';
import SortSection from './sort';
import ResultDetails from '../components/ResultDetails';
import ImageView from '../components/ImageView';

var ResultsSection = React.createClass({
  componentWillMount: function() {
    //Mount some default Box Layouts for mobiles like as how facebook does(dummy sections)
  },
  componentDidMount: function() {
    //Make 
  },
  render: function() {
    console.log(this.props.mobiles);
    return (
      <div className="results-section">
        <div className="results-head">
          <SortSection />
          <div className="meta">Showing results x of y</div>
        </div>
        {this.props.mobiles.map(function(item) {
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
      </div>
    )
  }
});

module.exports = ResultsSection;