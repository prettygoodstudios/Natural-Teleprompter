import React, {Component} from "react";
import {View, Text, Slider, Switch, ScrollView} from "react-native";
import {connect} from 'react-redux';
import {TriangleColorPicker} from 'react-native-color-picker';

import * as actions from "../actions"
import styles from "../styles";
import {rgbToHex, hexToRgb} from '../helpers/colors';

import CustomPicker from "../components/customPicker";
import Modal from "../components/modal";

class SettingsModal extends Component {

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

    render(){
        const {color, backgroundColor, settingsModal, toggleSettingsModal, speed, fontSize, mirror, typeFace, controlPanelSize, smartMode, selfieMode, selfieMaskOpacity, selfieMaskColor} = this.props;

        if(!settingsModal){
            return(
                <View></View>
            )
        }

        return(
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