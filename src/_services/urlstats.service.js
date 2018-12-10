import config from '../_config/config';

export const urlStatsService = {
    getUrlStats,
};

// function getAll() {
//     const requestOptions = {
//         method: 'GET'
//     };
//
//     return fetch(config.api.url + '/url/stats/' + id, requestOptions).then(handleResponse);
// }

function getUrlStats(id) {
    const requestOptions = {
        method: 'GET'
    };

    if (!id) return;

    return fetch(config.api.url + '/url/' + id + '/stats', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.status);
    }

    return response.json();
}