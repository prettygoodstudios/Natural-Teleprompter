import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider, connect } from 'react-redux';
import reduxThunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import {Font, Permissions} from "expo";


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
      fontsLoaded: false,
      hasCameraPermission: false
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

    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const {fontsLoaded, hasCameraPermission} = this.state;

    return (
      <Provider store={store}>
        {fontsLoaded && hasCameraPermission ? <MainScreen /> : <View style={styles.loadingWrapper}><Image source={require("./assets/splash.png")} style={{height: "100%", width: 300, resizeMode: "contain"}} /></View>}
      </Provider>
    );
  }
}
