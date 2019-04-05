import {StyleSheet} from "react-native";
import { offWhite } from ".";

export default StyleSheet.create({
    modalWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modal: {
        backgroundColor: offWhite,
        width: "90%",
        borderRadius: 10
    },
    modalHeader: {
        width: "100%",
        padding: 20,
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    modalDismiss: {
        fontSize: 40
    },
    modalBody: {
        padding: 20,
        display: "flex",
        flexDirection: "column"
    }
})