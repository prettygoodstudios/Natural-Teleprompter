import {StyleSheet} from 'react-native';

import { darkBlack, offWhite } from './index.js';

const headerHeight = 100;

export default StyleSheet.create({
   header: {
       backgroundColor: darkBlack,
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       height: headerHeight,
       alignItems: "center",
       paddingLeft: 20,
       paddingRight: 20
   },
   headerTitle: {
       color: offWhite,
       fontSize: 30,
       fontWeight: "700",
   },
   headerButton: {
       height: headerHeight,
       backgroundColor: darkBlack,
       flexDirection: "column",
       justifyContent: "center",
       marginLeft: 20
   },
   headerButtonIcon:{
        width: 40,
        height: 40
   },
   headerButtonText: {
       color: offWhite,
       fontSize: 20
   },
   headerButtonContainer: {
       display: "flex",
       flexDirection: "row",
       justifyContent: "flex-end"
   },
   headerPush: {
       width: "100%",
       height: 10,
       backgroundColor: darkBlack
   }
});