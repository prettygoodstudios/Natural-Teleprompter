import {AsyncStorage} from  "react-native";
import { RETRIEVE_SETTINGS, TOGGLE_SETTINGS_MODAL, SET_COLOR, SET_BACKGROUND_COLOR, SET_SPEED, SET_DIRECTION, SET_FONT_SIZE, SET_MIRROR, SET_TYPE_FACE, SET_CONTROL_PANEL_SIZE } from "./types";
import { back } from "react-native/Libraries/Animated/src/Easing";

//Setting Keys
const SPEED = 'TELEPROMPTER_SPEED';
const DIRECTION = 'TELEPROMPTER_DIRECTION';
const COLOR = 'TELEPROMPTER_COLOR';
const BACKGROUND_COLOR = 'TELEPROMPTER_BACKGROUND_COLOR';
const FONT_SIZE = 'FONT_SIZE';
const MIRROR = 'MIRROR';
const TYPE_FACE = 'TYPE_FACE';
const CONTROL_PANEL_SIZE = 'CONTROL_PANEL_SIZE';

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

export const setColor = (color) => {
    storeData(COLOR, color);
    return{
        type: SET_COLOR,
        payload: color
    }
}

export const setBackgroundColor = (backgroundColor) => {
    storeData(BACKGROUND_COLOR, backgroundColor);
    return{
        type: SET_BACKGROUND_COLOR,
        payload: backgroundColor
    } 
}

export const setSpeed = (speed) => {
    storeData(SPEED, speed.toString());
    return{
        type: SET_SPEED,
        payload: speed
    }
}

export const setDirection = (direction) => {
    storeData(DIRECTION, direction.toString());
    return{
        type: SET_DIRECTION,
        payload: direction
    }
}

export const setFontSize = (size) => {
    storeData(FONT_SIZE, size.toString());
    return{
        type: SET_FONT_SIZE,
        payload: size
    }
}

export const setMirror = (val) => {
    storeData(MIRROR, val.toString());
    return{
        type: SET_MIRROR,
        payload: val
    }
}

export const setTypeFace = (val) => {
    storeData(MIRROR, val.toString());
    return{
        type: SET_TYPE_FACE,
        payload: val
    }
} 

export const setControlPanelSize = (val) => {
    storeData(CONTROL_PANEL_SIZE, val.toString());
    return{
        type: SET_CONTROL_PANEL_SIZE,
        payload: val
    }
}


const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      alert(`Error saving ${key.toLower()}`)
    }
  }

