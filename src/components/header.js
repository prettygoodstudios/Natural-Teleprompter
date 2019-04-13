import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {connect} from 'react-redux';

import styles from "../styles/header";
import * as actions from "../actions";
import { isRequired } from "react-native/Libraries/StyleSheet/ColorPropType";



const HeaderButton = (props) => {
    const {content, onPress} = props;
    return(
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.headerButton}>
                {content}
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
                        <HeaderButton content={<Image source={require('../../assets/images/headericons/pencil.png')} style={styles.headerButtonIcon}/>} onPress={() => this.props.toggleTextModal()}/>
                        <HeaderButton content={<Image source={require('../../assets/images/headericons/settings.png')} style={styles.headerButtonIcon}/>} onPress={() => this.props.toggleSettingsModal()}/>
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