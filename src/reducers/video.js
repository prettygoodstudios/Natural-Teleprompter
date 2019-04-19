import {OPEN_VIDEO, CLOSE_VIDEO} from "../actions/types";

const INIT_STATE = {
    modal: false,
    uri: ""
}

export default function(state = INIT_STATE, action){
    switch(action.type){
        case OPEN_VIDEO:
            console.log("Hello", action.payload)
            return{
                ...state,
                modal: true,
                uri: action.payload
            }
        case CLOSE_VIDEO:   
            return{
                ...state,
                modal: false,
                uri: action.payload
            }
        default:
            return{
                ...state
            }
    }   
}