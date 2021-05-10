/* eslint-disable indent */
import constants from '../constants'

const { pending } = constants.status
const { uninitialised } = constants.payload.meta
const { USER_LOGIN, USER_LOGOUT, USER_ERROR } = constants.type

export default function species(
  state = {
    status: pending,
    error: '',
    user: {},
    meta: uninitialised,
    /** when debugging and showing the state, having the 'meta'
     * indicating that the action still hasn't been dispatched
     * facilitates comprehension */
  },
  action,
) {
  switch (action.type) {
    case USER_LOGIN:
      return 'logged in'
    case USER_LOGOUT:
      return 'logged out'
    case USER_ERROR:
      return action.payload
    default:
      return state
  }
}
