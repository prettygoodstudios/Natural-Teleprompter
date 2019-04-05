import {AsyncStorage} from  "react-native";
import { RETRIEVE_SETTINGS, TOGGLE_SETTINGS_MODAL } from "./types";

//Setting Keys
const SPEED = 'SPEED';
const DIRECTION = 'DIRECTION';
const COLOR = 'COLOR';
const BACKGROUND_COLOR = 'BACKGROUND_COLOR';

const getKey = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        return {error};
    }
}

export const retrieveSavedSettings = () => {
    return async function(dispatch){
        const speed = getKey(SPEED);
        const direction = getKey(DIRECTION);
        const color = getKey(COLOR)
        const backgroundColor = getKey(BACKGROUND_COLOR);
        await speed;
        await direction;
        await color;
        await backgroundColor;
        console.log(color)
        dispatch({
            type: RETRIEVE_SETTINGS,
            payload: {
                speed,
                direction,
                color,
                backgroundColor
            }
        });
    }
}

export const toggleSettingsModal = () => {
    return{
        type: TOGGLE_SETTINGS_MODAL
    }
}