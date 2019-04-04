import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import MainScreen from "./src/screens/main";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <MainScreen />
      </View>
    );
  }
}
