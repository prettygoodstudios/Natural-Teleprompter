
import { combineReducers } from 'redux';

import settings from "./settings";
import text from "./text";
import audio from "./audio";
import video from "./video";

const rootReducer = combineReducers({
    settings,
    text,
    audio,
    video
});

export default rootReducer;