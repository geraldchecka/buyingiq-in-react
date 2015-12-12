import { Dispatcher } from 'flux';

const dispatcher = {
  AppDispatcher: new Dispatcher(),
  StoreDispatcher: new Dispatcher()
};

module.exports = dispatcher;