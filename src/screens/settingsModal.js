import React, {Component} from "react";
import {View, Text, Slider, Switch, ScrollView, Dimensions, TouchableHighlight} from "react-native";
import {connect} from 'react-redux';
import CustomColorPicker from "react-native-modal-color-picker";

import * as actions from "../actions"
import styles from "../styles";
import {rgbToHex, hexToRgb} from '../helpers/colors';

import CustomPicker from "../components/customPicker";
import Modal from "../components/modal";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const {width, height} = Dimensions.get('window');

class SettingsModal extends Component {

    constructor(){
        super();
        this.state = {
            scroll: true,
            maskColor: "#ECECEC"
        }
    }

    componentDidMount(){
 
        
    }

    updateMaskcolor = () => {
        this.setState({
            maskColor: rgbToHex(...this.props.selfieMaskColor)
        });
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

    toggle = () => {
        this.props.toggleSettingsModal();
        this.setState({
            scroll: true
        });
    }

    setSelfieMaskColor = (color) => {
        this.setState({
            maskColor: color
        });
        this.props.setSelfieMaskColor(hexToRgb(color));
    }
 
    render(){
        const {color, backgroundColor, settingsModal, speed, fontSize, mirror, typeFace, controlPanelSize, smartMode, selfieMode, selfieMaskOpacity, selfieMaskColor} = this.props;

        if(!settingsModal){
            return(
                <View></View>
            )
        }

        console.log("Current Selfie Mask Color", this.props.selfieMaskColor[0], this.props.selfieMaskColor[1], this.props.selfieMaskColor[2]);
        console.log("Current HEX", rgbToHex(this.props.selfieMaskColor[0], this.props.selfieMaskColor[1], this.props.selfieMaskColor[2]))

        return(
            <Modal dismiss={this.toggle} title="Settings">
                <ScrollView scrollEnabled={this.state.scroll} >
                    <Text style={styles.inputLabel}>Font Color</Text>
                    <CustomColorPicker 
                        color={color} 
                        setColor={this.props.setColor}
                    />
                    <Text style={styles.inputLabel}>Background Color</Text>
                    <CustomColorPicker 
                        color={backgroundColor} 
                        setColor={this.props.setBackgroundColor}
                    />
                    <Text style={styles.inputLabel}>Speed</Text>
                    <Slider minimumValue={0} maximumValue={20} value={speed} onSlidingComplete={(v) => this.props.setSpeed(v)}/>
                    <View style={{width: "100%", height: 20}}></View>
                    <Text style={styles.inputLabel}>Font Size</Text>
                    <Slider minimumValue={0} maximumValue={80} value={fontSize} onSlidingComplete={(v) => this.updateFontSize(v)}/>
                    <View style={{width: "100%", height: 20}}></View>
                    <Text style={styles.inputLabel}>Mirror Text</Text>
                    <Switch value={mirror} onValueChange={(v) => this.updateMirror(v)}/>
                    <Text style={styles.inputLabel}>Smart Pause Mode</Text>
                    <Text>The telprompter will automatically start when it hears your voice and will automatically pause when it hears pauses in your voice. Turning on smart pause mode will turn off selfie mode since the two features can't work concurrently due to technical limitations.</Text>
                    <Switch value={smartMode} onValueChange={(v) => this.props.setSmartMode(v)}/>
                    <View style={{width: "100%", height: 20}}></View>
                    <Text style={styles.inputLabel}>Selfie Mode</Text>
                    <Text>Gives the user the ability to view and record themselves while utlizing the teleprompter. The app records the user using the device's selfie camera. Users can chose to locally save or discard recorded segments. Turning on selfie mode will turn off smart pause mode since the two features can't work concurrently due to technical limitations.</Text>
                    <Switch value={selfieMode} onValueChange={(v) => this.props.setSelfieMode(v)}/>
                    <View style={{width: "100%", height: 20}}></View>
                    {   selfieMode &&
                        <View style={{zIndex: 999999999999999999999}}>
                            <Text style={styles.inputLabel}>Selfie Text Background Mask Opacity</Text>
                            <Slider minimumValue={0} maximumValue={1} value={selfieMaskOpacity} onSlidingComplete={(v) => this.props.setSelfieMaskOpacity(v)}/>
                            <Text style={styles.inputLabel}>Background Text Background Mask Color</Text>
                            {   this.props.selfieMaskColor.length > 0 && 
                                <CustomColorPicker 
                                    color={rgbToHex(...this.props.selfieMaskColor)} 
                                    setColor={color => this.setSelfieMaskColor(color)}
                                />
                            }
                        </View>
                    }
                    <View style={{width: "100%", height: 20}}></View>
                    <CustomPicker title="Font" items={[{value: "sans serif", label: "Sans Serif"}, {value: "serif", label: "Serif"}]} onUpdate={(value) => this.updateTypeFace(value)} value={typeFace}/>
                    <View style={{width: "100%", height: 20}}></View>
                    <CustomPicker value={controlPanelSize} title={width > 400 ? "Control Layout" : "Layout"} items={[{value: "dense", label: "Dense"}, {value: "moderate", label: width > 400 ? "Moderate Spacing" : "Moderate"}, {value: "sparse", label: "Sparse"}]} onUpdate={(value) => this.props.setControlPanelSize(value)}/>
                    <View style={{width: "100%", height: 600}}></View>
                </ScrollView>
            </Modal>
        )
    }
}

function mapStateToProps(state){
    return{
        ...state.audio,
        ...state.settings,
        ...state.text
    }
}

export default connect(mapStateToProps, actions)(SettingsModal);