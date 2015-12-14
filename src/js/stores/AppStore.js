import { Dispatcher } from 'flux';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import _ from 'lodash';

import { AppDispatcher, StoreDispatcher } from '../dispatchers/Dispatcher';
import ActionContainer from '../actions/ActionContainer';
import DataOperations from '../utils/DataOperations';

var CHANGE_EVENT = "change";
var FACET_EVENT = "facetchange";

var AppStore = assign({}, EventEmitter.prototype, {
  clonedCopy: {},
  rawData: {},
  facetSection: [],
  init: function(rawMessage) {
    this.rawData = rawMessage;
    this.clonedCopy = _.cloneDeep(rawMessage);
  },
  getAllData: function() {
    return this.rawData || null;
  },
  getMobiles: function() {
    return this.rawData.products || [];
  },
  getFolders: function() {
    return DataOperations.getMobileFolders(this.rawData.folders);
  },
  getOtherInfo: function() {
    return {
      next: this.rawData.next,
      total: this.rawData.total
    }
  },
  getFacets: function() {
    return this.facetSection;
  },
  //General methods
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  /*//FACET_EVENT
  emitFacetChange: function() {
    this.emit(FACET_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(FACET_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(FACET_EVENT, callback);
  }*/
});

//Dispatcher Handles
AppStore.dispatchToken = AppDispatcher.register(function(payload) {
  debugger;
  switch(payload.actionType) {
    case ActionContainer.INITIAL_LOAD_REQUEST:
      AppStore.init(payload.response.data);
      AppStore.emitChange();
      break;
    case ActionContainer.FILTER_FACET_REQUEST:
      if (payload.aitems.page > 1) {
        var prevCopy = AppStore.rawData.products;
        AppStore.init(payload.response.data);
        AppStore.rawData.products = prevCopy.concat(AppStore.rawData.products);
      } else {
        AppStore.init(payload.response.data);
      }
      AppStore.emitChange();
      break;
    /*case ActionContainer.FACET_SELECTION:
      AppStore.emitFacetChange();
      break;*/
  }

  return true;
});

module.exports = AppStore;