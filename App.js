import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import reduxThunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import {Font} from "expo";


import reducers from './src/reducers';
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(reduxThunk));

//Screens
import MainScreen from "./src/screens/main";
import styles from './src/styles';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      fontsLoaded: false
    }
  }

  async componentDidMount(){

    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    await Font.loadAsync({
      'amiri-bold': require('./assets/fonts/Amiri-Bold.ttf'),
    });

    this.setState({fontsLoaded: true});
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.fontsLoaded ? <MainScreen /> : <View style={styles.loadingWrapper}><Text>Loading...</Text></View>}
      </Provider>
    );
  }
}
