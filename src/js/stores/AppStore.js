import { Dispatcher } from 'flux';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import { AppDispatcher, StoreDispatcher } from '../dispatchers/Dispatcher';
import ActionContainer from '../actions/ActionContainer';
import DataOperations from '../utils/DataOperations';

console.log(EventEmitter);

var CHANGE_EVENT = "change";

var AppStore = assign({}, EventEmitter.prototype, {
  massagedData: {},
  rawData: {},
  init: function(rawMessage) {
    //Add more left-sections like
      //And more missing sections based on count/some other logic that is working currently
    this.rawData = rawMessage;
  },
  getAllData: function() {
    return this.rawData || null;
  },
  getMobiles: function() {
    return this.rawData.products || [];
  },
  getFolders: function() {
    return DataOperations.getMobileFolders(this.rawData.folders);
    //return this.rawData.folders || [];
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

//Dispatcher Handles
AppStore.dispatchToken = AppDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case ActionContainer.INITIAL_LOAD_REQUEST:
      AppStore.init(payload.response.data);
      AppStore.emitChange();
      break;
    case ActionContainer.FILTER_FACET_REQUEST:
      AppStore.init(payload.response.data);
      AppStore.emitChange();
    break;
  }

  return true;
});

module.exports = AppStore;