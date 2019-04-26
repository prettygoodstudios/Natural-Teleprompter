import {TOGGLE_TEXT_MODAL, SET_TEXT, SET_POSITION, SET_HEIGHT} from "./types";

import { GoogleSignIn } from 'expo';
import { IOS_GOOGLE_WEB_CLIENT_ID, ANDROID_GOOGLE_WEB_CLIENT_ID } from '../../env';
import {Platform} from "react-native";

export const toggleTextModal = () => {
    return {
        type: TOGGLE_TEXT_MODAL
    }
}

export const setText = (text) => {
    return {
        type: SET_TEXT,
        payload: text
    }
}

export const setPosition = (speed, direction) => {
    return {
        type: SET_POSITION,
        payload: speed * direction
    }
}

export const setHeight  = (height) => {
    return {
        type: SET_HEIGHT,
        payload: height
    }
}


export const loginToGoogle = () => {
    return async function(dispatch){
        try {
            await GoogleSignIn.initAsync({ clientId: Platform.OS === 'ios' ? IOS_GOOGLE_WEB_CLIENT_ID : ANDROID_GOOGLE_WEB_CLIENT_ID });
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === 'success') {
                // ...
            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    }
}