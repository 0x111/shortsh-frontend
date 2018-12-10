import { combineReducers } from 'redux';
import {urlstatsReducer} from "./urlstats.reducer";
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    urlstats: urlstatsReducer
});

export default rootReducer;