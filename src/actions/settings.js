import {AsyncStorage} from  "react-native";
import { RETRIEVE_SETTINGS, TOGGLE_SETTINGS_MODAL, SET_COLOR, SET_BACKGROUND_COLOR, SET_SPEED } from "./types";
import { back } from "react-native/Libraries/Animated/src/Easing";

//Setting Keys
const SPEED = 'TELEPROMPTER_SPEED';
const DIRECTION = 'TELEPROMPTER_DIRECTION';
const COLOR = 'TELEPROMPTER_COLOR';
const BACKGROUND_COLOR = 'TELEPROMPTER_BACKGROUND_COLOR';

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


const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      alert(`Error saving ${key.toLower()}`)
    }
  }

