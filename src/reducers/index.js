
import { combineReducers } from 'redux';

import settings from "./settings";
import text from "./text";
import audio from "./audio";

const rootReducer = combineReducers({
    settings,
    text,
    audio
});

export default rootReducer;