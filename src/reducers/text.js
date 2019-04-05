import { TOGGLE_TEXT_MODAL, SET_TEXT} from "../actions/types";

const INIT_STATE = {
    textModal: false,
    text: "Enter your own text."
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
        default:
            return{
                ...state
            }
    }
}