import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";

import styles from "../styles/modal";

const Modal = (props) => {
    const {children, dismiss, title} = props;
    return(
        <View style={styles.modalWrapper}>
            <View style={styles.modal}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <TouchableOpacity onPress={() => dismiss()}>
                        <View>
                            <Image source={require("../../assets/images/close.png")} style={{width: 40, height: 40}}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.modalBody}>
                    {children}
                </View>
            </View>
        </View>
    )
}

export default Modal;