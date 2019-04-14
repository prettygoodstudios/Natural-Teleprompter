import {AsyncStorage} from  "react-native";
import { RETRIEVE_SETTINGS, TOGGLE_SETTINGS_MODAL, SET_COLOR, SET_BACKGROUND_COLOR, SET_SPEED, SET_DIRECTION, SET_FONT_SIZE, SET_MIRROR, SET_TYPE_FACE, SET_CONTROL_PANEL_SIZE, SET_SMART_MODE } from "./types";
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
const SMART_MODE = 'SMART_MODE';

const getKey = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log(`My Value For ${key} Is ${value}`);
        return value;
    } catch (error) {
        return {error};
    }
}

export const retrieveSavedSettings = () => {
    return async function(dispatch){
        const speed = await getKey(SPEED);
        const direction = await getKey(DIRECTION);
        const color = await getKey(COLOR)
        const backgroundColor = await getKey(BACKGROUND_COLOR);
        const fontSize = await getKey(FONT_SIZE);
        const typeFace = await getKey(TYPE_FACE);
        const mirror = await getKey(MIRROR);
        const smartMode = await getKey(SMART_MODE);
        const controlPanelSize = await getKey(CONTROL_PANEL_SIZE);
        console.log("My Saved Settings", {
            speed,
            direction,
            color,
            backgroundColor,
            fontSize,
            typeFace,
            mirror,
            smartMode,
            controlPanelSize
        });
        dispatch({
            type: RETRIEVE_SETTINGS,
            payload: {
                speed,
                direction,
                color,
                backgroundColor,
                fontSize,
                typeFace,
                mirror,
                smartMode,
                controlPanelSize
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
    storeData(TYPE_FACE, val.toString());
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

export const setSmartMode = (val) => {
    storeData(SMART_MODE, val.toString());
    return{
        type: SET_SMART_MODE,
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

