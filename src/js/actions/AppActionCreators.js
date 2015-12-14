import ActionContainer from './ActionContainer';
import { AppDispatcher, StoreDispatcher } from '../dispatchers/Dispatcher';
import _ from 'lodash';

//TODO: Where WebAPI should sit will be decided later
import WebAPI from '../utils/WebAPI';

var actions = {
  actionData: {
    tags: ["mobiles"],
    page: 1,
    facet: 1
  },
  setActionItems: function(input) {
    switch(input.type) {
      case "tag":
        if (_.indexOf(this.actionData.tags, input.value) > -1) {
          this.actionData.tags = _.remove(this.actionData.tags, function(item) {
            return item !== input.value;
          });
        }
        else {
          this.actionData.tags.push(input.value);
        }
        //Reset page if changing main category
        this.actionData.page = 1;
        break;
      case "page":
        this.actionData.page++;
        break;
    }
  },
/*  facetSelection: function(facet) {
    AppDispatcher.dispatch({
      actionType: ActionContainer.FACET_SELECTION,
      facet: facet
    });
  },*/
  getActionItems: function() {
    return this.actionData;
  },
  intialLoad: function() {
    var aitems = this.getActionItems();
    WebAPI.get(aitems, function(response) {
      AppDispatcher.dispatch({
        actionType: ActionContainer.INITIAL_LOAD_REQUEST,
        response: response
      });
    });
  },
  filterRequest: function() {
    var aitems = this.getActionItems();
    WebAPI.get(aitems, function(response) {
      AppDispatcher.dispatch({
        actionType: ActionContainer.FILTER_FACET_REQUEST,
        aitems: aitems,
        response: response
      })
    })
  },
  loadNextPage: function () {

  }
};

module.exports = actions;