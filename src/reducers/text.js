import { TOGGLE_TEXT_MODAL, SET_TEXT, SET_POSITION, SET_HEIGHT} from "../actions/types";

const INIT_STATE = {
    textModal: false,
    text: "Enter your own text.",
    position: 0,
    height: 0
}

export default function(state = INIT_STATE, action){
    switch(action.type){
        case TOGGLE_TEXT_MODAL:
            return{
                ...state,
                textModal: !state.textModal
            }
        case SET_TEXT:
            return{
                ...state,
                text: action.payload
            }
        case SET_POSITION:
            return{
                ...state,
                position: state.position + action.payload
            }
        case SET_HEIGHT:
            return{
                ...state,
                height: action.payload
            }
        default:
            return{
                ...state
            }
    }
}