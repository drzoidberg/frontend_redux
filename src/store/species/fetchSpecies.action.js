import _ from 'lodash'
import pokeapi from '../../apis/pokeapi'
import constants from '../constants'

const { fulfilled, rejected } = constants.status
const { initialised } = constants.payload.meta
const { FETCH_SPECIES } = constants.type

export default function fetchSpecies(id) {
  return _fetchSpecies(id)
}

function _fetchSpecies(id) {
  return _.memoize(async function (dispatch) {
    try {
      const response = await pokeapi.get(`/pokemon-species/${id}`)
      dispatch({
        type: FETCH_SPECIES,
        payload: {
          status: fulfilled,
          species: response.data,
          meta: initialised,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_SPECIES,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  })
}
