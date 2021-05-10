/* eslint-disable no-constant-condition */
import constants from '../constants'

const { fulfilled, rejected } = constants.status
const { logged_in, initialised } = constants.payload.meta
const { USER_LOGIN, USER_ERROR } = constants.type

export default function userLogin(user) {
  // here would be the log in logic
  return async function (dispatch) {
    try {
      if (user.name === 'root' && user.password === 'root') {
        dispatch({
          type: USER_LOGIN,
          payload: {
            status: fulfilled,
            user,
            meta: logged_in,
          },
        })
      } else {
        throw new Error('User name or password invalid')
      }
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: {
          status: rejected,
          error: `There was an error. Please try again (${error.message})`,
          meta: initialised,
        },
      })
    }
  }
}
