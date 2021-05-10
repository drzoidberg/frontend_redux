import constants from '../constants'

const { initialised } = constants.payload.meta
const { SELECT_TO_COMPARE_A } = constants.type

export default function setToCompareA(pokemon = []) {
  return function (dispatch) {
    try {
      dispatch({
        type: SELECT_TO_COMPARE_A,
        payload: {
          pokemonA: pokemon,
          meta: initialised,
        },
      })
    } catch (error) {
      dispatch({
        type: SELECT_TO_COMPARE_A,
        payload: {
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  }
}
