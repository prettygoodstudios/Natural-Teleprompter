import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";

import styles from "../styles/controlPanel";

const ControlPanelItem = (props) => {
    const {content, onPress} = props;
    return(
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.controlPanelItem}>
                <Text style={styles.controlPanelItemText}>{content}</Text>  
            </View>
        </TouchableOpacity>
    )
}

class ControlPanelComponent extends Component {
    render(){
        return(
            <View style={styles.controlPanel}>
                <ControlPanelItem content="<<" onPress={() => alert("Start Over")}/>
                <ControlPanelItem content="<" onPress={() => alert("Reverse")}/>
                <ControlPanelItem content="||" onPress={() => alert("Pause")}/>
                <ControlPanelItem content=">" onPress={() => alert("Forward")}/>
                <ControlPanelItem content=">>" onPress={() => alert("Go To End")}/>
            </View>
        );
    }
}

export default ControlPanelComponent;