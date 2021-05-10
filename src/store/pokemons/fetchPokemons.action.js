import _ from 'lodash'
import pokeapi from '../../apis/pokeapi'
import constants from '../constants'

const { fulfilled, rejected } = constants.status
const { initialised } = constants.payload.meta
const { FETCH_POKEMONS } = constants.type

export default function fetchPokemons() {
  return _fetchPokemons()
}

function _fetchPokemons() {
  return _.memoize(async function (dispatch) {
    try {
      const response = await pokeapi.get('/pokemon/?limit=151')
      dispatch({
        type: FETCH_POKEMONS,
        payload: {
          status: fulfilled,
          pokemonsList: response.data.results,
          meta: initialised,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_POKEMONS,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  })
}
