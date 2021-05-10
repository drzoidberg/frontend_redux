import _ from 'lodash'
import pokeapi from '../../apis/pokeapi'
import constants from '../constants'

const { fulfilled, rejected } = constants.status
const { initialised } = constants.payload.meta
const { FETCH_COLORS } = constants.type

// we want to memoize the below function to avoid unnecessary fetch requests,
// bc now we DON'T RECREATE THE FUNCTION EVERY TIME WE CALL THE ACTION CREATOR

export default function fetchColors() {
  return _fetchColors()
}

function _fetchColors() {
  return _.memoize(async function (dispatch) {
    try {
      const response = await pokeapi.get('/pokemon-color')
      dispatch({
        type: FETCH_COLORS,
        payload: {
          status: fulfilled,
          colors: response.data.results,
          meta: initialised,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_COLORS,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  })
}
