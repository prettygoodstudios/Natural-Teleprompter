import {TOGGLE_TEXT_MODAL, SET_TEXT, SET_POSITION, SET_HEIGHT} from "./types";

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