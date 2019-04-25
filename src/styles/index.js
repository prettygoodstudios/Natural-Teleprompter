import {StyleSheet, Dimensions} from 'react-native';


export const darkBlack = "#212121";
export const secondaryBlack = "#263238";
export const thirdBlack = "#424242";
export const offWhite = "#ECECEC";


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
   appWrapper: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100%"
   },
   h1: {
       fontSize: 30,
       fontWeight: "700",
       color: offWhite,
       zIndex: 0,
       margin: 0
   },
   container: {
       padding: 20,
       flex: 1,
       width: "100%",
       backgroundColor: secondaryBlack,
       zIndex: -100,
       overflow: "hidden"
   },
   inputLabel: {
       fontSize: 20,
       color: darkBlack,
       marginTop: 20
   },
   textArea: {
       width: "100%",
       height: 300,
       borderWidth: 1,
       borderColor: darkBlack,
       color: darkBlack,
       borderRadius: 5,
       padding: 10,
       fontSize: 20,
       textAlignVertical: "top"
   },
   textInput: {
        width: "100%",
        borderWidth: 1,
        borderColor: darkBlack,
        color: darkBlack,
        borderRadius: 5,
        padding: 10,
        fontSize: 20
   },
   button: {
       backgroundColor: darkBlack,
       padding: 20,
       borderRadius: 5,
       maxWidth: 200,
       justifyContent: "center",
       alignItems: "center",
       margin: 10
   },
   buttonText: {
       color: offWhite,
       fontSize: 20,
       textAlign: "center"
   },
   loadingWrapper: {
       justifyContent: "center",
       alignItems: "center"
   },
   camera: {
       position: "absolute",
       left: 0,
       top: 0,
       width: width + 20,
       height: height - 140,
       margin: 0,
       zIndex: -2
   },
   cameraMask: {
        position: "absolute",
        left: 0,
        top: 0,
        width: width + 20,
        height: height - 140,
        margin: 0,
        zIndex: -1 ,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
   },
   cameraRecord: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "red",
        borderWidth: 5,
        borderColor: offWhite,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
   },
   cameraRecordPosition: {
        position: "absolute",
        width: "100%",
        bottom: 40,
        left: 20,
        flexDirection: "row",
        justifyContent: "center"
   },
   cameraRecordPause: {
        width: 30,
        height: 30,
        borderRadius: 3,
        backgroundColor: offWhite
   }
});




export default styles;