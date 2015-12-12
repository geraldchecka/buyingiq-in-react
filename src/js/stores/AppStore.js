import React from 'react';
import { Dispatcher } from 'flux';
import { AppDispatcher, StoreDispatcher } from '../dispatchers/Dispatcher';
import ActionContainer from '../actions/ActionContainer';
import { EventEmitter } from 'events';
import assign from 'object-assign';

console.log(EventEmitter);

var CHANGE_EVENT = "change";

var AppStore = assign({}, EventEmitter.prototype, {
  items: {},
  init: function(rawMessage) {
    //Add more left-sections like
      //Brands,Buying-IQ score, Price range, handsetType, inbuilt features, camera pixels,keyboard type,screen size,processor speed
      //And more missing sections based on count/some other logic that is working currently
    this.items = rawMessage;
  },
  getAllData: function() {
    return this.items || null;
  },
  getMobiles: function() {
    return this.items.products || [];
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

AppStore.dispatchToken = AppDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case ActionContainer.INITIAL_LOAD_REQUEST:
      AppStore.init(payload.response.data);
      AppStore.emitChange();
      break;
  }

  return true;
});

module.exports = AppStore;