
import { combineReducers } from 'redux';

import settings from "./settings";
import text from "./text";

const rootReducer = combineReducers({
    settings,
    text
});

export default rootReducer;