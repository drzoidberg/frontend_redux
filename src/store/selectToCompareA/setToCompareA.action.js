import constants from '../constants'

const { fulfilled, rejected } = constants.status
const { initialised } = constants.payload.meta
const { SELECT_TO_COMPARE_A } = constants.type

export default function setToCompate(pokemon = []) {
  return function (dispatch) {
    try {
      dispatch({
        type: SELECT_TO_COMPARE_A,
        payload: {
          status: fulfilled,
          pokemon,
          meta: initialised,
        },
      })
    } catch (error) {
      dispatch({
        type: SELECT_TO_COMPARE_A,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  }
}
