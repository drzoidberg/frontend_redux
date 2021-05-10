/* eslint-disable indent */
import constants from '../constants'

const { pending } = constants.status
const { uninitialised } = constants.payload.meta
const { FETCH_POKEMONS } = constants.type

export default function pokemonsList(
  state = {
    status: pending,
    error: '',
    pokemonsList: [],
    meta: uninitialised,
    /** when debugging and showing the state, having the 'meta'
     * indicating that the action still hasn't been dispatched
     * facilitates comprehension */
  },
  action,
) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return action.payload
    default:
      return state
  }
}
