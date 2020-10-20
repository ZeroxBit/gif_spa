import React from 'react';
import AppRouter from 'router/AppRouter';
// redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducer from "redux/reducer" ;
import { INITIAL_STATE } from 'redux/reducer/gifReducer.js/gifReducer';

const store = createStore(
  reducer,
  INITIAL_STATE,
  applyMiddleware(reduxThunk)
);

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
