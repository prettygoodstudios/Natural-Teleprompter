import { secondaryBlack, offWhite } from "../styles";
import { RETRIEVE_SETTINGS, TOGGLE_SETTINGS_MODAL, SET_COLOR, SET_BACKGROUND_COLOR, SET_SPEED, SET_DIRECTION, SET_FONT_SIZE, SET_MIRROR } from "../actions/types";


const INIT_STATE = {
    speed: 10,
    direction: 0,
    backgroundColor: secondaryBlack,
    color: offWhite,
    settingsModal: false,
    fontSize: 30,
    mirror: false
}

export default function(state = INIT_STATE, action){
    switch(action.type){
        case RETRIEVE_SETTINGS:
            const {speed, direction, backgroundColor, color} = action.payload;
            const nullVal = {_40: 1, _65: 1, _55: null, _72: null};
            return{
                ...state
            }
            return{
                ...state,
                speed: speed !== nullVal ? speed : state.speed,
                direction: direction !== nullVal ? direction : state.direction,
                backgroundColor: backgroundColor != nullVal ? backgroundColor : state.backgroundColor,
                color: color !== nullVal ? color : state.color
            }
        case TOGGLE_SETTINGS_MODAL:
            return{
                ...state,
                settingsModal: !state.settingsModal
            }
        case SET_COLOR:
            return{
                ...state,
                color: action.payload
            }
        case SET_SPEED:
            return{
                ...state,
                speed: action.payload
            }
        case SET_BACKGROUND_COLOR:
            return{
                ...state,
                backgroundColor: action.payload
            }
        case SET_DIRECTION:
            return{
                ...state,
                direction: action.payload
            }
        case SET_FONT_SIZE:
            return{
                ...state,
                fontSize: action.payload
            }
        case SET_MIRROR:
            return{
                ...state,
                mirror: action.payload
            }
        default:
            return{
                ...state
            }
    }
}