import React from "react";
import {View} from 'react-native';

const Center = (props) => {
    const {children} = props;
    return(
        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%"}}>
            {children}
        </View>
    )
}

export default Center;