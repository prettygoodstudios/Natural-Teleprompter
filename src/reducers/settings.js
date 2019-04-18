import { secondaryBlack, offWhite } from "../styles";
import { RETRIEVE_SETTINGS, TOGGLE_SETTINGS_MODAL, SET_COLOR, SET_BACKGROUND_COLOR, SET_SPEED, SET_DIRECTION, SET_FONT_SIZE, SET_MIRROR, SET_TYPE_FACE, SET_CONTROL_PANEL_SIZE, SET_SMART_MODE, SET_SELFIE_MODE } from "../actions/types";


const INIT_STATE = {
    speed: 10,
    direction: 0,
    backgroundColor: secondaryBlack,
    color: offWhite,
    settingsModal: false,
    fontSize: 30,
    mirror: false,
    typeFace: "sans serif",
    controlPanelSize: "dense",
    smartMode: false,
    selfieMode: false
}

export default function(state = INIT_STATE, action){
    switch(action.type){
        case RETRIEVE_SETTINGS:
            const {speed, direction, backgroundColor, color, fontSize, typeFace, mirror, controlPanelSize, smartMode} = action.payload;
            const nullVal = {_40: 1, _65: 1, _55: null, _72: null};
            return{
                ...state,
                speed: speed ? parseFloat(speed) : state.speed,
                direction: direction ? parseFloat(direction) : state.direction,
                backgroundColor: backgroundColor ? backgroundColor : state.backgroundColor,
                color: color ? color : state.color,
                fontSize: fontSize ? parseFloat(fontSize) : state.fontSize,
                typeFace: typeFace ? typeFace : state.typeFace,
                mirror: mirror ? (mirror === "true") : state.mirror,
                controlPanelSize: controlPanelSize ? controlPanelSize : state.controlPanelSize,
                smartMode: smartMode ? (smartMode === "true") : state.smartMode
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
        case SET_TYPE_FACE:
            return{
                ...state,
                typeFace: action.payload
            }
        case SET_CONTROL_PANEL_SIZE:
            return{
                ...state,
                controlPanelSize: action.payload
            }
        case SET_SMART_MODE:
            return{
                ...state,
                smartMode: action.payload
            }
        case SET_SELFIE_MODE:
            return{
                ...state,
                selfieMode: action.payload
            }
        default:
            return{
                ...state
            }
    }
}