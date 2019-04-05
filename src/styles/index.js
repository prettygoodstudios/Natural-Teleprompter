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
       backgroundColor: secondaryBlack
   }
});




export default styles;