import { checkHttpStatus, parseJSON } from '../utils';

export function api(ourFetch) {
  return ourFetch
    .then(resp => { return checkHttpStatus(resp) })
    .then(resp => { return parseJSON(resp) })
    .catch(error => { console.log(error) });
}

export default api;