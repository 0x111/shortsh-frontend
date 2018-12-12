import { urlstatsConstants } from "../_constants";
import { urlStatsService } from "../_services";

export const urlStatsAction = {
    getByID,
};


function getByID(id) {
    return dispatch => {
        dispatch(request(id));

        urlStatsService.getUrlStats(id)
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) {
        return {type: urlstatsConstants.URL_STAT_REQUEST, id}
    }

    function success(response) {
        return {type: urlstatsConstants.URL_STAT_SUCCESS, response}
    }

    function failure(id, error) {
        return {type: urlstatsConstants.URL_STAT_ERROR, id, error}
    }
}