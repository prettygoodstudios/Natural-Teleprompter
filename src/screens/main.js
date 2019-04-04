import React, {Component} from "react";
import {View, Text} from "react-native";

import styles from "../styles";

import HeaderComponent from "../components/header";


export default class MainScreen extends Component {
    render(){
        return(
            <View>
                <HeaderComponent />
                <Text style={styles.h1}>Natural Teleprompter</Text>
            </View>
        )
    }
}