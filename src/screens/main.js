import React, {Component} from "react";
import {View, Text, ScrollView, TextInput, Slider, Dimensions, Switch, TouchableOpacity} from "react-native";
import Recording from 'react-native-recording';
import RNSoundLevel from 'react-native-sound-level'
import {connect} from 'react-redux';
import {TriangleColorPicker} from 'react-native-color-picker';
import {Camera} from "expo";


import styles from "../styles";
import * as actions from "../actions";
import calculateTextHeight from "../helpers/height";

import HeaderComponent from "../components/header";
import ControlPanelComponent from "../components/controlPanel";
import Modal from "../components/modal";
import Button from '../components/button';
import Center from "../components/center";
import CustomPicker from "../components/customPicker";



const maxFPS = 60;
let lastFrameTimeMS = 0;
let deltaTime = 0;


function hexToRgb(hex) {
    var bigint = parseInt(hex.replace("#", ""), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return [r, g, b];
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

class MainScreen extends Component {

    constructor(){
        super();
        this.state = {
            textModalValue: "Enter your own text.",
            textPosition: 0,
            recording: false
        }
        this.camera = null;
    }

    componentDidMount(){
        this.props.retrieveSavedSettings();
        this.animationFrameId = requestAnimationFrame(this.animateText);
        
        Recording.init({
            bufferSize: 4096,
            sampleRate: 44100,
            bitsPerChannel: 16,
            channelsPerFrame: 1,
        });
        Recording.addRecordingEventListener(data => this.props.analyzeAudio(data));
        Recording.start()
       /*
       RNSoundLevel.start()
       RNSoundLevel.onNewFrame = (data) => {
            // see "Returned data" section below
            console.log('Sound level info', data)
        }
        */
    }

    animateText = (timestamp) => {
        const {speed, direction, text, position, fontSize, height, smartMode, lastSoundMS} = this.props;
        if(smartMode){
            this.props.decideToPauseOrStart(lastSoundMS);
        }
        if(timestamp < lastFrameTimeMS + (1000/maxFPS)){
            this.animationFrameId = requestAnimationFrame(this.animateText);
            return;
        }
        deltaTime = timestamp - lastFrameTimeMS;
        lastFrameTimeMS = timestamp;
        this.props.setPosition(speed*(deltaTime/30), direction);
        if(position > height - fontSize*2 && (direction == 1 || direction == 0)){
            this.props.setDirection(0);
            this.props.setPosition(height - fontSize*2 - position, 1);
        }
        if(position < 0 && direction == -1){
            this.props.setDirection(0);
            this.props.setPosition(-position, 1);
        }
        this.animationFrameId = requestAnimationFrame(this.animateText);
    }

    componentWillUnMount(){
        Recording.stop();
        cancelAnimationFrame(this.animationFrameId);
    }

    updateTextModalInput = (t) => {
        this.setState({
            textModalValue: t
        });
    }

    sumbitTextModal = () => {
        this.props.setText(this.state.textModalValue);
        this.props.setDirection(0);
        this.props.setPosition(-this.props.position, 1);
        this.props.toggleTextModal();
    }

    updateFontSize = (size) => {
        this.props.setFontSize(size);
        this.props.setDirection(0);
        this.props.setPosition(-this.props.position, 1);
    }

    updateMirror = (val) => {
        this.props.setMirror(val);
        this.props.setDirection(0);
        this.props.setPosition(-this.props.position, 1);
    }

    updateTypeFace = (val) => {
        this.props.setTypeFace(val);
        this.props.setDirection(0);
        this.props.setPosition(-this.props.position, 1);
    }

    recordVideo = async () => {
        this.setState({recording: true});
        const video = await this.camera.recordAsync();
        this.setState({recording: false});
        console.log("My Video", video);
    }

    render(){
        const {color, backgroundColor, settingsModal, textModal, toggleSettingsModal, toggleTextModal, text, speed, position, fontSize, mirror, typeFace, controlPanelSize, smartMode, selfieMode, selfieMaskOpacity, selfieMaskColor} = this.props;
        //alert(`Color : ${color}, Background Color: ${backgroundColor}`)
        return(
            <View>
                <HeaderComponent />
                <ControlPanelComponent />
                <View style={[styles.container, {backgroundColor}]}>
                    <Text style={[styles.h1, {color}, {marginTop: -position}, {fontSize}, mirror && {transform: [{rotateY: '180deg'}]}, typeFace == "sans serif" ? {fontFamily: 'open-sans-bold'} : {fontFamily: 'amiri-bold'}]} onLayout={(event) => this.props.setHeight(event.nativeEvent.layout.height)}>{text}</Text>
                    <View style={[styles.cameraMask, selfieMode ?  {} : {display: "none"}, {backgroundColor: `rgba(${selfieMaskColor.join(", ")}, ${parseInt(selfieMaskOpacity*100)/100})`}]}></View>
                    <View style={styles.cameraRecordPosition}>
                        <TouchableOpacity onPress={this.state.recording ? () => this.camera.stopRecording() : this.recordVideo}>
                            <View style={[styles.cameraRecord, selfieMode ?  {} : {display: "none"}]}>
                                {   this.state.recording && 
                                    <View style={styles.cameraRecordPause}>

                                    </View>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Camera style={[styles.camera, selfieMode ?  {} : {display: "none"}]} type={Camera.Constants.Type.front} ref={ref => {this.camera = ref;}}>
                        <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                        </View>
                    </Camera>
                </View>
                {   settingsModal &&
                    <Modal dismiss={toggleSettingsModal} title="Settings">
                        <ScrollView >
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
                            <Text style={styles.inputLabel}>Speed</Text>
                            <Slider minimumValue={0} maximumValue={20} value={speed} onSlidingComplete={(v) => this.props.setSpeed(v)}/>
                            <View style={{width: "100%", height: 20}}></View>
                            <Text style={styles.inputLabel}>Font Size</Text>
                            <Slider minimumValue={0} maximumValue={80} value={fontSize} onSlidingComplete={(v) => this.updateFontSize(v)}/>
                            <View style={{width: "100%", height: 20}}></View>
                            <Text style={styles.inputLabel}>Mirror Text</Text>
                            <Switch value={mirror} onValueChange={(v) => this.updateMirror(v)}/>
                            <Text style={styles.inputLabel}>Smart Pause Mode</Text>
                            <Text>The telprompter will automatically start when it hears your voice and will automatically pause when it hears pauses in your voice.</Text>
                            <Switch value={smartMode} onValueChange={(v) => this.props.setSmartMode(v)}/>
                            <View style={{width: "100%", height: 20}}></View>
                            <Text style={styles.inputLabel}>Selfie Mode</Text>
                            <Switch value={selfieMode} onValueChange={(v) => this.props.setSelfieMode(v)}/>
                            <View style={{width: "100%", height: 20}}></View>
                            {   selfieMode &&
                                <View>
                                    <Text style={styles.inputLabel}>Selfie Text Background Mask Opacity</Text>
                                    <Slider minimumValue={0} maximumValue={1} value={selfieMaskOpacity} onSlidingComplete={(v) => this.props.setSelfieMaskOpacity(v)}/>
                                    <Text style={styles.inputLabel}>Background Text Background Mask Color</Text>
                                    <TriangleColorPicker
                                        onColorSelected={color => this.props.setSelfieMaskColor(hexToRgb(color))}
                                        defaultColor={rgbToHex(...selfieMaskColor)}
                                        style={{width: "100%", height: 300}}
                                    />
                                    <Text>*Touch Bottom Bar To Confirm Selection</Text>
                                </View>
                            }
                            <View style={{width: "100%", height: 20}}></View>
                            <CustomPicker title="Font" items={[{value: "sans serif", label: "Sans Serif"}, {value: "serif", label: "Serif"}]} onUpdate={(value) => this.updateTypeFace(value)} value={typeFace}/>
                            <View style={{width: "100%", height: 20}}></View>
                            <CustomPicker value={controlPanelSize} title="Control Layout" items={[{value: "dense", label: "Dense"}, {value: "moderate", label: "Moderate Spacing"}, {value: "sparse", label: "Sparse"}]} onUpdate={(value) => this.props.setControlPanelSize(value)}/>
                            <View style={{width: "100%", height: 200}}></View>
                        </ScrollView>
                    </Modal>
                }
                {   textModal &&
                    <Modal dismiss={toggleTextModal} title="Edit Text">
                        <Text style={[styles.inputLabel]}>Speech Text</Text>
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
        ...state.text,
        ...state.audio
    }
}

export default connect(mapStateToProps, actions)(MainScreen);