import React, {Component} from "react";
import {View, Text} from "react-native";
import Recording from 'react-native-recording';
import {connect} from 'react-redux';

import styles from "../styles";
import * as actions from "../actions";

import HeaderComponent from "../components/header";
import ControlPanelComponent from "../components/controlPanel";


 



class MainScreen extends Component {

    componendDidMount(){
        this.props.retrieveSavedSettings();
        /*
        Recording.init({
            bufferSize: 4096,
            sampleRate: 44100,
            bitsPerChannel: 16,
            channelsPerFrame: 1,
          })
          Recording.addRecordingEventListener(data => alert(data))
          Recording.start()
          */
    }

    render(){
        const {color, backgroundColor} = this.props;
        //alert(`Color : ${color}, Background Color: ${backgroundColor}`)
        return(
            <View>
                <HeaderComponent />
                <ControlPanelComponent />
                <View style={[styles.container, {backgroundColor}]}>
                    <Text style={[styles.h1, {color}]}>Natural Teleprompter</Text>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        ...state.settings
    }
}

export default connect(mapStateToProps, actions)(MainScreen);