import {StyleSheet, Dimensions} from 'react-native';


export const darkBlack = "#212121";
export const secondaryBlack = "#263238";
export const thirdBlack = "#424242";
export const offWhite = "#ECECEC";


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
   h1: {
       fontSize: 30,
       fontWeight: "700",
       color: offWhite
   },
   container: {
       padding: 20,
       height: height - 160,
       backgroundColor: secondaryBlack,
       zIndex: -100
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
       fontSize: 20
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
       margin: -20,
       zIndex: -1
   }
});




export default styles;