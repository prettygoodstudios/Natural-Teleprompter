import {TOGGLE_TEXT_MODAL, SET_TEXT} from "./types";

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