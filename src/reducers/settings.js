import { secondaryBlack, offWhite } from "../styles";
import { RETRIEVE_SETTINGS } from "../actions/types";


const INIT_STATE = {
    speed: 10,
    direction: 1,
    backgroundColor: secondaryBlack,
    color: offWhite
}

export default function(state = INIT_STATE, action){
    switch(action.type){
        case RETRIEVE_SETTINGS:
            const {speed, direction, backgroundColor, color} = action.payload;
            return{
                ...state,
                speed: speed ? speed : state.speed,
                direction: direction ? direction : state.direction,
                backgroundColor: backgroundColor ? backgroundColor : state.backgroundColor,
                color: color ? color : state.color
            }
        default:
            return{
                ...state
            }
    }
}