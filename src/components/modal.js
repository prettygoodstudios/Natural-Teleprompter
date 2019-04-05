import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

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
                            <Text style={styles.modalDismiss}>X</Text>
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