import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

import styles from "../styles";

const Button = (props) => {
    const {content, onPress} = props;
    return(
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;