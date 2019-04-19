
import {OPEN_VIDEO, CLOSE_VIDEO} from "./types";

export const openVideo = (uri) => {
    return{
        type: OPEN_VIDEO,
        payload: uri
    }
} 

export const closeVideo = () => {
    return{
        type: CLOSE_VIDEO,
        payload: false
    }
}