import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import Recording from 'react-native-recording';
import {connect} from 'react-redux';
import {TriangleColorPicker} from 'react-native-color-picker';

import styles from "../styles";
import * as actions from "../actions";

import HeaderComponent from "../components/header";
import ControlPanelComponent from "../components/controlPanel";
import Modal from "../components/modal";


 
function analyzeAudio(stream){
    return (stream.reduce((a,b) => a+b)/stream.length) < -100 ? "Loud" : "Soft";
}


class MainScreen extends Component {

    constructor(){
        super();
        this.state = {
            settingsModal: false
        }
    }

    componentDidMount(){
        this.props.retrieveSavedSettings();
        
        /*Recording.init({
            bufferSize: 4096,
            sampleRate: 44100,
            bitsPerChannel: 16,
            channelsPerFrame: 1,
        });*/
        //Recording.addRecordingEventListener(data => this.props.analyzeAudio(analyzeAudio(data)));
        //Recording.start()
          
    }

    componentWillUnMount(){
        Recording.stop()
    }

    render(){
        const {color, backgroundColor, settingsModal} = this.props;
        //alert(`Color : ${color}, Background Color: ${backgroundColor}`)
        return(
            <View>
                <HeaderComponent />
                <ControlPanelComponent />
                <View style={[styles.container, {backgroundColor}]}>
                    <Text style={[styles.h1, {color}]}>Natural Teleprompter</Text>
                </View>
                {   settingsModal &&
                    <Modal dismiss={this.props.toggleSettingsModal}>
                        <ScrollView>
                            <Text>Font Color</Text>
                            <TriangleColorPicker
                                onColorSelected={color => this.props.setColor(color)}
                                defaultColor={color}
                                style={{width: "100%", height: 300}}
                            />
                            <Text>Background Color</Text>
                            <TriangleColorPicker
                                onColorSelected={color => this.props.setBackgroundColor(color)}
                                defaultColor={backgroundColor}
                                style={{width: "100%", height: 300}}
                            />
                        </ScrollView>
                    </Modal>
                }
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