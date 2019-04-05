import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';

import styles from "../styles/controlPanel";
import * as actions from "../actions";

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

    togglePause = () => {
        this.props.setDirection(this.props.direction == 0 ? 1 : 0);
    }

    render(){
        return(
            <View style={styles.controlPanel}>
                <ControlPanelItem content="<<" onPress={() => alert("Start Over")}/>
                <ControlPanelItem content="<" onPress={() => this.props.setDirection(-1)}/>
                <ControlPanelItem content={this.props.direction == 0 ? ">" : "||"} onPress={() => this.togglePause()}/>
                <ControlPanelItem content=">" onPress={() => this.props.setDirection(1)}/>
                <ControlPanelItem content=">>" onPress={() => alert("Go To End")}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        ...state.settings
    }
}

export default connect(mapStateToProps, actions)(ControlPanelComponent);