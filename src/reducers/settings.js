import { secondaryBlack, offWhite } from "../styles";
import { RETRIEVE_SETTINGS, TOGGLE_SETTINGS_MODAL } from "../actions/types";


const INIT_STATE = {
    speed: 10,
    direction: 1,
    backgroundColor: secondaryBlack,
    color: offWhite,
    settingsModal: false
}

export default function(state = INIT_STATE, action){
    switch(action.type){
        case RETRIEVE_SETTINGS:
            const {speed, direction, backgroundColor, color} = action.payload;
            const nullVal = {_40: 1, _65: 1, _55: null, _72: null};
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
        default:
            return{
                ...state
            }
    }
}