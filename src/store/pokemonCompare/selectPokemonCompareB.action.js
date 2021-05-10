import constants from '../constants'

const { initialised } = constants.payload.meta
const { SELECT_TO_COMPARE_B } = constants.type

export default function setToCompareB(pokemon = []) {
  return function (dispatch) {
    try {
      dispatch({
        type: SELECT_TO_COMPARE_B,
        payload: {
          pokemonB: pokemon,
          meta: initialised,
        },
      })
    } catch (error) {
      dispatch({
        type: SELECT_TO_COMPARE_B,
        payload: {
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  }
}
