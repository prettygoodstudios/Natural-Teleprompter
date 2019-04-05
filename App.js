import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import reduxThunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './src/reducers';
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger, reduxThunk));

//Screens
import MainScreen from "./src/screens/main";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
