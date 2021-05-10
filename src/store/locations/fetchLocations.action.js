import _ from 'lodash'
import pokeapi from '../../apis/pokeapi'
import constants from '../constants'

const { fulfilled, rejected } = constants.status
const { initialised } = constants.payload.meta
const { FETCH_LOCATIONS } = constants.type

export default function fetchLocations() {
  return _fetchLocations()
}

function _fetchLocations() {
  return _.memoize(async function (dispatch) {
    try {
      const response = await pokeapi.get('/location-area?limit=702')
      dispatch({
        type: FETCH_LOCATIONS,
        payload: {
          status: fulfilled,
          locations: response.data.results,
          meta: initialised,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  })
}
