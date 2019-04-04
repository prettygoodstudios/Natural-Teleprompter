import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

import styles from "../styles/header";



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


export default class HeaderComponent extends Component {
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Natural Teleprompter</Text>
                <View style={styles.headerButtonContainer}>
                    <HeaderButton content="Edit" onPress={() => alert("Edit")}/>
                    <HeaderButton content="Settings" onPress={() => alert("Settings")}/>
                </View>
            </View>
        );
    }
}