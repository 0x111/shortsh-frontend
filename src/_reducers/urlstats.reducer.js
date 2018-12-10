import {urlstatsConstants} from "../_constants";

export function urlstatsReducer(state = {}, action) {
    switch (action.type) {
        case urlstatsConstants.URL_STAT_REQUEST:
            return {
                loading: true
            };
        case urlstatsConstants.URL_STAT_SUCCESS:
            return {
                stats: action.stats,
                loading: false
            };
        case urlstatsConstants.URL_STAT_ERROR:
            return {
                error: action.error,
                loading: false
            };

        default:
            return state
    }
}