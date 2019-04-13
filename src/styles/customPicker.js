import {StyleSheet} from 'react-native';
import {offWhite, darkBlack, secondaryBlack, thirdBlack} from ".";


export default StyleSheet.create({
    customPicker: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    customPickerTitle: {
        color: offWhite,
        fontSize: 30
    },  
    customPickerCarrot: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    selectedItem: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: darkBlack,
        paddingRight: 20,
        paddingLeft: 20
    },
    selectedItemRight: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100%"
    },
    selectedItemText: {
        color: offWhite,
        fontSize: 30,
        marginRight: 10
    },
    nonSelectedItems: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    nonSelectedItem: {
        height: 50,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: secondaryBlack,
        paddingRight: 20
    },
    nonSelectedItemText: {
        color: offWhite,
        fontSize: 30
    }
});