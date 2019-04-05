import React, {Component} from "react";
import {View, Text, ScrollView, TextInput} from "react-native";
import Recording from 'react-native-recording';
import {connect} from 'react-redux';
import {TriangleColorPicker} from 'react-native-color-picker';

import styles from "../styles";
import * as actions from "../actions";

import HeaderComponent from "../components/header";
import ControlPanelComponent from "../components/controlPanel";
import Modal from "../components/modal";
import Button from '../components/button';
import Center from "../components/center";


 
function analyzeAudio(stream){
    return (stream.reduce((a,b) => a+b)/stream.length) < -100 ? "Loud" : "Soft";
}


class MainScreen extends Component {

    constructor(){
        super();
        this.state = {
            textModalValue: "Enter your own text."
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

    updateTextModalInput = (t) => {
        this.setState({
            textModalValue: t
        });
    }

    sumbitTextModal = () => {
        this.props.setText(this.state.textModalValue);
        this.props.toggleTextModal();
    }

    render(){
        const {color, backgroundColor, settingsModal, textModal, toggleSettingsModal, toggleTextModal, text} = this.props;
        //alert(`Color : ${color}, Background Color: ${backgroundColor}`)
        return(
            <View>
                <HeaderComponent />
                <ControlPanelComponent />
                <View style={[styles.container, {backgroundColor}]}>
                    <Text style={[styles.h1, {color}]}>{text}</Text>
                </View>
                {   settingsModal &&
                    <Modal dismiss={toggleSettingsModal}>
                        <ScrollView>
                            <Text style={styles.inputLabel}>Font Color</Text>
                            <TriangleColorPicker
                                onColorSelected={color => this.props.setColor(color)}
                                defaultColor={color}
                                style={{width: "100%", height: 300}}
                            />
                            <Text>*Touch Bottom Bar To Confirm Selection</Text>
                            <Text style={styles.inputLabel}>Background Color</Text>
                            <TriangleColorPicker
                                onColorSelected={color => this.props.setBackgroundColor(color)}
                                defaultColor={backgroundColor}
                                style={{width: "100%", height: 300}}
                            />
                            <Text>*Touch Bottom Bar To Confirm Selection</Text>
                        </ScrollView>
                    </Modal>
                }
                {   textModal &&
                    <Modal dismiss={toggleTextModal}>
                        <Text style={styles.inputLabel}>Speech Text</Text>
                        <TextInput multiline={true} style={styles.textArea} value={this.state.textModalValue} onChangeText={(t) => this.updateTextModalInput(t)}/>
                        <Center><Button content="Update" onPress={() => this.sumbitTextModal()}/></Center>
                    </Modal>
                }
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        ...state.settings,
        ...state.text
    }
}

export default connect(mapStateToProps, actions)(MainScreen);