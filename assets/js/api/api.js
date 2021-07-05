import axios from 'axios';

export function fetch(path) {
    return axios
        .get(ENV_API_ENDPOINT + path)
        .then(resp => resp.data)
        .then(json => json['hydra:member'])
    ;
}
