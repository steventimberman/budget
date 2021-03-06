import { request } from "../utils"
var auth = require('../components/auth')

export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_ERROR400 = "FETCH_USER_ERROR400"
export const FETCH_USER_ERROR500 = "FETCH_USER_ERROR500"
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"
export function fetchUser() {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/authentication/api/i/"
    dispatch({type: FETCH_USER})
    return request(
      url, {},
      (json) => { dispatch({type: FETCH_USER_SUCCESS, res: json}) },
      (json) => { dispatch({type: FETCH_USER_ERROR400, res: json}) },
      (res) => { dispatch({type: FETCH_USER_ERROR500, res: res}) },
      (ex) => { dispatch({type: FETCH_USER_FAILURE, error: ex}) },
    )
  }
}