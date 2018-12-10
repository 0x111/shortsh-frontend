import { urlstatsConstants } from "../_constants";
import { urlStatsService } from "../_services";

export const urlStatsAction = {
    getByID,
};


// prefixed function name with underscore because delete is a reserved word in javascript
function getByID(id) {
    return dispatch => {
        dispatch(request(id));

        urlStatsService.getUrlStats(id)
            .then(
                stats => {
                    dispatch(success(stats));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) {
        return {type: urlstatsConstants.URL_STAT_REQUEST, id}
    }

    function success(id) {
        return {type: urlstatsConstants.URL_STAT_SUCCESS, id}
    }

    function failure(id, error) {
        return {type: urlstatsConstants.URL_STAT_ERROR, id, error}
    }
}