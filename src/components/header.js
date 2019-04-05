import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';

import styles from "../styles/header";
import * as actions from "../actions";



const HeaderButton = (props) => {
    const {content, onPress} = props;
    return(
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.headerButton}>
                <Text style={styles.headerButtonText}>{content}</Text>
            </View>
        </TouchableOpacity>
    );
}


class HeaderComponent extends Component {
    render(){
        return(
            <View>
                <View style={styles.headerPush}></View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Natural Teleprompter</Text>
                    <View style={styles.headerButtonContainer}>
                        <HeaderButton content="Edit Text" onPress={() => alert("Edit")}/>
                        <HeaderButton content="Settings" onPress={() => this.props.toggleSettingsModal()}/>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        ...state.settings
    }
}

export default connect(mapStateToProps, actions)(HeaderComponent);