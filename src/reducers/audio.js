import {SET_LAST_SOUND} from "../actions/types";

const INIT_STATE = {
    lastSoundMS: 0
}


export default function(state = INIT_STATE, action){
    switch(action.type){
        case SET_LAST_SOUND:
            return{
                ...state,
                lastSoundMS: action.payload
            }

        default:
            return{
                ...state
            }
    }
}