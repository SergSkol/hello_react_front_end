import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './reducers';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
