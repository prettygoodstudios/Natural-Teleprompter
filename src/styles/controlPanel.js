import {StyleSheet} from 'react-native';

import { darkBlack, offWhite, thirdBlack } from './index.js';

const controlPanelHeight = 50;

export default StyleSheet.create({
   controlPanel: {
       backgroundColor: thirdBlack,
       display: "flex",
       flexDirection: "row",
       justifyContent: "flex-start",
       height: controlPanelHeight,
       alignItems: "center",
       paddingLeft: 20,
       paddingRight: 20
   },
   controlPanelItem: {
       height: controlPanelHeight,
       backgroundColor: thirdBlack,
       flexDirection: "column",
       justifyContent: "center",
       marginLeft: 20
   },
   controlPanelItemText: {
       color: offWhite,
       fontSize: 20
   }
});