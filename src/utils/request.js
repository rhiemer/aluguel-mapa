import 'whatwg-fetch';

export const HOST = window.location.port !== '8080' ? 'localhost:8080' : window.location.host;
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  let params = !options ? {} : options;
  if (!Object.prototype.hasOwnProperty.call(params, 'headers')) {
    params = Object.assign(params, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': ['POST', 'GET'],
        'Access-Control-Allow-Origin': `http://${HOST}`,
        'Access-Control-Expose-Headers': '',
        'Access-Control-Max-Age': 1728000,
      },
    });
  }
  return fetch(url, params)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

function wrapRequest(url, m, body) {
  return request(url, {
    method: m,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': ['POST', 'GET'],
      'Access-Control-Allow-Origin': `http://${HOST}`,
      'Access-Control-Expose-Headers': '',
      'Access-Control-Max-Age': 1728000,
    },
    body,
  });
}

/**
 * Requests a URL using POST method and returns a promise
 */
export function post(url, body) {
  return wrapRequest(url, 'POST', body);
}

/**
 * Requests a URL using GET method and returns a promise
 */
export function get(url) {
  return wrapRequest(url, 'GET');
}

/**
 * Requests a URL using PUT method and returns a promise
 */
export function put(url, body) {
  return wrapRequest(url, 'PUT', body);
}

/**
 * Requests a URL using DELETE method and returns a promise
 */
export function del(url) {
  return wrapRequest(url, 'DELETE');
}
