/* eslint-disable indent */
import constants from '../constants'

const { uninitialised } = constants.payload.meta
const { SELECT_TO_COMPARE_A, SELECT_TO_COMPARE_B } = constants.type

export default function pokemonCompare(
  state = {
    error: '',
    selectedToCompare: [],
    meta: uninitialised,
    /** when debugging and showing the state, having the 'meta'
     * indicating that the action still hasn't been dispatched
     * facilitates comprehension */
  },
  action,
) {
  switch (action.type) {
    case SELECT_TO_COMPARE_A:
      return [...state.selectedToCompare, action.payload]
    case SELECT_TO_COMPARE_B:
      return [...state.selectedToCompare, action.payload]
    default:
      return state
  }
}
