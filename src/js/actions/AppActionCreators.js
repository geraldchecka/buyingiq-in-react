import ActionContainer from './ActionContainer';
import { AppDispatcher, StoreDispatcher } from '../dispatchers/Dispatcher';

//TODO: Where WebAPI should sit will be decided later
import WebAPI from '../utils/WebAPI';

var actions = {
  intialLoad: function(initParams) {
    WebAPI.get(initParams, function(response) {
      AppDispatcher.dispatch({
        actionType: ActionContainer.INITIAL_LOAD_REQUEST,
        response: response
      });
    });
    //TODO: Ajax logic goes here for now.
    //Consider dreamingcode.org flux+ajax suggestions, and refactor after your first success
  }
};

module.exports = actions;