import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';

import styles from "../styles/controlPanel";
import * as actions from "../actions";
import calculateTextHeight from '../helpers/height';

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

    setPosition = (delta, direction) => {
        this.props.setPosition(delta, direction);
        this.props.setDirection(0);
    }

    render(){
        const {position, text, fontSize} = this.props;
        return(
            <View style={styles.controlPanel}>
                <ControlPanelItem content="<<" onPress={() => this.setPosition(-position, 1)}/>
                <ControlPanelItem content="<" onPress={() => this.props.setDirection(-1)}/>
                <ControlPanelItem content={this.props.direction == 0 ? ">" : "||"} onPress={() => this.togglePause()}/>
                <ControlPanelItem content=">" onPress={() => this.props.setDirection(1)}/>
                <ControlPanelItem content=">>" onPress={() => this.setPosition(calculateTextHeight({text, fontSize})-position, 1)}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        ...state.settings,
        ...state.text
    }
}

export default connect(mapStateToProps, actions)(ControlPanelComponent);