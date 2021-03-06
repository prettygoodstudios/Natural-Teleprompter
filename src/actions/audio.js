import {SET_LAST_SOUND} from "./types";

import {setDirection} from "./settings";

export const analyzeAudio = (stream) => {
    return function(dispatch){
        const streamMeanVolume = stream[0] ? stream.reduce((a, b) => a+b)/stream.length : 0;
        if(streamMeanVolume > 1){
            dispatch({
                type: SET_LAST_SOUND,
                payload: Date.now()
            });
        }
    }
}

export const decideToPauseOrStart = (lastSound) => {
    return function(dispatch){
        const diff = Date.now() - lastSound;
        if(diff > 150){
            dispatch(setDirection(0));
        }else{
            dispatch(setDirection(1));
        }   
    }
}