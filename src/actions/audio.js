import {SET_LAST_SOUND} from "./types";

import {setDirection} from "./settings";

export const analyzeAudio = (stream) => {
    return function(dispatch){
        const streamMeanVolume = stream.reduce((a, b) => a+b)/stream.length;
        //console.log("My Stream Mean", stream.reduce((a, b) => a+b)/stream.length);
        if(streamMeanVolume > 1){
            console.log("Loud", streamMeanVolume);
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