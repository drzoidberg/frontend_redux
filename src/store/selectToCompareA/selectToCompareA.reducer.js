/* eslint-disable indent */
import constants from '../constants'

const { pending } = constants.status
const { uninitialised } = constants.payload.meta
const { SELECT_TO_COMPARE_A } = constants.type

export default function selectToCompareA(
  state = {
    status: pending,
    error: '',
    selectToCompare: {},
    meta: uninitialised,
    /** when debugging and showing the state, having the 'meta'
     * indicating that the action still hasn't been dispatched
     * facilitates comprehension */
  },
  action,
) {
  switch (action.type) {
    case SELECT_TO_COMPARE_A:
      return action.payload

    default:
      return state
  }
}
