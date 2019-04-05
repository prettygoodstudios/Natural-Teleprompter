import {StyleSheet} from "react-native";
import { offWhite, darkBlack } from ".";

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
        borderRadius: 10,
        maxHeight: "90%",
        overflow: "hidden"
    },
    modalHeader: {
        width: "100%",
        padding: 20,
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    modalDismiss: {
        fontSize: 40
    },
    modalTitle: {
        color: darkBlack,
        fontSize: 30
    },  
    modalBody: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        maxHeight: "85%"
    }
})