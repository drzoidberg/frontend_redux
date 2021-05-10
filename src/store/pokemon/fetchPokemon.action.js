import _ from 'lodash'
import pokeapi from '../../apis/pokeapi'
import constants from '../../store/constants'

const { fulfilled, rejected } = constants.status
const { initialised } = constants.payload.meta
const { FETCH_POKEMON } = constants.type

export default function fetchPokemon(id) {
  return _fetchPokemon(id)
}

function _fetchPokemon(id) {
  return _.memoize(async function (dispatch) {
    try {
      const response = await pokeapi.get(`/pokemon/${id}`)
      dispatch({
        type: FETCH_POKEMON,
        payload: {
          status: fulfilled,
          pokemonData: response.data,
          meta: initialised,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_POKEMON,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  })
}
