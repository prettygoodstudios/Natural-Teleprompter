import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Dimensions } from 'react-native';
import { Provider, connect } from 'react-redux';
import reduxThunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import {Font, Permissions, ScreenOrientation} from "expo";


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
      hasCameraPermission: false,
      hasMicrophonePermission: false,
      hasCameraRollPermission: false
    }
  }

  async componentDidMount(){

    //Event Listener For Orientation Changes
    await ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL);
    Dimensions.addEventListener('change', async () => {
      await ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL);
    });

    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    await Font.loadAsync({
      'amiri-bold': require('./assets/fonts/Amiri-Bold.ttf'),
    });

    this.setState({fontsLoaded: true});

    const { status: cameraStatus } = await Permissions.askAsync(Permissions.CAMERA);
    const { status: microphoneStatus } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const { status: cameraRollStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: cameraStatus === 'granted' });
    this.setState({ hasMicrophonePermission: microphoneStatus === 'granted' });
    this.setState({ hasCameraRollPermission: cameraRollStatus === 'granted'});

    if(cameraStatus !== 'granted' || microphoneStatus !== 'granted' || cameraRollStatus !== 'granted'){
      alert("In order to use this app you must grant the camera, camera roll and microphone permissions.")
    }
  }

  render() {
    const {fontsLoaded, hasCameraPermission, hasMicrophonePermission, hasCameraRollPermission} = this.state;

    return (
      <Provider store={store}>
        {fontsLoaded && hasCameraPermission && hasMicrophonePermission && hasCameraRollPermission ? <MainScreen /> : <View style={styles.loadingWrapper}><Image source={require("./assets/splash.png")} style={{height: "100%", width: 300, resizeMode: "contain"}} /></View>}
      </Provider>
    );
  }
}
