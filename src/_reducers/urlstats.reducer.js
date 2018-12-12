import {urlstatsConstants} from "../_constants";

const defaultState = {
    loading: false,
    stats: {},
    daily_stats: {},
    error: false
};

export function urlstatsReducer(state = defaultState, action) {
    switch (action.type) {
        case urlstatsConstants.URL_STAT_REQUEST:
            return {
                loading: true
            };
        case urlstatsConstants.URL_STAT_SUCCESS:
            // console.log("ACtion:", action.response.stats);
            return {
                stats: action.response.stats,
                daily_stats: action.response.daily_stats,
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